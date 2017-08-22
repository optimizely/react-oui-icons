# React OUI Icons

Icons for the Optimizely application and other OUI projects.

## Implementation

This implementation consists of a Icon React Component that will generate an inline SVG icon using the data associated with the name of the icon. Any attributes will be passed as props.


[View all the icons](https://github.com/optimizely/react-oui-icons).

## Using the icons

1. **Download the package:** Run `yarn add react-oui-icons` to include the latest icons in your project.

2. **Using an icon:** You can use one of the icons in the HTML with:

    ```javascript
    import Icon from './Icon';
    
    ...

    <Icon 
      name="search"
      description="search" 
      size="medium"
    />

    ...
    ```

[View all the icons](https://github.com/optimizely/react-oui-icons).

## Adding and editing icons

1. Add the icon to the appropriate folder in `src/Icon/icons`.
2. Enter the icon internal data to the appropriate folder in `src/Icon/icons.js`.
3. Then follow our contributing instructions posted [here](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md)
