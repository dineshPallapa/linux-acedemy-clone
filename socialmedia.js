var SocialMedia = function() {
    this.LinkedIn = null,
    this.Twitter = null,
    this.FaceBook = null,
    this.GooglePlus = null,
    this.check_libs_loaded = function() {
        null !== this.LinkedIn && linkedInLoaded === !0 && (this.LinkedIn = new LinkedInWrapper)
    }
    ,
    this.share_all_available = function(element, options) {
        null !== this.LinkedIn && this.LinkedIn.create_button(element, options),
        null !== this.Twitter && this.Twitter.create_button(element, options),
        null !== this.FaceBook && this.FaceBook.create_button(element, options),
        null !== this.GooglePlus && this.GooglePlus.create_button(element, options)
    }
    ,
    this.requested = [],
    this.requested_libs_loaded = function() {
        for (i = 0; i < this.requested.length; i++)
            switch (request = this.requested[i],
            request) {
            case "LinkedIn":
                if (null == this.LinkedIn)
                    return !1;
                break;
            case "Twitter":
                if (null == this.Twitter)
                    return !1;
                break;
            case "FaceBook":
            case "Facebook":
                if (null == this.FaceBook)
                    return !1
            }
        return !0
    }
}
  , LinkedInWrapper = function() {
    this.payload = {},
    this.create_button = function(element, options) {
        html = $('<i class="fa fa-linkedin la-share-icons" aria-hidden="true" title="LinkedIn"></i>'),
        html[0].click_context = this,
        html[0].options = options,
        html.click(this.share_in_context_popup),
        $(element).append(html)
    }
    ,
    this.share_in_context_popup = function(e) {
        void 0 !== $.MsgBoxObject && $.MsgBoxObject.visible && ($.MsgBoxObject.overlay.hide(),
        $(".jquery-msgbox")[0].style.zIndex = 0),
        $("#linkedInModal").modal("show"),
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        $("#linkedInModal #linkedInComment").val(options.message),
        $("#linkedInModal .title").html(options.title),
        $("#linkedInModal .description").html(options.description.replace(/&amp;nbsp;/g, " ").replace(/&nbsp;/g, " ")),
        $("#linkedInModal #shareContent")[0].options = options,
        $("#linkedInModal #shareContent")[0].click_context = context,
        $("#linkedInModal #shareContent").click(context.share_in_context),
        $("#linkedInModal #cancelLinkedInShare").click(context.move_share_dialog_back)
    }
    ,
    this.move_share_dialog_back = function() {
        void 0 !== $.MsgBoxObject && $.MsgBoxObject.visible && ($.MsgBoxObject.overlay.show(),
        $(".jquery-msgbox")[0].style.zIndex = 1e4)
    }
    ,
    this.share_in_context = function(e) {
        void 0 !== $.MsgBoxObject && $.MsgBoxObject.visible && ($.MsgBoxObject.overlay.show(),
        $(".jquery-msgbox")[0].style.zIndex = 1e4),
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        options.message = $("#linkedInModal #linkedInComment").val(),
        func = context.share,
        func.call(context, options.url, options.title, options.message, options.description, options.imageUrl)
    }
    ,
    this.create_button_l = function(element, options) {
        html = $('<i class="fa fa-linkedin-square la-share-icons" aria-hidden="true"></i>'),
        html[0].click_context = this,
        html[0].options = options,
        html.click(this.share_in_context_l),
        $(element).append(html)
    }
    ,
    this.share_in_context_l = function(e) {
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        func = context.share,
        func.call(context, options.url, options.title, options.message, options.description, options.imageUrl)
    }
    ,
    this.share = function(url, title, message, description, imageUrl) {
        "undefined" != typeof url && "undefined" != typeof title && "undefined" != typeof message && (this.payload.content = {
            "submitted-url": url,
            title: title
        },
        "undefined" != typeof imageUrl && (this.payload.content["submitted-image-url"] = imageUrl),
        "undefined" != typeof description && 0 != description && "" != description && (this.payload.content.description = description),
        message += "",
        this.payload.comment = message,
        this.payload.visibility = {
            code: "anyone"
        },
        this.authenticated === !0 ? this.submit_data() : this.authenticate(this.submit_data))
    }
    ,
    this.submit_data = function() {
        IN.API.Raw("/people/~/shares?format=json").method("POST").body(JSON.stringify(this.payload)).result(function(data) {
            console.log(data)
        }).error(function(data) {
            console.log("error"),
            console.log(data)
        })
    }
    ,
    this.authenticated = function() {
        return IN.User.isAuthorized()
    }
    ,
    this.authenticate = function(callback) {
        IN.User.authorize(callback, this)
    }
}
  , TwitterWrapper = function() {
    this.create_button = function(element, options) {
        html = $('<i class="fa fa-twitter la-share-icons" aria-hidden="true" title="Twitter"></i>'),
        html[0].click_context = this,
        html[0].options = options,
        html.click(this.share_in_context),
        $(element).append(html)
    }
    ,
    this.share_in_context = function(e) {
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        func = context.share,
        func.call(context, options.url, options.message, e.currentTarget, options.image)
    }
    ,
    this.create_button_t = function(element, options) {
        twttr.widgets.createShareButton(options.url, element, {
            count: "none",
            text: options.message
        }).then(function(el) {})
    }
    ,
    this.share = function(url, message, element, image) {
        url_enc = encodeURIComponent(url),
        message_enc = encodeURIComponent(message),
        via_enc = encodeURIComponent("linuxacademyCOM"),
        intent_url = "https://twitter.com/intent/tweet?text=" + message_enc + "&url=" + url_enc + "&via=" + via_enc;
        var windowOptions = "scrollbars=yes,resizable=yes,toolbar=no,location=yes"
          , width = 550
          , height = 420
          , winHeight = screen.height
          , winWidth = screen.width;
        left = Math.round(winWidth / 2 - width / 2),
        from_top = 0,
        winHeight > height && (from_top = Math.round(winHeight / 2 - height / 2)),
        this.share_window = window.open(intent_url, "intent", windowOptions + ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + from_top)
    }
    ,
    this.authenticated = function() {}
}
  , FaceBookWrapper = function() {
    this.create_button = function(element, options) {
        html = $('<i class="fa fa-facebook la-share-icons" aria-hidden="true" title="Facebook"></i>'),
        html[0].click_context = this,
        html[0].options = options,
        html.click(this.share_in_context),
        $(element).append(html)
    }
    ,
    this.share_in_context = function(e) {
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        func = context.share,
        func.call(context, options.url, options.title)
    }
    ,
    this.payload = {},
    this.share = function(url, title) {
        this.payload.href = url,
        this.payload.method = "share",
        FB.ui(this.payload, this.response)
    }
    ,
    this.response = function(response) {}
}
  , GooglePlusWrapper = function() {
    this.create_button = function(element, options) {
        html = $('<i class="fa fa-google-plus-square la-share-icons" aria-hidden="true" title="Twitter"></i>'),
        html[0].click_context = this,
        html[0].options = options,
        html.click(this.share_in_context),
        $(element).append(html)
    }
    ,
    this.share_in_context = function(e) {
        context = e.currentTarget.click_context,
        options = e.currentTarget.options,
        func = context.share,
        func.call(context, options.url)
    }
    ,
    this.share = function(url) {
        url_enc = encodeURIComponent(url),
        message_enc = encodeURIComponent(message),
        via_enc = encodeURIComponent("linuxacademyCOM"),
        intent_url = "https://plus.google.com/share?url=" + url_enc;
        var windowOptions = "scrollbars=yes,resizable=yes,toolbar=no,location=yes"
          , width = 550
          , height = 420
          , winHeight = screen.height
          , winWidth = screen.width;
        left = Math.round(winWidth / 2 - width / 2),
        from_top = 0,
        winHeight > height && (from_top = Math.round(winHeight / 2 - height / 2)),
        this.share_window = window.open(intent_url, "intent", windowOptions + ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + from_top)
    }
};
