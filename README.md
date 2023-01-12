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

## Table of Contents

- [Motivation](#motivation)
- [Design](#design)
- [Development & Quality Control](#development--quality-control)
- [Features](#features)
- [Functionality](#functionality)
- [Demo](#demo)
- [Usage](#usage)
- [Tutorial](#tutorial)
- [Testing](#testing)
- [Dev Server](#dev-server)

<br />

## Motivation

Can modular web design be achieved using just html, css and javascript? Theoretically the answer is yes. Web components rolling out in the HTML specification has opened up a lot of possibilities. The motivation of this library is building a navigation bar web component that enables a modular single page applications architecture using purely html, css, javascript. 

<br />

## Design

Approach is to keep the design dead simple and to support most popular navbar functionality. "Unless a clean & simple way to implement a new feature that doesn't complicate the life of the developer-user is figured out, it is not taken up for development." is the guiding philosophy.

<br />

## Development & Quality Control 

Test driven development approach with a focus on maintaining 100 percent unit test code coverage for the main workflow

<br />

## Features

- **Accessibility** - This web component is designed considering the W3C accessibility recommendations
- **Interoperability** - This is a web component, hence natively supported by the browsers. It can be used across any frontend framework such as React, Angular, Vue or with no framework at all

<br />

## Functionality

- **Header & Footer** - SfNav component generates both the header and footer view
- **Routing** - Routing is built inside this component, no external routing library required
- **Brand Info** - Brand name and logo are customizable
- **Main Menu** - Menu is fully customizable and is accepted as an un-ordered list
- **Search Input** - SfNav ships with a search input field
- **Social Media** - SfNav accepts social media links as an un-ordered list and renders them into the footer
- **Copyright Notice** - SfNav accepts copyright notice as input and renders it into the footer
- **Notifications** - Notifications feature is in-built, which includes a notification bell and a dropdown list to show recent notifications
- **Call-to-action Button** - SfNav comes with a call-to-action button, which can be used to highlight key actions such as sign in and subscribe.
- **Profile Section** - User profile section is also included, which can be used to show the status of a signed in user. It also includes a separate profile menu, that is customizable as well.
- **Keyboard Navigation** - It allows keyboard navigation across all elements on desktop, mobile and tablet form factors.
- **Screen Reader Support** - It supports both desktop and mobile screen readers making your app acceessible to partially or completely blind users.

<br />

## Demo

<a href="https://replit.com/@SuperflowsAppv3/SfNav-Web-Component#index.html"><img width="100" src="https://superflows-images.s3.ap-south-1.amazonaws.com/View+Demo.png" /></a>

<br />

## Usage

```html

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <title>&lt;sf-nav&gt; Demo</title>
    <!-- Integration material icons as they are used in sf-nav -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Google fonts integration -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap" rel="stylesheet">
    <!-- Integration the web components module -->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
    <!-- Integration lit and sf-nav web components module -->
    <script type="module">
        import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
        import {SfNav} from 'https://unpkg.com/sf-nav/sf-nav.js?module';
    </script>
    <style>
      
      body {
        background-color: #efefef;
        margin: 0px;
        font-family: 'Source Sans Pro';
      }

      sf-nav:not(:defined) {
        display: none;
      }
      
    </style>
  </head>
  <body style="margin: 0px;">
    <sf-nav>
      <!-- Set the brand name -->
      <h2 slot="brandName"><a href="#home" >Superflows</a></h2>
      <!-- Set the brand logo -->
      <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black_transparent_200.png" /></a>
      <!-- Set the main menu -->
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
      <!-- Set the social media links -->
      <ul slot="socialMedia">
        <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
        <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
        <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
      </ul>
      <!-- Set the notifications -->
      <ul slot="unreadNotifications">
        <li><a href="#notification/1"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
        <li><a href="#notification/2"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
        <li><a href="#notification/3"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
      </ul>
      <ul slot="readNotifications">
        <li><a href="#notification/4"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
        <li><a href="#notification/5"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
        <li><a href="#notification/6"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
      </ul>
      <a slot="notificationsList" href="#notifications">View All</a>
      <!-- Set copyright notice -->
      <p slot="copyright">Copyright 2022 Superflows</p>
      <!-- Profile picture -->
      <img alt="profile" slot="profilePicture" src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
      <!-- Set the profile menu -->
      <ul slot="profileMenu">
        <li><a href="#settings">My Profile</a></li>
        <li>
          <a href="javascript:void(0);">Settings</a>
          <ul>
            <li><a href="#settings_data">Data & Privacy</a></li>
            <li><a href="#settings_notifications">Notifications</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);">Support</a>
          <ul>
            <li><a href="#ticket">Create Ticket</a></li>
            <li><a href="#chat">Chat With Us</a></li>
          </ul>
        </li>
        <li><a href="#signout">Sign Out</a></li>
      </ul>
      <!-- Page Content -->
      <div slot="content"></div>
    </sf-nav>
  </body>
</html>

```

<br />

## Tutorial

<br />

### Step 1 - Create an html page

Create an html page and add the following html content to it:

```html

<!DOCTYPE html>

<html>
  <head>
    <!-- V imp for responsive layouting -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title>&lt;sf-nav&gt; Demo</title>
    <!-- Include scripts and import-->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
    <script type="module">
        import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
        import {SfNav} from 'https://unpkg.com/sf-nav/sf-nav.js?module';
    </script>
    <style>
      body {
        background-color: #efefef;
        margin: 0px;
      }
      /* ensure that the component is displayed only after it renders properly */
      sf-nav:not(:defined) {
        display: none;
      }
    </style>
  </head>
  <body>
    <!-- Add the component tag -->
    <sf-nav>
      <!-- Set the brand name -->
      <h2 slot="brandName"><a href="#home" >Superflows</a></h2>
    </sf-nav>
  </body>
</html>

```

A bare bones version of the navigation header and footer, which includes only the brand name will be rendered. This will be our starting point!

<br />

### Step 2 - Setup Brand Info

Set the brand logo as show below. It will be rendered both in the header and the footer.

```html

  <sf-nav>
    <!-- Set the brand name -->
    <h2 slot="brandName"><a href="#home" >Superflows</a></h2>
    <!-- Set the brand logo -->
    <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black_transparent_200.png" /></a>
  </sf-nav>
    
```

<br />

### Step 3 - Routing

Routing is enabled by default. Every hash link specified in the SfNav component needs to be backed by its separate html component. For example the links in the brand info section (above section), contains #home as the link. For routing to work, simply create a separate home.html component for it. SfNav will then automatically take care of routing.

```html

  <sf-nav>
    <!-- Page Content -->
    <div slot="content">
    </div>
  </sf-nav>
    
```

For passing parameters to individual components, include the following javascript code. Individual components can then fetch their parameters from the associative array routeMap.

```html
  <script>
    var routeMap = [];
  
    function getCurrentPathName() {
      return window.location.hash.length === 0 ? '' : window.location.hash.split("/")[0].replace('#', '');
    }
    function getCurrentArgs() {
      return routeMap[getCurrentPathName() + '.html'];
    }
  
    document.getElementsByTagName('sf-nav')[0].addEventListener('searchClick', () => {console.log('hurray');})
    document.getElementsByTagName('sf-nav')[0].addEventListener('routeChange', (e) => {
      routeMap[e.detail.pathName] = e.detail.args;
    })
  </script>
```

<br />

### Step 4 - Setup Main Menu

You can compose your menu using unordered lists, as shown in the below example.

```html

  <sf-nav>
    <!-- Set the main menu -->
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
  </sf-nav>
    
```

<br />

### Step 5 - Setup Search

Search Input is shown by default and the SfNav component throws a searchClick event after the user types something in the search input field and presses enter. To handle the searchClick event:

```html

    <script>
      document.getElementsByTagName('sf-nav')[0].addEventListener('searchClick', () => {console.log('search clicked');})
    </script>

```

<br />

### Step 6 - Setup Social Media Links

Social media links can be configured using unordered lists, and are shown in the footer. Set them up as follows:

```html

  <sf-nav>
    <!-- Set the social media links -->
    <ul slot="socialMedia">
      <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
      <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
      <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
    </ul>
  </sf-nav>

```

### Step 7 - Setup Notifications

Notifications dropdown can be configured using unordered lists as shown in the example below. Notifications functionality has three parts - (1) Unread notifications, (2) Read Notifications, (3) Notifications List Link. All of them can be configured separately:

```html

  <sf-nav>
    <!-- Set the notifications -->
    <ul slot="unreadNotifications">
      <li><a href="#notification/1"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
      <li><a href="#notification/2"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
      <li><a href="#notification/3"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
    </ul>
    <ul slot="readNotifications">
      <li><a href="#notification/4"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
      <li><a href="#notification/5"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
      <li><a href="#notification/6"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
    </ul>
    <a slot="notificationsList" href="#notifications">View All</button>
  </sf-nav>

```

<br />

### Step 8 - Setup Copyright notice

Copyright notice can be shown in the footer as follows:

```html

    <sf-nav>
      <p slot="copyright">Copyright 2022 Superflows</p>
      <!-- other config -->
    </sf-nav>

```

<br />

### Step 9 - Setup Call To Action

You can add a call to action (CTA) button to the header as follows:

```html

    <sf-nav>
      <a slot="cta" href="#login">Sign In</a>
      <!-- other config -->
    </sf-nav>

```

<br />

### Step 10 - Setup Profile Section

Profile section mainly contains two things - (1) Profile picture toggle,  (2) Dropdown menu. You can configure both these as follows:
 
```html

    <sf-nav>
      <!-- Profile picture -->
      <img alt="profile" slot="profilePicture" src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
      <!-- Set the profile menu -->
      <ul slot="profileMenu">
        <li><a href="#settings">My Profile</a></li>
        <li>
          <a href="javascript:void(0);">Settings</a>
          <ul>
            <li><a href="#settings_data">Data & Privacy</a></li>
            <li><a href="#settings_notifications">Notifications</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);">Support</a>
          <ul>
            <li><a href="#ticket">Create Ticket</a></li>
            <li><a href="#chat">Chat With Us</a></li>
          </ul>
        </li>
        <li><a href="#signout">Sign Out</a></li>
      </ul>
      <!-- other config -->
    </sf-nav>

```

<br />

## Testing

Tests can be run with the `test` script.

```bash
npm test
```

- Chromium: |██████████████████████████████| 1/1 test files | 5 passed, 0 failed
- Firefox:  |██████████████████████████████| 1/1 test files | 5 passed, 0 failed
- Webkit:   |██████████████████████████████| 1/1 test files | 5 passed, 0 failed

- Code coverage: 98.63 % (Overall) 100% (Main flow)
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

