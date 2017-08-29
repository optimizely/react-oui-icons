const path = require('path');

module.exports = {
    module: {
      rules: [
        {
            test: /\.md$/,
            loader: "raw-loader"
        },
        {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"],
            include: path.resolve(__dirname, '../')
        }
    ]
    }
  };