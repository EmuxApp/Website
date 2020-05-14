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

var firebaseEmux = firebase.initializeApp(firebaseEmuxConfig);
firebaseEmux.analytics();

function toggleMenu() {
    if ($(".navMenu").is(":visible")) {
        $(".navMenu").fadeOut(350);
    } else {
        $(".navMenu").fadeIn(350);
    }
}

$(function() {
    firebaseEmux.database().ref("blog").orderByChild("date").on("value", function(snapshot) {
        $(".blogArticles").html("");

        snapshot.forEach(function(childSnapshot) {
            $(".blogArticles").prepend(
                $("<div class='split listing'>").append([
                    $("<div class='preview'>").append([
                        $("<img>")
                            .attr("src", childSnapshot.val().thumbnailSrc)
                            .attr("alt", childSnapshot.val().thumbnailAlt)
                        ,
                        $("<small class='articleDate'>").text(lang.format(new Date(childSnapshot.val().date), lang.language, {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }))
                    ]),
                    $("<div>").append([
                        $("<h2 class='noMargin'>").text(childSnapshot.val().title),
                        $("<p class='articlePreview'>").html(childSnapshot.val().contents),
                        $("<div class='end'>").append(
                            $("<button>")
                                .text(_("Read more"))
                                .on("click", function() {
                                    window.location.href = "/article.html?id=" + childSnapshot.key;
                                })
                        )
                    ])
                ])
            );
        });
    });
});