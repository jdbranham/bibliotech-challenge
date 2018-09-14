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
import '../shared-styles.js';

class MyBookCard extends PolymerElement {
	
	static get properties() {
		return {
			coverImage : {
				type : String,
				notify : true,
				reflectToAttribute : true
			},
			title : {
				type : String,
				notify : true,
				reflectToAttribute : true
			},
			isbn : {
				type : String,
				notify : true,
				reflectToAttribute : true
			},
			contributors : {
				type : String,
				notify : true,
				reflectToAttribute : true
			},
			publisher : {
				type : String,
				notify : true,
				reflectToAttribute : true
			}
		};
	}
	static get template() {
		return html`
      <style include="shared-styles">
	      :host {
			  display:block;position:relative;margin:20px 0 0 20px;--material-elevation-1_-_box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
			                    0 3px 1px -2px rgba(0, 0, 0, 0.2);;
			}
			
			
			.card {
			  max-width:500px;
			  position:relative;
			  background-color:rgba(136, 77, 240, 0.7);
			  border-radius:5px;
			  padding:20px;
			  min-width:472px;
			  height:220px;
			  top:0;
			  border-radius:5px;
			  cursor:pointer;
			  display: var(--layout-horizontal_-_display); 
			  -ms-flex-direction: var(--layout-horizontal_-_-ms-flex-direction); 
			  -webkit-flex-direction: var(--layout-horizontal_-_-webkit-flex-direction); 
			  flex-direction: var(--layout-horizontal_-_flex-direction);
			  box-shadow: var(--material-elevation-1_-_box-shadow);
			}
			
			.image-container {
			  min-width:179px;
			}
			
			iron-image, .noCover {
			  background-size:cover;background-repeat:no-repeat;border-radius:3px;margin:-1px;position:absolute;left:20px;top:-20px;box-shadow: var(--material-elevation-1_-_box-shadow);
			}
			
			iron-image {
			  width:179px;height:241px;margin:-1px;background-color:#f5f5f5;
			}
			
			.card-content {
			  font-family:'Roboto', sans-serif;margin-left:15px;padding:0;color:#fff;font-weight:400;line-height:1.2;-ms-flex: var(--layout-flex_-_-ms-flex); -webkit-flex: var(--layout-flex_-_-webkit-flex); flex: var(--layout-flex_-_flex); -webkit-flex-basis: var(--layout-flex_-_-webkit-flex-basis); flex-basis: var(--layout-flex_-_flex-basis);width:220px;
			}
			
			#title {
			  font-size:18px;font-weight:500;
			}
			
			#contributors {
			  font-size:16px;margin-bottom:20px;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
			}
			
			#description {
			  font-size:14px;
			}
			
			.details {
			  font-size:14px;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1em;
			}
			
			paper-button {
			  position:absolute;bottom:40px;font-size:14px;border:2px solid white;border-radius:20px;padding:10px 20px;margin:0;margin-top:20px;line-height:1;text-transform:none;font-weight:500;outline:none;--paper-button-flat-keyboard-focus_-_box-shadow: 0 0 5px rgba(81, 203, 238, 1); --paper-button-flat-keyboard-focus_-_outline: 1px solid rgba(81, 203, 238, 1); --paper-button-flat-keyboard-focus_-_outline-offset: -1px; --paper-button-flat-keyboard-focus_-_border: initial; --paper-button-flat-keyboard-focus_-_border-radius: initial; --paper-button-flat-keyboard-focus_-_font-weight: initial;;
			}
			
			paper-button:focus {
			  background-color:rgba(255,255,255,.3);
			}
			
			@media (max-width: 500px) {
			:host {
			  min-width:350px;width:calc(100% - 40px);margin-left:15px;
			}
			
			.card {
			  height:180px;width:auto;min-width:auto;max-width:500px;
			}
			
			.card-content {
			  width:20%;
			}
			
			.card-content div {
			  width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
			}
			
			#title {
			  font-size:16px;
			}
			
			#authors, .details, paper-button {
			  font-size:14px;
			}
			
			paper-button {
			  bottom:20px;
			}
			
			.image-container {
			  min-width:132px;
			}
			
			iron-image {
			  width:132px;height:177px;
			}

    	</style>

      	<div class="book card">
      		<div class="image-container">
      			<iron-image sizing="cover" preload src="/images/cover.jpg"></iron-image>
      		</div>
      		<div class="card-content">
      			<div class="header">
      				<div id="title">[[title]]</div>
      				<div id="authors">[[contributors]]</div>
      			</div>
      			<div class="details">
      				<span>ISBN</span> | [[isbn]]<br>
      				<span>Publisher</span> | [[publisher]]
      			</div>
      			<paper-button role="button" tabindex="0">Buy Now</paper-button>
      		</div>
      	</div>
      	
      	<div>
      		<h2>Table of Contents</h2>
      		<div>
				<ul>
					<li>Cover</li>
					<li>Preface</li>
					<li>Contents</li>
					<li>1 Something interesting
						<ul>
							<li>1.1 Introduction</li>
							<li>1.2 Summary</li>
						</ul>
					</li>
					<li>2 Something even more interesting
						<ul>
							<li>2.1 Introduction</li>
							<li>2.2 Summary</li>
						</ul>
					</li>
					<li>3 The most interesting chapter
						<ul>
							<li>3.1 Introduction</li>
							<li>3.2 Summary</li>
						</ul>
					</li>
					<li>Bibliography</li>
					<li>Appendices</li>
					<li>Index</li>
				</ul>
			</div>
      		<h2>Summary</h2>
      		<div>
      			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id quam placerat, elementum nulla sed, varius orci. Nam interdum tellus id tellus vulputate ornare. Curabitur sit amet ipsum leo. Curabitur ac fermentum lorem. In blandit efficitur libero, eget tristique diam tristique ut. Aenean vestibulum condimentum commodo. Fusce venenatis orci augue, faucibus cursus nulla eleifend et. Donec placerat nisl sit amet sapien lacinia consectetur. Quisque vel purus lobortis, ullamcorper velit ac, commodo mi. Maecenas lacinia nunc sed ex pretium tincidunt. Maecenas sit amet luctus elit. In cursus sagittis risus nec maximus.

				<p>Morbi et porttitor neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vestibulum enim eu cursus suscipit. Suspendisse potenti. Nam non nunc sed quam aliquet ultricies. Nulla a justo id risus facilisis auctor at in lacus. Quisque venenatis risus nunc, in imperdiet urna malesuada et.

				<p>Nam non augue sit amet odio facilisis tincidunt. Aliquam leo leo, lacinia vel vulputate non, tempus a arcu. In hac habitasse platea dictumst. Proin lobortis purus eu augue tempus, viverra vulputate massa suscipit. Duis iaculis sollicitudin arcu, in laoreet lorem luctus ut. Quisque at felis nec diam vestibulum convallis eget sed dui. Praesent lacinia fermentum purus eu mattis. In porta nisi eget ipsum malesuada, sed posuere turpis sodales. Maecenas lobortis orci sed tortor finibus porttitor. Maecenas sed tellus condimentum, pulvinar nisi vitae, vehicula nibh. Cras at dui vel sem egestas mattis. Duis nec viverra dui. Ut at diam augue.

				<p>Nam ex massa, eleifend a ligula ac, venenatis pretium magna. Nullam dictum vitae libero sit amet iaculis. Fusce metus dolor, commodo quis mauris non, gravida commodo neque. Cras consequat metus odio, in blandit metus aliquam ut. Proin feugiat facilisis elit, vel consequat nulla dapibus id. Vestibulum sed porta urna. Morbi eget maximus lorem, vel rutrum augue. Suspendisse et est quis augue eleifend blandit. Mauris euismod hendrerit mi, sagittis tincidunt magna volutpat sit amet. Aenean augue sapien, laoreet laoreet blandit eget, congue non turpis. Donec ut euismod enim. Aenean leo ipsum, porttitor lobortis rhoncus id, pellentesque quis tortor.

				<p>Quisque in aliquam dui. Praesent vitae ligula porta, porta dolor sed, consectetur ipsum. Pellentesque at gravida sapien. Nam at nisl augue. Suspendisse ultricies lacus sed tellus semper facilisis. Morbi purus lacus, porttitor nec iaculis vel, pulvinar id magna. Ut lobortis orci id turpis tempus, ac ullamcorper augue varius. Fusce at tincidunt tellus, eu dapibus neque. Cras rutrum leo nec sapien elementum, sit amet finibus ipsum imperdiet. Aliquam sit amet neque nibh. Aenean elementum, sem vel pharetra egestas, leo turpis convallis purus, nec eleifend sem enim nec lacus. Donec at diam euismod neque malesuada aliquet quis a lacus. Nulla bibendum nulla sit amet dolor condimentum, id ultricies nibh vulputate. Sed fringilla nec libero sed ultrices. Duis vel imperdiet metus.
      		</div>
      	</div>
    `;
	}
}

window.customElements.define('my-book-card', MyBookCard);