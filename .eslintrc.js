module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true,
      "jest": true
  },
  "extends": [
      "airbnb",
  ],
  "rules": {
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
  },
  "settings": {
      "import/resolver": {
          "node": {
              "moduleDirectory": ["node_modules", "src/"]
          }
      }
  }
};
