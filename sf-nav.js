/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';
/**
 * SfNav element.
 *
 * @fires searchClick - When the user presses the enter key iin the search input
 * @slot brandName - Brand name
 * @slot brandImage - Brand image
 * @slot mainMenu - Main menu
 * @csspart button - The button
 */
let SfNav = class SfNav extends LitElement {
    constructor() {
        super();
        this.eventSearchClick = 'searchClick';
        this.constPositionLeftMenu = '';
        this.constPositionLeftToggle = 'sfNavToggleLeft';
        this.constPositionLeftToggleLeaf = 'sfNavToggleLeftLeaf';
        this.constDefaultMenu = [{ caption: "About", link: "about" }, [{ caption: "Solutions", link: "solutions" }, { caption: "Products", link: "products" }, { caption: "Services", link: "services" }, { caption: "Resources", link: "resources" }], [{ caption: "Contact", link: "contact" }, { caption: 'Instagram', link: "instagram" }, { caption: "Facebook", link: "facebook" }]];
        this.constBrandName = "Superflows";
        this.constBrandImage = "https://superflows.dev/img/superflows_gray_transparent_200.png";
        this.onKeyUp = (event, position) => {
            if (event.key == "Enter") {
                this.dispatchMyEvent(position);
            }
        };
        this.dispatchMyEvent = (ev) => {
            if (ev == this.eventSearchClick) {
                const event = new Event(this.eventSearchClick, { bubbles: true, composed: true });
                this.dispatchEvent(event);
            }
        };
        this.onToggle = (e) => {
            const hideAllLeftMenuElements = () => {
                for (let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
                    const child = this._sfNavLeftMenu.children[i];
                    if (child.getElementsByTagName('ul').length > 0) {
                        hideLeftMenuElement(child);
                    }
                }
            };
            function showLeftMenuElement(element) {
                let parentBackgroundColor = null;
                let parentColor = null;
                //if(element.parentNode.style.backgroundColor == "") {
                parentBackgroundColor = window.getComputedStyle(element.parentNode).backgroundColor;
                // } else {
                //   parentBackgroundColor = element.parentNode.style.backgroundColor;
                // }
                //if(element.parentNode.style.color == "") {
                parentColor = window.getComputedStyle(element.parentNode).color;
                // } else {
                //   parentColor = element.parentNode.style.color;
                // }
                const elementUl = element.getElementsByTagName('ul')[0];
                elementUl.style.display = 'block';
                element.style.color = parentBackgroundColor;
                element.style.backgroundColor = parentColor;
            }
            function hideLeftMenuElement(element) {
                const elementUl = element.getElementsByTagName('ul')[0];
                elementUl.style.display = 'none';
                element.style.color = 'inherit';
                element.style.backgroundColor = 'inherit';
            }
            if (e.target.className == this.constPositionLeftToggle || e.target.className == this.constPositionLeftToggleLeaf) {
                if (this._sfNavDivToggleContainer.children[2].style.display == 'block') {
                    hideAllLeftMenuElements();
                    this._sfNavDivToggleContainer.children[1].style.display = 'none';
                    this._sfNavDivToggleContainer.children[2].style.display = 'none';
                }
                else {
                    this._sfNavDivToggleContainer.children[1].style.display = 'block';
                    this._sfNavDivToggleContainer.children[2].style.display = 'block';
                }
                return;
            }
            if (e.currentTarget.tagName.toLowerCase() == "li") {
                const element = e.currentTarget;
                const elementUl = element.getElementsByTagName('ul')[0];
                if (elementUl.style.display == 'block') {
                    hideLeftMenuElement(element);
                }
                else {
                    hideAllLeftMenuElements();
                    showLeftMenuElement(element);
                }
            }
        };
        this.decorateSlots = () => {
            const decorateLeftMenu = () => {
                if (this._sfNavLeftMenu != null) {
                    for (let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
                        const child = this._sfNavLeftMenu.children[i];
                        if (child.getElementsByTagName('ul').length > 0) {
                            const innerHTML = child.getElementsByTagName('a')[0].innerHTML;
                            child.getElementsByTagName('a')[0].innerHTML = innerHTML + "&nbsp;<span style=\"font-size: 60%\">▶</span>";
                            // child.getElementsByTagName('a')[0].style.display = 'flex';
                            // child.getElementsByTagName('a')[0].style.alignItems = 'center';
                            // child.getElementsByTagName('a')[0].style.justifyContent = 'space-between';
                        }
                    }
                }
            };
            const decorateMainMenu = () => {
                const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
                for (var i = 0; i < elementsLi.length; i++) {
                    const elementsUl = elementsLi[i].getElementsByTagName('ul');
                    if (elementsUl.length > 0) {
                        const innerHTML = elementsLi[i].getElementsByTagName('a')[0].innerHTML;
                        elementsLi[i].getElementsByTagName('a')[0].style.display = 'flex';
                        elementsLi[i].getElementsByTagName('a')[0].style.alignItems = 'center';
                        elementsLi[i].getElementsByTagName('a')[0].innerHTML = innerHTML + "&nbsp;<span style=\"font-size: 60%\">▼</span>";
                    }
                }
            };
            decorateLeftMenu();
            decorateMainMenu();
        };
        this.copySlots = () => {
            if (this._sfNavSlottedUl[0] != null) {
                const html = this._sfNavSlottedUl[0].outerHTML;
                this._sfNavDivToggleContainer.insertAdjacentHTML('beforeend', html);
                this._sfNavMainMenu.innerHTML = '<div class="sfNavToggleLeftLeaf"></div>';
                this._sfNavMainMenu.insertAdjacentHTML('beforeend', html);
                this._sfNavSlottedUl[0].outerHTML = '';
            }
        };
        this.initListeners = () => {
            const hideAllUls = () => {
                const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
                for (var i = 0; i < elementsLi.length; i++) {
                    const elementsUl = elementsLi[i].getElementsByTagName('ul');
                    if (elementsUl.length > 0) {
                        elementsUl[0].style.display = 'none';
                        const innerHTML = elementsLi[i].getElementsByTagName('a')[0].innerHTML;
                        elementsLi[i].getElementsByTagName('a')[0].innerHTML = innerHTML.replace('▲', '▼');
                    }
                }
            };
            const assignToggleToLeftMenu = () => {
                if (this._sfNavDivToggleContainer.children != null && this._sfNavLeftMenu != null) {
                    this._sfNavDivToggleContainer.children[0].addEventListener("click", this.onToggle);
                    this._sfNavDivToggleContainer.children[1].addEventListener("click", this.onToggle);
                    for (let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
                        const child = this._sfNavLeftMenu.children[i];
                        if (child.getElementsByTagName('ul').length > 0) {
                            child.addEventListener('click', this.onToggle);
                        }
                    }
                }
            };
            const assignMainMenu = () => {
                const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
                for (var i = 0; i < elementsLi.length; i++) {
                    const elementsUl = elementsLi[i].getElementsByTagName('ul');
                    if (elementsUl.length > 0) {
                        elementsLi[i].getElementsByTagName('a')[0].addEventListener('click', (e) => {
                            hideAllUls();
                            const innerHTML = e.target.innerHTML;
                            e.target.innerHTML = innerHTML.replace('▼', '▲');
                            const elementUl = e.target.parentNode.getElementsByTagName('ul')[0];
                            elementUl.style.display = 'block';
                            e.target.parentNode.parentNode.parentNode.children[0].style.display = 'block';
                            // clone to remove event listeners
                            let old_element = e.target.parentNode.parentNode.parentNode.children[0];
                            var new_element = e.target.parentNode.parentNode.parentNode.children[0].cloneNode(true);
                            old_element.parentNode.replaceChild(new_element, old_element);
                            // add listener on overlay leaf
                            e.target.parentNode.parentNode.parentNode.children[0].addEventListener('click', (ev) => {
                                ev.target.style.display = 'none';
                                hideAllUls();
                            });
                        });
                    }
                }
            };
            const assignSearch = () => {
                const elementH1 = this._sfNavDivSearch.getElementsByTagName('h1')[0];
                elementH1.addEventListener('click', (ev) => {
                    const parentNode = ev.target.parentNode;
                    const elementDivs = parentNode.getElementsByTagName('div');
                    elementDivs[0].style.display = 'block';
                    elementDivs[1].style.display = 'block';
                    let old_element = elementDivs[0];
                    var new_element = elementDivs[0].cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    new_element.addEventListener('click', (ev) => {
                        const parentNode = ev.target.parentNode;
                        const elementDivs = parentNode.getElementsByTagName('div');
                        elementDivs[0].style.display = 'none';
                        elementDivs[1].style.display = 'none';
                    });
                });
            };
            assignToggleToLeftMenu();
            assignMainMenu();
            assignSearch();
            // screen resize listener
            // window.addEventListener('resize', () => {
            //   assignToggleToLeftMenu();
            //   assignMainMenu();
            // }, true);
        };
    }
    firstUpdated(_changedProperties) {
        this.copySlots();
        this.decorateSlots();
        this.initListeners();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <nav class="sfNavC" style="position: relative">
        <div class="sfNavDivLeftContainer">
          <div class="sfNavDivToggleContainer">
            <h1 class="sfNavToggleLeft">☰</h1>
            <div class="sfNavToggleLeftLeaf"></div>
          </div>
          <slot name="brandImage"></slot>
          <slot name="brandName"></slot>
          <div id="mainMenu"></div>
          <slot name="mainMenu"></slot>
        </div>
        <div class="sfNavDivRightContainer">
          <div class="sfNavDivSearch">
            <h1>🔍</h1>
            <div class="sfNavToggleRightLeaf"></div>
            <div class="sfNavDivSearchDropdown">
              <input class="sfNavInputSearch" type="text" placeholder="Search" @keyup=${(ev) => { this.onKeyUp(ev, this.eventSearchClick); }} />
            </div>
          </div>
        </div>
      </nav>
    `;
    }
};
SfNav.styles = css `
    
    .sfNavC {
      background-color: var(--nav-background-color, #444);
      color: var(--nav-color, #fff);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sfNavDivLeftContainer {
      display: flex;
      align-items: center;
    }

    .sfNavDivRightContainer {
      display: flex;
      
    }

    .sfNavDivSearch {
      position: relative;
    }

    .sfNavDivSearch > h1 {
      cursor: pointer;
    }

    .sfNavDivToggleContainer {
      margin-right: 15px;
    }

    .sfNavDivLeftContainer > ::slotted(img) {
      height: 30px;
      margin-right: 15px;
    }

    .sfNavDivLeftContainer > ::slotted(h2) {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    .sfNavDivToggleContainer > ul {
      display: none;
      position: absolute;
      list-style: none;
      left: 0px;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0px;
      padding-right: 0px;
      border-radius: 5px;
      background-color: var(--menu-background-color, #333);
      color: var(--menu-color, #fff);
      cursor: pointer;
    }

    #mainMenu > ul {
      display: flex;
      list-style: none;
      margin-left: 20px;
      margin-right: 20px;
      color: var(--menu-color, #fff);
      cursor: pointer;
    }

    .sfNavDivToggleContainer > ul > li > ul {
      display: none;
      position: absolute;
      left: 100%;
      list-style: none;
      margin-top: -25px;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-left: 1px;
      background-color: var(--menu-background-color, #333);
      color: var(--menu-color, #fff);
      border-radius: 5px;
      cursor: pointer;
    }

    #mainMenu > ul > li > ul {
      display: none;  
      position: absolute;
      list-style: none;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-top: 10px;
      margin-left: -10px;
      background-color: var(--menu-background-color, #333);
      color: var(--menu-color, #fff);
      border-radius: 5px;
      cursor: pointer;
    }

    .sfNavDivToggleContainer li {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;
      border: solid 1px transparent;
      min-width: 100px;
    }

    #mainMenu li {
      padding: 5px;
      border: solid 1px transparent;
      min-width: 100px;
      text-align: center;
    }

    #mainMenu > ul > li:hover > a{
      font-weight: 800;
    }

    #mainMenu > ul > li > ul > li:hover > a{
      font-weight: 800
    }

    .sfNavDivToggleContainer > div {
      display: none;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.05);
    }

    #mainMenu > div {
      display: none;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.05);
    }

    .sfNavToggleRightLeaf {
      display: none;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    
    .sfNavToggleLeft {
      padding-top: 0px;
      padding-bottom: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
    }

    #mainMenu > div {
      display: none;
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.05);
    }

    .sfNavDivSearchDropdown {
      display: none;
      position: absolute;
      right: 0px;
      top: 60px;
      padding-top:10px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      border-radius: 5px;
      background-color: var(--menu-background-color, #333);
    }

    .sfNavInputSearch {

      width: 250px;
      padding-top:5px;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 5px;
    }

    @media (orientation: landscape) {

      .sfNavDivToggleContainer {
        display: none;
      }      

    }

    @media (orientation: portrait) {

      .sfNavMenu {
        display: none;
      }

      .sfNavDivLeftContainer > ::slotted(ul) {
        display: none;
      } 

      #mainMenu {
        display: none;
      }

    }

  `;
__decorate([
    query('.sfNavC')
], SfNav.prototype, "_sfNavC", void 0);
__decorate([
    query('.sfNavDivToggleContainer')
], SfNav.prototype, "_sfNavDivToggleContainer", void 0);
__decorate([
    query('.sfNavDivToggleContainer > ul')
], SfNav.prototype, "_sfNavLeftMenu", void 0);
__decorate([
    queryAssignedElements({ slot: 'mainMenu' })
], SfNav.prototype, "_sfNavSlottedUl", void 0);
__decorate([
    query('#mainMenu')
], SfNav.prototype, "_sfNavMainMenu", void 0);
__decorate([
    query('.sfNavDivSearch')
], SfNav.prototype, "_sfNavDivSearch", void 0);
SfNav = __decorate([
    customElement('sf-nav')
], SfNav);
export { SfNav };
//# sourceMappingURL=sf-nav.js.map