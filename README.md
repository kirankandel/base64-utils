
# Base64 Utils

Utility module to perform various operations on a base64 string

Work On Progress

## Installation

```
 $ npm install base64-utils 
 ```

 ## Usage

 ```js
 const base64Utils = require("base64-utils");
```

## API

### isValidBase64
Checks if the base64 string is valid.

```js
isValidBase64("SGVsbG8gV29ybGQ"); //returns false

isValidBase64("SGVsbG8gV29ybGQ="); //returns true
```