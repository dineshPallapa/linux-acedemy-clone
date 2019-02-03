Feed.prototype.share_init = function(user_data) {
    this.user_data = user_data,
    this.user_id = this.user_data.user_id,
    Feed.prototype.edit_post = function(item_id) {
        post_index = this.data.find_index_of(function() {
            return this.id == item_id + "_community"
        }),
        void 0 !== post_index && (post_data = this.data[post_index],
        void 0 !== post_data.thread ? message = post_data.thread.post.text : void 0 !== post_data.fields ? message = post_data.fields.description[0] : message = "",
        this.display_post_editor(item_id, message))
    }
    ,
    Feed.prototype.edit_reply = function(reply_id, post_id, target_element) {
        post_index = this.data.find_index_of(function() {
            return this.id == post_id + "_community"
        }),
        void 0 !== post_index && (post_data = this.data[post_index],
        void 0 !== post_data.thread ? (reply_index = post_data.thread.replies.find_index_of(function() {
            return this.id == reply_id
        }),
        void 0 !== reply_index ? message = post_data.thread.replies[reply_index].text : message = "") : message = "",
        this.display_reply_editor(reply_id, message, target_element))
    }
    ,
    Feed.prototype.save_post = function(id, message, image_list) {
        postData = {},
        postData.id = id,
        postData.message = message,
        postData.image_list = image_list,
        $.ajax({
            url: "/cp/community/edit_post",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && (message = data.message,
            this.update_edited_post(id, message.replace(/\n/g, "<br/>")),
            this.code_highlight())
        })
    }
    ,
    Feed.prototype.save_reply = function(id, post_id, message) {
        postData = {},
        postData.id = id,
        postData.message = message,
        $.ajax({
            url: "/cp/community/edit_reply",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && (message = data.message,
            this.update_edited_reply(id, post_id, message.replace(/\n/g, "<br/>")),
            this.code_highlight())
        })
    }
    ,
    Feed.prototype.share = function(data) {
        return postData = {},
        postData.message = data.text,
        postData.subject = data.subject,
        void 0 !== data.module_id && "" != data.module_id && (postData.module_id = parseInt(data.module_id)),
        void 0 !== data.achievement && (postData.achievement = !0),
        void 0 !== data.date && (postData.date = data.date),
        void 0 !== data.cert_id && (postData.cert_id = data.cert_id),
        void 0 !== data.given_cert_id && (postData.given_cert_id = data.given_cert_id),
        void 0 !== data.post_type && "Guide" == data.post_type && (postData.guide = !0),
        void 0 !== data.post_type && "Make an Announcement" == data.post_type && (postData.announcement = !0),
        console.log(data),
        void 0 !== data.image_list && (postData.image_list = data.image_list),
        "" != data.prev_guide_id && (postData.prev_guide_id = data.prev_guide_id),
        $.ajax({
            url: "/cp/community/share/ajax/1",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && (a = new Date,
            date = a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate()),
            render_obj = {},
            render_obj.post = {
                subject: postData.subject,
                message: postData.message,
                text: postData.message,
                id: data.id + "_community",
                first_name: this.user_data.first_name,
                last_name: this.user_data.last_name,
                username: this.user_data.username,
                likers: [],
                dislikers: [],
                instructor_approvals: 0,
                thread_likes: [],
                thread_dislikes: [],
                email: this.user_data.md5_email,
                sticky: 0,
                announcement: 0,
                gagged: 0,
                date: date
            },
            postData.achievement === !0 ? render_obj.post.achievement = 1 : render_obj.post.acheivement = 0,
            postData.guide === !0 ? render_obj.post.guide = 1 : render_obj.post.guide = 0,
            this.display_single_thread(render_obj, !0),
            "undefined" != typeof socialMedia && postData.achievement === !0 && (title = render_obj.post.subject,
            description = this.cleanDescription(render_obj.post.message),
            title_url = title.replace(/ /g, "-"),
            pub_url = "https://linuxacademy.com/community/posts/show/topic/" + data.id + "-" + title_url,
            message = "Celebrate this achievement with me and Linux Academy!",
            $.msgbox('<label class="social-media-label">Would you like to share your celebration on the following social websites?</label><div class="dialog-share-icons"></div>', {
                type: "confirm",
                buttons: [{
                    type: "cancel",
                    value: "Close"
                }]
            }),
            $(".jquery-msgbox-confirm").addClass("share_dialog"),
            socialMedia.share_all_available($(".dialog-share-icons")[0], {
                url: pub_url,
                message: message,
                title: title,
                description: description
            })))
        })
    }
    ,
    Feed.prototype.showMoreGuidesList = {},
    Feed.prototype.populate_related_guide_list = function() {
        postData = {
            continue_from: "initial"
        },
        $.ajax({
            url: this.controller + "/guides/user/" + this.user_data.username,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            this.showMoreGuidesList = data,
            $.each(data.hit, function(index, guide) {
                $(".guide-dropdown-menu").append('<li value="' + parseInt(guide.id) + '">' + guide.fields.title[0] + "</li>")
            }),
            data.found > data.cursor && $(".guide-dropdown-menu").append('<div class="show-more-guides">Show More...</div>')
        })
    }
    ,
    Feed.prototype.populate_more_related_guide_list = function() {
        postData = {
            continue_from: this.showMoreGuidesList.cursor
        },
        $.ajax({
            url: this.controller + "/guides/user/" + this.user_data.username,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            this.showMoreGuidesList.cursor = data.cursor,
            this.showMoreGuidesList.hit = this.showMoreGuidesList.hit.concat(data.hit),
            $.each(data.hit, function(index, guide) {
                $(".guide-dropdown-menu .show-more-guides").before('<li value="' + parseInt(guide.id) + '">' + guide.fields.title[0] + "</li>")
            }),
            data.found <= data.cursor && $(".guide-dropdown-menu .show-more-guides").hide()
        })
    }
    ,
    Feed.prototype.showMoreApproveGuidesList = {},
    Feed.prototype.populate_approve_related_guide_list = function() {
        postData = {
            continue_from: "initial"
        },
        $.ajax({
            url: this.controller + "/guides/admin/list",
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            this.showMoreApproveGuidesList = data,
            $.each(data.hit, function(index, guide) {
                $(".approve-guide-dropdown-menu").append('<li value="' + parseInt(guide.id) + '">' + guide.fields.title[0] + "</li>")
            }),
            data.found > data.cursor && $(".approve-guide-dropdown-menu").append('<div class="show-more-guides">Show More...</div>')
        })
    }
    ,
    Feed.prototype.populate_approve_more_related_guide_list = function() {
        postData = {
            continue_from: this.showMoreApproveGuidesList.cursor
        },
        $.ajax({
            url: this.controller + "/guides/admin/list",
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            this.showMoreApproveGuidesList.cursor = data.cursor,
            this.showMoreApproveGuidesList.hit = this.showMoreApproveGuidesList.hit.concat(data.hit),
            $.each(data.hit, function(index, guide) {
                $(".approve-guide-dropdown-menu .show-more-guides").before('<li value="' + parseInt(guide.id) + '">' + guide.fields.title[0] + "</li>")
            }),
            data.found <= data.cursor && $(".approve-guide-dropdown-menu .show-more-guides").hide()
        })
    }
    ,
    Feed.prototype.module_list = [],
    Feed.prototype.module_searching = !1,
    Feed.prototype.module_search = function(query, no_match_render) {
        return this.module_searching === !1 ? (this.module_searching = !0,
        this.module_list.length < 1 ? ($.ajax({
            url: this.controller + "/course_module_search",
            context: this,
            dataType: "json"
        }).success(function(data) {
            this.module_list = data,
            void 0 === this.associations && this.init_associations(data),
            ("undefined" == typeof no_match_render || no_match_render === !1) && (matches = this.query_module_list(query),
            matches !== !1 && void 0 !== matches && matches.length > 1 && this.render_module_matches(matches, query))
        }),
        !1) : this.query_module_list(query)) : void 0
    }
    ,
    Feed.prototype.query_module_list = function(query) {
        return matches = $.grep(this.module_list, function(elet) {
            return regex = new RegExp(query,"i"),
            elet.title.search(regex) >= 0
        }),
        this.module_searching = !1,
        matches
    }
    ,
    Feed.prototype.render_guide_module_matches = function(matches, query) {
        $(".guide-course-search-dropdown-menu").empty(),
        void 0 !== query && "" == query && $("[name=guide-course-search-module-id]").val(null),
        $.each(matches, function(index, match) {
            20 > index && $(".guide-course-search-dropdown-menu").append('<li value="' + match.id + '">' + match.title + "</li>")
        })
    }
    ,
    Feed.prototype.render_module_matches = function(matches, query) {
        $(".course-search-dropdown-menu").empty(),
        void 0 !== query && "" == query && $("[name=course-search-module-id]").val(null),
        $.each(matches, function(index, match) {
            20 > index && $(".course-search-dropdown-menu").append('<li value="' + match.id + '">' + match.title + "</li>")
        })
    }
    ,
    Feed.prototype.reply = function(reply_data) {
        return postData = {},
        postData.post_id = reply_data.post_id,
        postData.message = reply_data.message,
        $.ajax({
            url: "/cp/community/reply/ajax/1",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && (a = new Date,
            date = a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate()),
            reply = {
                md5_email: this.user_data.md5_email,
                first_name: this.user_data.first_name,
                last_name: this.user_data.last_name,
                date: date,
                date_as_obj: a,
                text: data.reply.text,
                displayed: "",
                privated: "",
                id: data.reply.id,
                likes_balance: 0,
                controller: self.controller,
                username: this.user_data.username,
                spam_active: "",
                approval_active: "",
                private_active: "",
                visible: data.reply.visible
            },
            rendered = this.render_single_reply(reply),
            $(rendered).hide().insertBefore("#post_" + reply_data.post_id + "_community ~ .card-inner .response-footer").slideDown(),
            post_index = this.data.find_index_of(function() {
                return this.id == data.reply.post_id + "_community"
            }),
            void 0 !== post_index && (post_data = this.data[post_index],
            void 0 !== post_data.thread && post_data.thread.replies.push(reply)))
        })
    }
    ,
    Feed.prototype.update_edited_post = function(id, message) {
        post_index = this.data.find_index_of(function() {
            return this.id == id + "_community"
        }),
        void 0 !== post_index && (post_data = this.data[post_index],
        void 0 !== post_data.thread && (post_data.thread.post.text = message),
        void 0 !== post_data.fields && (post_data.fields.description[0] = message),
        $("#post_" + id + "_community .post-body ").html(message))
    }
    ,
    Feed.prototype.update_edited_reply = function(reply_id, post_id, message) {
        post_index = this.data.find_index_of(function() {
            return this.id == post_id + "_community"
        }),
        void 0 !== post_index ? (post_data = this.data[post_index],
        void 0 !== post_data.thread ? (reply_index = post_data.thread.replies.find_index_of(function() {
            return this.id == reply_id
        }),
        void 0 !== reply_index ? post_data.thread.replies[reply_index].text = message : console.log("R not found")) : console.log("Thread data not found")) : console.log("P not found"),
        $("#" + reply_id + "_response_body").html(message)
    }
    ,
    Feed.prototype.cancel_edit_post = function(id) {
        post_index = this.data.find_index_of(function() {
            return this.id == id + "_community"
        }),
        void 0 !== post_index && (post_data = this.data[post_index],
        void 0 !== post_data.thread ? message = post_data.thread.post.text.replace(/\n/g, "<br/>") : void 0 !== post_data.fields ? message = post_data.fields.description[0].replace(/\n/g, "<br/>") : message = "",
        $("#post_" + id + "_community .post-body ").html(message))
    }
    ,
    Feed.prototype.cancel_edit_reply = function(reply_id, post_id) {
        post_index = this.data.find_index_of(function() {
            return this.id == post_id + "_community"
        }),
        void 0 !== post_index ? (post_data = this.data[post_index],
        void 0 !== post_data.thread ? (reply_index = post_data.thread.replies.find_index_of(function() {
            return this.id == reply_id
        }),
        void 0 !== reply_index ? message = post_data.thread.replies[reply_index].text.replace(/\n/g, "<br/>") : message = "") : message = "") : message = "",
        $("#" + reply_id + "_response_body").html(message)
    }
    ,
    Feed.prototype.display_post_editor = function(id, message) {
        $("#post_" + id + "_community").parent().hasClass("expanded") ? (this.mstPostEditForm = $("#mst-post-edit-form").html(),
        rendered = Mustache.render(this.mstPostEditForm, {
            id: id,
            text: message.replace(/\n/g, "<br/>")
        }),
        $("#post_" + id + "_community .post-body").html(rendered),
        setup_wysiwyg($("#" + id + "_post_edit"))) : ($("#post_" + id + "_community").parent().toggleClass("expanded"),
        this.retrieve_thread(id).success(function() {
            this.mstPostEditForm = $("#mst-post-edit-form").html(),
            rendered = Mustache.render(this.mstPostEditForm, {
                id: id,
                text: message.replace(/\n/g, "<br/>")
            }),
            $("#post_" + id + "_community .post-body").html(rendered),
            setup_wysiwyg($("#" + id + "_post_edit"))
        }))
    }
    ,
    Feed.prototype.display_reply_editor = function(id, text, target_element) {
        this.mstReplyEditForm = $("#mst-reply-edit-form").html(),
        rendered = Mustache.render(this.mstReplyEditForm, {
            id: id,
            text: text.replace(/\n/g, "<br/>")
        }),
        target_element.html(rendered),
        setup_wysiwyg($("#" + id + "_reply_edit"))
    }
}
,
Feed.prototype.init_associations = function(module_list) {
    Feed.prototype.associations = {
        nugget_list: [],
        find_nugget: function(id) {
            return void 0 !== this.nugget_list[id] ? this.nugget_list[id] : !1
        },
        lab_list: [],
        find_lab: function(id) {
            return void 0 !== this.lab_list[id] ? this.lab_list[id] : !1
        },
        module_list: [],
        find_module: function(id) {
            return void 0 !== this.module_list[id] ? this.module_list[id] : !1
        }
    },
    this.admin && ($.ajax({
        url: "/cp/nuggets/listNuggets",
        context: this,
        dataType: "json"
    }).success(function(data) {
        $.each(data, function(index, nugget) {
            Feed.prototype.associations.nugget_list[nugget.id] = nugget.title
        })
    }),
    $.ajax({
        url: "/cp/livelabs/listLabs",
        context: this,
        dataType: "json"
    }).success(function(data) {
        $.each(data, function(index, lab) {
            Feed.prototype.associations.lab_list[lab.id] = lab.title
        })
    })),
    $.each(module_list, function(index, module) {
        Feed.prototype.associations.module_list[module.id] = module.title
    })
}
;
