/*
    Emux Website

    Copyright (C) Emux Technologies. All Rights Reserved.

    https://emux.app
    Licenced by the Emux Open-Source Licence, which can be found at LICENCE.md.
*/

function toggleMenu() {
    if ($(".navMenu").is(":visible")) {
        $(".navMenu").fadeOut(350);
    } else {
        $(".navMenu").fadeIn(350);
    }
}