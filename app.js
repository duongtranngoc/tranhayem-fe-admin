/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "TranhayemAdmin.Application",

  name: "TranhayemAdmin",

  requires: [
    // This will automatically load all classes in the TranhayemAdmin namespace
    // so that application classes do not need to require each other.
    "TranhayemAdmin.*",
  ],

  // The name of the initial view to create.
  mainView: "TranhayemAdmin.view.main.Main",
});
