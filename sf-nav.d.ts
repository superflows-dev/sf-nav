/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, PropertyValueMap } from 'lit';
/**
 * SfNav element.
 *
 * @fires searchClick - When the user presses the enter key iin the search input
 * @slot brandName - Brand name
 * @slot brandImage - Brand image
 * @slot mainMenu - Main menu
 * @csspart button - The button
 */
export declare class SfNav extends LitElement {
    static styles: import("lit").CSSResult;
    eventSearchClick: string;
    constPositionLeftMenu: string;
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
    _sfNavC: any;
    _sfNavDivToggleContainer: any;
    _sfNavLeftMenu: any;
    _sfNavSlottedUl: any;
    _sfNavMainMenu: any;
    _sfNavDivSearch: any;
    onKeyUp: (event: any, position: any) => void;
    dispatchMyEvent: (ev: string) => void;
    onToggle: (e: any) => void;
    decorateSlots: () => void;
    copySlots: () => void;
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