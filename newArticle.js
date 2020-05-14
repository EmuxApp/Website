/*
    Emux Website
 
    Copyright (C) Emux Technologies. All Rights Reserved.
 
    https://emux.app
    Licenced by the Emux Closed-Source Licence, which can be found at LICENCE.md.
*/

function postArticle() {
    if (
        $("#title").val().trim() != "" &&
        $("#thumbnailUrl").val().trim() != "" &&
        $("#thumbnailAlt").val().trim() != "" &&
        $(".articleContents").html().trim() != ""
    ) {
        $("#postArticleButton").prop("disabled", true);

        firebaseEmux.database().ref("blog").push().set({
            title: $("#title").val().trim(),
            thumbnailSrc: $("#thumbnailUrl").val().trim(),
            thumbnailAlt: $("#thumbnailAlt").val().trim(),
            contents: $(".articleContents").html().trim(),
            date: new Date().getTime(),
            author: currentUser.uid,
            authorName: currentUser.fullName,
            authorJobTitle: currentUser.jobTitle
        }).then(function() {
            window.location.href = "/blog.html";
        });
    } else {
        $("#error").text(_("Please fill in all of the required fields."));
    }
}