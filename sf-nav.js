/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';
import DownloadFile from './downloadFile';
import RunScripts from './runScripts';
/**
 * SfNav element.
 *
 * @fires searchClick - When the user presses the enter key in the search input
 * @fires routeChange - When user navigates from one page to another
 * @slot unreadNotifications - Unread notifications array
 * @slot readNotifications - Read notifications array
 * @slot notificationsList - Notifications list link
 * @slot brandName - Brand name
 * @slot brandImage - Brand image
 * @slot mainMenu - Main menu
 * @slot socialMedia - Social media icons list
 * @slot copyright - Copyright notice
 * @slot cta - Call to action
 * @slot content - Content
 * @slot profilePicture - Profile picture
 * @slot profileMenu - Profile menu
 * @csspart button - The button
 */
let SfNav = class SfNav extends LitElement {
    constructor() {
        super();
        this.eventSearchClick = 'searchClick';
        this.eventRouteChange = 'routeChange';
        this.constPositionProfileToggle = 'sfNavDivProfileToggle';
        this.constPositionSearchToggle = 'sfNavSearchToggle';
        this.constPositionSearchClose = 'sfNavDivSearchClose';
        this.constPositionNotifToggle = 'sfNavNotifToggle';
        this.constPositionNotifClose = 'sfNavDivNotifClose';
        this.constPositionLeftToggle = 'sfNavToggleLeft';
        this.constPositionLeftToggleLeaf = 'sfNavToggleLeftLeaf';
        this.constDefaultMenu = [{ caption: "About", link: "about" }, [{ caption: "Solutions", link: "solutions" }, { caption: "Products", link: "products" }, { caption: "Services", link: "services" }, { caption: "Resources", link: "resources" }], [{ caption: "Contact", link: "contact" }, { caption: 'Instagram', link: "instagram" }, { caption: "Facebook", link: "facebook" }]];
        this.constBrandName = "Superflows";
        this.constBrandImage = "https://superflows.dev/img/superflows_gray_transparent_200.png";
        // @query('.sfNavContent')
        // _sfNavContent: any;
        this.onKeyUp = (event, position) => {
            if (event.key == "Enter") {
                this.dispatchMyEvent(position);
            }
        };
        this.dispatchMyEvent = (ev, args) => {
            if (ev == this.eventSearchClick) {
                const event = new Event(this.eventSearchClick, { bubbles: true, composed: true });
                this.dispatchEvent(event);
            }
            else if (ev == this.eventRouteChange) {
                const event = new CustomEvent(this.eventRouteChange, { detail: args, bubbles: true, composed: true });
                this.dispatchEvent(event);
            }
        };
        this.resetMenu = () => {
            // reset overlay leaf
            this._sfNavMainMenu.children[0].style.display = 'none';
            for (let i = 0; i < this._sfNavMainMenu.children[1].children.length; i++) {
                if (this._sfNavMainMenu.children[1].children[i].getElementsByTagName('ul').length > 0) {
                    this._sfNavMainMenu.children[1].children[i].children[1].style.display = 'none';
                }
            }
            this.hideProfile();
        };
        // hideProfileMenuElement(element: any) {
        //   const elementUl = element.getElementsByTagName('ul')[0];
        //   elementUl.style.display = 'none';
        //   element.style.color = 'inherit';
        //   element.style.backgroundColor = 'inherit';
        // }
        this.hideAllLeftMenuElements = () => {
            for (let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
                const child = this._sfNavLeftMenu.children[i];
                if (child.getElementsByTagName('ul').length > 0) {
                    this.hideLeftMenuElement(child);
                }
            }
        };
        this.hideAllProfileMenuElements = () => {
            for (let i = 0; i < this._sfNavProfileMenu.children.length; i++) {
                const child = this._sfNavProfileMenu.children[i];
                if (child.getElementsByTagName('ul').length > 0) {
                    this.hideLeftMenuElement(child);
                }
            }
        };
        this.toggleSearch = () => {
            const elementDivs = this._sfNavDivSearch.getElementsByTagName('div');
            if (elementDivs[1].style.display == 'flex') {
                elementDivs[0].style.display = 'none';
                elementDivs[1].style.display = 'none';
            }
            else {
                elementDivs[0].style.display = 'block';
                elementDivs[1].style.display = 'flex';
                let old_element = elementDivs[0];
                var new_element = elementDivs[0].cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);
                new_element.addEventListener('click', (ev) => {
                    const parentNode = ev.target.parentNode;
                    const elementDivs = parentNode.getElementsByTagName('div');
                    elementDivs[0].style.display = 'none';
                    elementDivs[1].style.display = 'none';
                });
            }
        };
        this.toggleNotif = () => {
            const elementDivs = this._sfNavDivNotif.getElementsByTagName('div');
            if (elementDivs[2].style.display == 'flex') {
                elementDivs[1].style.display = 'none';
                elementDivs[2].style.display = 'none';
            }
            else {
                elementDivs[1].style.display = 'block';
                elementDivs[2].style.display = 'flex';
                let old_element = elementDivs[1];
                var new_element = elementDivs[1].cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);
                new_element.addEventListener('click', (ev) => {
                    const parentNode = ev.target.parentNode;
                    const elementDivs = parentNode.getElementsByTagName('div');
                    elementDivs[1].style.display = 'none';
                    elementDivs[2].style.display = 'none';
                });
            }
        };
        this.toggleLeftMenu = () => {
            if (this._sfNavDivToggleContainer.children[2].style.display == 'block') {
                this.hideAllLeftMenuElements();
                this._sfNavDivToggleContainer.children[1].style.display = 'none';
                this._sfNavDivToggleContainer.children[2].style.display = 'none';
            }
            else {
                this._sfNavDivToggleContainer.children[1].style.display = 'block';
                this._sfNavDivToggleContainer.children[2].style.display = 'block';
            }
        };
        this.toggleProfileMenu = (element) => {
            const elementUl = element.getElementsByTagName('ul')[0];
            if (elementUl != null) {
                if (elementUl.style.display == 'block') {
                    this.hideAllProfileMenuElements();
                    this._sfNavDivToggleContainer.children[1].style.display = 'none';
                    this._sfNavDivToggleContainer.children[2].style.display = 'none';
                }
                else {
                    this.hideAllProfileMenuElements();
                    this.showProfileMenuElement(element);
                }
            }
        };
        this.toggleMainMenu = (element) => {
            const elementUl = element.getElementsByTagName('ul')[0];
            if (elementUl != null) {
                if (elementUl.style.display == 'block') {
                    // hideLeftMenuElement(element);
                    this.hideAllLeftMenuElements();
                    this._sfNavDivToggleContainer.children[1].style.display = 'none';
                    this._sfNavDivToggleContainer.children[2].style.display = 'none';
                }
                else {
                    this.hideAllLeftMenuElements();
                    this.showLeftMenuElement(element);
                }
            }
        };
        this.showProfile = () => {
            this._sfNavDivProfile.children[1].style.display = 'block';
            this._sfNavDivProfile.children[2].style.display = 'block';
        };
        this.hideProfile = () => {
            this._sfNavDivProfile.children[1].style.display = 'none';
            this._sfNavDivProfile.children[2].style.display = 'none';
        };
        this.toggleProfile = () => {
            if (this._sfNavDivProfile.children[1].style.display == "block") {
                this.hideProfile();
            }
            else {
                this.showProfile();
            }
        };
        this.onToggle = (e) => {
            if (e.currentTarget.className == this.constPositionProfileToggle || e.currentTarget.className.indexOf('profileLeaf') >= 0) {
                this.toggleProfile();
                return;
            }
            if (e.target.outerHTML.indexOf('sfNavToggleLeft') <= 0 && (e.target.className.indexOf(this.constPositionSearchToggle) >= 0 || e.target.className.indexOf(this.constPositionSearchClose) >= 0)) {
                this.toggleSearch();
                return;
            }
            if (e.target.outerHTML.indexOf('sfNavToggleLeft') <= 0 && (e.target.className == this.constPositionNotifToggle || e.target.className == this.constPositionNotifClose || e.target.parentNode.parentNode.parentNode.outerHTML.indexOf('unreadNotifications') >= 0 || e.target.parentNode.parentNode.parentNode.outerHTML.indexOf('readNotifications') >= 0)) {
                this.toggleNotif();
                return;
            }
            if (e.target.parentNode.parentNode.outerHTML.indexOf('profileMenu') >= 0) {
                this.toggleProfileMenu(e.currentTarget);
                return;
            }
            if (e.target.className == this.constPositionLeftToggle || e.target.className == this.constPositionLeftToggleLeaf || (e.target.parentNode.parentNode.parentNode.outerHTML.indexOf('sfNavDivToggleContainer') >= 0 && e.target.outerHTML.indexOf('void(0)') < 0)) {
                this.toggleLeftMenu();
                return;
            }
            if (e.currentTarget.tagName.toLowerCase() == "li") {
                const element = e.currentTarget;
                this.toggleMainMenu(element);
            }
        };
        this.decorateSlots = () => {
            const decorateBrandInfo = () => {
                if (this._sfNavSlottedBrandName.length > 0) {
                    this._sfNavSlottedBrandName[0].children[0].style.textDecoration = 'none';
                    this._sfNavSlottedBrandName[0].children[0].style.color = 'inherit';
                }
                if (this._sfNavSlottedBrandImage.length > 0) {
                    this._sfNavSlottedBrandImage[0].children[0].style.height = '30px';
                    this._sfNavSlottedBrandImage[0].children[0].style.marginRight = '10px';
                }
            };
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
            const decorateProfileMenu = () => {
                if (this._sfNavProfileMenu != null) {
                    for (let i = 0; i < this._sfNavProfileMenu.children.length; i++) {
                        const child = this._sfNavProfileMenu.children[i];
                        if (child.getElementsByTagName('ul').length > 0) {
                            const innerHTML = child.getElementsByTagName('a')[0].innerHTML;
                            child.getElementsByTagName('a')[0].innerHTML = innerHTML + "&nbsp;<span style=\"font-size: 60%\">▼</span>";
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
            const decorateNotifs = () => {
                if (this._sfNavDivNotifDropdown.innerHTML.indexOf('unread') < 0) {
                    this._sfNavDivNotifBadge.style.display = 'none';
                }
            };
            decorateLeftMenu();
            decorateMainMenu();
            decorateBrandInfo();
            decorateNotifs();
            decorateProfileMenu();
        };
        this.copySlots = () => {
            // copy menu to main menu div
            if (this._sfNavSlottedUl[0] != null) {
                const html = this._sfNavSlottedUl[0].outerHTML;
                this._sfNavDivToggleContainer.insertAdjacentHTML('beforeend', html);
                this._sfNavMainMenu.innerHTML = '<div class="sfNavToggleLeftLeaf"></div>';
                this._sfNavMainMenu.insertAdjacentHTML('beforeend', html);
            }
            // Create Brand container in footer
            if (this._sfNavDivFooterBrandContainer != null) {
                let tempHtml = "";
                if (this._sfNavSlottedBrandImage[0] != null) {
                    tempHtml += this._sfNavSlottedBrandImage[0].outerHTML;
                }
                if (this._sfNavSlottedBrandName[0] != null) {
                    tempHtml += this._sfNavSlottedBrandName[0].outerHTML;
                }
                this._sfNavDivFooterBrandContainer.innerHTML = tempHtml;
            }
            // Create social media in footer
            if (this._sfNavSlottedSocialMedia[0] != null) {
                if (this._sfNavDivFooterLeftContainer != null) {
                    const html = this._sfNavSlottedSocialMedia[0].outerHTML;
                    this._sfNavDivFooterLeftContainer.innerHTML = this._sfNavDivFooterLeftContainer.innerHTML + html;
                }
            }
            // Create notifications
            if (this._sfNavSlottedReadNotifications[0] != null) {
                if (this._sfNavDivNotif != null) {
                    const html = this._sfNavSlottedReadNotifications[0].outerHTML;
                    const currHtml = this._sfNavDivNotif.children[3].innerHTML;
                    this._sfNavDivNotif.children[3].innerHTML = html + currHtml;
                    //this._sfNavDivFooterLeftContainer.innerHTML = this._sfNavDivFooterLeftContainer.innerHTML + html;
                }
            }
            // Create notifications
            if (this._sfNavSlottedUnreadNotifications[0] != null) {
                if (this._sfNavDivNotif != null) {
                    const html = this._sfNavSlottedUnreadNotifications[0].outerHTML;
                    const currHtml = this._sfNavDivNotif.children[3].innerHTML;
                    this._sfNavDivNotif.children[3].innerHTML = html + currHtml;
                    //this._sfNavDivFooterLeftContainer.innerHTML = this._sfNavDivFooterLeftContainer.innerHTML + html;
                }
            }
            // Copy notification view all
            if (this._sfNavSlottedNotificationsList[0] != null) {
                const href = this._sfNavSlottedNotificationsList[0].href;
                const currHtml = this._sfNavDivNotifActions.innerHTML;
                this._sfNavDivNotifActions.innerHTML = currHtml + '<button onClick="window.location.href=\'#' + href.split('#')[1] + '\'; event.target.parentNode.children[0].dispatchEvent(new MouseEvent(\'click\', {\'view\': window, \'bubbles\': true, \'cancelable\': false}))">View All</button>';
            }
            // Copy cta
            if (this._sfNavSlottedCta[0] != null) {
                const href = this._sfNavSlottedCta[0].href;
                const html = this._sfNavSlottedCta[0].innerHTML;
                this._sfNavDivCta.innerHTML = '<button class="sfNavButtonCta" type="button" onClick="window.location.href=\'#' + href.split('#')[1] + '\';"><b>' + html + '</b></button>';
            }
            // Copy profile menu
            if (this._sfNavSlottedProfileMenu[0] != null) {
                const html = this._sfNavSlottedProfileMenu[0].outerHTML;
                this._sfNavDivProfile.children[2].insertAdjacentHTML('beforeend', html);
            }
            if (this._sfNavDivFooterMenuContainer != null) {
                if (this._sfNavSlottedUl[0] != null) {
                    const html = this._sfNavSlottedUl[0].outerHTML;
                    this._sfNavDivFooterMenuContainer.innerHTML = html;
                }
            }
            if (this._sfNavSlottedUl[0] != null) {
                this._sfNavSlottedUl[0].outerHTML = '';
            }
            if (this._sfNavSlottedSocialMedia[0] != null) {
                this._sfNavSlottedSocialMedia[0].outerHTML = '';
            }
            if (this._sfNavSlottedUnreadNotifications[0] != null) {
                this._sfNavSlottedUnreadNotifications[0].outerHTML = '';
            }
            if (this._sfNavSlottedReadNotifications[0] != null) {
                this._sfNavSlottedReadNotifications[0].outerHTML = '';
            }
            if (this._sfNavSlottedNotificationsList[0] != null) {
                this._sfNavSlottedNotificationsList[0].outerHTML = '';
            }
            if (this._sfNavSlottedCta[0] != null) {
                this._sfNavSlottedCta[0].outerHTML = '';
            }
            if (this._sfNavSlottedProfileMenu[0] != null) {
                this._sfNavSlottedProfileMenu[0].outerHTML = '';
            }
        };
        this.getHome = () => {
            let home = "";
            if (this._sfNavSlottedBrandImage.length > 0) {
                home = this._sfNavSlottedBrandImage[0].href.split('#')[1];
            }
            if (this._sfNavSlottedBrandName.length > 0) {
                home = this._sfNavSlottedBrandName[0].children[0].href.split('#')[1];
            }
            return home;
        };
        this.processRoute = async () => {
            const hashRef = window.location.href.split('#');
            const routePath = (window.location.hash.length > 0 ? hashRef[1].split("/")[0] : this.getHome()) + '.html';
            let params = null;
            if (window.location.hash.length > 0) {
                params = hashRef[1].split("/");
                if (params.length > 1) {
                    params.shift();
                }
                else {
                    params = [];
                }
            }
            else {
                params = [];
            }
            this.dispatchMyEvent(this.eventRouteChange, { pathName: routePath, args: params });
            const result = await DownloadFile.downloadFile(routePath);
            if (result.status === 404) {
                if (this._content[0] != null) {
                    this._content[0].innerHTML = '';
                    this._sfNav404.children[0].innerHTML = "Could not find " + routePath;
                    this._sfNav404.style.display = 'block';
                }
            }
            else {
                if (this._content[0] != null) {
                    this._sfNav404.style.display = 'none';
                    var allText = result.text;
                    this._content[0].innerHTML = allText;
                    RunScripts.runScripts(this._content[0]);
                }
            }
        };
        this.setupRouting = () => {
            window.addEventListener('popstate', () => {
                if (window.location.hash.length > 0) {
                    this.resetMenu();
                }
                this.processRoute();
            });
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
                    this._sfNavDivToggleContainer.children[0].addEventListener("keypress", this.onToggle);
                    this._sfNavDivToggleContainer.children[0].addEventListener("click", this.onToggle);
                    this._sfNavDivToggleContainer.children[1].addEventListener("click", this.onToggle);
                    for (let i = 0; i < this._sfNavLeftMenu.children.length; i++) {
                        const child = this._sfNavLeftMenu.children[i];
                        child.addEventListener('click', this.onToggle);
                    }
                }
            };
            const assignToggleToProfileMenu = () => {
                if (this._sfNavProfileMenu != null) {
                    for (let i = 0; i < this._sfNavProfileMenu.children.length; i++) {
                        const child = this._sfNavProfileMenu.children[i];
                        child.addEventListener('click', this.onToggle);
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
                    else {
                        // clone to remove event listeners
                        let old_element = elementsLi[i];
                        var new_element = elementsLi[i].cloneNode(true);
                        old_element.parentNode.replaceChild(new_element, old_element);
                        new_element.getElementsByTagName('a')[0].addEventListener('click', (ev) => {
                            if (ev.target.parentNode.parentNode.outerHTML.indexOf('mainMenu') >= 0) {
                                hideAllUls();
                            }
                            else {
                                ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].style.display = 'none';
                                hideAllUls();
                            }
                        });
                    }
                }
            };
            const assignSearch = () => {
                const elementH1 = this._sfNavDivSearch.getElementsByTagName('h1')[0];
                elementH1.addEventListener('click', this.onToggle);
                elementH1.addEventListener('keypress', this.onToggle);
                this._sfNavDivSearchClose.addEventListener('click', this.onToggle);
                this._sfNavDivSearchClose.addEventListener('keypress', this.onToggle);
            };
            const assignNotif = () => {
                var _a, _b, _c, _d;
                const elementH1 = this._sfNavDivNotif.getElementsByTagName('h1')[0];
                elementH1.addEventListener('click', this.onToggle);
                elementH1.addEventListener('keypress', this.onToggle);
                this._sfNavDivNotifClose.addEventListener('click', this.onToggle);
                this._sfNavDivNotifClose.addEventListener('keypress', this.onToggle);
                for (var i = 0; i < this._sfNavDivNotif.children[3].children[0].children.length; i++) {
                    (_d = (_c = (_b = (_a = this._sfNavDivNotif.children[3]) === null || _a === void 0 ? void 0 : _a.children[0]) === null || _b === void 0 ? void 0 : _b.children[i]) === null || _c === void 0 ? void 0 : _c.children[0]) === null || _d === void 0 ? void 0 : _d.addEventListener('click', this.onToggle);
                }
            };
            const assignProfile = () => {
                this._sfNavDivProfileToggle.addEventListener('click', this.onToggle);
                this._sfNavDivProfileToggle.addEventListener('keypress', this.onToggle);
                this._sfNavDivProfile.children[1].addEventListener('click', this.onToggle);
            };
            assignToggleToLeftMenu();
            assignToggleToProfileMenu();
            assignMainMenu();
            assignSearch();
            assignNotif();
            assignProfile();
        };
    }
    hideLeftMenuElement(element) {
        const elementUl = element.getElementsByTagName('ul')[0];
        elementUl.style.display = 'none';
        element.style.color = 'inherit';
        element.style.backgroundColor = 'inherit';
    }
    showLeftMenuElement(element) {
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
    showProfileMenuElement(element) {
        let parentBackgroundColor = null;
        let parentColor = null;
        parentBackgroundColor = window.getComputedStyle(element.parentNode).backgroundColor;
        parentColor = window.getComputedStyle(element.parentNode).color;
        const elementUl = element.getElementsByTagName('ul')[0];
        elementUl.style.display = 'block';
        element.style.color = parentBackgroundColor;
        element.style.backgroundColor = parentColor;
    }
    firstUpdated(_changedProperties) {
        this.copySlots();
        this.decorateSlots();
        this.initListeners();
        this.setupRouting();
        this.processRoute();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html `
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>  
      <nav class="sfNavC" style="position: relative">
        <div class="sfNavDivLeftContainer">
          <div class="sfNavDivToggleContainer">
            <span tabindex="0" class="material-icons sfNavToggleLeft">menu</span>
            <div class="sfNavToggleLeftLeaf"></div>
          </div>
          <slot name="brandImage"></slot>
          <slot name="brandName"></slot>
          <div id="mainMenu"></div>
          <slot name="mainMenu"></slot>
        </div>
        <div class="sfNavDivRightContainer">
          <div class="sfNavDivCta">
          </div>
          <div class="sfNavDivSearch">
            <h1 tabindex="0" class="material-icons sfNavSearchToggle">search</h1>
            <div class="sfNavToggleRightLeaf"></div>
            <div class="sfNavDivSearchDropdown">
              <input class="sfNavInputSearch" type="text" placeholder="Search" @keyup=${(ev) => { this.onKeyUp(ev, this.eventSearchClick); }} />
              <div tabindex="0" class="sfNavDivSearchClose">⨯</div>
            </div>
          </div>
          <div class="sfNavDivNotif">
            <h1 tabindex="0" class="sfNavNotifToggle material-icons">notifications</h1>
            <div class="sfNavDivNotifBadge">🔴</div>
            <div class="sfNavToggleRightLeaf"></div>
            <div class="sfNavDivNotifDropdown">
              <div class="sfNavDivNotifActions"><button class="sfNavDivNotifClose">Close</button></div>
            </div>
          </div>
          <div class="sfNavDivProfile">
            <div class="sfNavDivProfileToggle" tabindex="0">
              <slot name="profilePicture"></slot>
              <p>▼</p>
            </div>
            <div class="sfNavToggleRightLeaf profileLeaf"></div>
            <div class="sfNavDivProfileDropdown">
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
        <slot name="unreadNotifications"></slot>
        <slot name="readNotifications"></slot>
        <slot name="socialMedia"></slot>
        <slot name="copyright"></slot>
        <slot name="notificationsList"></slot>
        <slot name="cta"></slot>
        <slot name="profileMenu"></slot>
      </footer>
    `;
    }
};
SfNav.styles = css `
    
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

    .sfNavDivCta {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    .sfNavButtonCta {
      font-size: 110%;
    }

    .sfNavDivSearch {
      position: relative;
    }

    .sfNavDivNotif {
      position: relative;
      margin-left: 15px;
    }

    .sfNavDivNotif > h1 {
      cursor: pointer;
    }

    .sfNavDivNotifActions {
      display: flex;
      justify-content: space-between;
    }

    .sfNavDivNotifDropdown {
      display: none;
      position: absolute;
      right: 0px;
      top: 60px;
      flex-direction: column;
      max-height: 300px;
      overflow-y: auto;
    }

    .sfNavDivNotifDropdown > ul {
      list-style: none;
      margin-left: 0px;
      padding-left: 0px;
      margin-bottom: 0px;
      margin-top: 0px;
    }

    .sfNavDivNotifDropdown > ul:first-child > li {
      width: 300px;
      background-color: var(--notif-background-color, #fff);
      color: var(--notif-color, #000);
      padding: 5px;
      margin-bottom: 5px;
      border-radius: 5px;
    }

    .sfNavDivNotifDropdown > ul > li {
      width: 300px;
      color: var(--notif-background-color, #000);
      background-color: var(--notif-color, #ddd);
      padding: 5px;
      margin-bottom: 5px;
      border-radius: 5px;
    }

    .sfNavDivNotifDropdown > ul > li > a > h3 {
      margin-top: 0px;
      margin-bottom: 0px;
    }

    .sfNavDivNotifDropdown > ul > li > a > p {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .sfNavDivNotifDropdown > ul > li > a > div {
      font-size: 70%;
    }

    .sfNavDivSearch > h1 {
      cursor: pointer;
    }

    .sfNavDivToggleContainer {
      margin-right: 5px;
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

    .sfNavDivProfileDropdown > ul {
      list-style: none;
      background-color: var(--menu-background-color, #fff);
      color: var(--menu-color, #000);
      cursor: pointer;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 5px;
      padding-left: 0px;
      padding-right: 0px;
    }

    .sfNavDivProfileDropdown > ul > li {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;
      border: solid 1px transparent;
      min-width: 140px;
    }

    .sfNavDivProfileDropdown > ul > li > ul > li {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;
      border: solid 1px transparent;
      min-width: 100px;
    }

    .sfNavDivProfileDropdown > ul > li > ul > li:first-child {
      margin-top: 5px;
    }

    .sfNavDivProfileDropdown > ul > li > ul {
      display: none;
      list-style: none;
      padding-left: 5px;
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
      margin-right: 15px;
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

    .sfNavDivNotifBadge {
      position: absolute;
      margin-top: -45px;
      margin-left: 10px;
      font-size: 70%;
    }

    .sfNavDivProfile {
      display: flex;
      align-items: center;
      margin-left: 20px;
      position: relative;
    }

    .sfNavDivProfileToggle {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .sfNavDivProfileToggle > p{
      font-size:60%;
      margin-left: 3px;
    }

    .sfNavDivProfileToggle > ::slotted(img) {
      height: 30px;
      width: 30px;
      border-radius: 15px;
    }

    .sfNavDivProfileDropdown {
      display: none;
      position: absolute;
      right: 0px;
      top: 40px;
    }

    @media (orientation: landscape) {

      .sfNavDivToggleContainer {
        display: none;
      }      

    }

    @media (orientation: portrait) {

      .sfNavC {
        padding: 10px 10px;
      }

      .sfNavDivLeftContainer > ::slotted(h2) {
        display: none;
      }

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
    query('.sfNavDivProfileDropdown > ul')
], SfNav.prototype, "_sfNavProfileMenu", void 0);
__decorate([
    query('#mainMenu')
], SfNav.prototype, "_sfNavMainMenu", void 0);
__decorate([
    query('.sfNavDivSearch')
], SfNav.prototype, "_sfNavDivSearch", void 0);
__decorate([
    query('.sfNavDivSearchClose')
], SfNav.prototype, "_sfNavDivSearchClose", void 0);
__decorate([
    query('.sfNavDivNotif')
], SfNav.prototype, "_sfNavDivNotif", void 0);
__decorate([
    query('.sfNavDivNotifDropdown')
], SfNav.prototype, "_sfNavDivNotifDropdown", void 0);
__decorate([
    query('.sfNavDivNotifClose')
], SfNav.prototype, "_sfNavDivNotifClose", void 0);
__decorate([
    query('.sfNav404')
], SfNav.prototype, "_sfNav404", void 0);
__decorate([
    query('.sfNavDivFooterContainer')
], SfNav.prototype, "_sfNavDivFooterContainer", void 0);
__decorate([
    query('.sfNavDivFooterBrandContainer')
], SfNav.prototype, "_sfNavDivFooterBrandContainer", void 0);
__decorate([
    query('.sfNavDivFooterLeftContainer')
], SfNav.prototype, "_sfNavDivFooterLeftContainer", void 0);
__decorate([
    query('.sfNavDivFooterMenuContainer')
], SfNav.prototype, "_sfNavDivFooterMenuContainer", void 0);
__decorate([
    query('.sfNavDivNotifActions')
], SfNav.prototype, "_sfNavDivNotifActions", void 0);
__decorate([
    query('.sfNavDivNotifBadge')
], SfNav.prototype, "_sfNavDivNotifBadge", void 0);
__decorate([
    query('.sfNavDivCta')
], SfNav.prototype, "_sfNavDivCta", void 0);
__decorate([
    query('.sfNavDivProfile')
], SfNav.prototype, "_sfNavDivProfile", void 0);
__decorate([
    query('.sfNavDivProfileToggle')
], SfNav.prototype, "_sfNavDivProfileToggle", void 0);
__decorate([
    queryAssignedElements({ slot: 'mainMenu' })
], SfNav.prototype, "_sfNavSlottedUl", void 0);
__decorate([
    queryAssignedElements({ slot: 'brandName' })
], SfNav.prototype, "_sfNavSlottedBrandName", void 0);
__decorate([
    queryAssignedElements({ slot: 'brandImage' })
], SfNav.prototype, "_sfNavSlottedBrandImage", void 0);
__decorate([
    queryAssignedElements({ slot: 'socialMedia' })
], SfNav.prototype, "_sfNavSlottedSocialMedia", void 0);
__decorate([
    queryAssignedElements({ slot: 'unreadNotifications' })
], SfNav.prototype, "_sfNavSlottedUnreadNotifications", void 0);
__decorate([
    queryAssignedElements({ slot: 'readNotifications' })
], SfNav.prototype, "_sfNavSlottedReadNotifications", void 0);
__decorate([
    queryAssignedElements({ slot: 'notificationsList' })
], SfNav.prototype, "_sfNavSlottedNotificationsList", void 0);
__decorate([
    queryAssignedElements({ slot: 'cta' })
], SfNav.prototype, "_sfNavSlottedCta", void 0);
__decorate([
    queryAssignedElements({ slot: 'profileMenu' })
], SfNav.prototype, "_sfNavSlottedProfileMenu", void 0);
__decorate([
    queryAssignedElements({ slot: 'content' })
], SfNav.prototype, "_content", void 0);
SfNav = __decorate([
    customElement('sf-nav')
], SfNav);
export { SfNav };
//# sourceMappingURL=sf-nav.js.map