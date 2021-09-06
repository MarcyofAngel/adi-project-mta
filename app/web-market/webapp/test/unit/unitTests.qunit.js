/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"adi/web-market/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
