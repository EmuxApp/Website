/*
    Emux Website
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the Emux Closed-Source Licence, which can be found at LICENCE.md.
*/

var accountEmux = {
    signOut: function() {
        $(".accountEmux_signOutButton").prop("disabled", true);

        firebaseEmux.auth().signOut();
    }   
};

$(function() {
    firebaseEmux.auth().onAuthStateChanged(function(user) {
        if (user) {
            if ($("body").attr("data-account") == "signedOut") {
                window.location.replace(core.getURLParameter("go") || "/account/index.html");
            }
        } else {
            if ($("body").attr("data-account") == "signedIn") {
                window.location.replace(core.getURLParameter("go") || "/account/signin.html");
            }
        }
    });
});