(function(){
  /**
  * @customElement
  * @polymer
  */
  class Info_contactPhone extends Polymer.Element {
    static get is() { return 'info_contact-phone'; }
    static get properties() {
      return {
        prop1: {
          type: String,
          value: 'Info contact phone'
        }
      };
    }
  }
  window.customElements.define(Info_contactPhone.is, Info_contactPhone);
})()