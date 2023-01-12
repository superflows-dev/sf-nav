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

const htmlContent = html`
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
        <a slot="cta" href="#login">Sign In</a>
        <!-- Profile picture -->
        <img alt="profile" slot="profilePicture" src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
        <!-- Set the profile menu -->
        <ul slot="profileMenu">
          <li><a href="#about1">About</a></li>
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
        <div slot="content">
        </div>
      </sf-nav>
      `;

var clickEvent = new MouseEvent("click", {
  "view": window,
  "bubbles": true,
  "cancelable": false
});


suite('sf-nav > profile menu', () => {

  test('is defined', () => {
    const el = document.createElement('sf-nav');
    assert.instanceOf(el, SfNav);
  });
    
  test('profile menu', async () => {

    const el = (await fixture(htmlContent) as SfNav);

    // Open profile menu
    const profileToggle = el.shadowRoot!.querySelectorAll('.sfNavDivProfileToggle')[0]!;
    profileToggle.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "block");

    // Click on leaf
    const toggleLeaf = el.shadowRoot!.querySelectorAll('.sfNavDivProfile')[0]!.children[1];
    toggleLeaf.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "none");

    // Open profile menu
    profileToggle.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "block");

    // Click on solutions

    const solutions = el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]!.children[0].children[1];
    solutions.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(solutions.outerHTML.indexOf('inherit') < 0);

    // Again click on solutions

    solutions.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(solutions.outerHTML.indexOf('inherit') >= 0);

    // Again click on solutions to open

    solutions.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(solutions.outerHTML.indexOf('inherit') < 0);

    // Click on contacts

    const contacts = el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]!.children[0].children[2];
    contacts.dispatchEvent(clickEvent);
    await el.updateComplete;

    assert.ok(solutions.outerHTML.indexOf('inherit') >= 0);


    // // Click on services

    // const services = el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]!.children[0].children[1].children[1].children[0].children[0];

    // services.dispatchEvent(clickEvent);
    // await el.updateComplete;

    // console.log(services);
    // console.log(window.location.href);

    // assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "none");

    // // Open profile menu
    // profileToggle.dispatchEvent(clickEvent);
    // await el.updateComplete;

    // assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "block");

    // // Click on about

    // const about = el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]!.children[0].children[0].children[0];
    // console.log('clicking on',about)
    // about.dispatchEvent(clickEvent);
    // await new Promise((r) => setTimeout(r,3000));

    // assert.ok((el.shadowRoot!.querySelectorAll('.sfNavDivProfileDropdown')[0]! as HTMLElement).style.display == "none");

    

  });

});
