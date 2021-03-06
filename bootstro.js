$(document).ready(function() {
    !function(bootstro, $, undefined) {
        function is_entirely_visible($elem) {
            var docViewTop = $(window).scrollTop()
              , docViewBottom = docViewTop + $(window).height()
              , elemTop = $elem.offset().top
              , elemBottom = elemTop + $elem.height();
            return elemBottom >= docViewTop && docViewBottom >= elemTop && docViewBottom >= elemBottom && elemTop >= docViewTop
        }
        function add_nav_btn(content, i) {
            var nextButton, prevButton, finishButton, defaultBtnClass, $el = get_element(i);
            return defaultBtnClass = 2 == bootstrapVersion ? "btn btn-primary btn-mini" : "btn btn-primary btn-xs",
            content += "<div class='bootstro-nav-wrapper'>",
            nextButton = $el.attr("data-bootstro-nextButton") ? $el.attr("data-bootstro-nextButton") : $el.attr("data-bootstro-nextButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-next-btn">' + $el.attr("data-bootstro-nextButtonText") + "</button>" : "undefined" != typeof settings.nextButton ? settings.nextButton : '<button class="' + defaultBtnClass + ' bootstro-next-btn">' + settings.nextButtonText + "</button>",
            prevButton = $el.attr("data-bootstro-prevButton") ? $el.attr("data-bootstro-prevButton") : $el.attr("data-bootstro-prevButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-prev-btn">' + $el.attr("data-bootstro-prevButtonText") + "</button>" : "undefined" != typeof settings.prevButton ? settings.prevButton : '<button class="' + defaultBtnClass + ' bootstro-prev-btn">' + settings.prevButtonText + "</button>",
            finishButton = $el.attr("data-bootstro-finishButton") ? $el.attr("data-bootstro-finishButton") : $el.attr("data-bootstro-finishButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-finish-btn">' + $el.attr("data-bootstro-finishButtonText") + "</button>" : "undefined" != typeof settings.finishButton ? settings.finishButton : '<button class="' + defaultBtnClass + ' bootstro-finish-btn">' + settings.finishButtonText + "</button>",
            1 != count && (0 == i ? content += nextButton : i == count - 1 ? content += prevButton : content = content + nextButton + prevButton),
            content += "</div>",
            content = content + '<div class="bootstro-finish-btn-wrapper">' + finishButton + "</div>"
        }
        var $elements, count, settings, activeIndex = null, bootstrapVersion = 3, defaults = {
            nextButtonText: "Next &raquo;",
            prevButtonText: "&laquo; Prev",
            finishButtonText: '<i class="icon-ok"></i> Great, thanks for the info!',
            stopOnBackdropClick: !0,
            stopOnEsc: !0,
            onExit: function(params) {
                $.get("/cp/account/api/action/disableDashboardWalkthrough/ajax/1")
            },
            margin: 100
        };
        process_items = function(popover) {
            var selectorArr = [];
            return $.each(popover, function(t, e) {
                $.each(e, function(j, attr) {
                    $(e.selector).attr("data-bootstro-" + j, attr)
                }),
                $(e.selector).is(":visible") && selectorArr.push(e.selector)
            }),
            selectorArr.join(",")
        }
        ,
        get_element = function(i) {
            return $elements.filter("[data-bootstro-step=" + i + "]").size() > 0 ? $elements.filter("[data-bootstro-step=" + i + "]") : $elements.eq(i)
        }
        ,
        get_popup = function(i) {
            var p = {}
              , $el = get_element(i)
              , t = "";
            count > 1 && (t = "<span class='label label-success'>" + (i + 1) + "/" + count + "</span>"),
            p.title = $el.attr("data-bootstro-title") || "",
            "" != p.title && "" != t ? p.title = t + " - " + p.title : "" == p.title && (p.title = t),
            p.content = $el.attr("data-bootstro-content") || "",
            p.content = add_nav_btn(p.content, i),
            p.placement = $el.attr("data-bootstro-placement") || "top";
            var style = "";
            return $el.attr("data-bootstro-width") && (p.width = $el.attr("data-bootstro-width"),
            style = style + "width:" + $el.attr("data-bootstro-width") + ";"),
            $el.attr("data-bootstro-height") && (p.height = $el.attr("data-bootstro-height"),
            style = style + "height:" + $el.attr("data-bootstro-height") + ";"),
            p.trigger = "manual",
            p.html = $el.attr("data-bootstro-html") || "top",
            $el.attr("data-bootstro-container") && (p.container = $el.attr("data-bootstro-container")),
            p.template = '<div class="popover" style="' + style + '"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
            p
        }
        ,
        bootstro.destroy_popover = function(i) {
            var i = i || 0;
            if ("all" != i) {
                var $el = get_element(i);
                $el.popover("destroy").removeClass("bootstro-highlight")
            }
        }
        ,
        bootstro.stop = function() {
            bootstro.destroy_popover(activeIndex),
            bootstro.unbind(),
            $("div.bootstro-backdrop").remove(),
            "function" == typeof settings.onExit && settings.onExit.call(this, {
                idx: activeIndex
            })
        }
        ,
        bootstro.go_to = function(idx) {
            if (bootstro.destroy_popover(activeIndex),
            0 != count) {
                var p = get_popup(idx)
                  , $el = get_element(idx);
                $el.popover(p).popover("show");
                var docviewTop = $(window).scrollTop()
                  , top = Math.min($(".popover.in").offset().top, $el.offset().top)
                  , topDistance = top - docviewTop;
                topDistance < settings.margin ? $("html,body").animate({
                    scrollTop: top - settings.margin
                }, "slow") : is_entirely_visible($(".popover.in")) && is_entirely_visible($el) || $("html,body").animate({
                    scrollTop: top - settings.margin
                }, "slow"),
                $el.addClass("bootstro-highlight"),
                activeIndex = idx
            }
        }
        ,
        bootstro.next = function() {
            activeIndex + 1 == count ? "function" == typeof settings.onComplete && settings.onComplete.call(this, {
                idx: activeIndex
            }) : (bootstro.go_to(activeIndex + 1),
            "function" == typeof settings.onStep && settings.onStep.call(this, {
                idx: activeIndex,
                direction: "next"
            }))
        }
        ,
        bootstro.prev = function() {
            0 == activeIndex || (bootstro.go_to(activeIndex - 1),
            "function" == typeof settings.onStep && settings.onStep.call(this, {
                idx: activeIndex,
                direction: "prev"
            }))
        }
        ,
        bootstro._start = function(selector) {
            selector = selector || ".bootstro",
            $elements = $(selector),
            count = $elements.size(),
            count > 0 && 0 === $("div.bootstro-backdrop").length && ($('<div class="bootstro-backdrop"></div>').appendTo("body"),
            bootstro.bind(),
            bootstro.go_to(0))
        }
        ,
        bootstro.start = function(selector, options) {
            settings = $.extend(!0, {}, defaults),
            $.extend(settings, options || {}),
            "undefined" != typeof settings.url ? $.ajax({
                url: settings.url,
                success: function(data) {
                    if (data.success) {
                        var popover = data.result;
                        selector = process_items(popover),
                        bootstro._start(selector)
                    }
                }
            }) : "undefined" != typeof settings.items ? bootstro._start(process_items(settings.items)) : bootstro._start(selector)
        }
        ,
        bootstro.set_bootstrap_version = function(ver) {
            bootstrapVersion = ver
        }
        ,
        bootstro.bind = function() {
            bootstro.unbind(),
            $("html").on("click.bootstro", ".bootstro-next-btn", function(e) {
                return bootstro.next(),
                e.preventDefault(),
                !1
            }),
            $("html").on("click.bootstro", ".bootstro-prev-btn", function(e) {
                return bootstro.prev(),
                e.preventDefault(),
                !1
            }),
            $("html").on("click.bootstro", ".bootstro-finish-btn", function(e) {
                e.preventDefault(),
                bootstro.stop()
            }),
            settings.stopOnBackdropClick && $("html").on("click.bootstro", "div.bootstro-backdrop", function(e) {
                $(e.target).hasClass("bootstro-backdrop") && bootstro.stop()
            }),
            $(document).on("keydown.bootstro", function(e) {
                var code = e.keyCode ? e.keyCode : e.which;
                39 == code || 40 == code ? bootstro.next() : 37 == code || 38 == code ? bootstro.prev() : 27 == code && settings.stopOnEsc && bootstro.stop()
            })
        }
        ,
        bootstro.unbind = function() {
            $("html").unbind("click.bootstro"),
            $(document).unbind("keydown.bootstro")
        }
    }(window.bootstro = window.bootstro || {}, jQuery)
});
