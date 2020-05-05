/*
    Emux Website

    Copyright (C) Emux Technologies. All Rights Reserved.

    https://emux.app
    Licenced by the Emux Open-Source Licence, which can be found at LICENCE.md.
*/

var core = {
    getURLParameter: function(parameter) {
        return decodeURIComponent((new RegExp("[?|&]" + parameter + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
    }
};

$(function() {
    $("[import]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;
 
            $.ajax({
                url: $(this).attr("import"),
                error: function() {
                    $(thisPassOn).html("Could not load associated information.");
                }
            }).done(function(data) {
                $(thisPassOn).html(data);
            });
        } else {
            $(this).html("<em>Content will go here at runtime: " + $(this).attr("import") + "</em>");
        }
    });
 
    $("[markdown]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;
 
            $.ajax({
                url: $(this).attr("markdown"),
                error: function() {
                    $(thisPassOn).html("Could not load associated information.");
                }
            }).done(function(data) {
                $(thisPassOn).html(new showdown.Converter().makeHtml(data));
            });
        } else {
            $(this).html("<em>Content will go here at runtime: " + $(this).attr("markdown") + "</em>");
        }
    });
 
    setInterval(function() {
        $("[importrf]").each(function() {
            if (!window.location.href.startsWith("file:///")) {
                var thisPassOn = this;
 
                $.ajax({
                    url: $(this).attr("markdownrf"),
                    error: function() {
                        $(thisPassOn).html("Could not load associated information.");
                    }
                }).done(function(data) {
                    if ($(thisPassOn).html() != data) {
                        $(thisPassOn).html(data);
                    }
                });
            } else {
                $(this).html("<em>Content will go here at runtime: " + $(this).attr("markdownrf") + "</em>");
            }
        });
 
        $("[markdownrf]").each(function() {
            if (!window.location.href.startsWith("file:///")) {
                var thisPassOn = this;
 
                $.ajax({
                    url: $(this).attr("markdownrf"),
                    error: function() {
                        $(thisPassOn).html("Could not load associated information.");
                    }
                }).done(function(data) {
                    if ($(thisPassOn).html() != new showdown.Converter().makeHtml(data)) {
                        $(thisPassOn).html(new showdown.Converter().makeHtml(data));
                    }
                });
            } else {
                $(this).html("<em>Content will go here at runtime: " + $(this).attr("markdownrf") + "</em>");
            }
        });
    }, 1000);
});