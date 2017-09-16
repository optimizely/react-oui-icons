# React OUI Icons

Icons for the Optimizely application and other OUI projects.

## Implementation

This implementation consists of a Icon React Component that will generate an inline SVG icon using the data associated with the name of the icon. Any attributes will be passed as props.


[View all the icons](https://github.com/optimizely/react-oui-icons).

## Using the icons

1. **Download the package:** Run `yarn add react-oui-icons` to include the latest icons in your project.

2. **Using an icon:** You can use one of the icons in the HTML with:

    ```javascript
    import Icon from 'react-oui-icons';
    
    ...

    <Icon 
      name="search"
      description="search" 
      size="medium"
      fill="black"
    />

    ...
    ```

[View all the icons](https://github.com/optimizely/react-oui-icons).

## Storybook
`react-oui-icons` uses [Storybook](https://storybook.js.org/)! You can view all of the icons through the Storybook interface by running:

```
yarn run storybook
```
    
It will start a local webserver served at `http://localhost:6006/`.

## Adding and editing icons

1. Add the icon to the appropriate folder in `src/Icon/icons`.
2. Enter the icon internal data to the appropriate folder in `src/Icon/icons.js`.
3. Then follow our contributing instructions posted [here](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md)
