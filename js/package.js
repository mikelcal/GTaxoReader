/* Adapted from https://github.com/robnyman/Firefox-OS-Boilerplate-App/blob/gh-pages/js/base.js */
/* global alert, console */
"use strict";
// Install app
if (navigator.mozApps) {
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.onsuccess = function () {
        if (checkIfInstalled.result) {
            // Already installed
            var installationInstructions = document.querySelector("#install-instructions");
            if (installationInstructions) {
                installationInstructions.style.display = "none";
            }
        }
        else {
            var install = document.querySelector("#install"),
                manifestURL = "http://mikelcal.github.io/GTaxoReader/manifest.webapp";
            install.className = "start-install";
            install.onclick = function () {
                var installApp = navigator.mozApps.installPackage(manifestUrl);
                installApp.onsuccess = function() {
                    install.style.display = "none";
                };
                installApp.onerror = function() {
                    alert("Install failed\n\n:" + installApp.error.name);
                };
            };
        }
    };
}
else {
    console.log("Open Web Apps not supported");
}