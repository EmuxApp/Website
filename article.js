/*
    Emux Website
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the Emux Closed-Source Licence, which can be found at LICENCE.md.
*/

$(function() {
    if (core.getURLParameter("id") == null) {
        window.location.replace("/blog.html");
    } else {
        firebaseEmux.database().ref("blog/" + core.getURLParameter("id")).once("value", function(snapshot) {
            $(".articleTitle").text(snapshot.val().title);
            $(".articleDate").text(lang.format(new Date(snapshot.val().date), lang.language, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }) + " · " + _("By {0} ({1})", [snapshot.val().authorName, _(snapshot.val().authorJobTitle)]));

            $(".articleThumbnail")
                .attr("src", snapshot.val().thumbnailSrc)
                .attr("alt", snapshot.val().thumbnailAlt)
            ;

            $(".articleContents").html(snapshot.val().contents);
        });
    }
});