# Async Array.prototype.forEach()

```javascript
var asyncEach = require('async-array-each');
asyncEach([1, 2, 3], function(item, next) {
  setTimeout(function () {
    console.log(item);
    next();
  }, 1000);
}, function() {
  console.log('Finnish!');
});
```
