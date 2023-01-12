/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
import { LitElement, PropertyValueMap } from 'lit';
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
 * @csscustomproperty --nav-background-color - Background color of the component
 * @csscustomproperty --nav-color - Text color of the component
 */
export declare class SfNav extends LitElement {
    eventSearchClick: string;
    eventRouteChange: string;
    constPositionProfileToggle: string;
    constPositionSearchToggle: string;
    constPositionSearchClose: string;
    constPositionNotifToggle: string;
    constPositionNotifClose: string;
    constPositionLeftToggle: string;
    constPositionLeftToggleLeaf: string;
    constDefaultMenu: ({
        caption: string;
        link: string;
    } | {
        caption: string;
        link: string;
    }[])[];
    constBrandName: string;
    constBrandImage: string;
    static styles: import("lit").CSSResult;
    _sfNavC: any;
    _sfNavDivToggleContainer: any;
    _sfNavLeftMenu: any;
    _sfNavProfileMenu: any;
    _sfNavMainMenu: any;
    _sfNavDivSearch: any;
    _sfNavDivSearchClose: any;
    _sfNavDivNotif: any;
    _sfNavDivNotifDropdown: any;
    _sfNavDivNotifClose: any;
    _sfNav404: any;
    _sfNavDivFooterContainer: any;
    _sfNavDivFooterBrandContainer: any;
    _sfNavDivFooterLeftContainer: any;
    _sfNavDivFooterMenuContainer: any;
    _sfNavDivNotifActions: any;
    _sfNavDivNotifBadge: any;
    _sfNavDivCta: any;
    _sfNavDivProfile: any;
    _sfNavDivProfileToggle: any;
    _sfNavSlottedUl: any;
    _sfNavSlottedBrandName: any;
    _sfNavSlottedBrandImage: any;
    _sfNavSlottedSocialMedia: any;
    _sfNavSlottedUnreadNotifications: any;
    _sfNavSlottedReadNotifications: any;
    _sfNavSlottedNotificationsList: any;
    _sfNavSlottedCta: any;
    _sfNavSlottedProfileMenu: any;
    _content: any;
    onKeyUp: (event: any, position: any) => void;
    dispatchMyEvent: (ev: string, args?: any) => void;
    resetMenu: () => void;
    hideLeftMenuElement(element: any): void;
    hideAllLeftMenuElements: () => void;
    hideAllProfileMenuElements: () => void;
    showLeftMenuElement(element: any): void;
    showProfileMenuElement(element: any): void;
    toggleSearch: () => void;
    toggleNotif: () => void;
    toggleLeftMenu: () => void;
    toggleProfileMenu: (element: HTMLElement) => void;
    toggleMainMenu: (element: any) => void;
    showProfile: () => void;
    hideProfile: () => void;
    toggleProfile: () => void;
    onToggle: (e: any) => void;
    decorateSlots: () => void;
    copySlots: () => void;
    getHome: () => string;
    processRoute: () => Promise<void>;
    setupRouting: () => void;
    initListeners: () => void;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sf-nav': SfNav;
    }
}
//# sourceMappingURL=sf-nav.d.ts.map