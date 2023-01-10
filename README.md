# SfNav

> Navigation web component provided by Superflows. This component allows implementation of the single page application architecture (SPA) using pure HTML, CSS and Javascript.

<br />

## Powered by 

<img src="https://superflows-images.s3.ap-south-1.amazonaws.com/lit_logo.png" width="100" />

<br />

## i ♥

<img src="https://superflows-images.s3.ap-south-1.amazonaws.com/Building+in+public.png" width="300" /> 

<br />

[![NPM](https://img.shields.io/npm/v/sf-nav.svg)](https://www.npmjs.com/package/sf-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br />

## Motivation

Can modular web design be achieved using just html, css and javascript? Theoretically the answer is yes. Web components rolling out in the HTML specification has opened up a lot of possibilities. The motivation of this library is building a navigation bar web component that enables a modular single page applications architecture using purely html, css, javascript. 

<br />

## Design

Approach is to keep the design dead simple and to support most popular navbar functionality. "Unless a clean & simple way to implement a new feature that doesn't complicate the life of the developer-user is figured out, it is not taken up for development." is the guiding philosophy.

<br />

## Development Quality Control 

Test driven development approach with a focus on maintaining 100 percent unit test code coverage for the main workflow

<br />

## Features

- **Accessibility** - This web component is designed considering the W3C accessibility recommendations
- **Interoperability** - This is a web component, hence natively supported by the browsers. It can be used across any frontend framework such as React, Angular, Vue or with no framework at all

<br />

## Functionality

- **Header & Footer** (complete) - SfNav component generates both the header and footer view
- **Routing** (complete) - Routing is built inside this component, no external routing library required
- **Brand Info** (complete) - Brand name and logo are customizable
- **Main Menu** (complete) - Menu is fully customizable and is accepted as an un-ordered list
- **Search Input** (complete) - SfNav ships with a search input field
- **Social Media** (complete) - SfNav accepts social media links as an un-ordered list and renders them into the footer
- **Copyright Notice** (complete) - SfNav accepts copyright notice as input and renders it into the footer
- **Notifications** (partially complete) - Notifications feature is in-built, which includes a notification bell and a dropdown list to show recent notifications
- Call-to-action Button (in-progress) - SfNav comes with a call-to-action button, which can be used to highlight key actions such as sign in and subscribe.
- Profile Section (in-progress) - User profile section is also included, which can be used to show the status of a signed in user. It also includes a separate profile menu, that is customizable as well.
- Announcement Banner (in-progress) - Provision for showing an announcement banner is also given on the top of the navigation bar
- Customizability (in-progress) - All features mentioned above are inherently customizable. You can override the color scheme as well.
- Responsive (in-progress) - SfNav is fully responsive and adapts to all screen sizes
- Extendibility (in-progress) - In some places, SfNav also allows you to inject your own components, for greater customizability
- **Keyboard Navigation** (enabled) - It allows keyboard navigation across all elements on desktop, mobile and tablet form factors.
- **Screen Reader Support** (enabled) - It supports both desktop and mobile screen readers making your app acceessible to partially or completely blind users.

<br />

## Demo

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@SuperflowsAppv3/SfNav-Web-Component-Demo?embed=true"></iframe>


<a href="https://replit.com/@SuperflowsAppv3/SfNav-Web-Component#index.html"><img width="100" src="https://superflows-images.s3.ap-south-1.amazonaws.com/View+Demo.png" /></a>

<br />

## Usage

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
      <h2 slot="brandName"><a href="#home" >Superflows</a></h2>
      <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black_transparent_200.png" /></a>
      <ul slot="mainMenu">
        <li><a href="#about">About</a></li>
        <li class="li-solutions">
          <a href="javascript:void(0);" class="a-solutions">Solutions</a>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);">Contact Us</a>
          <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
          </ul>
        </li>
      </ul>
      <ul slot="notifications">
        <li><a href="#notification/1"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
        <li><a href="#notification/2"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
        <li><a href="#notification/3"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
      </ul>
      <ul slot="socialMedia">
        <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
        <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
        <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
      </ul>
      <p slot="copyright">Copyright 2022 Superflows</p>

      <div slot="content">
      </div>
    </sf-nav>
  </body>
</html>

```

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

### Routing

#### Routing via Main Menu

Routing is enabled by default. To make it functional, simply create different html components for all the links that you have specified in the main menu. Routing will start working. Look at the demo project below. 

<a href="https://replit.com/@SuperflowsAppv3/SfNav-Web-Component#index.html"><img width="100" src="https://superflows-images.s3.ap-south-1.amazonaws.com/View+Demo.png" /></a>

<br />

### Search Input

Search Input is shown by default and the SfNav component throws a searchClick event after the user types something in the search input field and presses enter. To handle the searchClick event:

```html

    <script>
      document.getElementsByTagName('sf-nav')[0].addEventListener('searchClick', () => {console.log('search clicked');})
    </script>

```

<br />

### Social Media

Social media links are shown in the footer. Configure them as follows:

```html

    <sf-nav>
      <ul slot="socialMedia">
        <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
        <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
        <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
      </ul>
      <!-- other config -->
    </sf-nav>

```

<br />

### Notifications

Notifications dropdown can be configured in the header as show below.

```html

    <sf-nav>
      <ul slot="notifications">
        <li><a href="#notification/1"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
        <li><a href="#notification/2"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
        <li><a href="#notification/3"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
      </ul>
      <!-- other config -->
    </sf-nav>

```

<br />

### Copyright notice

Copyright notice can be shown in the footer as follows:

```html

    <sf-nav>
      <p slot="copyright">Copyright 2022 Superflows</p>
      <!-- other config -->
    </sf-nav>

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

