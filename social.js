Feed.prototype.social_init = function(user_id, admin) {
    this.user_id = user_id,
    this.admin = admin,
    Feed.prototype.social_like = function(type, id) {
        $.ajax({
            url: "/cp/social/like/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && ("community_post" == type ? this.retrieve_thread(data.locator_id + "_community").success(function(thread) {
                this.update_thread_display(thread)
            }) : $("#" + id + "_reply_likes_total").html(data.likes_balance))
        })
    }
    ,
    Feed.prototype.social_dislike = function(type, id) {
        $.ajax({
            url: "/cp/social/dislike/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && ("community_post" == type ? this.retrieve_thread(data.locator_id + "_community").success(function(thread) {}) : $("#" + id + "_reply_likes_total").html(data.likes_balance))
        })
    }
    ,
    Feed.prototype.set_post_spam = function(item_id) {
        self = this,
        $.msgbox("Is this message spam?", {
            type: "confirm",
            buttons: [{
                type: "submit",
                value: "Yes"
            }, {
                type: "cancel",
                value: "No"
            }]
        }, function(result) {
            "Yes" == result && (self.admin === !0 ? self.social_confirmSpam("community_post", item_id) : self.social_markSpam("community_post", item_id))
        })
    }
    ,
    Feed.prototype.set_reply_spam = function(item_id) {
        self = this,
        $.msgbox("Is this reply spam?", {
            type: "confirm",
            buttons: [{
                type: "submit",
                value: "Yes"
            }, {
                type: "cancel",
                value: "No"
            }]
        }, function(result) {
            return "Yes" == result ? 1 === self.admin ? self.social_confirmSpam("community_reply", item_id) : self.social_markSpam("community_reply", item_id) : void 0
        })
    }
    ,
    Feed.prototype.social_markSpam = function(type, id) {
        return $.ajax({
            url: "/cp/social/markSpam/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && this.retrieve_thread(data.locator_id + "_community").success(function(thread) {
                this.update_thread_display(thread)
            })
        })
    }
    ,
    this.admin === !0 && (Feed.prototype.social_confirmSpam = function(type, id) {
        return $.ajax({
            url: "/cp/social/confirmSpam/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && this.retrieve_thread(data.locator_id + "_community").success(function(thread) {
                this.update_thread_display(thread)
            })
        })
    }
    ,
    Feed.prototype.social_disconfirmSpam = function(type, id) {
        return $.ajax({
            url: "/cp/social/disconfirmSpam/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && this.retrieve_thread(data.locator_id + "_community").success(function(thread) {
                this.update_thread_display(thread)
            })
        })
    }
    ,
    Feed.prototype.social_adminApproveGuide = function() {
        console.log("admin approve"),
        type = $("#guide_post_type").val(),
        id = $("#guide_post_id").val(),
        module_id = $("[name=guide-course-search-module-id]").val(),
        prev_guide = $(".approve-guide-form-options .prev-guide-id").val(),
        edit_only = $("#guide_edit_only").val(),
        "" == $("#guideCourseSearchDropdown").val() && (module_id = ""),
        "" === module_id || "0" == module_id ? (module_id = !1,
        topic = $("#guide_topic").val(),
        difficulty = $("#guide_difficulty").val()) : (topic = !1,
        difficulty = !1),
        length = $("#guide_length").val(),
        postData = {
            module_id: module_id,
            length: length,
            topic: topic,
            difficulty: difficulty,
            prev_guide: prev_guide
        },
        postData.social_image = $("#guide_social_image").val(),
        "true" === edit_only ? $.ajax({
            url: "/cp/community/edit_guide_details/id/" + id,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0
        }) : $.ajax({
            url: "/cp/social/approve/type/" + type + "/id/" + id,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0 && $("#" + id + "_reply_approve").addClass("active")
        })
    }
    ,
    Feed.prototype.social_adminApprove = function(type, id) {
        if ("community_post" == type) {
            if (index = this.data.find_index_of(function() {
                return this.id == id + "_community"
            }),
            void 0 !== index)
                return void 0 !== this.data[index].thread && "1" == this.data[index].thread.post.guide ? ($("#guide_edit_only").val(!1),
                $("#modalGuideApproval").modal("show"),
                this.setup_guide_approval(this.data[index].thread.post, !1, type, id),
                {
                    success: function() {}
                }) : void 0 !== this.data[index].fields && void 0 !== this.data[index].fields.guide && 1 == this.data[index].fields.guide[0] ? ($("#guide_edit_only").val(!1),
                $("#modalGuideApproval").modal("show"),
                this.setup_guide_approval(this.data[index].fields, !0, type, id),
                {
                    success: function() {}
                }) : $.ajax({
                    url: "/cp/social/approve/type/" + type + "/id/" + id,
                    dataType: "json",
                    context: this
                }).success(function(data) {
                    data.success === !0
                })
        } else if ("community_reply" == type)
            return $.ajax({
                url: "/cp/social/approve/type/" + type + "/id/" + id,
                dataType: "json",
                context: this
            }).success(function(data) {
                data.success === !0 && $("#" + id + "_reply_approve").addClass("active")
            })
    }
    ,
    Feed.prototype.social_adminEditGuideDetails = function(type, id) {
        return "community_post" == type && (index = this.data.find_index_of(function() {
            return this.id == id + "_community"
        }),
        void 0 !== index) ? void 0 !== this.data[index].thread && "1" == this.data[index].thread.post.guide ? ($("#guide_edit_only").val(!0),
        $("#modalGuideApproval").modal("show"),
        this.setup_guide_approval(this.data[index].thread.post, !1, type, id),
        {
            success: function() {}
        }) : void 0 !== this.data[index].fields && void 0 !== this.data[index].fields.guide && 1 == this.data[index].fields.guide[0] ? ($("#guide_edit_only").val(!0),
        $("#modalGuideApproval").modal("show"),
        this.setup_guide_approval(this.data[index].fields, !0, type, id),
        {
            success: function() {}
        }) : ($.msgbox("Error Encountered"),
        {
            success: function() {}
        }) : void 0
    }
    ,
    Feed.prototype.get_prev_guide_id = function(id) {}
    ,
    Feed.prototype.setup_guide_approval = function(postData, is_cloud, type, id) {
        $("#guide_social_image").val(""),
        $("#thisItemId").val(parseInt(id)),
        $("#thisItemType").val("community_post"),
        $(".guide_image_chooser").empty(),
        void 0 !== this.associations && this.associations.module_list.length > 0 && $.each(this.associations.module_list, function(id, title) {
            void 0 !== title && $("#courseList").append('<option value="' + id + '">' + title + "</option>")
        }),
        void 0 !== this.associations && this.associations.nugget_list.length > 0 && $.each(this.associations.nugget_list, function(id, title) {
            void 0 !== title && $("#nuggetList").append('<option value="' + id + '">' + title + "</option>")
        }),
        void 0 !== this.associations && this.associations.lab_list.length > 0 && $.each(this.associations.lab_list, function(id, title) {
            void 0 !== title && $("#selfPacedLabList").append('<option value="' + id + '">' + title + "</option>")
        }),
        $("#tag-group").empty(),
        $("#link-group").empty(),
        $.ajax({
            url: "/cp/admin/tagAPI/action/get/id/" + parseInt(id) + "/type/community_post",
            dataType: "json",
            context: this
        }).success(function(data) {
            $.each(data, function(index, tag) {
                $("#tag-group").append('<span class="label label-info"><span class="fa fa-tag removable-tag" data-value="' + tag.id + '"></span>' + tag.tag + "</span>")
            }),
            $(".removable-tag").unbind("click"),
            $(".removable-tag").click(function() {
                var id = $(this).attr("data-value");
                $.get("/cp/admin/tagAPI/action/delete/id/" + id),
                $(this).parents(".label-info").remove()
            })
        }),
        $.ajax({
            url: "/cp/admin/itemLinkAPI/action/get/item_id/" + parseInt(id) + "/item_type/community_post",
            dataType: "json",
            context: this
        }).success(function(data) {
            $.each(data, function(index, item) {
                $("#link-group").append('<span class="label label-info"><span class="fa fa-' + item.icon + ' removable-link" data-value="' + item.linkId + '">' + item.title + "</span>")
            }),
            $(".removable-link").unbind("click"),
            $(".removable-link").click(function() {
                var id = $(this).attr("data-value");
                $.get("/cp/admin/itemLinkAPI/action/delete/id/" + id),
                $(this).parents(".label-info").remove()
            })
        }),
        this.populate_approve_related_guide_list(),
        is_cloud ? (void 0 !== postData.module_id && void 0 !== this.associations ? ($("#guideCourseSearchDropdown").val(this.associations.find_module(postData.module_id[0])),
        $("[name=guide-course-search-module-id]").val(postData.module_id[0])) : ($("#guideCourseSearchDropdown").val(""),
        $("[name=guide-course-search-module-id]").val(null)),
        void 0 !== postData.length ? $("#guide_length").val(postData.length[0]) : $("#guide_length").val(null),
        void 0 !== postData.category ? (category_id = $("#guide_topic option:contains(" + postData.category[0] + ")").val(),
        $("#guide_topic").val(category_id)) : $("#guide_topic").val(null),
        void 0 !== postData.difficulty ? $("#guide_difficulty").val(postData.difficulty[0]) : $("#guide_difficulty").val(null),
        void 0 !== postData.social_image ? $("#guide_social_image").val(postData.social_image[0]) : $("#guide_social_image").val(null)) : (null !== postData.module_id && void 0 !== this.associations ? ($("#guideCourseSearchDropdown").val(this.associations.find_module(postData.module_id)),
        $("[name=guide-course-search-module-id]").val(postData.module_id)) : ($("#guideCourseSearchDropdown").val(""),
        $("[name=guide-course-search-module-id]").val(null)),
        void 0 !== postData.length ? $("#guide_length").val(postData.length) : $("#guide_length").val(null),
        null !== postData.category_id ? $("#guide_topic").val(postData.category_id) : $("#guide_topic").val(null),
        null !== postData.difficulty_level ? $("#guide_difficulty").val(postData.difficulty_level) : $("#guide_difficulty").val(null),
        null !== postData.social_image ? $("#guide_social_image").val(postData.social_image) : $("#guide_social_image").val(null)),
        $("#guide_social_image").off("click"),
        self = this,
        $("#guide_social_image").on("click", function() {
            self.social_admin_show_images(id)
        }),
        $("#guide_post_type").val(type),
        $("#guide_post_id").val(id)
    }
    ,
    Feed.prototype.social_admin_show_images = function(id) {
        mstMediaLibrary = $("#mst-media-library").html(),
        $("#modalGuideApproval .guide_image_chooser").empty(),
        $("#modalGuideApproval .image-browser").removeClass("hidden"),
        $.ajax({
            url: "/cp/socialize/getPostLinks/id/" + id,
            context: this,
            dataType: "json"
        }).success(function(data) {
            $("#modalGuideApproval .image-browser")[0].data = data,
            $.each(data.uploads, function(index, file) {
                switch (file.file_type) {
                case "image/png":
                case "image/jpeg":
                case "image/gif":
                    file_icon = '<img src="' + file.s3_url + '_250.jpg" />';
                    break;
                default:
                    file_icon = '<i class="fa fa-file-text" aria-hidden="true"></i>'
                }
                file_url = file.s3_url,
                file_rendered = $(Mustache.render(mstMediaLibrary, {
                    file_icon: file_icon,
                    file_url: file_url,
                    file_name: file.file_name,
                    id: index
                })),
                file_rendered.click(function(e) {
                    "" == e.target.id ? "" !== e.target.parentElement.id ? file_index = parseInt(e.target.parentElement.id) : file_index = parseInt(e.target.parentElement.parentElement.id) : file_index = parseInt(e.target.id),
                    context = $("#modalGuideApproval .image-browser")[0],
                    url = context.data.uploads[file_index].s3_url,
                    e.stopPropagation(),
                    e.preventDefault(),
                    $("#guide_social_image").val(url),
                    $("#modalGuideApproval .image-browser").addClass("hidden")
                }),
                $("#modalGuideApproval .guide_image_chooser").append(file_rendered)
            })
        }),
        $("#modalGuideApproval .manual-image-url-entry").off("click"),
        $("#modalGuideApproval .manual-image-url-entry").click(function() {
            $("#guide_social_image").val($("#manual-image-url").val()),
            $("#modalGuideApproval .image-browser").addClass("hidden")
        })
    }
    ,
    Feed.prototype.social_adminUnApprove = function(type, id) {
        return $.ajax({
            url: "/cp/social/unApprove/type/" + type + "/id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && $("#" + id + "_reply_approve").removeClass("active")
        })
    }
    )
}
;
