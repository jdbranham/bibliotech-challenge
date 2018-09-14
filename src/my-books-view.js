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

class MyBooksView extends PolymerElement {

	handleResponse(request) {
		const data = request.detail.response;
		const book = document.createElement("my-book-card");
		book.setAttribute("title", data.title);
		book.setAttribute("contributors", data.contributors.join(','));
		book.setAttribute("isbn", data.isbn);
		book.setAttribute("publisher", data.publisher);
		this.$.bookContainer.appendChild(book);
	}
	
	static get template() {
		return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        h2 {
        	padding-bottom: 1em;
        }
      </style>
      
      <iron-ajax
          auto
          url="/src/data/book.json"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300">
      </iron-ajax>

      <div id="bookContainer">
      	<h2>Trending Now</h2>
      </div>
    `;
	}
}

window.customElements.define('my-books-view', MyBooksView);