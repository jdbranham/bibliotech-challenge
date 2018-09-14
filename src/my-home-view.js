/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyHomeView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Hi Suzy!</h1>
        <p>You may quickly see that I can adapt to new technology easily!</p>
        <p>I have prior experience with ES6 and Typescript, so the transition to Polymer was not difficult.</p
        <p>I've worked with many client and server side frameworks, and well trained in best practices.</p>
        <p>Thank you for giving me an opportunity to prove my skills!</p>
      </div>
    `;
  }
}

window.customElements.define('my-home-view', MyHomeView);
