# king-dom [![Build Status](https://travis-ci.org/wrumsby/kingDOM.svg?branch=master)](https://travis-ci.org/wrumsby/kingDOM)

The most useless DOM abstraction ever.

Please don't use this.

## Installing

With [Bower](http://bower.io/):

```bash
bower install king-dom --save
```

## Usage

### 1.x API

```js
require(['king-dom'], function (king) {
  var el = king('#el');
});
```

### 2.x API

```js
require(['king-dom'], function (king) {
  var el = king('#el')[0];
});
```
