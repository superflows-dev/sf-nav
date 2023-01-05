[<img src="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_logo_gray_c2c.png" width="400"/>](https://superflows.dev)

# SfNav

> Navigation web component provided by Superflows. This component allows implementation of the single page application architecture (SPA) using pure HTML, CSS and Javascript.

<br />

## Powered by 

<img src="https://superflows-images.s3.ap-south-1.amazonaws.com/lit_logo.png" width="100" />

<br />

## We ♥

<img src="https://superflows-images.s3.ap-south-1.amazonaws.com/Building+in+public.png" width="300" /> 

<br />

[![NPM](https://img.shields.io/npm/v/sf-nav.svg)](https://www.npmjs.com/package/sf-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br />

## Features

- **Accessibility** - This web component is designed considering the W3C accessibility recommendations
- **Interoperability** - This is a web component, hence natively supported by the browsers. It can be used across any frontend framework such as React, Angular, Vue or with no framework at all

## Functionality

- **Brand Info** (complete) - Brand name and logo are customizable
- **Main Menu** (complete) - Menu options are fully customizable
- **Search Input** (complete) - SfNav ships with a search input field
- Call-to-action Button (in-progress) - SfNav comes with a call-to-action button, which can be used to highlight key actions such as sign in and subscribe.
- Profile Section (in-progress) - User profile section is also included, which can be used to show the status of a signed in user. It also includes a separate profile menu, that is customizable as well.
- Notifications (in-progress) - Notifications feature is in-built, which includes a notification bell and a dropdown list to show recent notifications
- Announcement Banner (in-progress) - Provision for showing an announcement banner is also given on the top of the navigation bar
- Routing (in-progress) - Routing is built inside this component, no external routing library required
- Customizability (in-progress) - All features mentioned above are inherently customizable. You can override the color scheme as well.
- Responsive (in-progress) - SfNav is fully responsive and adapts to all screen sizes
- Extendibility (in-progress) - In some places, SfNav also allows you to inject your own components, for greater customizability
- **Keyboard Navigation** (enabled) - It allows keyboard navigation across all elements on desktop, mobile and tablet form factors.
- **Screen Reader Support** (enabled) - It supports both desktop and mobile screen readers making your app acceessible to partially or completely blind users.

<br />

## Basic Usage

```html

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <title>&lt;sf-nav&gt; Demo</title>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
    <script type="module">
        import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
        import {SfNav} from 'https://unpkg.com/sf-nav/sf-nav.js?module';
    </script>
    <style>
      sf-nav {
      }
    </style>
  </head>
  <body style="margin: 0px;">
    <sf-nav>
      <h2 slot="brandName">Superflows</h2>
      <img slot="brandImage" src="https://superflows.dev/img/superflows_gray_transparent_200.png" />
      <ul slot="mainMenu">
        <li><a href="#about">About</a></li>
        <li>
          <a href="#">Solutions</a>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Contact Us</a>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#facebook">Facebook</a></li>
          </ul>
        </li>
      </ul>
    </sf-nav>
  </body>
</html>

```

<br />

## Demo

[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/web-platform-rybrdq?file=index.html)

<br />

## Detailed Usage

<br />

### Brand Info

Brand name and logo can be customized as shown:

```html

    <sf-nav>
      <h2 slot="brandName">Superflows</h2>
      <img slot="brandImage" src="https://superflows.dev/img/superflows_gray_transparent_200.png" />
      <!-- other config -->
    </sf-nav>

```

<br />

### Main Menu

Main menu can be customized as shown:

```html

    <sf-nav>
        <ul slot="mainMenu">
            <li><a href="#about">About</a></li>
            <li>
            <a href="#">Solutions</a>
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
            </li>
            <li>
            <a href="#">Contact Us</a>
            <ul>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
            </ul>
            </li>
        </ul>
        <!-- other config -->
    </sf-nav>

```

<br />

### Search Input

Search Input is shown by default and the SfNav component throws a searchClick event after the user types something in the search input field and presses enter. To handle the searchClick event:

```html

    <script>
      document.getElementsByTagName('sf-nav')[0].addEventListener('searchClick', () => {console.log('search clicked');})
    </script>

```

<br />

## Testing

Tests can be run with the `test` script.

```bash
npm test
```

### Test Run Results

- Chromium: |██████████████████████████████| 1/1 test files | 2 passed, 0 failed
- Firefox:  |██████████████████████████████| 1/1 test files | 2 passed, 0 failed
- Webkit:   |██████████████████████████████| 1/1 test files | 2 passed, 0 failed
- Code coverage: 100 %
- View full coverage report at coverage/lcov-report/index.html

<br />

## Dev Server

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

<br />

## License

MIT © [superflows-dev](https://github.com/superflows-dev)

