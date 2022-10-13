// Injects a default layout, if layout is not specified in frontmatter
// The default layout filename must match the file's directory name
// Reference: https://github.com/withastro/astro/issues/397#issuecomment-1264718819

import { existsSync } from 'fs';
import { join } from 'path';

const pagesPath = 'src/pages';
const layoutPath = 'src/layouts';
const layoutAlias = '@layouts';
const defaultLayout = 'PostLayout';

const pascalCache = {};
function toPascalCase(str) {
  pascalCache[str] =
    pascalCache[str] ||
    (
      /^[\p{L}\d]+$/iu.test(str) &&
      str.charAt(0).toUpperCase() + str.slice(1)
    ) ||
    str.replace(
      /([\p{L}\d])([\p{L}\d]*)/giu,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^\p{L}\d]/giu, '');

  return pascalCache[str];
}

const knownLayouts = new Set;
const knownNotLayouts = new Set;

export default function defaultLayoutPlugin() {
  return function (tree, file) {
    // Somewhat hacky fix. Remark doesn't seem to like one of my markdown files with lots of frontmatter.
    if (typeof file.history[0] == 'undefined') return;

    const filePathFull = file.history[0].replace(/\/[^\/]+$/, '');
    const pagesPathFull = join(file.cwd, pagesPath);
    const nestedDirs = filePathFull.slice(pagesPathFull.length + 1);
    const directories = nestedDirs ? nestedDirs.split('/').reverse() : [];
    let layout = defaultLayout;
    directories.some(directory => {
      const layoutName = toPascalCase(directory);
      if (
        knownLayouts.has(layoutName) ||
        (
          !knownNotLayouts.has(layoutName) &&
          existsSync(join(layoutPath, layoutName + '.astro'))
        )
      ) {
        knownLayouts.add(layoutName);
        layout = layoutName;
        return true;
      } else {
        knownNotLayouts.add(layoutName);
      }
    });
    file.data.astro.frontmatter.layout = `${layoutAlias}/${layout}.astro`;
  }
}
