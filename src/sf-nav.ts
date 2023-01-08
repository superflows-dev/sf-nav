/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html, css, PropertyValueMap} from 'lit';
import {customElement, query, queryAssignedElements} from 'lit/decorators.js';

import DownloadFile from './downloadFile';

/**
 * SfNav element.
 *
 * @fires searchClick - When the user presses the enter key iin the search input
 * @slot brandName - Brand name
 * @slot brandImage - Brand image
 * @slot mainMenu - Main menu
 * @slot socialMedia - Social media icons list
 * @slot copyright - Copyright notice
 * * @slot content - Content
 * @csspart button - The button
 */
@customElement('sf-nav')
export class SfNav extends LitElement {


  eventSearchClick = 'searchClick';
  constPositionSearchToggle = 'sfNavSearchToggle';
  constPositionSearchClose = 'sfNavDivSearchClose';
  constPositionLeftToggle = 'sfNavToggleLeft';
  constPositionLeftToggleLeaf = 'sfNavToggleLeftLeaf';
  constDefaultMenu = [{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}, {caption: "Resources", link: "resources"}], [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}, {caption: "Facebook", link: "facebook"}]];
  constBrandName = "Superflows";
  constBrandImage = "https://superflows.dev/img/superflows_gray_transparent_200.png";

  static override styles = css`
    
    .sfNavC {
      background-color: var(--nav-background-color, #fff);
      color: var(--nav-color, #000);
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
      background-color: var(--menu-background-color, #fff);
      color: var(--menu-color, #000);
      cursor: pointer;
    }

    #mainMenu > ul {
      display: flex;
      list-style: none;
      margin-left: 20px;
      margin-right: 20px;
      color: var(--menu-color, #000);
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
      background-color: var(--menu-background-color, #fff);
      color: var(--menu-color, #000);
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
      background-color: var(--menu-background-color, #fff);
      color: var(--menu-color, #000);
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
      background-color: var(--menu-background-color, #fff);
      align-items: center;
    }

    .sfNavDivSearchClose {
      margin-left: 10px;
      font-size: 130%;
      line-height: 1;
      padding-bottom: 5px;
      padding-left: 5px;
      padding-right: 5px;
      cursor: pointer;
    }

    .sfNavInputSearch {

      width: 250px;
      padding-top:5px;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 5px;
    }

    .sfNav404 {
      display: none;
      background-color: #efefef;
      margin: 20px;
      border: dashed 2px gray;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 40px;
    }

    footer {
      background-color: var(--background-color-footer, #fff);
      color: var(--color-footer, #000);
      padding-top: 50px;
      padding-bottom: 50px;
    }

    footer > ::slotted(p) {
      text-align: center;
    }

    .sfNavDivFooterContainer {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
    }

    .sfNavDivFooterLeftContainer{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      flex-direction: column;
    }

    .sfNavDivFooterLeftContainer > ul {
      list-style: none;
      display: flex;
      margin-left: 0px;
      padding-left: 0px;
      margin-bottom: 30px;
    }

    .sfNavDivFooterLeftContainer > ul > li > a > img {
      height: 30px;
      margin-right: 10px;
    }

    .sfNavDivFooterBrandContainer{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

    }

    .sfNavDivFooterBrandContainer > a{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .sfNavDivFooterBrandContainer > a > img{
      display: flex;
      justify-content: flex-start;
      height: 130px;
    }

    .sfNavDivFooterBrandContainer > h2{
      margin-top: 30px;
      margin-bottom: 20px;
      line-height: 1.0;
      font-size: 200%;
    }

    .sfNavDivFooterMenuContainer{
    }

    .sfNavDivFooterMenuContainer > ul{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 0px;
      padding-right: 0px;
    }

    .sfNavDivFooterMenuContainer li{
      width: 300px;
      cursor: pointer;
      text-align: center;
    }

    .sfNavDivFooterMenuContainer ul{
      list-style: none;
    }

    .sfNavDivFooterMenuContainer > ul {
      margin-top: 0px;
    }

    .sfNavDivFooterMenuContainer > ul > li > a {
      font-weight: 600;
      font-size: 120%;
    }
    
    .sfNavDivFooterMenuContainer > ul > li > ul {
      margin-left: 0px;
      padding-left: 0px;
    }

    .sfNavDivFooterMenuContainer > ul > li {
      margin-bottom: 30px;
    }
    
    .sfNavDivFooterMenuContainer > ul > li > ul > li {
      margin-top: 15px;
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

  @query('.sfNavC')
  _sfNavC: any;

  @query('.sfNavDivToggleContainer')
  _sfNavDivToggleContainer: any;

  @query('.sfNavDivToggleContainer > ul')
  _sfNavLeftMenu: any;

  @query('#mainMenu')
  _sfNavMainMenu: any;

  @query('.sfNavDivSearch')
  _sfNavDivSearch: any;

  @query('.sfNavDivSearchClose')
  _sfNavDivSearchClose: any;

  @query('.sfNav404')
  _sfNav404: any;

  @query('.sfNavDivFooterContainer')
  _sfNavDivFooterContainer: any;

  @query('.sfNavDivFooterBrandContainer')
  _sfNavDivFooterBrandContainer: any;

  @query('.sfNavDivFooterLeftContainer')
  _sfNavDivFooterLeftContainer: any;

  @query('.sfNavDivFooterMenuContainer')
  _sfNavDivFooterMenuContainer: any;

  @queryAssignedElements({slot: 'mainMenu'})
  _sfNavSlottedUl: any;

  @queryAssignedElements({slot: 'brandName'})
  _sfNavSlottedBrandName: any;

  @queryAssignedElements({slot: 'brandImage'})
  _sfNavSlottedBrandImage: any;

  @queryAssignedElements({slot: 'socialMedia'})
  _sfNavSlottedSocialMedia: any;

  @queryAssignedElements({slot: 'content'})
  _content: any;

  // @query('.sfNavContent')
  // _sfNavContent: any;


  onKeyUp = (event: any, position: any) => {
    if(event.key == "Enter") {
      this.dispatchMyEvent(position);
    }
  }

  dispatchMyEvent = (ev: string) => {

    if(ev == this.eventSearchClick) {
      const event = new Event(this.eventSearchClick, {bubbles: true, composed: true});
      this.dispatchEvent(event);
    }

  }

  resetMenu = () => {

    // reset overlay leaf
    this._sfNavMainMenu.children[0].style.display = 'none';

    for(let i = 0; i < this._sfNavMainMenu.children[1].children.length; i++) {
      if(this._sfNavMainMenu.children[1].children[i].getElementsByTagName('ul').length > 0) {
        this._sfNavMainMenu.children[1].children[i].children[1].style.display = 'none';
      }
    }
  }

  hideLeftMenuElement(element: any) {

    const elementUl = element.getElementsByTagName('ul')[0];
    elementUl.style.display = 'none';
    element.style.color = 'inherit';
    element.style.backgroundColor = 'inherit';

  }

  hideAllLeftMenuElements = () => {

    for(let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
      const child = this._sfNavLeftMenu.children[i]
      if(child.getElementsByTagName('ul').length > 0) {
        this.hideLeftMenuElement(child);
      }
    }

  }

  showLeftMenuElement(element: any) {

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
  
  toggleSearch = () => {

    const elementDivs = this._sfNavDivSearch.getElementsByTagName('div');
    if(elementDivs[1].style.display == 'flex') {
      elementDivs[0].style.display = 'none';
      elementDivs[1].style.display = 'none';
    } else {

      elementDivs[0].style.display = 'block';
      elementDivs[1].style.display = 'flex';

      let old_element = elementDivs[0];
      var new_element = elementDivs[0].cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element)
      new_element.addEventListener('click', (ev: any) => {
        const parentNode = ev.target.parentNode;
        const elementDivs = parentNode.getElementsByTagName('div');
        elementDivs[0].style.display = 'none';
        elementDivs[1].style.display = 'none';
      });

    }
  }

  toggleLeftMenu = () => {
    if(this._sfNavDivToggleContainer.children[2].style.display == 'block') {
      this.hideAllLeftMenuElements();
      this._sfNavDivToggleContainer.children[1].style.display = 'none';
      this._sfNavDivToggleContainer.children[2].style.display = 'none';
    } else {
      this._sfNavDivToggleContainer.children[1].style.display = 'block';
      this._sfNavDivToggleContainer.children[2].style.display = 'block';
    }

  }

  toggleMainMenu = (element: any) => {

    const elementUl = element.getElementsByTagName('ul')[0];
    if(elementUl != null) {
      if(elementUl.style.display == 'block') {
        // hideLeftMenuElement(element);
        this.hideAllLeftMenuElements();
        this._sfNavDivToggleContainer.children[1].style.display = 'none';
        this._sfNavDivToggleContainer.children[2].style.display = 'none';
      } else {
        this.hideAllLeftMenuElements();
        this.showLeftMenuElement(element);
      }  
    } 
    // else {
    //   this.hideAllLeftMenuElements();
    //   this._sfNavDivToggleContainer.children[1].style.display = 'none';
    //   this._sfNavDivToggleContainer.children[2].style.display = 'none';
    // }

  }

  onToggle = (e: any) => {

    if(e.target.className == this.constPositionLeftToggle || e.target.className == this.constPositionLeftToggleLeaf) {
      this.toggleLeftMenu();
      return;
    }

    if(e.currentTarget.tagName.toLowerCase() == "li") {

      const element = e.currentTarget;
      this.toggleMainMenu(element);
      
    }
    
    if(e.target.className == this.constPositionSearchToggle || e.target.className == this.constPositionSearchClose) {

      this.toggleSearch();
      return;

    }
    
  }

  decorateSlots = () => {

    const decorateBrandInfo = () => {
      
      if(this._sfNavSlottedBrandName.length > 0) {
        this._sfNavSlottedBrandName[0].children[0].style.textDecoration = 'none';
        this._sfNavSlottedBrandName[0].children[0].style.color = 'inherit';
      }

      if(this._sfNavSlottedBrandImage.length > 0) {
        this._sfNavSlottedBrandImage[0].children[0].style.height = '30px';
        this._sfNavSlottedBrandImage[0].children[0].style.marginRight = '15px';
      }

    }

    const decorateLeftMenu = () => {

      if(this._sfNavLeftMenu != null) {
        for(let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
    
          const child = this._sfNavLeftMenu.children[i]
          if(child.getElementsByTagName('ul').length > 0) {
            const innerHTML = child.getElementsByTagName('a')[0].innerHTML;
            child.getElementsByTagName('a')[0].innerHTML = innerHTML + "&nbsp;<span style=\"font-size: 60%\">▶</span>"
            // child.getElementsByTagName('a')[0].style.display = 'flex';
            // child.getElementsByTagName('a')[0].style.alignItems = 'center';
            // child.getElementsByTagName('a')[0].style.justifyContent = 'space-between';
          }

        }
      }

    }

    const decorateMainMenu = () => {

      const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
      for(var i = 0; i < elementsLi.length; i++) {

        const elementsUl = elementsLi[i].getElementsByTagName('ul');

        if(elementsUl.length > 0) {

          const innerHTML = elementsLi[i].getElementsByTagName('a')[0].innerHTML;
          elementsLi[i].getElementsByTagName('a')[0].style.display = 'flex';
          elementsLi[i].getElementsByTagName('a')[0].style.alignItems = 'center';
          elementsLi[i].getElementsByTagName('a')[0].innerHTML = innerHTML + "&nbsp;<span style=\"font-size: 60%\">▼</span>"

        }

      }

    }

    decorateLeftMenu();
    decorateMainMenu();
    decorateBrandInfo();

  }

  copySlots = () => {

    // copy menu to main menu div
    if(this._sfNavSlottedUl[0] != null) {
      const html = this._sfNavSlottedUl[0].outerHTML;
      this._sfNavDivToggleContainer.insertAdjacentHTML('beforeend', html);
      this._sfNavMainMenu.innerHTML = '<div class="sfNavToggleLeftLeaf"></div>';
      this._sfNavMainMenu.insertAdjacentHTML('beforeend', html);
    }


    // Create Brand container in footer
    if(this._sfNavDivFooterBrandContainer != null) {
      let tempHtml = "";
      if(this._sfNavSlottedBrandImage[0] != null) {
        tempHtml += this._sfNavSlottedBrandImage[0].outerHTML;
      }
      if(this._sfNavSlottedBrandName[0] != null) {
        tempHtml += this._sfNavSlottedBrandName[0].outerHTML;
      }
      this._sfNavDivFooterBrandContainer.innerHTML = tempHtml;
    }

    // Create social media in footer
    if(this._sfNavSlottedSocialMedia[0] != null) {
      if(this._sfNavDivFooterLeftContainer != null) {
        const html = this._sfNavSlottedSocialMedia[0].outerHTML;
        this._sfNavDivFooterLeftContainer.innerHTML = this._sfNavDivFooterLeftContainer.innerHTML + html;
      }
    }

    if(this._sfNavDivFooterMenuContainer != null) {
      if(this._sfNavSlottedUl[0] != null) {
        const html = this._sfNavSlottedUl[0].outerHTML;
        this._sfNavDivFooterMenuContainer.innerHTML = html;
      }
    }

    if(this._sfNavSlottedUl[0] != null) {
      this._sfNavSlottedUl[0].outerHTML = '';
    }

    if(this._sfNavSlottedSocialMedia[0] != null) {
      this._sfNavSlottedSocialMedia[0].outerHTML = '';
    }

  }

  getHome = () => {
    let home = "";

    if(this._sfNavSlottedBrandImage.length > 0) {
      home = this._sfNavSlottedBrandImage[0].href.split('#')[1];
    }
    if(this._sfNavSlottedBrandName.length > 0) {
      home = this._sfNavSlottedBrandName[0].children[0].href.split('#')[1];
    }

    return home;
  }

  processRoute = async () => {

    const hashRef = window.location.href.split('#');
    const routePath = (window.location.hash.length > 0 ? hashRef[1] : this.getHome()) + '.html'; 
    const result = await DownloadFile.downloadFile(routePath);
    if(result.status === 404) {
      this._content[0].innerHTML = '';
      this._sfNav404.children[0].innerHTML = "Could not find " + routePath;
      this._sfNav404.style.display = 'block';
    } else {
        this._sfNav404.style.display = 'none';
        var allText = result.text;
        this._content[0].innerHTML = allText;
    
    }

  }

  setupRouting = () => {
    window.addEventListener('popstate', () => {
      if(window.location.hash.length > 0) {
        this.resetMenu();
      }
      this.processRoute();
    });
  }

  initListeners = () => {

    const hideAllUls = () => {

      const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
      for(var i = 0; i < elementsLi.length; i++) {

        const elementsUl = elementsLi[i].getElementsByTagName('ul');
        if(elementsUl.length > 0) {
          elementsUl[0].style.display = 'none';
          const innerHTML = elementsLi[i].getElementsByTagName('a')[0].innerHTML;
          elementsLi[i].getElementsByTagName('a')[0].innerHTML = innerHTML.replace('▲', '▼');
        }

      }

    }

    const assignToggleToLeftMenu = ()=> {

      if(this._sfNavDivToggleContainer.children != null && this._sfNavLeftMenu != null) {

        this._sfNavDivToggleContainer.children[0].addEventListener("keypress", this.onToggle);
        this._sfNavDivToggleContainer.children[0].addEventListener("click", this.onToggle);
        this._sfNavDivToggleContainer.children[1].addEventListener("click", this.onToggle);
  
        for(let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
  
          const child = this._sfNavLeftMenu.children[i]
          child.addEventListener('click', this.onToggle);
  
        }
  
      }
    } 
    
    const assignMainMenu = () => {

      const elementsLi = this._sfNavMainMenu.getElementsByTagName('li');
      for(var i = 0; i < elementsLi.length; i++) {

        const elementsUl = elementsLi[i].getElementsByTagName('ul');
        if(elementsUl.length > 0) {

          elementsLi[i].getElementsByTagName('a')[0].addEventListener('click', (e: any) => {

            hideAllUls();

            const innerHTML = e.target.innerHTML;
            e.target.innerHTML = innerHTML.replace('▼', '▲');
            
            const elementUl = e.target.parentNode.getElementsByTagName('ul')[0];
            elementUl.style.display = 'block';
            e.target.parentNode.parentNode.parentNode.children[0].style.display = 'block';

            // clone to remove event listeners
            let old_element = e.target.parentNode.parentNode.parentNode.children[0];
            var new_element = e.target.parentNode.parentNode.parentNode.children[0].cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element)

            // add listener on overlay leaf
            e.target.parentNode.parentNode.parentNode.children[0].addEventListener('click', (ev: any) => {
              ev.target.style.display = 'none';
              hideAllUls();
            })
            

          })
        } else {

          // clone to remove event listeners
          let old_element = elementsLi[i];
          var new_element = elementsLi[i].cloneNode(true);
          old_element.parentNode.replaceChild(new_element, old_element)

          new_element.getElementsByTagName('a')[0].addEventListener('click', (ev: any) => {

            if(ev.target.parentNode.parentNode.outerHTML.indexOf('mainMenu') >= 0) {
              hideAllUls();
            } else {
              ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].style.display = 'none';
              hideAllUls();
            }

          });
          
        }

      }
      
    }

    const assignSearch = () => {

      const elementH1 = this._sfNavDivSearch.getElementsByTagName('h1')[0];
      elementH1.addEventListener('click', this.onToggle);
      elementH1.addEventListener('keypress', this.onToggle);

      this._sfNavDivSearchClose.addEventListener('click', this.onToggle);
      this._sfNavDivSearchClose.addEventListener('keypress', this.onToggle);

    }

    assignToggleToLeftMenu();
    assignMainMenu();
    assignSearch();

  }

  constructor() {
    super();
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.copySlots();
    this.decorateSlots();
    this.initListeners();
    this.setupRouting();
    this.processRoute();
  }
  
  override connectedCallback() {
    super.connectedCallback()
  }

  override render() {
    return html`
      <nav class="sfNavC" style="position: relative">
        <div class="sfNavDivLeftContainer">
          <div class="sfNavDivToggleContainer">
            <h1 tabindex="0" class="sfNavToggleLeft">☰</h1>
            <div class="sfNavToggleLeftLeaf"></div>
          </div>
          <slot name="brandImage"></slot>
          <slot name="brandName"></slot>
          <div id="mainMenu"></div>
          <slot name="mainMenu"></slot>
        </div>
        <div class="sfNavDivRightContainer">
          <div class="sfNavDivSearch">
            <h1 tabindex="0" class="sfNavSearchToggle">🔍</h1>
            <div class="sfNavToggleRightLeaf"></div>
            <div class="sfNavDivSearchDropdown">
              <input class="sfNavInputSearch" type="text" placeholder="Search" @keyup=${(ev:any) => {this.onKeyUp(ev, this.eventSearchClick)}} />
              <div tabindex="0" class="sfNavDivSearchClose">⨯</div>
            </div>
          </div>
        </div>
      </nav>
      <slot name="content">

      </slot>
      <div class="sfNav404">
        <h2>Nothing here!</h2>
        <h3>Check your path please...</h3>
      </div>
      <footer>
        <div class="sfNavDivFooterContainer">
          <div class="sfNavDivFooterLeftContainer">
            <div class="sfNavDivFooterBrandContainer">
            </div>
          </div>
          <div class="sfNavDivFooterMenuContainer">

          </div>
        </div>
        <br />
        <slot name="socialMedia"></slot>
        <slot name="copyright"></slot>
      </footer>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'sf-nav': SfNav;
  }
}
