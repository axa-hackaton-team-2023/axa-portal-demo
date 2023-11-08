import {html, LitElement} from 'lit';
import '@axa-ch/heading';
import '@axa-ch/text';
import '@axa-ch/link';
import '@axa-ch/icon';
import '@axa-ch/dropdown';
import '@axa-ch/footer-small';
import '@axa-ch/footer';
import '@axa-ch/container';
import '@axa-ch/policy-features';
import '@axa-ch/button';
import '@axa-ch/commercial-hero-banner';
import commercialHeroBanner from './commercial-hero-banner';
import footer from './footer';
import footerSmall from './footer-small';
import navbar from './navbar';
import policyFeatures from './policy-features';
import React from "react";
import {createComponent} from "@lit/react";

const resetBrowserDefaultStyles = html`
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
      }

      ul {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin: 0;
        padding: 0;
      }
    </style>
  `;

const style = html`
    <style>
      .pages-axa-main-page {
        font-family: Source Sans Pro, Arial, sans-serif;
      }
    </style>
  `;

class AXAPage extends LitElement{
  render() {
    return html`
      ${resetBrowserDefaultStyles} ${style}
  
      <div class="pages-axa-main-page">
        ${navbar}
        <slot name="widget"></slot>
        ${policyFeatures} ${footer}
        ${footerSmall}
      </div>
    `
  }
}

customElements.define('axa-page', AXAPage);

export default createComponent({
  tagName: 'axa-page',
  elementClass: AXAPage,
  react: React,
});

