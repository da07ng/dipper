//>>built
require({cache:{"url:dijit/templates/actionBar.html":"\x3cdiv class\x3d'dijitDialogPaneActionBar' data-dojo-attach-point\x3d\"actionBarNode\"\x3e\r\n\t\x3cbutton data-dojo-type\x3d'dijit/form/Button' type\x3d'submit' data-dojo-attach-point\x3d\"okButton\"\x3e\x3c/button\x3e\r\n\t\x3cbutton data-dojo-type\x3d'dijit/form/Button' type\x3d'button'\r\n\t\t\tdata-dojo-attach-point\x3d\"cancelButton\" data-dojo-attach-event\x3d'click:onCancel'\x3e\x3c/button\x3e\r\n\x3c/div\x3e\r\n"}});
define(["dojo/_base/declare","./_WidgetsInTemplateMixin","dojo/i18n!./nls/common","dojo/text!./templates/actionBar.html","./form/Button"],function(b,c,a,d){return b("dijit/_ConfirmDialogMixin",c,{actionBarTemplate:d,buttonOk:a.buttonOk,_setButtonOkAttr:{node:"okButton",attribute:"label"},buttonCancel:a.buttonCancel,_setButtonCancelAttr:{node:"cancelButton",attribute:"label"}})});