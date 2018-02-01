# Transition Switch

This package replaces react-router 4's `<Switch>` component and enables scroll-to-top functionality and route transition animations using [React Transition Group](https://github.com/reactjs/react-transition-group) and
[Animate.js](https://github.com/animatedjs/animated).

## Installation
---
`npm i --save transition-switch`

## Usage
---
```
import TransitionSwitch from './TransitionSwitch';
```
```
<TransitionSwitch>
  <Route />
  <Route />
</TransitionSwitch>
```

## Props
---
_Listed values are defaults_

- `transition`

  Controls the animation type

  default: `'fade'`

- `timeout`

  Controls the animation duration

  default: `{enter: 500, exit: 500 }`

- `scrollToTop`

  Toggles whether your scroll position is preserved on route change

  default: `true`

- `scrollTopOffset`

  Controls scrollToTop's final position

  default: `{ x: 0, y: 0 }`

- `scrollTopDelay`

  Defines when the scrollToTop occurs during the route animation

  default: `250`


- `scrollContainer`

  If your layout locks the body and scrolls another element, you can change the scroll container target for scrollToTop

  default: `window`

- `animatedDivClassName`

  Optionally pass a class name to the div that is animated

  default: `"animatedRouteWrapper"`
