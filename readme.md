# BuKnow
A coupon&deal sharing platform built in the year 2015

## Refactor
### Phase 1 (done)
#### 1. Use new CSS reset
```
*, :before, :after { box-sizing: border-box }
body, h1, h2, h3, h4, ol, ul, li, p, figure, figcaption, blockquote, dl, dd { margin: 0 }
```
#### 2. Reconstruct the "one dimensional" layout using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox and Truncated Text](https://css-tricks.com/flexbox-truncated-text/)
#### 3. Reconstruct the "two dimensional" layout using [grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * align-items: center; and justify-content: center; can be used to center the flex item vertically and horizontally.
  * [the difference between flexbox and grid](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/)
  * [prevent content from expanding grid items](https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items)
#### 4. Create separate CSS files for modularity to help improve maintainability and organization
#### 5. Use [Gulp](https://gulpjs.com/) to do automate tasks
  * 'browserify' enables the use of require statements in the browser by bundling up the modules.
  * Use 'babelify' (together with 'browserify') to transpile ES6+ code into ES5.
  * Use gulp watch and 'browser-sync' to refresh the browser automatically when changes occur.
  * @import CSS

## To do
* Remove Zepto/jQuery, and use vanilla JS and React Native
* [Webpack](https://webpack.js.org/)

