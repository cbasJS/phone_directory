(function(){
  /**
  * @customElement
  * @polymer
  */
  class Phone_directoryApp extends Polymer.Element {
  static get is() { return 'phone_directory-app'; }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'amazing directory'
      }
    };
  }
  }

  window.customElements.define(Phone_directoryApp.is, Phone_directoryApp);
})()