function users_menu(obj) {
    return Mustache.render(mstUserTypeahead, obj)
}
function link_users_menu(obj) {
    return obj.username_uri = encodeURIComponent(obj.username),
    Mustache.render(mstLinkUserTypeahead, obj)
}
function run_search() {
    search_type = $(".search-form [name=type]:checked").val(),
    "type-users" == search_type && (input = $(".community-search-holder .search-input").text(),
    window.location = "/cp/socialize/profile/user/" + input.slice(2).trim())
}
function hide_guide_options() {
    $(".guide-form-options").hide()
}
function show_guide_options() {
    $(".guide-form-options").show(),
    feeder.populate_related_guide_list()
}
function live_search() {
    input = $(".community-search-holder .search-input").text(),
    "@" == input.slice(0, 1) ? (search_type = "type-users" != $(".search-form [name=type]:checked").val()) && ($("[value=type-users]")[0].checked = !0,
    $(".search-form #type-users").click()) : ((search_type = "type-users" == $(".search-form [name=type]:checked").val()) && $(".search-form #type-posts").click(),
    feeder.search(input))
}
function initialize_user_search() {
    $(".community-search-holder .search-input").typeahead({
        hint: !1,
        highlight: !0,
        minLength: 2,
        menu_css: {
            top: "100%"
        }
    }, {
        name: "mention",
        display: "username",
        limit: 10,
        source: bloodHoundQuery,
        templates: {
            suggestion: link_users_menu
        }
    }),
    $(".community-search-holder .search-input").focus(),
    $(".community-search-holder .search-input").caret("pos", 1)
}
function setup_wysiwyg(element) {
    element.on("paste", function(e) {
        caret_pos = element.caret("pos"),
        $("#wysiwygPasteArea").val(null),
        $("#wysiwygPasteModal").modal("show"),
        $("#wysiwygPasteArea")[0].editor_element = e.currentTarget,
        $("#wysiwygPasteArea")[0].caret_pos = caret_pos,
        $("#wysiwygPasteCodeOption")[0].checked = !1,
        e.stopPropagation(),
        e.preventDefault()
    }),
    element[0].image_list = [],
    element.wysiwyg({
        toolbar: "bottom-focus",
        buttons: {
            insertimage: {
                title: "Insert new image",
                image: "",
                showselection: !0
            },
            insertvideo: {
                title: "Insert new video",
                image: "",
                showselection: !0
            },
            mediaLibrary: {
                title: "Media Library",
                image: "",
                showstatic: !0,
                popup: function($popup, $button) {
                    mstMediaLibrary = $("#mst-media-library").html(),
                    context = {
                        popup: $popup,
                        button: $button,
                        element: element,
                        mst: mstMediaLibrary
                    },
                    $.ajax({
                        url: "/cp/socialize/mediaLibrary",
                        dataType: "json",
                        context: context
                    }).success(function(data) {
                        return context = this,
                        context.data = data,
                        data.length < 1 ? ($.msgbox("No Media in your Library yet"),
                        !1) : void $.each(data, function(index, file) {
                            switch (file.file_type) {
                            case "image/png":
                            case "image/jpeg":
                            case "image/gif":
                                file_icon = '<img src="' + file.s3_url + '_250.jpg" />';
                                break;
                            default:
                                file_icon = '<i class="fa fa-file-text" aria-hidden="true"></i>'
                            }
                            null !== file.width && file.width > 800 ? file_url = file.s3_url + "_800.jpg" : file_url = file.s3_url,
                            file_rendered = $(Mustache.render(context.mst, {
                                file_icon: file_icon,
                                file_url: file_url,
                                file_name: file.file_name,
                                id: index
                            })),
                            file_rendered.click(function(e) {
                                return "" == e.target.id ? "" !== e.target.parentElement.id ? file_index = parseInt(e.target.parentElement.id) : file_index = parseInt(e.target.parentElement.parentElement.id) : file_index = parseInt(e.target.id),
                                url = null !== context.data.width && context.data.width > 800 ? context.data[file_index].s3_url + "_800.jpg" : context.data[file_index].s3_url,
                                context.element.wysiwyg("shell").insertHTML('<img src="' + url + '" class="community-post-image" />'),
                                e.stopPropagation(),
                                e.preventDefault(),
                                context.element.wysiwyg("shell").closePopup(),
                                context.element[0].image_list.push(context.data[file_index].id),
                                !1
                            }),
                            context.popup.append(file_rendered)
                        })
                    })
                }
            },
            insertlink: {
                title: "Insert link",
                image: ""
            },
            paste: {
                title: "Paste",
                image: "",
                showstatic: !0,
                click: function() {
                    caret_pos = element.caret("pos"),
                    $("#wysiwygPasteArea").val(null),
                    $("#wysiwygPasteModal").modal("show"),
                    $("#wysiwygPasteArea")[0].editor_element = element,
                    $("#wysiwygPasteArea")[0].caret_pos = caret_pos,
                    $("#wysiwygPasteCodeOption")[0].checked = !1
                }
            },
            header: {
                title: "Style",
                image: "",
                popup: function($popup, $button) {
                    var list_headers = {
                        "<h5>Header 1</h5>": "<h5>",
                        "<h6>Header 2</h6>": "<h6>",
                        "<div>Normal</div>": "<div>",
                        "<p>Paragraph</p>": "<p>",
                        "{{ Code }}": "<pre>"
                    }
                      , $list = $("<div/>").addClass("wysiwyg-plugin-list").attr("unselectable", "on");
                    $.each(list_headers, function(name, format) {
                        var $link = $('<a class="popup-text-type btn"/>').attr("href", "#").css("font-family", format).html(name).click(function(event) {
                            return element.wysiwyg("shell").format(format).closePopup(),
                            element.find("pre").not("pre:has(code)").wrapInner("<code></code>"),
                            event.stopPropagation(),
                            event.preventDefault(),
                            !1
                        });
                        $list.append($link)
                    }),
                    $popup.append($list)
                }
            },
            bold: {
                title: "Bold (Ctrl+B)",
                image: "",
                hotkey: "b"
            },
            italic: {
                title: "Italic (Ctrl+I)",
                image: "",
                hotkey: "i"
            },
            underline: {
                title: "Underline (Ctrl+U)",
                image: "",
                hotkey: "u"
            },
            indent: {
                title: "Indent",
                image: "",
                showselection: !0
            },
            outdent: {
                title: "Outdent",
                image: "",
                showselection: !0
            },
            orderedList: {
                title: "Ordered list",
                image: "",
                showselection: !0
            },
            unorderedList: {
                title: "Unordered list",
                image: "",
                showselection: !0
            }
        },
        submit: {
            title: "Submit",
            image: ""
        },
        selectImage: "Click or drop image, under 2mb.",
        placeholderUrl: "www.example.com",
        placeholderEmbed: "<embed/>",
        onImageUpload: function(insert_image) {
            var image_insert = function(data) {
                data.image_info[0] > 800 ? (element.wysiwyg("shell").insertHTML('<img src="' + data.url + '_800.jpg" class="community-post-image" />'),
                element[0].image_list.push(data.id)) : (element.wysiwyg("shell").insertHTML('<img src="' + data.url + '" class="community-post-image" />'),
                element[0].image_list.push(data.id))
            }
              , iframe_name = "legacy-uploader-" + Math.random().toString(36).substring(2);
            $("<iframe>").attr("name", iframe_name).load(function() {
                var iframe = this
                  , iframedoc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow ? iframe.contentWindow.document : iframe.document
                  , iframebody = iframedoc.getElementsByTagName("body")[0]
                  , image_url = iframebody.innerHTML;
                "" != image_url && (data = JSON.parse(image_url),
                data.success === !0 ? image_insert(data) : $.msgbox(data.error),
                $(iframe).remove(),
                element.wysiwyg("shell").closePopup())
            }).appendTo(document.body);
            var $input = $(this);
            $input.attr("name", "userfile").parents("form").attr("action", "/cp/socialize/uploadImage").attr("method", "POST").attr("enctype", "multipart/form-data").attr("target", iframe_name).submit()
        },
        forceImageUpload: !0
    })
}
var cardHeight = null
  , bloodHoundQuery = null
  , mstUserTypeahead = $("#mst-user-typeahead").html();
Mustache.parse(mstUserTypeahead);
var mstLinkUserTypeahead = $("#mst-link-user-typeahead").html();
Mustache.parse(mstLinkUserTypeahead),
$(document).on("ready", function() {
    $("#wysiwygPasteModal #pasteContent").on("click", function() {
        console.log("paste"),
        element = $("#wysiwygPasteArea")[0].editor_element,
        caret_pos = $("#wysiwygPasteArea")[0].caret_pos,
        raw_content = $("#wysiwygPasteArea").val(),
        $(element).caret("pos", caret_pos),
        $("#wysiwygPasteCodeOption")[0].checked ? ($(element).wysiwyg("shell").insertHTML("<br>"),
        $(element).wysiwyg("shell").format("p"),
        $(element).wysiwyg("shell").format("pre"),
        content = "<code>" + raw_content.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>",
        $(element).wysiwyg("shell").insertHTML(content),
        $(element).wysiwyg("shell").insertHTML("<br>")) : ($(element).wysiwyg("shell").insertHTML("<br>"),
        $(element).wysiwyg("shell").format("p"),
        content = raw_content.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(\r\n|\n\r|\r|\n)/g, "</p><p>"),
        $(element).wysiwyg("shell").insertHTML(content))
    })
}),
$(document).ready(function() {
    function show_course_search() {
        $(".course-related-options").slideDown()
    }
    function hide_course_search() {
        $(".course-related-options").slideUp()
    }
    function show_achievement_options() {
        $(".achievement-form-options").slideDown()
    }
    function hide_achievement_options() {
        $(".achievement-form-options").slideUp()
    }
    $('[data-toggle="tooltip"]').tooltip(),
    $(".tooltipster").tooltipster({
        delay: 100,
        maxWidth: 340,
        speed: 300,
        interactive: !0,
        animation: "grow",
        trigger: "hover"
    }),
    $(".tooltipster").click(function(e) {
        e.preventDefault()
    }),
    $(".guide-dropdown-menu").on("click", ".show-more-guides", function(e) {
        feeder.populate_more_related_guide_list()
    }),
    $(".approve-guide-dropdown-menu").on("click", ".show-more-guides", function(e) {
        feeder.populate_approve_more_related_guide_list()
    }),
    $(document).on("click", ".bootstro-finish-btn", function() {
        $.ajax({
            url: "/cp/socialize/set_onboard/item/community"
        })
    }),
    bloodHoundQuery = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("username"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: "/cp/community_group/search_users/queries/%QUERY",
            wildcard: "%QUERY"
        }
    }),
    bloodHoundQuery.initialize(),
    $("#scrollable-dropdown-menu .typeahead").typeahead({
        hint: !1,
        highlight: !0,
        minLength: 2
    }, {
        name: "mention",
        display: "username",
        limit: 10,
        source: bloodHoundQuery,
        templates: {
            suggestion: users_menu
        }
    }),
    setup_wysiwyg($("#med"));
    var postType = $(".post-type-dropdown-menu li:nth-child(2)").text();
    $(".community-nav-menu ul li").on("click", "a", function() {
        $(this).hasClass("active") || ($(this).parents("li").siblings("li").children("a").removeClass("active"),
        $(this).addClass("active"))
    }),
    $("body").click(function() {
        $(".dd-menu").removeClass("active")
    }),
    $(".dd-menu ul li").each(function() {
        var delay = 50 * $(this).index() + "ms";
        $(this).css({
            "-webkit-transition-delay": delay,
            "-moz-transition-delay": delay,
            "-o-transition-delay": delay,
            "transition-delay": delay
        })
    }),
    $(".user-feed").on("click", ".general-post-menu-btn-holder .drop, .achievement-post-menu-btn-holder .drop", function(e) {
        e.stopPropagation(),
        $(this).next(".dd-menu").toggleClass("active")
    }),
    $(".user-feed").on("click", ".dd-menu", function(e) {
        feeder.parseMenu(this.id, e.target),
        $(".dd-menu").removeClass("active"),
        e.stopPropagation()
    }),
    $(".user-feed").on("focus", ".response-footer .wysiwyg-editor", function(e) {
        feeder.log = e,
        e.target.attributes.init !== !0 && (e.target.attributes.init = !0,
        $("#" + e.target.id).typeahead({
            hint: !1,
            highlight: !0,
            minLength: 2
        }, {
            name: "response-mention",
            display: "username",
            limit: 10,
            source: bloodHoundQuery,
            templates: {
                suggestion: users_menu
            }
        }),
        $("#" + e.target.id).focus())
    }),
    $(".subject-line").autosize({
        append: "\n"
    }).on("autosize.resized", function() {
        console.log(this)
    }),
    $(".user-feed").on("click", ".post-expand", function() {
        $(".response-footer textarea").autosize({
            append: "\n"
        })
    }),
    $(".user-feed").on("load", ".post-editor", function() {
        console.log("post-editor load")
    }),
    $(".user-feed").on("click", ".card .general-post-body .post-expand", function(e) {
        $(this).parents(".general-post-body").toggleClass("expanded"),
        postID = $(this).parents(".general-post-body").find(".general-post-default").attr("id").slice(5),
        feeder.retrieve_thread(postID)
    }),
    $(".user-feed").on("click", ".achievement-post-body .post-expand", function() {
        $(this).parents(".achievement-post-body").toggleClass("expanded"),
        postID = $(this).parents(".achievement-post-body").find(".achievement-post-default").attr("id").slice(5),
        feeder.retrieve_thread(postID)
    }),
    $(".user-feed").on("click", ".guide .general-post-body .post-expand", function() {
        feeder.scroll_enabled = !1,
        $(window).off("scroll"),
        $(".community-left-column").animate({
            left: "-500px",
            opacity: 0
        }, function() {
            $(this).css("display", "none")
        }),
        $(".community-right-column").animate({
            right: "-500px",
            opacity: 0
        }, function() {
            $(this).css("display", "none"),
            $(".community-middle-column").removeClass("border-left", "p-l-0"),
            $(".community-middle-column").addClass("width-100"),
            $("body").animate({
                scrollTop: 0
            }, 500),
            $("#return-to-top").fadeOut(200)
        }),
        feeder.hide_new_post_form(),
        feeder.hide_feed_controls(),
        feeder.hide_search(),
        $(this).closest(".guide").siblings(".card").hide(),
        $(this).closest(".guide").addClass("activeGuide"),
        $(".how-to-guide-back-arrow").css("display", "inline-block"),
        $(".how-to-guide-mark-complete-button").css("display", "inline-block"),
        $(".activeGuide .general-post-body .general-post-default").css("padding", "24px"),
        $(this).closest(".expand-card-msg").css("display", "none"),
        $(".how-to-guide-back-arrow").on("click", function() {
            feeder.scroll_enabled = !0,
            feeder.scroll_setup(),
            $(window).on("scroll"),
            $(window).scroll(function() {
                $(this).scrollTop() >= 500 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
            }),
            $(".how-to-guide-back-arrow").css("display", "none"),
            $(".community-left-column").css({
                left: "0",
                display: "block"
            }),
            $(".community-right-column").css({
                right: "0",
                display: "block"
            }),
            $(".community-middle-column").addClass("border-left", "p-l-0"),
            $(".community-middle-column").removeClass("width-100"),
            $(".community-left-column").animate({
                opacity: 1
            }),
            $(".community-right-column").animate({
                opacity: 1
            }),
            $(".activeGuide").siblings(".card").show(),
            $(".activeGuide .general-post-body").toggleClass("expanded"),
            $(".activeGuide .general-post-body .general-post-default").css("padding", "12px 16px"),
            $(".activeGuide").find(".expand-card-msg .post-expand").html("view this guide"),
            $(".activeGuide").find(".expand-card-msg").css("display", "block"),
            $(".activeGuide").removeClass("activeGuide"),
            feeder.show_new_post_form(),
            feeder.show_feed_controls(),
            feeder.show_search()
        })
    }),
    $(".user-feed").on("click", ".post-expand", function() {
        $(this).parents(".expanded").length > 0 ? ($(this).parents(".achievement-post-body").find(".expand-card-msg").children(".post-expand").html("shrink this post"),
        $(this).parents(".general-post-body").find(".expand-card-msg").children(".post-expand").html("shrink this post")) : ($(this).parents(".achievement-post-body").find(".expand-card-msg").children(".post-expand").html("expand this post"),
        $(this).parents(".general-post-body").find(".expand-card-msg").children(".post-expand").html("expand this post"))
    }),
    cardHeight = $(".general-post-body.expanded, .achievement-post-body.expanded").innerHeight(),
    $(".general-post-body.expanded .card-inner, .achievement-post-body.expanded .card-inner").css("max-height", cardHeight),
    $(".feed-post-prompt .feed-post-btn").on("click", function(e) {
        switch (share = {},
        share.subject = $(".feed-post-prompt .subject-line")[0].value,
        share.text = $(".feed-post-prompt .share-text").html(),
        share.post_type = "" == $(".post-type-dropdown .btn .post-type").val() ? $(".post-type-dropdown-menu li:nth-child(2)").text() : $(".post-type-dropdown .btn .post-type").val(),
        share.image_list = $(".feed-post-prompt .share-text")[0].image_list,
        share.prev_guide_id = $(".guide-form-options .prev-guide-id").val(),
        share.post_type) {
        case "Achievement":
            share.achievement = !0,
            "" != $("#cert_select").val() && (share.cert_id = parseInt($("#cert_select").val()),
            share.date = $(".achievement-form-options input[name=date]").val(),
            share.given_cert_id = $(".achievement-form-options input[name=given_cert_id]").val());
            break;
        case "Course Related":
            share.module_id = $(".course-related-options input[name=course-search-module-id]").val()
        }
        "" == $(".feed-post-prompt .subject-line")[0].value || "" == $(".feed-post-prompt .share-text").html() || "<br>" == $(".feed-post-prompt .share-text").html() ? $.msgbox("You must provide a subject and text") : (laloader.appendTo("#scrollable-dropdown-menu"),
        feeder.share(share).success(function(data) {
            data.success === !0 && (laloader.remove(),
            $(".feed-post-prompt .subject-line")[0].value = "",
            $(".feed-post-prompt .share-text").html(""),
            $(".post-type-dropdown .btn .post-type").text($(".post-type-dropdown-menu li:nth-child(2)").text()),
            $(".post-type-dropdown .btn .post-type").val($(".post-type-dropdown-menu li:nth-child(2)").text()),
            $(".guide-form-options .prev-guide-id").val(""),
            $(".guide-form-options .prev-guide").html("N/A"),
            hide_achievement_options(),
            hide_course_search(),
            $("#med").removeClass("guide-editor"))
        }))
    }),
    $(".search-input").focus(function() {
        $(this).parent().addClass("focus")
    }).blur(function() {
        $(this).parent().removeClass("focus")
    }),
    $(".community-search-holder .search-input").on("keydown", function(e) {
        e || (e = window.event),
        "Enter" == e.key && (run_search(),
        e.preventDefault())
    }),
    $(".post-type-dropdown-menu").on("click", "li", function() {
        $(".post-type-dropdown .btn .post-type").text($(this).text()),
        $(".post-type-dropdown .btn .post-type").val($(this).text()),
        ("Options" == $(".post-type-dropdown .btn .post-type").val() || "Admin Options" == $(".post-type-dropdown .btn .post-type").val()) && ($(".post-type-dropdown .btn .post-type").text($(".post-type-dropdown-menu li:nth-child(2)").text()),
        $(".post-type-dropdown .btn .post-type").val($(".post-type-dropdown-menu li:nth-child(2)").text())),
        postType = $(".post-type-dropdown .btn .post-type").val(),
        "Course Related" == postType ? (show_course_search(),
        hide_achievement_options(),
        $("#med").removeClass("guide-editor"),
        hide_guide_options()) : "Achievement" == postType ? (show_achievement_options(),
        hide_course_search(),
        $("#med").removeClass("guide-editor"),
        hide_guide_options()) : "Guide" == postType ? (hide_achievement_options(),
        hide_course_search(),
        $("#med").addClass("guide-editor"),
        feeder.insert_guide_template("#med"),
        show_guide_options()) : (hide_achievement_options(),
        hide_course_search(),
        $("#med").removeClass("guide-editor"),
        hide_guide_options())
    }),
    $(".feed-type-dropdown-menu").on("click", "li", function() {
        $(".feed-type-dropdown .btn .feed-type").text($(this).text()),
        $(".feed-type-dropdown .btn .feed-type").val($(this).text()),
        feeder.request_feed_data(parseInt(this.attributes.feedid.value))
    }),
    $(".feed-sorting-control").on("click", "li", function() {
        $(".feed-sorting-control .btn .feed-type").text($(this).text()),
        $(".feed-sorting-control .btn .feed-type").val($(this).text()),
        feeder.sort_by(this.value)
    }),
    $("[name=guide_course_name_query]").on("input", function() {
        matches = feeder.module_search($("[name=guide_course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 ? feeder.render_guide_module_matches(matches) : (matches = feeder.module_search($("[name=guide_course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 && feeder.render_guide_module_matches(matches))
    }),
    $("[name=guide_course_name_query]").on("click", function() {
        matches = feeder.module_search($("[name=guide_course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 ? feeder.render_guide_module_matches(matches) : (matches = feeder.module_search($("[name=guide_course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 && feeder.render_guide_module_matches(matches))
    }),
    $(".guide-course-search-dropdown-menu").on("click", "li", function() {
        $("[name=guide_course_name_query]").val($(this).text()),
        $("[name=guide-course-search-module-id]").val(this.attributes.value.value),
        thisItemType = $("#thisItemType").val(),
        thisItemId = $("#thisItemId").val(),
        linkedItemId = $("[name=guide-course-search-module-id]").val(),
        text = $("[name=guide_course_name_query]").val(),
        $.get("/cp/admin/itemLinkAPI/action/addBackLink/item_type/" + thisItemType + "/item_id/" + thisItemId + "/linked_item_type/module/linked_item_id/" + linkedItemId, function(id) {
            html = '<span class="label label-info"><span class="fa fa-book removable-link" data-value="' + id + '"></span>' + text + "</span>",
            $("#link-group").prepend(html),
            attachTagFunc()
        })
    }),
    $("#modalGuideApprovalButton").on("click", function() {
        feeder.social_adminApproveGuide()
    }),
    $("[name=course_name_query]").on("input", function() {
        matches = feeder.module_search($("[name=course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 ? feeder.render_module_matches(matches) : (matches = feeder.module_search($("[name=course_name_query]").val()),
        matches !== !1 && void 0 !== matches && matches.length > 0 && feeder.render_module_matches(matches))
    }),
    $(".course-search-dropdown-menu").on("click", "li", function() {
        $("[name=course_name_query]").val($(this).text()),
        $("[name=course-search-module-id]").val(this.attributes.value.value)
    }),
    $(".guide-dropdown-menu").on("click", "li", function() {
        $(".guide-dropdown .btn .prev-guide").text($(this).text()),
        $(".guide-form-options .prev-guide-id").val(this.attributes.value.value)
    }),
    $(".approve-guide-dropdown-menu").on("click", "li", function() {
        $(".approve-guide-form-options .btn .prev-guide").text($(this).text()),
        $(".approve-guide-form-options .prev-guide-id").val(this.attributes.value.value)
    }),
    $(".user-feed").on("click", ".general-post-options .social-interaction, .achievement-post-options .social-interaction, .reply-post-options .social-interaction", function(e) {
        switch (unformatted_id = this.id,
        interaction_type = this.attributes.type.value,
        interaction_type) {
        case "post_like":
            id = unformatted_id.slice(0, -15),
            "function" == typeof feeder.social_like && feeder.social_like("community_post", id);
            break;
        case "post_dislike":
            id = unformatted_id.slice(0, -18),
            "function" == typeof feeder.social_dislike && feeder.social_dislike("community_post", id);
            break;
        case "reply_like":
            id = parseInt(unformatted_id),
            "function" == typeof feeder.social_like && feeder.social_like("community_reply", id);
            break;
        case "reply_dislike":
            id = parseInt(unformatted_id),
            "function" == typeof feeder.social_dislike && feeder.social_dislike("community_reply", id);
            break;
        case "reply_spam":
            id = parseInt(unformatted_id),
            "function" == typeof feeder.set_reply_spam && feeder.set_reply_spam(id);
            break;
        case "reply_approve":
            console.log("approve reply"),
            id = parseInt(unformatted_id),
            "function" == typeof feeder.social_adminApprove && ($("#" + unformatted_id).hasClass("active") ? feeder.social_adminUnApprove("community_reply", id) : feeder.social_adminApprove("community_reply", id));
            break;
        case "reply_private":
            id = parseInt(unformatted_id),
            $("#" + unformatted_id).hasClass("active") ? feeder.make_reply_public(id) : feeder.make_reply_private(id)
        }
    }),
    $("[value=type-users]").length > 0 && $("[value=type-users]")[0].checked && initialize_user_search(),
    $(".search-form [name=type]").click(function(e) {
        console.log($("[value=type-users]")[0].checked),
        $("[value=type-users]")[0].checked ? (current_search = $(".community-search-holder .search-input").text(),
        "@" !== current_search.charAt(0) && $(".community-search-holder .search-input").text("@" + current_search),
        initialize_user_search()) : $(".community-search-holder .search-input").typeahead("destroy")
    }),
    $(".user-feed").on("click", ".feed-post-btn", function(e) {
        post_id = parseInt(this.id),
        reply = {},
        reply.post_id = post_id,
        reply.message = $("#" + post_id + "_community_reply").html(),
        "" == $("#" + post_id + "_community_reply").html() || "<br>" == $("#" + post_id + "_community_reply").html() ? $.msgbox("You must type a reply") : ($("#" + post_id + "_community_reply").html(""),
        feeder.reply(reply))
    }),
    $(".user-feed").on("click", ".feed-post-edit-btn", function(e) {
        action = e.target.innerHTML,
        id = parseInt(e.target.id),
        "Cancel" == action ? feeder.cancel_edit_post(id) : "Save" == action && (message = $("#" + id + "_post_edit").html(),
        image_list = $("#" + id + "_post_edit")[0].image_list,
        feeder.save_post(id, message, image_list))
    }),
    $(".user-feed").on("click", ".reply_edit", function(e) {
        element = $(e.target),
        post_id = parseInt(element.parents(".card").find(".dd-menu")[0].id.slice(8)),
        reply_id = parseInt(e.target.id),
        target_replacement = element.parent().parent().parent().find(".response-body"),
        feeder.edit_reply(reply_id, post_id, target_replacement)
    }),
    $(".user-feed").on("click", ".feed-reply-edit-btn", function(e) {
        action = e.target.innerHTML,
        id = parseInt(e.target.id),
        post_id = parseInt($(e.target).parents(".card").find(".dd-menu")[0].id.slice(8)),
        "Cancel" == action ? feeder.cancel_edit_reply(id, post_id) : "Save" == action && (message = $("#" + id + "_reply_edit").html(),
        feeder.save_reply(id, post_id, message))
    }),
    $(".user-feed").on("click", ".show-more-comments-link", function(e) {
        e.stopPropagation(),
        $("#" + this.id).parent().parent().siblings().removeClass("hidden"),
        $("#" + this.id).hide()
    }),
    $(".user-feed").on("click", ".username", function(e) {
        window.location = "/cp/socialize/profile/user/" + e.target.innerHTML.slice(1)
    }),
    $("#settingsModal").on("click", ".followed-item i", function(e) {
        id = e.target.parentElement.id.slice(0, -10),
        item_type = e.target.parentElement.attributes.type.value,
        feeder.unfollow(item_type, id)
    }),
    $("#settingsModal").on("click", "#achievement-filter-btn", function(e) {
        feeder.toggle_achievements().success(function() {})
    }),
    $(".sticky-post-module-list").on("click", ".sticky-post-btn", function(e) {
        $(this).parents("li").removeClass("restored-item").addClass("removed-item"),
        timeout_param = this,
        setTimeout(function() {
            $(timeout_param).parents("li").css("display", "none")
        }, 800, timeout_param),
        id = parseInt(this.id),
        feeder.makeUnsticky(parseInt(id))
    }),
    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
    }),
    $("#return-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })
});

