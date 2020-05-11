import React from 'react'

// a component that will render one or more components
export const ModuleCollection = props => {

  // Get references to all possible components
  // that this component might render,
  // and the collection of dynamic components we need to render,
  // using destructuring
  const { components: Modules, collection } = props

  let Component         // A capitalized reference to reuse
  let componentProps    // a reference to the component's props to reuse

  // a function which returns component.props if it exists,
  // and otherwise returns props
  const defaultMapPropsToComponent = ({ component = {}, props = {} }) => component.props || props

  return (
    <>
      {collection.map((component, index) => {
        // Reference the proper component
        Component = Modules[component.type]

        // Get the props you want to use for this component instance
        // here we are assuming that you can specify a mapping function
        // on the component definition, in props, or use the default
        componentProps = (
          component.mapPropsToComponent
          || props.mapPropsToComponent
          || defaultMapPropsToComponent
        )(component, props)

        return <Component key={index} {...componentProps} />
      })}
    </>
  )
}
