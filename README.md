# Transition Switch

> This package replaces react-router 5's `<Switch>` component and enables scroll-to-top functionality and route transition animations using [React Transition Group](https://github.com/reactjs/react-transition-group) and
> [Animate.js](https://github.com/animatedjs/animated).

[![NPM Version][npm-image]][npm-url]

Inspired by [react-router-transitions](https://github.com/gianlucacandiotti/react-router-transitions)

Demo available here: [https://canfie1d.github.io/transition-switch/](https://canfie1d.github.io/transition-switch/#/)

## Installation

```bash
yarn add transition-switch
```

## Usage

```bash
import { TransitionSwitch } from 'transition-switch'';
```

```bash
<TransitionSwitch>
  <Route />
  <Route />
</TransitionSwitch>
```

You can also use the `ScrollToTop` component independently which will initiate a scroll on any route change (requires location prop from react-router).

```bash
import { ScrollToTop } from './TransitionSwitch';
import { useLocation } from 'react-router-dom';
```

```bash
const location = useLocation();
<ScrollToTop location={location} />
```

## Props

Props marked with an asterisk also exist on `ScrollToTop` as well

- **`transition`**

  Controls the animation type

  _default:_ `'fade'`

  _available:_ `'fade', 'fade-up', 'fade-down'`

- **`timeout`**

  Controls the animation duration

  _default:_ `{enter: 500, exit: 500 }`

- **`scrollToTop`**

  Toggles whether your scroll position is preserved on route change

  _default:_ `true`

- **`scrollTopOffset`\***

  Controls scrollToTop's final position

  _default:_ `{ x: 0, y: 0 }`

- **`scrollTopDelay`\***

  Defines when the scrollToTop occurs during the route animation

  _default:_ `250`

- **`scrollContainer`\***

  If your layout locks the body and scrolls another element, you can change the scroll container target for scrollToTop

  _default:_ `window`

- **`animatedDivClassName`**

  Optionally pass a class name to the div that is animated

  _default:_ `"animatedRouteWrapper"`

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/transition-switch.svg
[npm-url]: https://npmjs.org/package/transition-switch
