function detectIE() {
    var t = window.navigator.userAgent,
        e = t.indexOf("MSIE ");
    if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
    if (t.indexOf("Trident/") > 0) {
        var i = t.indexOf("rv:");
        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
    }
    var a = t.indexOf("Edge/");
    return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
}
if (function ($, t) {
        var e = {
            catchMethods: {
                methodreturn: [],
                count: 0
            },
            init: function (t) {
                var e, i, a;
                t.originalEvent.origin.match(/vimeo/g) && "data" in t.originalEvent && (a = "string" === $.type(t.originalEvent.data) ? $.parseJSON(t.originalEvent.data) : t.originalEvent.data) && (e = this.setPlayerID(a), e.length && (i = this.setVimeoAPIurl(e), a.hasOwnProperty("event") && this.handleEvent(a, e, i), a.hasOwnProperty("method") && this.handleMethod(a, e, i)))
            },
            setPlayerID: function (t) {
                return $("iframe[src*=" + t.player_id + "]")
            },
            setVimeoAPIurl: function (t) {
                return "http" !== t.attr("src").substr(0, 4) ? "https:" + t.attr("src").split("?")[0] : t.attr("src").split("?")[0]
            },
            handleMethod: function (t, e, i) {
                this.catchMethods.methodreturn.push(t.value)
            },
            handleEvent: function (t, e, i) {
                switch (t.event.toLowerCase()) {
                    case "ready":
                        for (var a in $._data(e[0], "events")) a.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/) && e[0].contentWindow.postMessage(JSON.stringify({
                            method: "addEventListener",
                            value: a
                        }), i);
                        if (e.data("vimeoAPICall")) {
                            for (var n = e.data("vimeoAPICall"), s = 0; s < n.length; s++) e[0].contentWindow.postMessage(JSON.stringify(n[s].message), n[s].api);
                            e.removeData("vimeoAPICall")
                        }
                        e.data("vimeoReady", !0), e.triggerHandler("ready");
                        break;
                    case "seek":
                        e.triggerHandler("seek", [t.data]);
                        break;
                    case "loadprogress":
                        e.triggerHandler("loadProgress", [t.data]);
                        break;
                    case "playprogress":
                        e.triggerHandler("playProgress", [t.data]);
                        break;
                    case "pause":
                        e.triggerHandler("pause");
                        break;
                    case "finish":
                        e.triggerHandler("finish");
                        break;
                    case "play":
                        e.triggerHandler("play");
                        break;
                    case "cuechange":
                        e.triggerHandler("cuechange");
                        break
                }
            }
        };
        jQuery(document).ready(function () {
            $("iframe[src*='vimeo.com']").each(function (t) {
                var e = $(this).attr("src");
                if (null === e.match(/player_id/g)) {
                    var i = -1 === e.indexOf("?") ? "?" : "&",
                        a = $.param({
                            api: 1,
                            player_id: "vvvvimeoVideo-" + t
                        });
                    $(this).attr("src", e + i + a)
                }
            })
        }), $(t).on("message", function (t) {
            e.init(t)
        }), $.vimeo = function (i, a, n) {
            var s = {},
                o = e.catchMethods.methodreturn.length;
            if ("string" == typeof a && (s.method = a), void 0 !== typeof n && "function" != typeof n && (s.value = n), "iframe" === i.prop("tagName").toLowerCase() && s.hasOwnProperty("method"))
                if (i.data("vimeoReady")) i[0].contentWindow.postMessage(JSON.stringify(s), e.setVimeoAPIurl(i));
                else {
                    var r = i.data("vimeoAPICall") ? i.data("vimeoAPICall") : [];
                    r.push({
                        message: s,
                        api: e.setVimeoAPIurl(i)
                    }), i.data("vimeoAPICall", r)
                } return "get" !== a.toString().substr(0, 3) && "paused" !== a.toString() || "function" != typeof n || (! function (i, a, n) {
                var s = t.setInterval(function () {
                    e.catchMethods.methodreturn.length != i && (t.clearInterval(s), a(e.catchMethods.methodreturn[n]))
                }, 10)
            }(o, n, e.catchMethods.count), e.catchMethods.count++), i
        }, $.fn.vimeo = function (t, e) {
            return $.vimeo(this, t, e)
        }
    }(jQuery, window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function ($) {
    "use strict";
    var t = $.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function ($) {
    "use strict";

    function t(t, i) {
        return this.each(function () {
            var a = $(this),
                n = a.data("bs.modal"),
                s = $.extend({}, e.DEFAULTS, a.data(), "object" == typeof t && t);
            n || a.data("bs.modal", n = new e(this, s)), "string" == typeof t ? n[t](i) : s.show && n.show(i)
        })
    }
    var e = function (t, e) {
        this.options = e, this.$body = $(document.body), this.$element = $(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function (t) {
        var i = this,
            a = $.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                $(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var a = $.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var n = $.Event("shown.bs.modal", {
                relatedTarget: t
            });
            a ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(n)
        }))
    }, e.prototype.hide = function (t) {
        t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function () {
        this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (t) {
        var i = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = $.support.transition && a;
            if (this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function (t) {
                    if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), t && t()
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, e.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, e.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function () {
        return $.fn.modal = i, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var i = $(this),
            a = i.attr("href"),
            n = $(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            s = n.data("bs.modal") ? "toggle" : $.extend({
                remote: !/#/.test(a) && a
            }, n.data(), i.data());
        i.is("a") && e.preventDefault(), n.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(n, s, this)
    })
}(jQuery),
function ($) {
    "use strict";

    function t(t) {
        return this.each(function () {
            var i = $(this),
                a = i.data("bs.tab");
            a || i.data("bs.tab", a = new e(this)), "string" == typeof t && a[t]()
        })
    }
    var e = function (t) {
        this.element = $(t)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var a = e.find(".active:last a"),
                n = $.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = $.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var o = $(i);
                this.activate(t.closest("li"), e), this.activate(o, o.parent(), function () {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                })
            }
        }
    }, e.prototype.activate = function (t, i, a) {
        function n() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var s = i.find("> .active"),
            o = a && $.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && o ? s.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), s.removeClass("in")
    };
    var i = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function () {
        return $.fn.tab = i, this
    };
    var a = function (e) {
        e.preventDefault(), t.call($(this), "show")
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery),
function ($) {
    "use strict";

    function t(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return $(i)
    }

    function e(t) {
        return this.each(function () {
            var e = $(this),
                a = e.data("bs.collapse"),
                n = $.extend({}, i.DEFAULTS, e.data(), "object" == typeof t && t);
            !a && n.toggle && /show|hide/.test(t) && (n.toggle = !1), a || e.data("bs.collapse", a = new i(this, n)), "string" == typeof t && a[t]()
        })
    }
    var i = function (t, e) {
        this.$element = $(t), this.options = $.extend({}, i.DEFAULTS, e), this.$trigger = $('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (t = a.data("bs.collapse")) && t.transitioning)) {
                var n = $.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    a && a.length && (e.call(a, "hide"), t || a.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!$.support.transition) return o.call(this);
                    var r = $.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", $.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][r])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!$.support.transition) return a.call(this);
                this.$element[e](0).one("bsTransitionEnd", $.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (e, i) {
            var a = $(i);
            this.addAriaAndCollapsedClass(t(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var a = $.fn.collapse;
    $.fn.collapse = e, $.fn.collapse.Constructor = i, $.fn.collapse.noConflict = function () {
        return $.fn.collapse = a, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var a = $(this);
        a.attr("data-target") || i.preventDefault();
        var n = t(a),
            s = n.data("bs.collapse"),
            o = s ? "toggle" : a.data();
        e.call(n, o)
    })
}(jQuery),
function ($) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    $.fn.emulateTransitionEnd = function (t) {
        var e = !1,
            i = this;
        $(this).one("bsTransitionEnd", function () {
            e = !0
        });
        var a = function () {
            e || $(i).trigger($.support.transition.end)
        };
        return setTimeout(a, t), this
    }, $(function () {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (t) {
                if ($(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), $(window).scroll(function () {
        $(window).scrollTop() >= 1 ? $(".main-header").addClass("scroll") : $(".main-header").removeClass("scroll")
    }), $(".scrollto").not('[href="#"]').not('[href="#0"]').click(function (t) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
                scrollTop: e.offset().top - 86
            }, 800, function () {
                var t = $(e);
                if (t.focus(), t.is(":focus")) return !1;
                t.attr("tabindex", "-1"), t.focus()
            }))
        }
    }), $(document).ready(function () {
        "" !== location.hash && $('a[href="' + location.hash + '"]').tab("show"), $('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
            history.pushState ? history.pushState(null, null, "#" + $(t.target).attr("href").substr(1)) : location.hash = "#" + $(t.target).attr("href").substr(1)
        }), $(function () {
            if (window.location.hash) {
                var t = window.location.hash;
                $(".modal" + t).length && $(t).modal("toggle")
            }
        })
    }), $("#schedule").on("show.bs.modal", function (t) {
        $("#load-calendly").is(":empty") && $("#load-calendly").html("<div class='calendly-inline-widget' data-url='https://calendly.com/karpman/everchron-demo'></div><script type='text/javascript' src='https://calendly.com/assets/external/widget.js'></script>")
    }), $(".start-video").click(function () {
        var t = $(this).data("video"),
            e = "<iframe id='video' src='https://player.vimeo.com/video/" + t + "?api=1&color=ffffff&title=0&byline=0&portrait=0&player_id=vimeoplayer' width='960' height='540' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        $("#video-frame").is(":empty") ? ($("#video-frame").append(e), $("#video-modal").modal("show"), $("#video").vimeo("play")) : ($("#video-modal").modal("show"), $("#video").vimeo("play"))
    }), $(".video-close").click(function () {
        $("#video").vimeo("pause"), $("#video-modal").modal("hide"), $("#video").remove()
    }), $(function () {
        $("#bucket_send").submit(function (t) {
            t.preventDefault();
            var e = $(this),
                i = $("input[type=submit]", e);
            $.ajax({
                url: e.prop("action"),
                type: "POST",
                crossDomain: !0,
                headers: {
                    accept: "application/javascript"
                },
                data: $("#bucket_send").serialize(),
                beforeSend: function () {
                    i.prop("disabled", "disabled"), $("body").addClass("wait")
                }
            }).done(function (t) {
                $("#bucket_send").addClass("hidden"), $("#bucket_success").removeClass("hidden"), i.prop("disabled", !1), $("body").removeClass("wait")
            }).fail(function (t) {
                alert("Something went wrong while transmitting your data."), i.prop("disabled", !1), $("body").removeClass("wait")
            })
        })
    }), $("#mobile-nav-show").click(function () {
        $(".mobile-nav").addClass("show transition")
    }), $(".close-nav").click(function () {
        $(".mobile-nav").removeClass("transition"), setTimeout(function () {
            $(".mobile-nav").removeClass("show")
        }, 300)
    }),
    function ($) {
        var t = $(window),
            e = $(".main-footer");
        t.resize(function i() {
            if (t.width() < 575) return e.addClass("mobile-footer");
            $(".main-footer .collapse").removeAttr("style"), e.removeClass("mobile-footer")
        }).trigger("resize")
    }(jQuery);
var version = detectIE();
!1 === version || (version >= 12 ? $("body").addClass("ie-edge") : $("body").addClass("ie")), $(".modal").on("show.bs.modal", function (t) {
    $(this).addClass("d-flex")
}), $(".modal").on("hidden.bs.modal", function (t) {
    $(this).removeClass("d-flex")
}), $("[data-target='#schedule']").click(function () {
    fbq("track", "Lead")
}), $("[data-video='132054446']").click(function () {
    fbq("track", "ViewContent", {
        content_ids: "introduction_video"
    })
}), $("[data-video='149039441']").click(function () {
    fbq("track", "ViewContent", {
        content_ids: "inhouse_video"
    })
});