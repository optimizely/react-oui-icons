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

[View all the icons](http://optimizely.github.io/oui/storybook/?knob-href=http%3A%2F%2Fgoogle.com&knob-defaultValue=some%20default%20value&knob-direction=up&knob-default=Link&knob-reverse=Link%20Reverse&knob-color=black&knob-dark=Link%20Dark&knob-max=50&knob-type=text&knob-bad-news=Link%20Bad%20News&knob-isDropdown=true&knob-maxLength=250&knob-muted=Link%20Muted&knob-children=Link&knob-size=medium&knob-style=default&knob-min=10&knob-placeholder=just%20a%20placeholder&knob-Label=&selectedKind=Icons&selectedStory=all%20icons&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook%2Factions%2Factions-panel).

## Storybook
`react-oui-icons` uses [Storybook](https://storybook.js.org/)! You can view all of the icons through the Storybook interface by running:

```sh
yarn run storybook
```

It will start a local webserver served at `http://localhost:6006/`.

## Adding and editing icons

1. Add icons to `assets/svgs/`.
2. Run `yarn svgson` to update the icon internal data file in `src/Icon/icons.json`.
    - If this command is failing, try running `yarn install` first.
3. Create a new release of `react-oui-icons` (see [Pre-Release](https://github.com/optimizely/react-oui-icons#warning-pre-release) and [Release a new version of react-oui-icons](https://github.com/optimizely/react-oui-icons#release-new-version-of-react-oui-icons))
4. Update version of `react-oui-icons` in Optimizely [OUI](https://github.com/optimizely/oui)'s `package.json` to the latest
    - Run `yarn upgrade react-oui-icons@99.xx.xx` in OUI
    - Copy the contents of react-oui-icons's `src/Icon/icons.json`  to OUI's `src/stories/icons.json`
    - Add a line to the Changelog, something like:
        - [Patch] Update react-oui-icons version to xx.xx.xx ([PR #](https://github.com/optimizely/oui/pull/PR #))
5. Create a [new release of OUI](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md)
6. Bump the OUI version number in Optimizely's package.json
    - Run `yarn upgrade optimizely-oui@99.xx.xx` in `src/www/frontend`

## Test in Optimizely.git

1. `cd ~/react-oui-icons`
2. `yarn link`
3. `cd ~/optimizely`
4. `yarn link react-oui-icons`
5. Use `?use_local_bundle=true` to test your icon changes before releasing with confidence

## :warning: Pre-Release

Don't forget these before you create a release:

1. Add a new header to `CHANGELOG.md` under “Unreleased” with the [new version number](https://medium.com/design-optimizely/how-to-version-your-ui-library-1c7a1b7ee23a):

    ```md
    ## Unreleased

    ## 2.0.0 - 2018-04-13
    - [Release] Added a cool breaking change. (#999)
    ```
2. Commit to master: `git add . && git commit -a -m 'Prep for new release version x.y.z'`

## Release new version of react-oui-icons

1. `yarn release patch` or `yarn release minor` or `yarn release major`
2. [Create a new release on GitHub](https://github.com/optimizely/react-oui-icons/releases/new):
    * Select the new tag version
    * Leave “Release title” blank
    * Paste in “Unreleased” latest additions from the `CHANGELOG.md` release notes
