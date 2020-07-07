/*
    Emux Website

    Copyright (C) Emux Technologies. All Rights Reserved.

    https://emux.app
    Licenced by the Emux Open-Source Licence, which can be found at LICENCE.md.
*/

function submitProxiShare() {
    if ($("#proxiShare_username").val().trim() == "" || $("#proxiShare_postLink").val().trim() == "") {
        $("#proxiShare_error").text(_("Please enter both your Proxi username and post link before submitting your post."));
    
        return;
    }

    if (!$("#proxiShare_username").val().trim().match(/^[a-zA-Z0-9]{1,20}$/)) {
        $("#proxiShare_error").text(_("Sorry! It appears that you've entered an invalid username. Check the username that you've entered and submit your post again."));
    
        return;
    }

    if (!($("#proxiShare_postLink").val().trim().startsWith("http://") || $("#proxiShare_postLink").val().trim().startsWith("https://"))) {
        $("#proxiShare_error").text(_("Sorry! Please start your post link with http:// or https:// and submit your post again."));

        return;
    }

    $("#proxiShare_button").prop("disabled", true);

    firebaseEmux.database().ref("proxiShare").push().set({
        username: $("#proxiShare_username").val().trim(),
        postLink: $("#proxiShare_postLink").val().trim(),
        submitTime: firebase.database.ServerValue.TIMESTAMP
    }).then(function() {
        window.location.href = "/proxiShareDone.html";
    });
}