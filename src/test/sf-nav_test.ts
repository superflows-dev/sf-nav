/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {SfNav} from '../sf-nav.js';

import {fixture, assert} from '@open-wc/testing';
// import {assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('sf-nav', () => {

  test('is defined', () => {
    const el = document.createElement('sf-nav');
    assert.instanceOf(el, SfNav);
  });

  test('basic render > check sanity > open left menu > open left submenu > close left submenu > close left menu > open main menu > close main menu', async () => {
    const el = (await fixture(html`
      <sf-nav >
      <h2 slot="brandName">SuperTester</h2>
      <img slot="brandImage" src="https://superflows.dev/img/superflows_gray_transparent_200.png" />
      <ul slot="mainMenu">
        <li><a href="#about">About</a></li>
        <li class="li-solutions">
          <a href="#" class="a-solutions">Solutions</a>
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
      `) as SfNav);

    await el.updateComplete;

    // Check sanity

    const sfNavC = el.shadowRoot!.querySelectorAll('.sfNavC')[0]!;
    assert.ok(sfNavC.innerHTML.indexOf('▶') >= 0); 

    // Open left menu

    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    const sfNavToggleLeft = el.shadowRoot!.querySelectorAll('.sfNavToggleLeft')[0]!;
    sfNavToggleLeft.dispatchEvent(clickEvent)
    await el.updateComplete;

    const sfNavToggleLeftLeaf = el.shadowRoot!.querySelectorAll('.sfNavToggleLeftLeaf')[0]!;
    assert.ok(sfNavToggleLeftLeaf.outerHTML.indexOf('display: block;') >= 0); 

    // Open left submenu

    const liSolutions = el.shadowRoot!.querySelectorAll('.li-solutions')[0]!;
    liSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;

    assert.ok(liSolutions.outerHTML.indexOf('color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);') >= 0); 

    // Close left submenu

    liSolutions.dispatchEvent(clickEvent)
    await el.updateComplete;
    assert.ok(liSolutions.outerHTML.indexOf('color: inherit; background-color: inherit;') >= 0); 

    // Close left menu

    sfNavToggleLeftLeaf.dispatchEvent(clickEvent)
    await el.updateComplete;
    assert.ok(sfNavToggleLeftLeaf.outerHTML.indexOf('display: none;') >= 0); 

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
