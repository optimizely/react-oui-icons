<!-- [![Build Status](https://travis-ci.org/optimizely/oui-icons.svg?branch=master)](https://travis-ci.org/optimizely/oui-icons) -->

# React OUI Icons

Icons for the Optimizely application and other OUI projects.

## Implementation

This implementation consists of a Icon React Component that will generate an inline SVG icon using the data associated with the name of the icon. Any attributes will be passed as props.


[View all the icons](https://github.com/optimizely/react-oui-icons).

## Using the icons

1. **Download the package:** Run `yarn add oui-icons` to include the latest icons in your project.

2. **Using an icon:** You can use one of the icons in the HTML with:

    ```javascript
    import Icon from './Icon';
    
    ...

    <Icon 
      name="search"
      description="search" 
      width="24" 
      height="24"
    />

    ...
    ```

[View all the icons](https://github.com/optimizely/react-oui-icons).

## Adding and editing icons

1. Add the icon to the appropriate folder in `src/svg`.
2. Enter the icon internal data to the appropriate folder in `src/Icon/icons.js`.
3. Update the [CHANGELOG.md](https://github.com/optimizely/oui-icons/blob/master/CHANGELOG.md) to include information about the change in the “Unreleased” section. Here are some tips:
  - Each list item falls under one of the following categories: `Added`, `Changed`, `Fixed`, or `Removed`.
  - Each item is labeled either `[Patch]`, `[Feature]`, or `Release`.
    - `[Patch]`: Backwards compatible fixes (patches) to existing icons, infrastructure, or documentation.
    - `[Feature]`: New icons or features that are backwards compatible.
    - `[Release]`: Changes that are not backwards compatible such as the removal of an icon.
  - Changes should always be added in the “Unreleased” section.
3. Create a pull request on GitHub and assign a UI Engineer or Frontend Engineer.

## Releasing a new version

### Prerequisite
* You must have deploy access to [design.optimizely.com](http://design.optimizely.com/) and be listed as a contributor on the [`react-oui-icons` NPM package](https://www.npmjs.com/package/react-oui-icons). Contact a UI Engineer for help.
* You must be using a version of NPM larger than `2.11.0`. This is when NPM added support for the `postversion` hook that we rely on. You can check your version by running `npm -v` in the command line.

### How to release

1. Run `git checkout master && git pull`.
2. Open the `CHANGELOG.md`, update to reflect the new version, and commit the change. Here are some tips:
  * The new version number depends on the severity of the changes in the version that is being released. Here are examples:
    * `[Release]` – `1.2.3` would become `2.0.0`.
    * `[Feature]` – `1.2.3` would become `1.3.0`.
    * `[Patch]` – `1.2.3` would become `1.2.4`.
  * The commit should include the `CHANGELOG.md` update. The message could be: “Prep for 3.1.3 release.”
  * Do _not_ update the `package.json` in this step.
  * There should be nothing left in the “Unreleased” section.
3. Run the command that matches the highest severity change in this release:
  * `npm version patch` - version includes a backwards-compatible bug fix or tweak. This includes small icon style modifications.
  * `npm version minor` - version includes a backwards compatible new "feature" such as a new icon.
  * `npm version major` - version contains a non-backwards compatible breaking change such as a renamed or deleted icon.
## To do's

- [ ] register as a npm package
- [ ] write some test
- [ ] add documentation
- [ ] add storybook for visual UI testing
