# Development

## IDE

### Plugins

## Developer Tools
* ReduxDevtoolExtension
* React Developer Tools

# Hot Tips
## React
Props are read only.
Don't think of a React component like you would a class in C++. Any change in
state or props will cause the component to re-render. If said component has
child components they will also re-render.Because props/state are readonly, 
a useful mental model to use when writing in React is a snapshot. Imagine the
data you have at any given moment in time, your job is to tell React how to
display that data. The only opportunity you have to alter state or UI is
when the component mounts and unmounts. The goal is to describe how you want the
data to be displayed, not to explain.

