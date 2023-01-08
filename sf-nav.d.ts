/**
 * @license
 * Copyright 2022 Superflow.dev
 * SPDX-License-Identifier: MIT
 */
import { LitElement, PropertyValueMap } from 'lit';
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
export declare class SfNav extends LitElement {
    eventSearchClick: string;
    constPositionSearchToggle: string;
    constPositionSearchClose: string;
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
    _sfNavMainMenu: any;
    _sfNavDivSearch: any;
    _sfNavDivSearchClose: any;
    _sfNav404: any;
    _sfNavDivFooterContainer: any;
    _sfNavDivFooterBrandContainer: any;
    _sfNavDivFooterLeftContainer: any;
    _sfNavDivFooterMenuContainer: any;
    _sfNavSlottedUl: any;
    _sfNavSlottedBrandName: any;
    _sfNavSlottedBrandImage: any;
    _sfNavSlottedSocialMedia: any;
    _content: any;
    onKeyUp: (event: any, position: any) => void;
    dispatchMyEvent: (ev: string) => void;
    resetMenu: () => void;
    hideLeftMenuElement(element: any): void;
    hideAllLeftMenuElements: () => void;
    showLeftMenuElement(element: any): void;
    toggleSearch: () => void;
    toggleLeftMenu: () => void;
    toggleMainMenu: (element: any) => void;
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