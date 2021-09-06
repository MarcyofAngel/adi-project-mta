sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"adi/webmarket/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("adi.webmarket.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
