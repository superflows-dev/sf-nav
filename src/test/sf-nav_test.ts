/**
 * @license
 * Copyright 2022 Superflows.dev
 * SPDX-License-Identifier: MIT
 */

import {SfNav} from '../sf-nav.js';
import { stub } from 'sinon';
import {fixture, assert} from '@open-wc/testing';
// import {assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import DownloadFile from '../downloadFile.js';

//const TIMEOUT = 2000;

suite('sf-nav', () => {

  test('is defined', () => {
    const el = document.createElement('sf-nav');
    assert.instanceOf(el, SfNav);
  });

  test('basic render > check sanity > open left menu > close left menu > open left menu again > open left submenu > close left submenu > close left menu > open main menu > close main menu > open search > types something in search > close search > togglesearch > click last menu > open notifications > close notifications > open notifications again > click on a single notification', async () => {


    const el = (await fixture(html`
      <sf-nav >
        <h2 slot="brandName"><a href="#home" >SuperTester</a></h2>
        <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows.dev/img/superflows_gray_transparent_200.png" /></a>
        <ul slot="mainMenu">
          <li><a href="#about" class="a-about">About</a></li>
          <li class="li-solutions">
            <a href="javascript:void(0);" class="a-solutions">Solutions</a>
            <ul>
              <li><a href="#services" class="a-services">Services</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Contact Us</a>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </li>
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
        <ul slot="socialMedia">
          <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
          <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
          <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
        </ul>
        <p slot="copyright">Copyright 2022 Superflows</p>
        <div slot="content">
        </div>
      </sf-nav>
      `) as SfNav);

    await el.updateComplete;

    // Check sanity

    const sfNavC = el.shadowRoot!.querySelectorAll('.sfNavC')[0]!;
    assert.ok(sfNavC.innerHTML.indexOf('▶') >= 0); 


    var clickEvent = new MouseEvent("click", {
          "view": window,
          "bubbles": true,
          "cancelable": false
      });

    // Open left menu

    const sfNavToggleLeft = el.shadowRoot!.querySelectorAll('.sfNavToggleLeft')[0]!;
    sfNavToggleLeft.dispatchEvent(clickEvent)
    await el.updateComplete;

    const sfNavToggleLeftLeaf = el.shadowRoot!.querySelectorAll('.sfNavToggleLeftLeaf')[0]!;
    assert.ok(sfNavToggleLeftLeaf.outerHTML.indexOf('display: block;') >= 0); 

    // Close left menu

    sfNavToggleLeftLeaf.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(sfNavToggleLeftLeaf.outerHTML.indexOf('display: none;') >= 0); 

    // Open left menu again

    sfNavToggleLeft.dispatchEvent(clickEvent)
    await el.updateComplete;

    // Open left submenu

    const liSolutions = el.shadowRoot!.querySelectorAll('.li-solutions')[0]!;
    liSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(liSolutions.outerHTML.indexOf('color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);') >= 0); 

    // Close left submenu > menu

    liSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;
    assert.ok(liSolutions.outerHTML.indexOf('color: inherit; background-color: inherit;') >= 0); 

    // Open main menu

    const aSolutions = el.shadowRoot!.querySelectorAll('.a-solutions')[1]!;
    aSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;

    const liSolutions1 = el.shadowRoot!.querySelectorAll('.li-solutions')[1]!;
    assert.ok(liSolutions1.querySelector('ul')!.outerHTML.indexOf('display: block;') >= 0); 

    // Close main menu

    const sfNavToggleLeftLeaf1 = el.shadowRoot!.querySelectorAll('.sfNavToggleLeftLeaf')[1]!;
    sfNavToggleLeftLeaf1.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(liSolutions1.querySelector('ul')!.outerHTML.indexOf('display: none;') >= 0); 

    // Open search menu

    const searchH1 = el.shadowRoot!.querySelectorAll('.sfNavSearchToggle')[0]!;
    searchH1.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelectorAll('.sfNavDivSearchDropdown')[0]!.outerHTML.indexOf('display: flex;') >= 0);
    
    // Type something in search

    var count = 0;

    const testSearchClick = () => {count++}

    el.addEventListener('searchClick', testSearchClick);

    var eventKeyA = new KeyboardEvent('keyup', {'key': 'A'});
    var eventKeyEnter = new KeyboardEvent('keyup', {'key': 'Enter'});

    const searchInput = el.shadowRoot!.querySelectorAll('.sfNavInputSearch')[0]!;
    searchInput.dispatchEvent(eventKeyA);
    await el.updateComplete;
    searchInput.dispatchEvent(eventKeyA);
    await el.updateComplete;
    searchInput.dispatchEvent(eventKeyA);
    await el.updateComplete;
    searchInput.dispatchEvent(eventKeyEnter);
    await el.updateComplete;

    assert.ok(count === 1)

    el.removeEventListener('searchClick', testSearchClick);

    // Close search menu
    
    const searchOverlay = el.shadowRoot!.querySelectorAll('.sfNavDivSearch > div')[0]!;
    searchOverlay.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelectorAll('.sfNavDivSearchDropdown')[0]!.outerHTML.indexOf('display: none;') >= 0); 

    // Again open search menu

    searchH1.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelectorAll('.sfNavDivSearchDropdown')[0]!.outerHTML.indexOf('display: flex;') >= 0);

    // Click on close button to close search

    const sfNavDivSearchClose = el.shadowRoot!.querySelectorAll('.sfNavDivSearchClose')[0]!;
    sfNavDivSearchClose.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelectorAll('.sfNavDivSearchDropdown')[0]!.outerHTML.indexOf('display: none;') >= 0); 

    // Click last menu

    aSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;
    assert.ok(liSolutions1.querySelector('ul')!.outerHTML.indexOf('display: block;') >= 0); 

    const aServices = el.shadowRoot!.querySelectorAll('.a-services')[1]!;
    aServices.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(liSolutions1.querySelector('ul')!.outerHTML.indexOf('display: none;') >= 0);

  });

  test('Notifications', async () => {

    const el = (await fixture(html`
      <sf-nav >
        <h2 slot="brandName"><a href="#home" >SuperTester</a></h2>
        <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows.dev/img/superflows_gray_transparent_200.png" /></a>
        <ul slot="mainMenu">
          <li><a href="#about" class="a-about">About</a></li>
          <li class="li-solutions">
            <a href="javascript:void(0);" class="a-solutions">Solutions</a>
            <ul>
              <li><a href="#services" class="a-services">Services</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Contact Us</a>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </li>
        </ul>
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
        <ul slot="socialMedia">
          <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
          <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
          <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
        </ul>
        <p slot="copyright">Copyright 2022 Superflows</p>
        <div slot="content">
        </div>
      </sf-nav>
      `) as SfNav);

    await el.updateComplete;

    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });

    // Open notifications

    const h1Notifications = el.shadowRoot!.querySelectorAll('.sfNavNotifToggle')[0]!; 
    h1Notifications.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[2].outerHTML.indexOf('display: block;') >= 0);

    // Close notifications

    el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[2].dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[2].outerHTML.indexOf('display: none;') >= 0);

    // Open notifications again

    h1Notifications.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[2].outerHTML.indexOf('display: block;') >= 0);

    // Click a notification

    el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[3].children[0].children[0].children[0].dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(el.shadowRoot!.querySelector('.sfNavDivNotif')!.children[2].outerHTML.indexOf('display: none;') >= 0);

  });
  
  test('Routing page found', async () => {


    stub(DownloadFile, 'downloadFile').returns({status: 200, content: "Hello"});

    const el = (await fixture(html`
      <sf-nav >
        <h2 slot="brandName"><a href="#home" >SuperTester</a></h2>
        <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows.dev/img/superflows_gray_transparent_200.png" /></a>
        <ul slot="mainMenu">
          <li><a href="#about" class="a-about">About</a></li>
          <li class="li-solutions">
            <a href="javascript:void(0);" class="a-solutions">Solutions</a>
            <ul>
              <li><a href="#services" class="a-services">Services</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Contact Us</a>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </li>
        </ul>
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
        <ul slot="socialMedia">
          <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
          <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
          <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
        </ul>
        <p slot="copyright">Copyright 2022 Superflows</p>
        <div slot="content">
        </div>
      </sf-nav>
      `) as SfNav);

    await el.updateComplete;

    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
  });

  // Routing page found

  // Click simple main menu
  const aboutA = el.shadowRoot!.querySelectorAll('.a-about')[1]!;
  aboutA.dispatchEvent(clickEvent);
  await el.updateComplete;

  //await new Promise((r) => setTimeout(r, TIMEOUT));

  assert.ok(el.shadowRoot!.children[2].outerHTML.indexOf('display: none;') >= 0); 

  });

  test('Notifications all read', async () => {

    const el = (await fixture(html`
      <sf-nav >
        <h2 slot="brandName"><a href="#home" >SuperTester</a></h2>
        <a slot="brandImage" href="#home" ><img alt="logo" src="https://superflows.dev/img/superflows_gray_transparent_200.png" /></a>
        <ul slot="mainMenu">
          <li><a href="#about" class="a-about">About</a></li>
          <li class="li-solutions">
            <a href="javascript:void(0);" class="a-solutions">Solutions</a>
            <ul>
              <li><a href="#services" class="a-services">Services</a></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Contact Us</a>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </li>
        </ul>
        <ul slot="readNotifications">
          <li><a href="#notification/4"><h3>Sonali Joshi</h3><p>mentioned you in a comment</p><div>1 day ago</div></a></li>
          <li><a href="#notification/5"><h3>Rahim Ahmed</h3><p>reacted to your blog post</p><div>2 days ago</div></a></li>
          <li><a href="#notification/6"><h3>John Bolton</h3><p>replied to a thread that you posted in</p><div>1 month ago</div></a></li>
        </ul>
        <a slot="notificationsList" href="#notifications">View All</a>
        <ul slot="socialMedia">
          <li><a href="https://facebook.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/facebook-black_round.png" /></a></li>
          <li><a href="https://twitter.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/twitter_black_round.png" /></a></li>
          <li><a href="https://youtube.com"><img src="https://superflows-images.s3.ap-south-1.amazonaws.com/youtube_black_round.png" /></a></li>
        </ul>
        <p slot="copyright">Copyright 2022 Superflows</p>
        <div slot="content">
        </div>
      </sf-nav>
      `) as SfNav);

      await el.updateComplete;

      // Click simple main menu
      const badge = el.shadowRoot!.querySelectorAll('.sfNavDivNotifBadge')[0]!;

      assert.ok(badge.outerHTML.indexOf('display: none;') >= 0); 

  });

  // test('renders with default values', async () => {
  //   const el = await fixture(html`<sf-nav></sf-nav>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('renders with a set name', async () => {
  //   const el = await fixture(html`<sf-nav name="Test"></sf-nav>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, Test!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('handles a click', async () => {
  //   const el = (await fixture(html`<sf-nav></sf-nav>`)) as SfNav;
  //   const button = el.shadowRoot!.querySelector('button')!;
  //   button.click();
  //   await el.updateComplete;
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 1</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('styling applied', async () => {
  //   const el = (await fixture(html`<sf-nav></sf-nav>`)) as SfNav;
  //   await el.updateComplete;
  //   assert.equal(getComputedStyle(el).paddingTop, '16px');
  // });
});


