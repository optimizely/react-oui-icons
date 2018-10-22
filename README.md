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

1. Add icons to `assets/svgs/`.
2. Run `yarn svgson` to update the icon internal data file in `src/Icon/icons.js`.
3. Create a [new release of OUI](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md)

## Test in Optimizely.git

1. `cd ~/react-oui-icons`
2. `npm link`
3. `cd ~/optimizely`
4. `npm link react-oui-icons`
5. Use `?use_local_bundle=true` to test your icon changes before releasing with confidence

## Release new version of react-oui-icons
1. Commit changes, push, create PR, get approval, squash & merge...
2. `npm run release patch` or `npm run release minor` or `npm run release major`
3. OUI will automatically bump the react-oui-icons `^0.0.x` releases, so you will need to create a new release of OUI if your icon changes include minor or major changes.
