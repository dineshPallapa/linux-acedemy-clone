var Feed = function() {
    this.controller = "/cp/socialize",
    this.bookmarks_controller = "/cp/bookmarks/api",
    this.community_controller = "/cp/community",
    this.community_group_controller = "/cp/community_group",
    this.module_controller = "/cp/modules",
    this.notecard_controller = "/cp/flashcards",
    this.user_feeds = [],
    this.data = [],
    this.bookmarked_items = [],
    this.continue_from = "initial",
    this.sort = "trending6",
    this.direction = "desc",
    this.synced = !1,
    this.current_feed_index = 0,
    this.sorts = [["trending6", "trending"], ["updated_at", "recent replies"], ["pub_date", "recent posts"]],
    this.sticky_list = [],
    this.global_stickies = [],
    this.my_recent_activity = [],
    this.scroll_enabled = !0,
    this.setup = function(type, value, extra_query, startup_function) {
        this.mstFeedItem = $("#mst-feed-item").html(),
        Mustache.parse(this.mstFeedItem),
        this.mstSortType = $("#mst-sort-type").html(),
        Mustache.parse(this.mstSortType),
        this.mstFeedLink = $("#mst-feed-link").html(),
        Mustache.parse(this.mstFeedLink),
        this.mstRecentActivity = $("#mst-recent-activity").html(),
        Mustache.parse(this.mstRecentActivity),
        this.mstStickyPosts = $("#mst-sticky-posts").html(),
        Mustache.parse(this.mstStickyPosts),
        this.mstReplySection = $("#mst-reply-section").html(),
        Mustache.parse(this.mstReplySection),
        this.mstFeedItemAch = $("#mst-feed-item-achievement").html(),
        Mustache.parse(this.mstFeedItemAch),
        this.mstGlobalStickyPosts = $("#mst-admin-sticky-posts").html(),
        Mustache.parse(this.mstGlobalStickyPosts),
        this.mstFollowingItem = $("#mst-following-item").html(),
        Mustache.parse(this.mstFollowingItem),
        this.mstShowMoreComments = $("#mst-show-more-comments").html(),
        Mustache.parse(this.mstShowMoreComments),
        all_feed = {
            courses: [],
            users: [],
            achievements: null,
            announcements: !1,
            name: "All Posts",
            "static": !0
        },
        guide_feed = {
            courses: [],
            users: [],
            achievements: null,
            announcements: !1,
            guide: !0,
            name: "Guides",
            "static": !0
        },
        void 0 !== type && (static_feed = {
            courses: [],
            users: [],
            achievements: !1,
            announcements: !1,
            "static": !0
        },
        "course" == type || "module" == type ? (static_feed.name = "Course Feed",
        void 0 !== extra_query && extra_query !== !1 && (static_feed.query = extra_query),
        static_feed.courses.push({
            following: !0,
            module_id: value
        })) : "user" == type ? (static_feed.name = "User Feed",
        static_feed.achievements = !0,
        static_feed.users.push(value),
        this.mstTimelineComment = $("#mst-timeline-comment").html(),
        Mustache.parse(this.mstTimelineComment),
        this.mstTimelineAchievement = $("#mst-timeline-achievement").html(),
        Mustache.parse(this.mstTimelineAchievement),
        this.mstTimelineReply = $("#mst-timeline-reply").html(),
        Mustache.parse(this.mstTimelineReply),
        this.sort = "updated_at") : "community_post" == type && (static_feed.name = "Single Conversation",
        static_feed.sorting = !1,
        static_feed.community_post_id = [value],
        this.scroll_enabled = !1)),
        this.admin === !0 && (admin_feed = {
            name: "Admin Feed",
            sorting: !1
        },
        admin_no_replies = {
            name: "Admin No Replies",
            sorting: !1
        },
        admin_guides = {
            name: "Admin Guides",
            sorting: !1
        }),
        this.synced === !1 ? this.syncCourses().success(function(sync_status) {
            this.synced = !0,
            this.getFeeds().success(function(data) {
                this.user_feeds.push(all_feed),
                this.user_feeds.push(guide_feed),
                this.admin === !0 && (this.user_feeds.push(admin_feed),
                this.user_feeds.push(admin_no_replies),
                this.user_feeds.push(admin_guides)),
                void 0 !== data[0].default_feed && (default_feed_index = this.user_feeds.find_index_of(function() {
                    return this.name == data[0].default_feed
                }),
                void 0 !== default_feed_index && (this.current_feed_index = default_feed_index)),
                void 0 !== data[0].default_sort && (sort_index = this.sorts.find_index_of(function() {
                    return this[0] == data[0].default_sort
                }),
                void 0 !== sort_index && (this.sort = data[0].default_sort)),
                void 0 !== type && (this.user_feeds.push(static_feed),
                this.current_feed_index = this.user_feeds.length - 1,
                this.sort = "trending6"),
                this.current_feed().sorting === !1 ? this.hide_feed_sorting() : this.show_feed_sorting(),
                this.display_feed_links(),
                this.display_sorts(),
                this.retrieve_stickies(),
                this.retrieve_recent_activity(),
                this.getData().success(function() {
                    this.scroll_setup()
                }),
                "function" == typeof startup_function && startup_function.call(this)
            })
        }) : this.getFeeds().success(function() {
            "function" == typeof startup_function && startup_function.call(this)
        })
    }
    ,
    this.current_feed = function() {
        return this.user_feeds[this.current_feed_index]
    }
    ,
    this.get_user_bookmarks = function() {
        return void 0 === this.bookmarked_items.bookmarks ? $.ajax({
            method: "POST",
            dataType: "JSON",
            cache: !1,
            url: "/cp/bookmarks/api",
            data: {
                action: "getBookmarks"
            },
            context: this
        }).success(function(data) {
            this.bookmarked_items = data,
            userBookmarks = data;
            for (var j = 0; j < userBookmarks.length; j++) {
                var bookmarkId = userBookmarks[j].html_id;
                console.log(userBookmarks[j].html_id),
                $("#" + bookmarkId).find('.dd-menu ul li:contains("Bookmark this post")').text("Remove this bookmark")
            }
        }) : (return_object = {},
        feeder = this,
        return_object.success = function(anon_func) {
            anon_func.call(feeder)
        }
        ,
        return_object)
    }
    ,
    this.parse_user_bookmarks = function() {
        this.get_user_bookmarks().success(function() {
            if (this.bookmarked_items.bookmarks) {
                userBookmarks = this.bookmarked_items.bookmarks;
                for (var j = 0; j < userBookmarks.length; j++) {
                    var bookmarkId = userBookmarks[j].html_id;
                    $("#" + bookmarkId).find('.dd-menu ul li:contains("Bookmark this post")').text("Remove this bookmark")
                }
            }
        })
    }
    ,
    this.getFeeds = function() {
        return $.ajax({
            url: this.controller + "/feeds",
            dataType: "json",
            context: this
        }).success(function(data) {
            this.user_feeds = data,
            this.continue_from = "initial",
            this.update_user_stats()
        })
    }
    ,
    this.syncCourses = function() {
        return $.ajax({
            url: this.controller + "/sync",
            dataType: "json",
            context: this
        })
    }
    ,
    this.follow = function(type, value) {
        return current_feed = this.user_feeds[0],
        postData = {},
        postData.type = type,
        postData.value = value,
        void 0 === current_feed["static"] ? $.ajax({
            url: this.controller + "/follow/feed_order/0",
            data: postData,
            type: "post",
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && this.getFeeds()
        }) : {
            success: function() {}
        }
    }
    ,
    this.unfollow = function(type, value) {
        current_feed = this.user_feeds[0],
        postData = {},
        postData.type = type,
        postData.value = value,
        void 0 === current_feed["static"] && $.ajax({
            url: this.controller + "/unfollow/feed_order/0",
            dataType: "json",
            type: "post",
            data: postData,
            context: this
        }).success(function(data) {
            data.success === !0 && ($("#" + value.replace(/\./g, "\\2e ").replace(/@/g, "\\40 ") + "_following").remove(),
            this.getFeeds())
        })
    }
    ,
    this.bookmarkPost = function(id) {
        return postUrl = this.controller,
        postTitle = "Community Post",
        postContainerId = id + "_community_card",
        postLength = "00:00:00",
        postType = "Community Post",
        $("#" + postContainerId).hasClass("guide") && (postType = "Community Guide"),
        index = this.data.find_index_of(function() {
            return this.id == id + "_community"
        }),
        void 0 !== index && void 0 !== this.data[index].fields && (postUrl = void 0 !== this.data[index].fields.pub_url ? this.data[index].fields.pub_url[0] : "",
        postTitle = void 0 !== this.data[index].fields.title ? this.data[index].fields.title[0] : "",
        postLength = void 0 !== this.data[index].fields.length ? this.data[index].fields.length[0] : "00:00:00"),
        void 0 === postLength && (tmpPostLength = new Date(null),
        tmpPostLength.setSeconds(postLength),
        postLength = tmpPostLength.toISOString().substr(11, 8)),
        $.ajax({
            method: "POST",
            dataType: "JSON",
            cache: !1,
            url: this.bookmarks_controller,
            data: {
                action: "addBookmark",
                bookmarkTitle: postTitle,
                bookmarkUrl: postUrl,
                bookmarkDuration: postLength,
                bookmarkContentType: postType,
                bookmarkHtmlId: postContainerId
            }
        })
    }
    ,
    this.unbookmarkPost = function(id) {
        return postTitle = "Community Post",
        postContainerId = id + "_community_card",
        index = this.data.find_index_of(function() {
            return this.id == item_id + "_community"
        }),
        void 0 !== index && void 0 !== this.data[index].fields && (postTitle = void 0 !== this.data[index].fields.title ? this.data[index].fields.title[0] : ""),
        $.ajax({
            method: "POST",
            dataType: "JSON",
            cache: !1,
            url: this.bookmarks_controller,
            data: {
                action: "removeBookmark",
                bookmarkTitle: postTitle
            }
        })
    }
    ,
    this.makeSticky = function(id) {
        current_feed = this.user_feeds[0],
        void 0 === current_feed["static"] && $.ajax({
            url: this.controller + "/sticky/feed_order/" + current_feed.order + "/thread_id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            void 0 !== this.user_feeds[0].stickies ? this.user_feeds[0].stickies.push(id) : this.user_feeds[0].stickies = [id],
            this.retrieve_thread(id).success(function(data) {
                this.sticky_list.push(data),
                this.add_new_sticky(data)
            })
        })
    }
    ,
    this.makeUnsticky = function(id) {
        current_feed = this.user_feeds[0],
        void 0 === current_feed["static"] && $.ajax({
            url: this.controller + "/unsticky/feed_order/" + current_feed.order + "/thread_id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 && this.getFeeds().success(function() {})
        })
    }
    ,
    this.search_complete = !1,
    this.getData = function() {
        return postData = {},
        postData.query = this.build_query(),
        void 0 !== this.current_feed().query ? postData.sort = "_score" : postData.sort = this.sort,
        postData.continue_from = this.continue_from,
        postData.direction = this.direction,
        feeder.scroll_lock !== !0 && (laloader.prependTo(".user-feed"),
        laloader.appendTo(".user-activity-timeline-module")),
        $.ajax({
            url: this.controller + "/data",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            void 0 != this.user_feeds[this.current_feed_index].community_post_id && 0 == data.found ? this.retrieve_thread(this.user_feeds[this.current_feed_index].community_post_id[0] + "_community").success(function(data_2) {
                local_data = {
                    thread: data_2,
                    id: data_2.post.id + "_community"
                },
                this.data.push(local_data),
                this.display_single_thread(data_2),
                laloader.remove(),
                $("span.post-expand").click(),
                "Single Conversation" == this.current_feed().name ? this.hide_new_post_form() : this.show_new_post_form(),
                this.parse_user_bookmarks()
            }) : (this.data = this.data.concat(data.hit),
            this.continue_from = data.cursor,
            this.display_data(data.hit),
            laloader.remove(),
            1 == data.hit.length && ($("span.post-expand").click(),
            "Single Conversation" == this.current_feed().name ? this.hide_new_post_form() : this.show_new_post_form()),
            "Single Conversation" != this.current_feed().name && this.show_new_post_form(),
            $('[data-toggle="tooltip"]').tooltip(),
            data.found <= data.start + data.hit.length && (this.search_complete = !0)),
            this.parse_user_bookmarks()
        })
    }
    ,
    this.build_query = function() {
        return query_or_opened = !1,
        feed = this.current_feed(),
        "Admin Feed" == feed.name ? "admin" : "Admin No Replies" == feed.name ? "admin_no_r" : "Admin Guides" == feed.name ? "admin_g" : (query = "(and type: 'community' ",
        feed.achievements === !1 && (query += "achievement: 0 "),
        feed.guide === !0 && (query += " guide: 1 "),
        (void 0 !== feed.courses && feed.courses.length > 0 || void 0 !== feed.users && feed.users.length > 0 || feed.acheivements === !0 || feed.announcements === !0) && (query += " (or ",
        query_or_opened = !0,
        void 0 !== feed.courses && $.each(feed.courses, function(index, course) {
            course.following === !0 && (query += "module_id: " + course.module_id + " ")
        }),
        void 0 !== feed.users && $.each(feed.users, function(index, user) {
            query += "username: '" + user + "' reply_users: '" + user + "'"
        }),
        feed.achievements === !0 && "User Feed" !== feed.name && (query += "achievement: 1 "),
        feed.announcements === !0 && (query += "announcement: 1 ")),
        void 0 !== feed.query && (query_or_opened === !1 && (query += " (or ",
        query_or_opened = !0),
        query += "(phrase field=title boost=5 '" + feed.query + "')",
        query += "(near field=title boost=3 distance=15 '" + feed.query + "')",
        query += "(phrase field=description boost=5 '" + feed.query + "')",
        query += "(near field=description boost=3 distance=15 '" + feed.query + "')",
        split_string = feed.query.split(" "),
        $.each(split_string, function(index, term) {
            index != split_string.length - 1 ? query += "(term boost=5 '" + term + "')" : query += "(prefix boost=2 '" + term + "')"
        })),
        void 0 !== feed.community_post_id && feed.community_post_id.length > 0 && (query += "(or ",
        $.each(feed.community_post_id, function(index, com_id) {
            query += "_id: '" + com_id + "_community' "
        }),
        query += ")"),
        query_or_opened === !0 && (query += ")"),
        query += ")",
        query)
    }
    ,
    this.refresh = function() {
        this.continue_from = "initial",
        this.clear_feed_content(),
        this.data = [],
        this.getData(),
        this.sticky_list = [],
        this.retrieve_stickies(),
        this.retrieve_recent_activity(),
        current_feed = this.current_feed(),
        "Single Conversation" !== current_feed.name ? (this.scroll_enabled = !0,
        this.search_complete = !1,
        this.scroll_setup(),
        console.log("turning scroll on")) : (this.scroll_enabled = !1,
        $(window).off("scroll"),
        console.log("scroll disabled"))
    }
    ,
    this.newfresh = function() {}
    ,
    this.retrieve_thread = function(id) {
        return $.ajax({
            url: this.controller + "/getThread/id/" + id,
            context: this,
            dataType: "json"
        }).success(function(data) {
            index = this.data.find_index_of(function() {
                return this.id == data.post.id + "_community"
            }),
            void 0 !== index && (this.data[index].thread = data,
            this.update_post_display(data),
            "undefined" != typeof getNC && getNC(),
            1 == data.post.guide && ($.ajax({
                url: "/cp/socialize/getRelatedGuides/id/" + parseInt(id),
                context: this,
                dataType: "json"
            }).success(function(data) {
                data.length > 1 && (rendered_html = Mustache.render($("#mst-guide-related-template").html(), {
                    guides: data
                }),
                $("#post_" + parseInt(id) + "_community .post-body-holder .post-body .toc").length > 0 ? $("#post_" + parseInt(id) + "_community .post-body-holder .post-body .toc").after(rendered_html) : $("#post_" + parseInt(id) + "_community .post-body-holder .post-body").prepend(rendered_html))
            }),
            headers = $("#post_" + parseInt(id) + "_community").find(".post-body-holder h5, .post-body-holder h6"),
            console.log(id),
            toc = {
                header1: [],
                elements: []
            },
            $.each(headers, function(index, header) {
                toc.elements.push($(header)),
                console.log(header),
                "H5" == header.nodeName ? "" != $(header).text() && (toc.header1.push({
                    title: $(header).text(),
                    index: index
                }),
                $(header).click(function() {
                    window.scrollTo(0, 0)
                }),
                header.style.cursor = "pointer",
                $(header).addClass("link-back")) : (last_h5_index = toc.header1.length - 1,
                console.log(last_h5_index),
                "" != $(header).text() && (void 0 == toc.header1[last_h5_index].header2_list && (toc.header1[last_h5_index].header2_list = [{
                    header2: []
                }]),
                toc.header1[last_h5_index].header2_list[0].header2.push({
                    title: $(header).text(),
                    index: index
                }),
                $(header).click(function() {
                    window.scrollTo(0, 0)
                }),
                header.style.cursor = "pointer",
                $(header).addClass("link-back")))
            }),
            toc.header1.length > 0 && (rendered_html = Mustache.render($("#mst-guide-toc-template").html(), toc),
            jq_rendered_html = $(rendered_html),
            jq_rendered_html[0].toc = toc,
            console.log(toc),
            console.log(rendered_html),
            $("#post_" + parseInt(id) + "_community .post-body-holder .post-body").prepend(jq_rendered_html))))
        })
    }
    ,
    this.guideScroll = function(target, index) {
        toc = $(target).parents(".toc")[0].toc,
        offset = $(toc.elements[index]).offset(),
        window.scrollTo(offset.left, offset.top - 5)
    }
    ,
    this.retrieve_stickies = function() {
        self = this,
        postData = {},
        postData.query = "(and type: 'community' sticky: 1)",
        postData.sort = "updated_at",
        postData.continue_from = "initial",
        postData.direction = "desc",
        $.ajax({
            url: this.controller + "/data",
            type: "post",
            data: postData,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.clear_stickies(),
            this.global_stickies = data,
            this.display_global_stickies(),
            current_feed = this.user_feeds[0],
            void 0 != current_feed.stickies && $.each(current_feed.stickies, function(index, feed_id) {
                $.ajax({
                    url: self.controller + "/getThread/id/" + feed_id,
                    context: self,
                    dataType: "json"
                }).success(function(data) {
                    this.sticky_list.push(data),
                    this.display_sticky(data)
                })
            })
        })
    }
    ,
    this.retrieve_recent_activity = function() {
        $.ajax({
            url: self.controller + "/getRecentActivity/",
            context: this,
            dataType: "json"
        }).success(function(data) {
            this.my_recent_activity = data,
            this.display_recent()
        })
    }
    ,
    this.feed_settings = function() {
        self = this,
        $(".following-users-list").empty(),
        $(".following-courses-list").empty(),
        this.user_feeds[0].achievements === !0 ? (html = Mustache.render($("#mst-settings-achievement-filter").html(), {
            button_state: " active",
            button_string: "ON"
        }),
        $("#achievement-filter-container").html(html)) : (html = Mustache.render($("#mst-settings-achievement-filter").html(), {
            button_state: "",
            button_string: "off"
        }),
        $("#achievement-filter-container").html(html)),
        this.user_feeds[0].users && $.each(this.user_feeds[0].users, function(index, user) {
            rendered_item = Mustache.render(self.mstFollowingItem, {
                id: user,
                name: user,
                type: "user"
            }),
            $(".following-users-list").append(rendered_item)
        }),
        this.user_feeds[0].courses && $.each(this.user_feeds[0].courses, function(index, course) {
            course.following === !0 && $.ajax({
                url: self.module_controller + "/course_name/ajax/1/id/" + course.module_id,
                context: self,
                dataType: "json"
            }).success(function(data) {
                data.success === !0 && (rendered_item = Mustache.render(self.mstFollowingItem, {
                    id: course.module_id,
                    name: data.name,
                    type: "course"
                }),
                $(".following-courses-list").append(rendered_item))
            })
        })
    }
    ,
    this.toggle_achievements = function() {
        return this.user_feeds[0].achievements === !0 ? (postData = {
            type: "achievements",
            value: 1
        },
        $.ajax({
            url: "/cp/socialize/unfollow",
            context: this,
            dataType: "json",
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0 && (this.user_feeds[0].achievements = !1,
            this.feed_settings(),
            this.refresh())
        })) : (postData = {
            type: "achievements",
            value: 1
        },
        $.ajax({
            url: "/cp/socialize/follow",
            context: this,
            dataType: "json",
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0 && (this.user_feeds[0].achievements = !0,
            this.feed_settings(),
            this.refresh())
        }))
    }
    ,
    this.parseMenu = function(id, target) {
        switch (item_id = parseInt(id.slice(8)),
        target.innerHTML) {
        case "Bookmark this post":
            this.bookmarkPost(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Remove this bookmark" : $.msgbox("Error Encountered")
            });
            break;
        case "Remove this bookmark":
            this.unbookmarkPost(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Bookmark this post" : $.msgbox("Error Encountered")
            });
            break;
        case "Sticky this post":
            this.makeSticky(item_id);
            break;
        case "Follow this user":
            this.follow("user", target.attributes.username.value).success(function(data) {
                data.success === !0 ? $.msgbox("You are now following @" + target.attributes.username.value) : (index = this.user_feeds[0].users.find_index_of(function() {
                    return this == target.attributes.username.value
                }),
                "undefined" != typeof index && $.msgbox("You are already following @" + target.attributes.username.value))
            });
            break;
        case "Make Private":
            this.make_post_private(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Make Public" : $.msgbox("Error Encountered")
            });
            break;
        case "Make Public":
            this.make_post_public(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Make Private" : $.msgbox("Error Encountered")
            });
            break;
        case "Set as Announcement":
            this.make_post_announcement(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Un Announcement" : $.msgbox("Error Encountered")
            });
            break;
        case "Un Announcement":
            this.unmake_post_announcement(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Set as Announcement" : $.msgbox("Error Encountered")
            });
            break;
        case "Set as Achievement":
            this.make_post_achievement(item_id).success(function(data) {
                data.success === !0 || $.msgbox("Error Encountered")
            });
            break;
        case "Un Achievement":
            this.unmake_post_achievement(item_id).success(function(data) {
                data.success === !0 || $.msgbox("Error Encountered")
            });
            break;
        case "Set as Global Sticky":
            this.make_global_sticky(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Un Global Sticky" : $.msgbox("Error Encountered")
            });
            break;
        case "Un Global Sticky":
            this.unmake_global_sticky(item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Set as Global Sticky" : $.msgbox("Error Encountered")
            });
            break;
        case "Spam!":
            this.set_post_spam(item_id);
            break;
        case "Approve Post":
        case "Approve Guide":
            "function" == typeof Feed.prototype.social_adminApprove && this.social_adminApprove("community_post", item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Un Approve Post" : $.msgbox("Error Encountered")
            });
            break;
        case "Un Approve Post":
        case "Un Approve Guide":
            "function" == typeof Feed.prototype.social_adminUnApprove && this.social_adminUnApprove("community_post", item_id).success(function(data) {
                data.success === !0 ? target.innerHTML = "Approve Post" : $.msgbox("Error Encountered")
            });
            break;
        case "Edit Guide Details":
            "function" == typeof Feed.prototype.social_adminEditGuideDetails && this.social_adminEditGuideDetails("community_post", item_id).success(function(data) {
                data.success === !0 ? $.msgbox("Saved") : $.msgbox("Error Encountered")
            });
            break;
        case "Share!":
            "undefined" != typeof socialMedia ? (console.log(item_id),
            index = this.data.find_index_of(function() {
                return this.id == item_id + "_community"
            }),
            void 0 !== index && void 0 !== this.data[index].fields ? ($.msgbox('<label class="cannonical-url-label">Public URL:</label><input type="text" class="form-control" value="https://linuxacademy.com' + (void 0 !== this.data[index].fields.pub_url ? this.data[index].fields.pub_url[0] : "") + '" />  <label class="social-media-label">Social Websites:</label><div class="dialog-share-icons"></div>', {
                type: "confirm",
                buttons: [{
                    type: "cancel",
                    value: "Close"
                }]
            }),
            $(".jquery-msgbox-confirm").addClass("share_dialog"),
            void 0 !== index && void 0 !== this.data[index].fields.pub_url && (cannonical_url = "https://linuxacademy.com" + this.data[index].fields.pub_url[0],
            message = void 0 !== this.data[index].fields.title ? this.data[index].fields.title[0] : "",
            title = void 0 !== this.data[index].fields.title ? this.data[index].fields.title[0] : "",
            imageUrl = void 0 !== this.data[index].fields.imageUrl ? this.data[index].fields.imageUrl[0] : "https://linuxacademy.com/templates/default/img/test-social-media-image.jpg",
            description = void 0 !== this.data[index].fields.description ? this.cleanDescription(this.data[index].fields.description[0]) : "",
            socialMedia.share_all_available($(".dialog-share-icons")[0], {
                url: cannonical_url,
                message: message,
                title: title,
                image: imageUrl,
                description: description
            }))) : ($.msgbox('<label>URL:</label><input type="text" class="form-control" value="https://linuxacademy.com' + this.controller + "/index/type/community_post/id/" + item_id + '"/>', {
                type: "confirm",
                buttons: [{
                    type: "cancel",
                    value: "Close"
                }]
            }),
            $(".jquery-msgbox-confirm").addClass("share_dialog"))) : ($.msgbox('<label>URL:</label><input type="text" class="form-control" value="https://linuxacademy.com' + this.controller + "/index/type/community_post/id/" + item_id + '"/>', {
                type: "confirm",
                buttons: [{
                    type: "cancel",
                    value: "Close"
                }]
            }),
            $(".jquery-msgbox-confirm").addClass("share_dialog"));
            break;
        case "Flag For Attention":
            this.set_attention_flag(item_id).success(function(data) {
                data.success === !0 ? (target.innerHTML = "Un Flag",
                attentionFlagCallout = $("#mst-attention-flag").html(),
                rendered = Mustache.render(attentionFlagCallout, {}),
                $(rendered).insertAfter("#" + item_id + "_community_card .general-post-header")) : $.msgbox("Error Encountered")
            });
            break;
        case "Un Flag":
            this.unset_attention_flag(item_id).success(function(data) {
                data.success === !0 ? (target.innerHTML = "Flag For Attention",
                $("#" + item_id + "_community_card .attention-flag-callout").remove()) : $.msgbox("Error Encountered")
            });
            break;
        case "Close Comments":
            this.set_closed_comments(item_id).success(function(data) {
                data.success === !0 ? (target.innerHTML = "Comments Closed",
                $("#" + item_id + "_community_reply").remove(),
                $("#" + item_id + "_community_reply_button").remove(),
                $.msgbox("This thread is now closed for comments.")) : $.msgbox("Error Encountered")
            });
            break;
        case "Create Ticket":
            this.make_ticket(item_id),
            target.innerHTML = "Ticket Created",
            $("#" + item_id + "_community_reply").remove(),
            $("#" + item_id + "_community_reply_button").remove();
            break;
        case "User Overview":
            this.get_user_overview_url(item_id).success(function(data) {
                "" !== data.url && window.open(data.url)
            });
            break;
        case "Edit Post":
            this.edit_post(item_id)
        }
    }
    ,
    this.make_post_private = function(id) {
        return postData = {},
        postData["private"] = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.make_reply_private = function(id) {
        return postData = {},
        postData.id = id,
        $.ajax({
            url: this.community_controller + "/api/ajax/1/action/markreplyprivate",
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && ($("#" + id + "_reply_private").addClass("active"),
            $("#" + id + "_reply_private").parent().parent().addClass("private"))
        })
    }
    ,
    this.make_reply_public = function(id) {
        return postData = {},
        postData.id = id,
        $.ajax({
            url: this.community_controller + "/api/ajax/1/action/unmarkreplyprivate",
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && ($("#" + id + "_reply_private").removeClass("active"),
            $("#" + id + "_reply_private").parent().parent().removeClass("private"))
        })
    }
    ,
    this.make_post_public = function(id) {
        return postData = {},
        postData["public"] = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.make_post_announcement = function(id) {
        return postData = {},
        postData.setAnnouncement = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.make_post_achievement = function(id) {
        return postData = {},
        postData.setAchievement = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && this.retrieve_thread(id).success(function(data) {
                rendered_item = this.render_single_thread(data),
                $("#post_" + id + "_community").parent().parent().replaceWith(rendered_item)
            })
        })
    }
    ,
    this.unmake_post_announcement = function(id) {
        return postData = {},
        postData.unsetAnnouncement = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.unmake_post_achievement = function(id) {
        return postData = {},
        postData.unsetAchievement = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && this.retrieve_thread(id).success(function(data) {
                rendered_item = this.render_single_thread(data),
                $("#post_" + id + "_community").parent().parent().replaceWith(rendered_item)
            })
        })
    }
    ,
    this.make_global_sticky = function(id) {
        return postData = {},
        postData.setSticky = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.unmake_global_sticky = function(id) {
        return postData = {},
        postData.unsetSticky = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.set_attention_flag = function(id) {
        return postData = {},
        postData.setAttentionFlag = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.unset_attention_flag = function(id) {
        return postData = {},
        postData.unsetAttentionFlag = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.set_closed_comments = function(id) {
        return postData = {},
        postData.setClosedComments = 1,
        $.ajax({
            url: this.community_controller + "/view/ajax/1/id/" + id,
            context: this,
            type: "post",
            data: postData,
            dataType: "json"
        })
    }
    ,
    this.make_ticket = function(id) {
        return tpostData = {},
        tpostData.setClosedComments = 1,
        tpostData.makeTicket = 1,
        tpostData["private"] = 1,
        this.reply({
            post_id: id,
            message: "Thank you for posting. In order to better serve you we are closing this thread and opening up a ticket in our support system for you. We have forwarded a record of your request to your registered email address and we will follow up with you shortly."
        }).success(function(reply_data) {
            $.ajax({
                url: this.community_controller + "/view/ajax/1/id/" + id,
                context: this,
                type: "post",
                data: tpostData,
                dataType: "json"
            }).success(function(data) {
                data.success === !0 ? $.msgbox("This thread has been converted to a ticket") : $.msgbox("An Error Occured: while attempting to convert thread to a support ticket.")
            })
        })
    }
    ,
    this.get_user_overview_url = function(id) {
        return $.ajax({
            url: this.community_controller + "/user_overview_url/id/" + id,
            context: this,
            dataType: "json"
        })
    }
    ,
    this.scroll_setup = function() {
        this.scroll_enabled === !0 && (this.scroll_lock = !1,
        $(window).scroll(function() {
            feeder.search_complete === !1 && $(window).scrollTop() + $("body")[0].offsetHeight + 10 > $("body")[0].scrollHeight && feeder.scroll_lock === !1 && (laloader.appendTo("body"),
            feeder.scroll_lock = !0,
            feeder.getData().success(function() {
                feeder.scroll_lock = !1,
                this.get_user_bookmarks()
            }))
        }))
    }
    ,
    this.request_feed_data = function(index) {
        this.current_feed_index != index && (this.current_feed_index = index,
        "Single Conversation" != this.current_feed().name && $.ajax({
            url: this.controller + "/setDefaultFeed",
            data: {
                feed_name: this.current_feed().name
            },
            type: "post"
        }),
        this.current_feed().sorting === !1 ? this.hide_feed_sorting() : this.show_feed_sorting(),
        this.refresh())
    }
    ,
    this.sort_by = function(sort_index) {
        this.sort != this.sorts[sort_index][0] && (this.sort = this.sorts[sort_index][0],
        $.ajax({
            url: this.controller + "/setDefaultSort",
            data: {
                sort: this.sort
            },
            type: "post"
        }),
        this.refresh())
    }
    ,
    this.update_user_stats = function() {
        void 0 !== this.user_feeds[0] && void 0 !== this.user_feeds[0].followers && $(".my-followers").html(this.user_feeds[0].followers.length)
    }
    ,
    this.clear_feed_content = function() {
        $(".user-feed").empty()
    }
    ,
    this.display_feed_links = function() {
        $(".feed-type-dropdown-menu").empty(),
        self = this,
        $.each(this.user_feeds, function(index, feed) {
            rendered_feed_link = Mustache.render(self.mstFeedLink, {
                name: feed.name,
                index: index,
                active: self.current_feed_index == index ? "active" : ""
            }),
            $(".feed-type-dropdown-menu").append(rendered_feed_link)
        }),
        value = $(".feed-type-dropdown-menu li.active").html(),
        $(".feed-type-dropdown .btn .feed-type").text(value),
        $(".feed-type-dropdown .btn .feed-type").val(value)
    }
    ,
    this.set_post_spam_display = function(post_id, spam_count) {
        spam_count > 0 ? $("#post_" + post_id + "_community").parent().addClass("possible_spam") : $("#post_" + post_id + "_community").parent().removeClass("possible_spam")
    }
    ,
    this.set_post_confirm_spam_display = function(post_id, confirm_spam_count) {
        confirm_spam_count > 0 ? $("#post_" + post_id + "_community").parent().addClass("confirmed_spam") : $("#post_" + post_id + "_community").parent().removeClass("confirmed_spam")
    }
    ,
    this.cleanDescription = function(description) {
        return description = description.replace(/<\/h[5|6]>/g, ": ").replace(/<[^>]*>/g, " "),
        description = description.slice(0, 250),
        slice_at = description.lastIndexOf(" "),
        description.slice(0, slice_at)
    }
    ,
    this.update_thread_display = function(data) {
        this.update_post_display(data)
    }
    ,
    this.update_post_display = function(data) {
        $("#post_" + data.post.id + "_community .post-body").html(data.post.text.replace(/\n/g, "<br />")),
        this.clear_post_replies(data),
        void 0 !== data.post.social && (void 0 !== data.post.social.spam && this.set_post_spam_display(data.post.id, data.post.social.spam),
        void 0 !== data.post.social.confirm_spam && this.set_post_confirm_spam_display(data.post.id, data.post.social.confirm_spam)),
        this.display_replies(data),
        this.code_highlight(),
        this.display_module_names(),
        $("#" + data.post.id + "_community_likes_total").html(this.total_post_likes_helper(data, !0)),
        $('.card-inner [data-toggle="tooltip"]').tooltip(),
        setup_wysiwyg($("#" + data.post.id + "_community_reply"))
    }
    ,
    this.total_post_likes_helper = function(data, is_from_db) {
        return is_from_db === !0 ? (likes = void 0 !== data.post.likers ? data.post.likers.length : 0,
        dislikes = void 0 !== data.post.dislikers ? data.post.dislikers.length : 0) : (likes = void 0 !== data.fields.thread_likes ? data.fields.thread_likes.length : 0,
        dislikes = void 0 !== data.fields.thread_dislikes ? data.fields.thread_dislikes.length : 0),
        likes - dislikes
    }
    ,
    this.clear_post_replies = function(data) {
        $("#post_" + data.post.id + "_community").siblings(".card-inner").children("div.general-post-expanded").remove()
    }
    ,
    this.render_single_reply = function(reply) {
        return reply_date = reply.date_as_obj ? reply.date_as_obj : new Date(reply.date),
        reply_date_string = reply_date.getMonth() + 1 + "/" + reply_date.getDate() + "/" + reply_date.getFullYear(),
        name = this.generate_feed_item_name(reply),
        rendered = Mustache.render(self.mstReplySection, {
            md5_email: reply.md5_email,
            first_name: reply.first_name,
            last_name: reply.last_name,
            name: reply.name,
            reply_date: reply_date_string,
            message: reply.text.replace(/\n/g, "<br />"),
            displayed: reply.displayed,
            privated: this.admin === !0 && 0 == reply.visible ? "private" : "",
            id: reply.id,
            likes_balance: reply.likes_balance,
            controller: self.controller,
            username: reply.username,
            spam_active: "",
            approval_active: "",
            private_active: "",
            instructor: "1" == reply.admin ? [{}] : [],
            edit: self.admin || reply.user_id == self.user_id ? [{
                reply_id: reply.id
            }] : []
        }),
        rendered
    }
    ,
    this.display_replies = function(data) {
        self = this,
        data.replies = data.replies.reverse(),
        data.replies.length > 2 && (rendered = Mustache.render(this.mstShowMoreComments, {
            id: data.post.id
        }),
        $("#post_" + data.post.id + "_community").siblings(".card-inner").prepend(rendered)),
        $.each(data.replies, function(index, reply) {
            0 == index || 1 == index ? displayed = "" : displayed = " hidden",
            reply.text = null !== reply.text ? reply.text.replace(/\n/g, "<br />") : "",
            void 0 !== reply.likers ? likes_balance = reply.likers.length : likes_balance = 0,
            void 0 !== reply.dislikers && (likes_balance -= reply.dislikers.length),
            reply_date = new Date(reply.date.replace(/\s/, "T")),
            reply_date_string = reply_date.getMonth() + 1 + "/" + reply_date.getDate() + "/" + reply_date.getFullYear(),
            name = self.generate_feed_item_name(reply),
            pre_render = {
                md5_email: reply.email,
                first_name: reply.first_name,
                last_name: reply.last_name,
                name: name,
                reply_date: reply_date_string,
                message: reply.text,
                displayed: displayed,
                privated: self.admin === !0 && "0" == reply.visible ? "private" : "",
                id: reply.id,
                likes_balance: likes_balance,
                controller: self.controller,
                username: reply.username,
                spam_active: "",
                approval_active: void 0 !== reply.social && void 0 !== reply.social.approval && parseInt(reply.social.approval) > 0 ? "active" : "",
                instructor_reply_approvals: void 0 !== reply.social && void 0 !== reply.social.approval && parseInt(reply.social.approval) > 0 ? [{}] : null,
                private_active: self.admin === !0 && "0" == reply.visible ? "active" : "",
                instructor: "1" == reply.admin ? [{}] : [],
                edit: self.admin || reply.user_id == self.user_id ? [{
                    reply_id: reply.id
                }] : []
            },
            rendered = Mustache.render(self.mstReplySection, pre_render),
            data.replies.length > 2 ? $("#post_" + data.post.id + "_community").siblings(".card-inner").children(".show-more-comments").after(rendered) : $("#post_" + data.post.id + "_community").siblings(".card-inner").prepend(rendered),
            self.code_highlight(),
            self.display_module_names()
        })
    }
    ,
    this.render_single_thread = function(data) {
        return likes = this.total_post_likes_helper(data, !0),
        year = data.post.date.slice(0, 4),
        month = parseInt(data.post.date.slice(5, 7)),
        day = parseInt(data.post.date.slice(8, 10)),
        pub_date = new Date(data.post.date),
        personally_replied = void 0 != this.user_data && $.inArray(this.user_data.username, data.post.reply_users) >= 0 ? [{}] : !1,
        feed_item = {
            pub_date: month + "/" + day + "/" + year,
            subject: data.post.subject,
            message: data.post.text.replace(/\n/g, "<br />"),
            id: data.post.id + "_community",
            first_name: data.post.first_name,
            last_name: data.post.last_name,
            username: data.post.username,
            likes_balance: likes,
            instructor_approvals: void 0 !== data.post.social && void 0 !== data.post.social.approval ? data.post.social.approval : 0,
            instructor_post_approvals: void 0 !== data.post.social && void 0 !== data.post.social.approval && data.post.social.approval > 0 ? [{}] : null,
            thread_likes: data.post.likers,
            thread_dislikes: data.post.dislikers,
            md5_email: data.post.email,
            show_no_responses_flag: data.post.reply_count < 1 ? "" : "hidden",
            attention_flag: 1 == data.post.attention_flag ? [{}] : [],
            closed_comments: 1 == data.post.closed_comments ? [] : [{
                id: data.post.id + "_community"
            }],
            profile_url: this.controller + "/profile/user/" + data.post.username,
            personally_replied: personally_replied,
            course_module: null !== data.post.module_id ? [{
                id: data.post.module_id
            }] : null,
            guide: null !== data.post.guide && 1 == data.post.guide ? [{}] : null,
            reply_count: void 0 !== data.replies ? data.replies.length : 0,
            privated: this.admin === !0 && 1 == data.post.gagged ? "private" : "",
            poster_free_community: void 0 !== data.post.poster_free_community && 1 == data.post.poster_free_community ? [{}] : null,
            menu: [{
                item: "Bookmark this post"
            }, {
                item: "Sticky this post"
            }, {
                item: "Follow this user",
                attribute: "username=",
                property: data.post.username
            }, {
                item: "Share!"
            }, {
                item: "Spam!"
            }],
            admin_menu: []
        },
        feed_item.name = this.generate_feed_item_name(feed_item),
        null !== feed_item.guide && null !== data.post.social_image && "" !== data.post.social_image && (feed_item.guide[0].banner = [{
            src: data.post.social_image
        }]),
        void 0 !== this.user_data && this.user_data.username == feed_item.username && feed_item.menu.push({
            item: "Edit Post"
        }),
        feed_item.admin_menu.push({
            item: "Edit Post"
        }),
        feed_item.attention_flag.length > 0 ? feed_item.admin_menu.push({
            item: "Un Flag"
        }) : feed_item.admin_menu.push({
            item: "Flag For Attention"
        }),
        feed_item.instructor_approvals.length > 0 ? null !== data.post.guide && 1 == data.post.guide ? feed_item.admin_menu.push({
            item: "Un Approve Guide"
        }) : feed_item.admin_menu.push({
            item: "Un Approve Post"
        }) : null !== data.post.guide && 1 == data.post.guide ? feed_item.admin_menu.push({
            item: "Approve Guide"
        }) : feed_item.admin_menu.push({
            item: "Approve Post"
        }),
        null !== data.post.guide && 1 == data.post.guide && feed_item.admin_menu.push({
            item: "Edit Guide Details"
        }),
        "1" == data.post.gagged ? feed_item.admin_menu.push({
            item: "Make Public"
        }) : feed_item.admin_menu.push({
            item: "Make Private"
        }),
        "1" == data.post.announcement ? feed_item.admin_menu.push({
            item: "Un Announcement"
        }) : feed_item.admin_menu.push({
            item: "Set as Announcement"
        }),
        null === feed_item.guide && (feed_item.post = [{}]),
        "1" == data.post.sticky ? feed_item.admin_menu.push({
            item: "Un Global Sticky"
        }) : feed_item.admin_menu.push({
            item: "Set as Global Sticky"
        }),
        "1" == data.post.achievement ? feed_item.admin_menu.push({
            item: "Un Achievement"
        }) : feed_item.admin_menu.push({
            item: "Set as Achievement"
        }),
        1 != data.post.closed_comments && (feed_item.admin_menu.push({
            item: "Close Comments"
        }),
        feed_item.admin_menu.push({
            item: "Create Ticket"
        })),
        feed_item.admin_menu.push({
            item: "User Overview"
        }),
        "1" == data.post.achievement ? rendered_feed_item = Mustache.render(this.mstFeedItemAch, feed_item) : rendered_feed_item = Mustache.render(this.mstFeedItem, feed_item),
        rendered_feed_item
    }
    ,
    this.display_single_thread = function(data, use_effect) {
        rendered_feed_item = this.render_single_thread(data),
        void 0 === use_effect ? $(".user-feed").prepend(rendered_feed_item) : $(rendered_feed_item).hide().prependTo(".user-feed").slideDown(),
        this.code_highlight(),
        this.display_module_names()
    }
    ,
    this.generate_feed_item_name = function(feed_item) {
        return name = "",
        feed_item.first_name && feed_item.first_name.length > 0 && (name = feed_item.first_name),
        feed_item.last_name && feed_item.last_name.length > 0 && (name += " " + feed_item.last_name),
        name = name.trim(),
        0 == name.length && (name = feed_item.username),
        name
    }
    ,
    this.simple_date_helper = function(cloud_date) {
        switch (date = new Date(cloud_date),
        date.getMonth()) {
        case 0:
            month = "Jan.";
            break;
        case 1:
            month = "Feb.";
            break;
        case 2:
            month = "Mar.";
            break;
        case 3:
            month = "Apr.";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun.";
            break;
        case 6:
            month = "Jul.";
            break;
        case 7:
            month = "Aug.";
            break;
        case 8:
            month = "Sep.";
            break;
        case 9:
            month = "Oct.";
            break;
        case 10:
            month = "Nov.";
            break;
        case 11:
            month = "Dec."
        }
        return day = date.getDate(),
        month + " " + day
    }
    ,
    this.display_data = function(data) {
        self = this,
        $.each(data, function(index, item) {
            likes = self.total_post_likes_helper(item, !1),
            void 0 !== item.fields.pub_date ? pub_date = new Date(item.fields.pub_date[0]) : void 0 !== item.fields.updated_at ? pub_date = new Date(item.fields.updated_at[0]) : pub_date = new Date,
            personally_replied = void 0 != self.user_data && $.inArray(self.user_data.username, item.fields.reply_users) >= 0 ? [{}] : !1,
            feed_item = {
                pub_date: pub_date.getMonth() + 1 + "/" + pub_date.getDate() + "/" + pub_date.getFullYear(),
                subject: void 0 !== item.fields.title ? item.fields.title[0] : "untitled",
                message: void 0 !== item.fields.description ? item.fields.description[0].replace(/\n/g, "<br />") : "empty",
                id: item.id,
                first_name: void 0 !== item.fields.first_name ? item.fields.first_name[0] : "",
                last_name: void 0 !== item.fields.last_name ? item.fields.last_name[0] : "",
                username: void 0 !== item.fields.username ? item.fields.username[0] : "",
                likes_balance: likes,
                instructor_approvals: void 0 !== item.fields.instructor_approvals ? item.fields.instructor_approvals[0] : 0,
                instructor_post_approvals: void 0 !== item.fields.instructor_post_approvals && item.fields.instructor_post_approvals > 0 ? [{}] : null,
                thread_likes: void 0 !== item.fields.thread_likes ? item.fields.thread_likes[0] : [],
                thread_dislikes: void 0 !== item.fields.thread_dislikes ? item.fields.thread_dislikes[0] : 0,
                md5_email: void 0 != item.fields.md5_email ? item.fields.md5_email[0] : "",
                date: void 0 != item.fields.updated_at ? self.simple_date_helper(item.fields.updated_at[0]) : "",
                show_no_responses_flag: void 0 !== item.fields.reply_count && parseInt(item.fields.reply_count[0]) < 1 ? "" : "hidden",
                privated: void 0 !== item.fields.gagged && self.admin === !0 && "1" == item.fields.gagged[0] ? "private" : "",
                attention_flag: void 0 !== item.fields.attention_flag && 1 == item.fields.attention_flag[0] ? [{}] : [],
                closed_comments: void 0 !== item.fields.closed_comments && 1 == item.fields.closed_comments[0] ? [] : [{
                    id: item.id
                }],
                url: self.controller + "/index/type/community_post/id/" + item.id,
                profile_url: self.controller + "/profile/user/" + (void 0 !== item.fields.username ? item.fields.username[0] : ""),
                personally_replied: personally_replied,
                course_module: void 0 !== item.fields.module_id ? [{
                    id: item.fields.module_id[0]
                }] : null,
                guide: void 0 !== item.fields.guide && 1 == item.fields.guide[0] ? [{}] : null,
                reply_count: void 0 !== item.fields.reply_count ? item.fields.reply_count[0] : 0,
                poster_free_community: void 0 !== item.fields.poster_free_community && 1 == item.fields.poster_free_community[0] ? [{}] : null,
                menu: [{
                    item: "Bookmark this post"
                }, {
                    item: "Sticky this post"
                }, {
                    item: "Follow this user",
                    attributes: {
                        attribute: "username",
                        property: void 0 !== item.fields.username ? item.fields.username[0] : ""
                    }
                }, {
                    item: "Share!"
                }, {
                    item: "Spam!"
                }],
                admin_menu: []
            },
            null !== feed_item.guide && void 0 !== item.fields.social_image && "" !== item.fields.social_image[0] && (feed_item.guide[0].banner = [{
                src: item.fields.social_image[0]
            }]),
            void 0 !== self.user_data && self.user_data.username == feed_item.username && feed_item.menu.push({
                item: "Edit Post"
            }),
            feed_item.admin_menu.push({
                item: "Edit Post"
            }),
            void 0 !== item.fields.attention_flag && "1" == item.fields.attention_flag[0] ? feed_item.admin_menu.push({
                item: "Un Flag"
            }) : feed_item.admin_menu.push({
                item: "Flag For Attention"
            }),
            void 0 !== item.fields.instructor_post_approvals && item.fields.instructor_post_approvals[0] < 1 || void 0 == item.fields.instructor_post_approvals ? void 0 !== item.fields.guide && 1 == item.fields.guide[0] ? feed_item.admin_menu.push({
                item: "Approve Guide"
            }) : feed_item.admin_menu.push({
                item: "Approve Post"
            }) : void 0 !== item.fields.guide && 1 == item.fields.guide[0] ? feed_item.admin_menu.push({
                item: "Un Approve Guide"
            }) : feed_item.admin_menu.push({
                item: "Un Approve Post"
            }),
            void 0 !== item.fields.guide && 1 == item.fields.guide[0] && feed_item.admin_menu.push({
                item: "Edit Guide Details"
            }),
            void 0 !== item.fields.gagged ? feed_item.admin_menu.push({
                item: "Make Public"
            }) : feed_item.admin_menu.push({
                item: "Make Private"
            }),
            void 0 !== item.fields.announcement && 1 == item.fields.announcement ? feed_item.admin_menu.push({
                item: "Un Announcement"
            }) : feed_item.admin_menu.push({
                item: "Set as Announcement"
            }),
            void 0 !== item.fields.sticky && 1 == item.fields.sticky ? feed_item.admin_menu.push({
                item: "Un Global Sticky"
            }) : feed_item.admin_menu.push({
                item: "Set as Global Sticky"
            }),
            null === feed_item.guide && (feed_item.post = [{}]),
            void 0 !== item.fields.achievement && 1 == item.fields.achievement ? feed_item.admin_menu.push({
                item: "Un Achievement"
            }) : feed_item.admin_menu.push({
                item: "Set as Achievement"
            }),
            (void 0 === item.fields.closed_comments || 0 == item.fields.closed_comments[0]) && (feed_item.admin_menu.push({
                item: "Close Comments"
            }),
            feed_item.admin_menu.push({
                item: "Create Ticket"
            })),
            feed_item.admin_menu.push({
                item: "User Overview"
            }),
            "User Feed" != self.current_feed().name ? (void 0 !== item.fields.achievement && 1 == item.fields.achievement ? rendered_feed_item = Mustache.render(self.mstFeedItemAch, feed_item) : rendered_feed_item = Mustache.render(self.mstFeedItem, feed_item),
            $(".user-feed").append(rendered_feed_item)) : (item.fields.username[0] != self.profile_user_data.username ? rendered_feed_item = Mustache.render(self.mstTimelineReply, feed_item) : void 0 !== item.fields.achievement && 1 == item.fields.achievement ? rendered_feed_item = Mustache.render(self.mstTimelineAchievement, feed_item) : rendered_feed_item = Mustache.render(self.mstTimelineComment, feed_item),
            $(".user-activity-timeline-module").append(rendered_feed_item)),
            self.code_highlight(),
            self.display_module_names()
        })
    }
    ,
    this.display_module_names = function() {
        void 0 !== this.associations && $("h6.module_id").each(function(index, id) {
            title = feeder.associations.find_module(this.innerHTML),
            title !== !1 && $(this).html(title).show()
        })
    }
    ,
    this.display_sorts = function() {
        self = this,
        $(".feed-sorting-control .feed-sorting-dropdown-menu").empty(),
        $.each(this.sorts, function(index, sort) {
            rendered_sort_type = Mustache.render(self.mstSortType, {
                index: index,
                name: sort[1],
                active: self.sort == sort[0] ? "active" : ""
            }),
            $(".feed-sorting-control .feed-sorting-dropdown-menu").append(rendered_sort_type)
        }),
        value = $(".feed-sorting-dropdown-menu li.active").html(),
        $(".feed-sorting-control .btn .feed-type").text(value),
        $(".feed-sorting-control .btn .feed-type").val(value)
    }
    ,
    this.display_recent = function() {
        self = this,
        $(".recent-activity-module-list").empty(),
        this.my_recent_activity.length < 1 ? (rendered = Mustache.render($("#mst-recent-activity-placeholder").html()),
        $(".recent-activity-module-list").append(rendered)) : $.each(this.my_recent_activity, function(index, post) {
            rendered_activity = Mustache.render(self.mstRecentActivity, {
                recent_activity_title: post.subject,
                recent_activity_author: post.first_name,
                recent_post_alert: post.reply_count,
                url: self.controller + "/index/type/community_post/id/" + post.id,
                md5_email: post.email
            }),
            $(".recent-activity-module-list").append(rendered_activity)
        })
    }
    ,
    this.display_sticky = function(sticky) {
        rendered_sticky = Mustache.render(this.mstStickyPosts, {
            sticky_post_title: sticky.post.subject,
            sticky_post_author: sticky.post.first_name + " " + sticky.post.last_name,
            url: this.controller + "/index/type/community_post/id/" + sticky.post.id,
            md5_email: sticky.post.email,
            id: sticky.post.id,
            extra_class: ""
        }),
        $(".sticky-post-module-list").append(rendered_sticky)
    }
    ,
    this.add_new_sticky = function(sticky) {
        rendered_sticky = Mustache.render(this.mstStickyPosts, {
            sticky_post_title: sticky.post.subject,
            sticky_post_author: sticky.post.first_name + " " + sticky.post.last_name,
            url: this.controller + "/index/type/community_post/id/" + sticky.post.id,
            md5_email: sticky.post.email,
            id: sticky.post.id,
            extra_class: "restored-item"
        }),
        $(".sticky-post-module-list").append(rendered_sticky)
    }
    ,
    this.remove_sticky = function() {}
    ,
    this.display_global_stickies = function() {
        self = this,
        $.each(this.global_stickies.hit, function(index, sticky) {
            rendered_sticky = Mustache.render(self.mstGlobalStickyPosts, {
                sticky_post_title: void 0 !== sticky.fields.title ? sticky.fields.title[0] : "untitles",
                sticky_post_author: (void 0 !== sticky.fields.first_name ? sticky.fields.first_name[0] : "") + " " + (void 0 !== sticky.fields.last_name ? sticky.fields.last_name[0] : ""),
                url: self.controller + "/index/type/community_post/id/" + sticky.id.slice(0, -10),
                md5_email: void 0 !== sticky.fields.md5_email ? sticky.fields.md5_email[0] : ""
            }),
            $(".sticky-post-module-list").append(rendered_sticky)
        })
    }
    ,
    this.clear_stickies = function() {
        $(".sticky-post-module-list").empty()
    }
    ,
    this.hide_search = function() {
        $(".community-search-holder").hide()
    }
    ,
    this.show_search = function() {
        $(".community-search-holder").show()
    }
    ,
    this.hide_feed_controls = function() {
        $(".feed-controls").hide()
    }
    ,
    this.show_feed_controls = function() {
        $(".feed-controls").show()
    }
    ,
    this.hide_feed_sorting = function() {
        $(".feed-sorting-control").hide()
    }
    ,
    this.show_feed_sorting = function() {
        $(".feed-sorting-control").show()
    }
    ,
    this.hide_new_post_form = function() {
        $(".feed-post-prompt").hide()
    }
    ,
    this.show_new_post_form = function() {
        $(".feed-post-prompt").show()
    }
    ,
    this.insert_guide_template = function(selector) {
        $(selector).html(Mustache.render($("#mst-guide-template").html(), {}))
    }
    ,
    this.highlight_worker = null,
    this.code_highlight = function() {
        "undefined" != typeof Worker ? (null === this.highlight_worker && (this.highlight_worker = new Worker("/templates/cp/js/highlight_worker.js"),
        this.highlight_worker.onmessage = function(event) {
            local_block = $("pre code#" + event.data.index + "_highlight_index")[0],
            void 0 !== local_block && local_block.highlighted !== !0 && (local_block.innerHTML = event.data.code,
            local_block.highlighted = !0)
        }
        ),
        self = this,
        $("pre code").each(function(i, block) {
            void 0 === block.highlighted && (block.highlighted = !1,
            $("code#" + i + "_highlight_index").length > 0 && (i = i + "_" + Math.floor(1e4 * Math.random() + 1e4 + 1)),
            block.id = i + "_highlight_index",
            self.highlight_worker.postMessage({
                code: $("<span>" + block.innerHTML.replace(/<br.?\/?>/g, "\n") + "</span>")[0].textContent,
                index: i
            }))
        })) : "object" == typeof hljs && $("pre code").each(function(i, block) {
            hljs.highlightBlock(block)
        })
    }
};
Array.prototype.find_index_of = function(anon_func) {
    for (i = 0; i < this.length; i++)
        if (result = anon_func.call(this[i]),
        result === !0)
            return i
}
;
