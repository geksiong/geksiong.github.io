---
layout: '@layouts/PostLayout.astro'

title: Markdown Plugins Test Page
summary: Test page for markdown plugins
date: 2022-03-26
tags:
  - test
---
> A page to test various markdown plugins features

## Directives

::youtube[Video of a cat in a box]{#01ab2cd3efg}

## Math

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## Code

(nothing here yet)

```js
function hello() {
  console.log("Hello World!");
}
```

## Simple PlantUML

```plantuml Singleton
@startuml
title Singleton

class Singleton

Singleton : {static} uniqueInstance
Singleton : // other useful Singleton data
Singleton : {static} getInstance() : Singleton
Singleton : // other useful Singleton methods()

note right of Singleton
The <i>uniqueInstance</i>
class variable holds our
one and only instance
of Singleton
end note

note left of Singleton
The <b>getInstance()</b> method is static,
which means it's a class method, so you
can conveniently access this method
from anywhere in your code using
Singleton <b>getInstance()</b>. That's just as
easy as accessing a global variable, but
we get benefits like lazy instantiation
from the Singleton.
end note

note bottom of Singleton
A class implementing the Singleton
Pattern is more than a Singleton;
it is a purpose class with its
own set of data and methods.
end note
@enduml
```

