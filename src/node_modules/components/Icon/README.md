# `oui-icons` in React

The components in this directory are automatically generated. The icons come
from our [oui-icons](https://github.com/optimizely/oui-icons) npm package. A
Node.js script (`scripts/sync-oui-icons.js`) loops through the icons within the
`node_modules/` directory and creates a basic React component for each icon.

You can run the script with `npm run icons:update`. It must be run each time
the `oui-icons` version number is updated in the `package.json`.

The icons can be used within other projects as such:

```js
const CloseIcon = require('optimizely-oui').Icon.CloseIcon;

<CloseIcon size={ 24 } testSection="attention-close-icon" />
```
