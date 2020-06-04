# Develop

## Development

### IDE

#### Plugins

### Developer Tools

* ReduxDevtoolExtension
* React Developer Tools

React
---
### JSX
React uses JSX, a syntax extension of JavaScript, to describe what the UI should 
look like. 

Rendering logic is inherently coupled with of UI logic: how events are handled,
how the state changes over time, and how data is prepared for display.

Instead of artificially separating _technologies_ by putting markup and logic
in separate files, React separates concerns with loosely couples units called
components that contain both. 

After compilation, JSX expressions become regular JavaScript function calls
and evaluate to JavaScript objects. 

<details>
    <summary markdown="span">JSX Notes</summary>
    * Since JSX is closer to JavaScript than to HTML,
      React DOM uses a `camelCase` naming convention instead
      of HTML attribute names.
    * Components must be capitalized. Capitalization indicates to JSX
      that the tag refers to a React component. These tags get compiled into
      a direct reference to the named variable. If you use the JSX `<Foo />`,
      `Foo` must be in scope.
</details>
