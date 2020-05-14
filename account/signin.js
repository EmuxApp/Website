/*
    Emux Website
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the Emux Closed-Source Licence, which can be found at LICENCE.md.
*/

function signIn() {
    $(".signInButton").prop("disabled", true);

    if ($("#email").val().trim() != "" && $("#password").val() != "") {
        firebaseEmux.auth().signInWithEmailAndPassword($("#email").val().trim(), $("#password").val()).catch(function(error) {
            if (error.code == "auth/user-disabled") {
                $("#error").text(_("Emux Technologies have decided to lock your account manually. Please contact support to learn why and to get it unlocked again."));
            } else if (error.code == "auth/user-not-found") {
                $("#error").text(_("There are no accounts with that email address. Please check the email address you've entered and try again."));
            } else if (error.code == "auth/wrong-password") {
                $("#error").text(_("The password you entered is wrong and does not match this account's password. Try typing it in again."));
            } else {
                $("#error").text(_("It looks like we can't sign into this account. Please check your internet connection and try again."));
            }

            $(".signInButton").prop("disabled", false);
        });
    }
}