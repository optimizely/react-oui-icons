# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file is similar to the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## Unreleased
- [Feature] Add comments icon
- [Feature] Pencil edit icon
- [Feature] Add fill prop to <Icon> (#33)
- [Feature] Updated storybook with inline, fill and currentColor examples
- [Fix] Replace program management hex values with currentColor variable
- [Fix] Remove tooltip for help icon

## 2.2.2 - 208-08-24
- [Feature] Add getting-started icon

## 2.1.1 - 2018-05-16
- [Fix] Adjustment to fill prop syntax to fix Icon errors downstream in OUI Storybook

## 2.1.0 - 2018-05-08
- [Fix] Set default fill to currentColor, not black
- [Feature] Allow ellipse shape output in the build script (#31)

## 2.0.4 - 2018-03-22
- [Feature] Program-management icon
- [Fix] Feature-test icon with black fill and center within view box

## 2.0.3 - 2018-03-09
- [Feature] Feature-test icon.

## 2.0.1 - 2018-02-21
- [Fix] Deploy `/dist/**` directory correctly.

## 2.0.0 - 2018-02-21
- [Breaking] Exclude react, react-dom, and prop-types from exported code (moved to peerDependencies).
- [Feature] Export ES5 Icon Component as `package.main`, ES6 Icon Component as `package.module`
- [Feature] Export a single combined SVG file of all the SVGs in use at `dist/svg/svg-symbols.svg`
- [Infra] Use babel to build instead of webpack

## 1.0.2 - 2017-10-17
- [Patch] Build lib for release.
- [Patch] Upgrade React and ReactDOM to 16.

## 1.0.0 - 2017-10-16
- [Feature] Upgrade React and ReactDOM to 16.
- [Feature] Add readme notes about adding new icons.
- [Feature] Add three new checkmark icons for Environments status switcher.

## 0.8.0 - 2017-10-03
- [Feature] Syncing back with Optimizely React version.
- [Patch] Add key to shapes creation through the iteration process. (#11)

## 0.6.1 - 2017-09-08
- [Patch] Add attribute for map react components in implementation. (#9)

## 0.6.0 - 2017-09-07
- [Feature] Webpack optimized build.  

## 0.5.9 - 2017-09-06
- [Patch] Npmignore some storybook related dirs.

## 0.5.8 - 2017-09-05
- [Patch] Delete unused glamorous package

## 0.5.7 - 2017-09-01
- [Patch] Re-organizing dependencies

## 0.5.6 - 2017-08-29
- [Patch] Add Readme addon to storybook

## 0.5.1 - 2017-08-22
- [Patch] fix bug related to fill default color

## 0.5.0 - 2017-08-22
- [Feature] using outline version of icons

## 0.4.0 - 2017-08-16
- [Patch] fixing semantic sizing

## 0.3.0 - 2017-08-16
- [Feature] ability to generate a single json file from `*.svg` on `/svgs` dir
- [Feature] migrate all the svgs from illustrator to sketch
- [Patch] redrawing of fill oriented icons to stroke oriented
- [Patch] rebuild the logic to generate svgs in the React Icon Component

@daverau-optimizely

## 0.2.1 - 2017-08-02
- [Patch] New readme
- [Patch] Deleted repeated code

## 0.2.0 - 2017-08-02
- [Feature] Add new size option
- [Feature] React Icon component base on OUI design system
