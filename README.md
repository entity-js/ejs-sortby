# EntityJS - Utilities

## sortBy

A small utility which allows sorting objects and arrays by a specified key.

### Usage

```javascript
var sortBy = require('sortBy');

var obj = {
      item1: {
        value: 1, weight: 1
      },
      item2: {
        value: 2, weight: 2
      }
    };

sortBy(obj, 'weight');
```
