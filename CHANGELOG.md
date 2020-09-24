# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file is similar to the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## Unreleased
- [Patch] Updated component to be memoized to improve usage performance across all uses ([#60](https://github.com/optimizely/react-oui-icons/pull/60))

## 2.11.3 - 2020-09-02
- [Patch] Update svg for `hash`

## 2.11.2 - 2020-09-01
- [Patch] Remove stroke color from `hash`

## 2.11.1 - 2020-08-28
- [Patch] Fix typo

## 2.11.0 - 2020-08-28
- [Feature] Add `SDK` icons, `hash`, and update `duplicate`

## 2.10.0 - 2020-08-04
- [Feature] Add `chart` icon

## 2.9.0 - 2020-05-19
- [Feature] Add `flag` icon

## 2.8.1 - 2020-04-24
- [Fix] Update svgs for `environment`, `secure-environment`, and `no-lock` icons

## 2.8.0 - 2020-04-23
- [Feature] Add `environment`, `secure-environment`, and `no-lock` icons

## 2.7.0 - 2019-10-22
- [Feature] Add `docs` icon

## 2.6.1 - 2019-07-16
- [Chore] Upgrade to Babel 7, Node 12, Gulp 4 (#46)

## 2.6.0 - 2018-10-29
- [Feature] Add file icon
- [Feature] Add pdf icon
- [Feature] Add spreadsheet icon
- [Feature] Add document icon
- [Feature] Add license file
- [Fix] Improve readability of icons and icon titles in Storybook

## 2.5.0 - 2018-10-29
- [Feature] Fix ES module build of react-oui-icons not transpiling JSX

## 2.4.0 - 2018-10-22
- [Feature] Add comments icon
- [Feature] Pencil edit icon
- [Feature] Add fill prop to <Icon> (#33)
- [Feature] Updated storybook with inline, fill and currentColor examples
- [Fix] Replace program management hex values with currentColor variable
- [Fix] Remove tooltip for help icon

## 2.2.2 - 2018-08-24
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
