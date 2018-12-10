$(document).ready(function () {
    "" !== location.hash && $('a[href="' + location.hash + '"]').tab("show"),
        $('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
            history.pushState ? history.pushState(null, null, "#" + $(t.target).attr("href").substr(1)) : location.hash = "#" + $(t.target).attr("href").substr(1)
        }),
        $(function () {
            if (window.location.hash) {
                var t = window.location.hash;
                $(".modal" + t).length && $(t).modal("toggle")
            }
        })
}),
    $("#schedule").on("show.bs.modal", function (t) {
        $("#load-calendly").is(":empty") && $("#load-calendly").html("<div class='calendly-inline-widget' data-url='https://calendly.com/karpman/everchron-demo'></div><script type='text/javascript' src='https://calendly.com/assets/external/widget.js'></script>")
    }),
    $(".start-video").click(function () {
        var t = $(this).data("video")
            , e = "<iframe id='video' src='https://player.vimeo.com/video/" + t + "?api=1&color=ffffff&title=0&byline=0&portrait=0&player_id=vimeoplayer' width='960' height='540' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        $("#video-frame").is(":empty") ? ($("#video-frame").append(e),
            $("#video-modal").modal("show"),
            $("#video").vimeo("play")) : ($("#video-modal").modal("show"),
                $("#video").vimeo("play"))
    }),
    $(".video-close").click(function () {
        $("#video").vimeo("pause"),
            $("#video-modal").modal("hide")
    }),
    $(function () {
        $("#bucket_send").submit(function (t) {
            t.preventDefault();
            var e = $(this)
                , i = $("input[type=submit]", e);
            $.ajax({
                url: e.prop("action"),
                type: "POST",
                crossDomain: !0,
                headers: {
                    accept: "application/javascript"
                },
                data: $("#bucket_send").serialize(),
                beforeSend: function () {
                    i.prop("disabled", "disabled"),
                        $("body").addClass("wait")
                }
            }).done(function (t) {
                $("#bucket_send").addClass("hidden"),
                    $("#bucket_success").removeClass("hidden"),
                    i.prop("disabled", !1),
                    $("body").removeClass("wait")
            }).fail(function (t) {
                alert("Something went wrong while transmitting your data."),
                    i.prop("disabled", !1),
                    $("body").removeClass("wait")
            })
        })
    }),
    $("#mobile-nav-show").click(function () {
        $(".mobile-nav").addClass("show transition")
    }),
    $(".close-nav").click(function () {
        $(".mobile-nav").removeClass("transition"),
            setTimeout(function () {
                $(".mobile-nav").removeClass("show")
            }, 300)
    }),
    function ($) {
        var t = $(window)
            , e = $(".main-footer");
        t.resize(function i() {
            if (t.width() < 575)
                return e.addClass("mobile-footer");
            $(".main-footer .collapse").removeAttr("style"),
                e.removeClass("mobile-footer")
        }).trigger("resize")
    }(jQuery);

