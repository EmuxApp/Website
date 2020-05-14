/*
    Emux Website

    Copyright (C) Emux Technologies. All Rights Reserved.

    https://emux.app
    Licenced by the Emux Open-Source Licence, which can be found at LICENCE.md.
*/

var firebaseEmuxConfig = {
    apiKey: "AIzaSyA5DSTRRUYqfvZCe7cH95qPdxm1YB8FCvQ",
    authDomain: "emux-platform.firebaseapp.com",
    databaseURL: "https://emux-platform.firebaseio.com",
    projectId: "emux-platform",
    storageBucket: "emux-platform.appspot.com",
    messagingSenderId: "887699432779",
    appId: "1:887699432779:web:5dc3cc36e91315a1ebf4ce",
    measurementId: "G-2820K1ZL6P"
};

var firebaseEmux = firebase.initializeApp(firebaseEmuxConfig, "emux");
firebaseEmux.analytics();

function toggleMenu() {
    if ($(".navMenu").is(":visible")) {
        $(".navMenu").fadeOut(350);
    } else {
        $(".navMenu").fadeIn(350);
    }
}