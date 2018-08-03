(function(){
  /**
  * @customElement
  * @polymer
  */
  class Contact_listPhone extends Polymer.Element {
    static get is() { return 'contact_list-phone'; }
    static get properties() {
      return {
        prop1: {
          type: String,
          value: 'Contacts'
        }
      };
    }
  }
  window.customElements.define(Contact_listPhone.is, Contact_listPhone);
})()