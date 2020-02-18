# Safe focus
[![CircleCI](https://circleci.com/gh/sparkbox/safe-focus/tree/master.svg?style=svg)](https://circleci.com/gh/sparkbox/safe-focus/tree/master)

Safe Focus is a utility file to add a custom outline style for all selectable components.

## Installation
Run `npm i @sparkbox/safe-focus -P` in your local project.

## Usage

### JavaScript
Require the package in your project and init the default import.
```
import safeFocus from '@sparkbox/safe-focus';

safeFocus();
```

### Sass
To use the `safe-focus` mixin, start by exposing `node_modules` to Sass in `package.json`.
```
"sass": {
    "includePaths": ["./node_modules"]
},
```

Next, import the package into your project's mixin file.
```
@import '~@sparkbox/safe-focus/index';
```

Encapsulate your styles with the `safe-focus` mixin:
```
.my-button {
  outline: 1px solid #00b2e2;
  @include safe-focus() {
    outline: 1px solid #264b59;
  }
}
```

This will result in the following transpiled CSS:
```
my.button {
  outline: 1px solid #00b2e2;
}

html.safe-focus {
  my.button {
    outline: 1px solid #264b59;
  }
}
```

Since the `safe-focus` CSS class added to the DOM may change, it is not recommended to directly reference the `safe-focus` CSS class in your project.
