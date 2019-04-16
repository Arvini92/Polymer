import { LitElement, html, css, cssLiteral } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  static get properties() {
    return { 
        background: { type: String }
    };
  }

  constructor(background) {
    super();
    // this.background = '';
    console.log(this.background);
    console.log(background);
  }

//   static get styles() {
//     return css`
//     :host { 
//         display: block; 
//         background: red;
//     }
//     .myclass { 
//         // background: red; 
//     }`;
//   } 

  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
        <style>
            :host { 
                display: block; 
                background: ${this.background};
            }
        </style>
        <p class="myclass">${this.background}</p>
        <slot name="header">This is text</slot>
        <slot name="content"></slot>
        <slot name="header"></slot>
        <my-sec-element></my-sec-element>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);


class SecElement extends LitElement {

 
  static get properties() {
    return { 
        background: { type: String }
    };
  }

  constructor(background) {
    super();
  }



  render(){

    return html`
      <!-- template content -->
        <style>
            :host { 
                display: block; 
                background: ${this.background};
            }
        </style>
        <p class="myclass">Child component</p>
    `;
  }
}

customElements.define('my-sec-element', SecElement);