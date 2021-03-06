function updateDeckCount() {
    $(".video-page-deck").each(function(index, element) {
        id = element.id.slice(12);
        var deckLength = $("#module-deck_" + id + " .notecard-display .notecard-container").length;
        $("#module-deck_" + id + " .total-card-count").html(deckLength),
        0 != deckLength ? $("#module-deck_" + id + " .vl-current-card").html("1") : $("#module-deck_" + id + " .vl-current-card").html("0")
    })
}
function attachCarouselHandler() {
    $(".left").click(function(e) {
        id = $(e.currentTarget).parents(".video-page-deck").attr("id").slice(12);
        var currentCard = parseInt($("#module-deck_" + id + " .vl-current-card").html())
          , totalCount = parseInt($("#module-deck_" + id + " .total-card-count").html());
        1 == currentCard && totalCount > 0 ? $("#module-deck_" + id + "  .vl-current-card").html(totalCount) : totalCount >= currentCard && totalCount > 0 && $("#module-deck_" + id + " .vl-current-card").html(currentCard - 1)
    }),
    $(".right").click(function(e) {
        id = $(e.currentTarget).parents(".video-page-deck").attr("id").slice(12);
        var currentCard = parseInt($("#module-deck_" + id + " .vl-current-card").html())
          , totalCount = parseInt($("#module-deck_" + id + " .total-card-count").html());
        currentCard == totalCount && totalCount > 0 ? $("#module-deck_" + id + " .vl-current-card").html("1") : totalCount > currentCard && totalCount > 0 && $("#module-deck_" + id + " .vl-current-card").html(currentCard + 1)
    })
}
function attachPopDeckHandler() {
    $(".sidebar-heading .nav-option").click(function() {
        $(this).hasClass("active") || ($(this).hasClass("pop-decks") ? ($(this).siblings(".pop-cards").removeClass("active"),
        $(this).addClass("active"),
        $(".popular-card-row").css("display", "none"),
        $(".deck-row").css("display", "block")) : $(this).hasClass("pop-cards") && ($(this).siblings(".pop-decks").removeClass("active"),
        $(this).addClass("active"),
        $(".deck-row").css("display", "none"),
        $(".popular-card-row").css("display", "block")))
    })
}
function attachOptionsHandler(prefix) {
    $(prefix + ' [data-toggle="tooltip"]').tooltip();
    var optionsListShown = 0;
    $(prefix + " .notecard-options-menu").click(function() {
        0 == optionsListShown ? ($(".notecard-options-list").animate({
            top: 12,
            opacity: 1
        }),
        optionsListShown++) : 1 == optionsListShown && ($(".notecard-options-list").animate({
            top: -50,
            opacity: 0
        }),
        optionsListShown = 0)
    }),
    $(prefix + " .notecard-options-list i").click(function() {
        $(this).animate({
            color: "#1BB398"
        }, 100, function() {
            setTimeout(function() {
                $(".notecard-options-list").animate({
                    top: -50,
                    opacity: 0
                }),
                optionsListShown = 0
            }, 1e3)
        })
    }),
    $(prefix + " .notecard-options-list img").click(function() {
        $(this).animate({
            "background-color": "#1BB398"
        }, 100, function() {
            setTimeout(function() {
                $(".notecard-options-list").animate({
                    top: -50,
                    opacity: 0
                }),
                optionsListShown = 0
            }, 1e3)
        })
    })
}
$(document).ready(function() {
    var screenWidth = $(window).width();
    $(window).resize(function() {
        screenWidth = $(window).width()
    }),
    $(".notecard-display").siblings("div.p-x-0").hide(),
    $(".menu span:last-child").click(function() {
        $(".menu span").not(":last-child").toggleClass("hidden show")
    }),
    $.easing.custom = function(x, t, b, c, d) {
        var s = .50158;
        return (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    }
    ,
    $(".sidebar-nav-link").click(function() {
        $(this).hasClass("active") || ($(this).siblings(".sidebar-nav-link").removeClass("active"),
        $(this).addClass("active"),
        $(this).hasClass("js-note-cards") && screenWidth >= 992 ? ($(".vl-notes-section").animate({
            right: -600
        }, function() {
            $(".vl-notes-section").css("display", "none"),
            $(".note-card-section").css("right", "-600px"),
            $(".note-card-section").css("display", "block"),
            $(".note-card-section").animate({
                right: 0
            })
        }),
        $(".vl-download-section").animate({
            right: -600
        }, function() {
            $(".vl-download-section").css("display", "none"),
            $(".note-card-section").css("right", "-600px"),
            $(".note-card-section").css("display", "block"),
            $(".note-card-section").animate({
                right: 0
            })
        })) : $(this).hasClass("js-note-cards") && 992 > screenWidth ? ($(".vl-notes-section").css("display", "none"),
        $(".note-card-section").fadeIn(300),
        $(".vl-download-section").css("display", "none"),
        $(".note-card-section").fadeIn(300)) : $(this).hasClass("js-notes") && screenWidth >= 992 ? ($(".note-card-section").animate({
            right: -600
        }, function() {
            $(".note-card-section").css("display", "none"),
            $(".vl-notes-section").css("right", "-600px"),
            $(".vl-notes-section").css("display", "block"),
            $(".vl-notes-section").animate({
                right: 0
            })
        }),
        $(".vl-download-section").animate({
            right: -600
        }, function() {
            $(".vl-download-section").css("display", "none"),
            $(".vl-notes-section").css("right", "-600px"),
            $(".vl-notes-section").css("display", "block"),
            $(".vl-notes-section").animate({
                right: 0
            })
        })) : $(this).hasClass("js-notes") && 992 > screenWidth ? ($(".note-card-section").css("display", "none"),
        $(".vl-notes-section").fadeIn(300),
        $(".vl-download-section").css("display", "none"),
        $(".vl-notes-section").fadeIn(300)) : $(this).hasClass("js-downloads") && screenWidth >= 992 ? ($(".note-card-section").animate({
            right: -600
        }, function() {
            $(".note-card-section").css("display", "none"),
            $(".vl-download-section").css("right", "-600px"),
            $(".vl-download-section").css("display", "block"),
            $(".vl-download-section").animate({
                right: 0
            })
        }),
        $(".vl-notes-section").animate({
            right: -600
        }, function() {
            $(".vl-notes-section").css("display", "none"),
            $(".vl-download-section").css("right", "-600px"),
            $(".vl-download-section").css("display", "block"),
            $(".vl-download-section").animate({
                right: 0
            })
        })) : $(this).hasClass("js-downloads") && 992 > screenWidth && ($(".note-card-section").css("display", "none"),
        $(".vl-download-section").fadeIn(300),
        $(".vl-notes-section").css("display", "none"),
        $(".vl-download-section").fadeIn(300)))
    }),
    $("#vl-menu-icon img").click(function() {
        $("#vl-menu-icon img.top").toggleClass("transparent")
    }),
    $(function() {
        var $menu = $(".js-sidebar-column")
          , $content = $(".js-video-column");
        $(".toggle-button").click(function() {
            $menu.is(":visible") && $content.hasClass("col-md-8") ? ($menu.animate({
                right: -($menu.outerWidth() + 10)
            }, function() {
                $menu.hide(1e3)
            }),
            $content.removeClass("col-md-8").addClass("col-md-12")) : ($menu.show(500).animate({
                right: 0
            }),
            $content.removeClass("col-md-12").addClass("col-md-8")),
            $content.hasClass("col-md-12") && $menu.is(":hidden") && ($menu.animate({
                right: 0
            }, function() {
                $menu.show(1e3)
            }),
            $content.removeClass("col-md-12").addClass("col-md-8"))
        }),
        $(".bs-tooltip").tooltip()
    })
});
