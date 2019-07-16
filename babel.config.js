module.exports = {
  "presets": [
    ["@babel/env", { "modules": false }],
    "@babel/react"
  ],
  "env": {
    "test": {
      "presets": [["@babel/env"], "@babel/react"],
      "plugins": [
        ["inline-json-import", {}]
      ]
    }
  },
  "plugins": [
    ["inline-json-import", {}]
  ]
};
