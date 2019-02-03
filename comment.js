var CommunityGroup = function(module_id, admin) {
    admin === !0 ? this.admin = !0 : this.admin = !1,
    this.module_id = module_id,
    this.open_groups = [],
    this.my_groups = [],
    this.my_invites = [],
    this.selected_group = {},
    this.retrieve_group = function(cg) {
        return this.selected_group = cg,
        this.selected_group.posts = [],
        this.selected_group.users = [],
        $.ajax({
            url: "/cp/community_group/retrieve/id/" + cg.ID,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success !== !1 ? (this.selected_group.posts = data.posts.reverse(),
            this.selected_group.users = data.users) : $.msgbox("Unable to retrieve data!")
        })
    }
    ,
    this.manage_users = function() {
        this.clear_manage_user_list(),
        this.clear_user_search_results(),
        $("#modalGroup .group-home-screen").hide({
            effect: "slide",
            direction: "down",
            complete: function() {
                $("#modalGroup .group-users-screen").show({
                    effet: "slide",
                    direction: "down"
                })
            }
        }),
        this.render_manage_user_list(this.selected_group.users),
        context_var = this,
        $("[name=group-users-query]").on("input", context_var, function(a, b, c) {
            context_var.search_users($("[name=group-users-query]")[0].value)
        })
    }
    ,
    this.exit_users_manager = function() {
        $("#modalGroup .group-users-screen").hide({
            effect: "slide",
            direction: "up",
            complete: function() {
                $("#modalGroup .group-home-screen").show({
                    effet: "slide",
                    direction: "up"
                })
            }
        })
    }
    ,
    this.search_lock = !1,
    this.search_users = function(query) {
        0 == this.search_lock && (this.search_lock = !0,
        this.clear_user_search_results(),
        queries = query.split(" "),
        postData = {},
        postData.queries = queries,
        $.ajax({
            url: "/cp/community_group/search_users",
            dataType: "json",
            data: postData,
            type: "post",
            context: this
        }).success(function(data) {
            this.render_user_search(data),
            this.search_lock = !1
        }))
    }
    ,
    this.edit_group = function() {
        my_user_group_settings = $.grep(this.selected_group.users, function(elet) {
            return user_id == elet.user_id
        }),
        this.create_modal(),
        $(".leave-group").show(),
        $("#modalNewGroup .modal-title").html("Edit Group Properties"),
        user_id == this.selected_group.leader_id ? ($("[name=create_group_name]")[0].value = this.selected_group.name,
        $("[name=group_module_id]")[0].value = this.selected_group.module_id,
        $("[name=open_group]")[0].checked = "1" == this.selected_group.self_join ? !0 : !1,
        $("[name=member_invite]")[0].checked = "1" == this.selected_group.member_invite ? !0 : !1,
        $("[name=creator_show_online]")[0].checked = "1" == my_user_group_settings[0].online_status ? !0 : !1,
        $("[name=creator_community_group_introduction]")[0].disabled = !0,
        $("[name=group_type]")[0].value = this.selected_group.type,
        $("[name=edit_group_id]")[0].value = this.selected_group.ID,
        $("#modalNewGroup textarea[disabled]").parent().hide(),
        $("#modalNewGroup input[disabled][type=text], #modalNewGroup select[disabled]").parent().hide(),
        $("#modalNewGroup input[disabled][type=checkbox]").hide(),
        $("#modalNewGroup input[disabled][type=checkbox]").next().hide()) : ($("[name=create_group_name]")[0].disabled = !0,
        $("[name=group_module_id]")[0].disabled = !0,
        $("[name=open_group]")[0].disabled = !0,
        $("[name=member_invite]")[0].disabled = !0,
        $("[name=creator_show_online]")[0].disabled = !1,
        $("[name=creator_show_online]")[0].checked = "1" == my_user_group_settings[0].online_status ? !0 : !1,
        $("[name=creator_community_group_introduction]")[0].disabled = !0,
        $("[name=edit_group_id]")[0].value = this.selected_group.ID,
        $("#modalNewGroup textarea[disabled]").parent().hide(),
        $("#modalNewGroup input[disabled][type=text], #modalNewGroup select[disabled]").parent().hide(),
        $("#modalNewGroup input[disabled][type=checkbox]").hide(),
        $("#modalNewGroup input[disabled][type=checkbox]").next().hide())
    }
    ,
    this.create_modal = function() {
        $("[name=create_group_name]")[0].disabled = !1,
        $("[name=create_group_name]")[0].value = null,
        $("[name=group_module_id]")[0].value = module_id,
        $("[name=group_module_id]")[0].disabled = !1,
        $("[name=open_group]")[0].checked = !1,
        $("[name=open_group]")[0].disabled = !1,
        $("[name=member_invite]")[0].checked = !1,
        $("[name=member_invite]")[0].disabled = !1,
        $("[name=creator_show_online]")[0].checked = !1,
        $("[name=creator_show_online]")[0].disabled = !1,
        $("[name=creator_community_group_introduction]")[0].disabled = !1,
        $("[name=group_type]")[0].value = "study",
        $("[name=edit_group_id]")[0].value = "new",
        $("#modalNewGroup textarea").parent().show(),
        $("#modalNewGroup input[type=text], #modalNewGroup select").parent().show(),
        $("#modalNewGroup input[type=checkbox]").show(),
        $("#modalNewGroup input[type=checkbox]").next().show(),
        $("#modalNewGroup .modal-title").html("Create Study Group"),
        $(".leave-group").hide()
    }
    ,
    this.create = function() {
        return postData = {},
        postData.name = $("[name=create_group_name]")[0].value,
        postData.module_id = $("[name=group_module_id]")[0].value,
        postData.leader_id = user_id,
        postData.self_join = $("[name=open_group]")[0].checked,
        postData.member_invite = $("[name=member_invite]")[0].checked,
        postData.online_status = $("[name=creator_show_online]")[0].checked,
        postData.introduction = $("[name=creator_community_group_introduction]")[0].value,
        postData.type = $("[name=group_type]")[0].value,
        postData.group_id = $("[name=edit_group_id]")[0].value,
        "new" == $("[name=edit_group_id]")[0].value ? $.ajax({
            url: "/cp/community_group/create",
            dataType: "json",
            data: postData,
            type: "post",
            context: this
        }).success(function(data) {
            data.success === !0 ? this.update_group_data(function() {
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Unable to create study group. " + data.error)
        }) : user_id != this.selected_group.leader_id ? $.ajax({
            url: "/cp/community_group/update_user_settings",
            dataType: "json",
            data: postData,
            type: "post",
            context: this
        }).success(function(data) {
            data.success !== !1 ? this.update_group_data(function() {
                this.open(community_group.selected_group.ID),
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Unable to update settings")
        }) : (postData.id = $("[name=edit_group_id]")[0].value,
        $.ajax({
            url: "/cp/community_group/update_group",
            dataType: "json",
            data: postData,
            type: "post",
            context: this
        }).success(function(data) {
            data.success !== !1 ? this.update_group_data(function() {
                this.open(community_group.selected_group.ID),
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Unable to update settings")
        }))
    }
    ,
    this.update_group_data = function(anon_func) {
        this.getMyGroups().success(function() {
            this.getOpenGroups().success(function() {
                this.getMyInvites().success(function() {
                    anon_func.call(this)
                })
            })
        })
    }
    ,
    this.getMyInvites = function() {
        return $.ajax({
            url: "/cp/community_group/my_invites/module_id/" + this.module_id,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.my_invites = data
        })
    }
    ,
    this.getOpenGroups = function() {
        return $.ajax({
            url: "/cp/community_group/open_groups/module_id/" + this.module_id,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.open_groups = data,
            cg_manager = this,
            $.each(this.my_groups, function(index, group) {
                cg_manager.open_groups = $.grep(cg_manager.open_groups, function(elet, index) {
                    return elet.ID == group.ID
                }, !0)
            })
        })
    }
    ,
    this.getMyGroups = function() {
        return $.ajax({
            url: "/cp/community_group/my_groups/module_id/" + this.module_id,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.my_groups = data
        })
    }
    ,
    this.ignore_invite = function(id) {
        return $.ajax({
            url: "/cp/community_group/ignore_invite/community_group_id/" + id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 ? this.update_group_data(function() {
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Error Attempting to Ignore Invite")
        })
    }
    ,
    this.join = function() {
        postData = {},
        postData.online_status = $("[name=show_online]")[0].checked,
        postData.introduction = $("[name=introduce]")[0].checked && "" != $("[name=community_group_introduction]")[0].value ? $("[name=community_group_introduction]")[0].value : "",
        cg_id = $("[name=community_group_id]")[0].value,
        "open" == $("[name=join_type]")[0].value ? $.ajax({
            url: "/cp/community_group/join/community_group_id/" + cg_id,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0 ? this.update_group_data(function() {
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Unable to join group. If you have left this group and would like to rejoin, please contact support")
        }) : "invite" == $("[name=join_type]")[0].value && $.ajax({
            url: "/cp/community_group/accept_invite/community_group_id/" + cg_id,
            dataType: "json",
            context: this,
            type: "post",
            data: postData
        }).success(function(data) {
            data.success === !0 ? this.update_group_data(function() {
                this.clear_group_lists(),
                this.display_group_lists()
            }) : $.msgbox("Unable to accept invite")
        })
    }
    ,
    this.show_thread = function(id) {
        thread_matches = $.grep(this.selected_group.posts, function(elet) {
            return elet.id == id
        }),
        this.current_thread = thread_matches[0],
        cg_manager = this,
        $(".new-conv-button").hide(),
        $("#conversation-table").hide({
            effect: "slide",
            complete: function() {
                $("#group-conversations").append('<a href="#" id="group-back-button" onclick="community_group.hide_thread(); return false;">Back</a>'),
                laloader.appendTo("#group-conversations"),
                $.ajax({
                    url: "/cp/community_group/get_thread/id/" + id,
                    dataType: "json",
                    context: cg_manager
                }).success(function(data) {
                    data.success !== !1 ? (this.current_thread.replies = data,
                    this.render_conversation_thread(),
                    laloader.remove()) : $.msgbox("Unable to view conversation")
                })
            }
        })
    }
    ,
    this.hide_thread = function(id) {
        laloader.remove(),
        $("#group-back-button").remove(),
        $("#thread-table").hide({
            effect: "slide",
            direction: "right",
            complete: function() {
                $("#thread-table").remove(),
                $("#conversation-table").show({
                    effect: "slide",
                    complete: function() {
                        $(".new-conv-button").show()
                    }
                })
            }
        })
    }
    ,
    this.new_conversation = function() {
        com_group = this,
        $(".new-conv-button").hide(),
        $("#conversation-table").hide({
            effect: "slide",
            direction: "left",
            complete: function() {
                com_group.render_conversation_form()
            }
        })
    }
    ,
    this.submit_conversation = function() {
        "" != $("[name=conversation-subject]")[0].value && "" != $("[name=conversation-text]")[0].value ? (postData = {},
        postData.subject = $("[name=conversation-subject]")[0].value,
        postData.text = $("[name=conversation-text]")[0].value,
        postData.group_id = this.selected_group.ID,
        this.clear_group_posts(),
        this.cancel_conversation(),
        laloader.appendTo("#group-conversations"),
        $.ajax({
            url: "/cp/community_group/conversation",
            data: postData,
            type: "post",
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success !== !1 ? (this.selected_group.posts.push(data),
            this.render_group_posts(),
            laloader.remove()) : $.msgbox("Unable to retrieve conversation")
        })) : $.msgbox("Please enter a Subject and a Message")
    }
    ,
    this.edit = function(id, type) {
        $("#group-back-button").remove(),
        com_group = this,
        $("#thread-table").hide({
            effect: "slide",
            direction: "left",
            complete: function() {
                com_group.render_edit_form(id, type)
            }
        })
    }
    ,
    this.post_edit = function(id, type) {
        postData = {},
        postData.text = $("[name=edit-text]")[0].value,
        postData.type = type,
        postData.id = id,
        $("#edit-form").hide({
            effect: "slide",
            direction: "right",
            complete: function() {
                $("#edit-form").remove()
            }
        }),
        laloader.appendTo("#group-conversations"),
        $.ajax({
            url: "/cp/community_group/edit",
            type: "post",
            dataType: "json",
            context: this,
            data: postData
        }).success(function(data) {
            data.success !== !1 ? (laloader.remove(),
            this.refresh_current_thread()) : ($.msgbox("Unable to edit"),
            laloader.remove())
        })
    }
    ,
    this.reply = function() {
        $("#group-back-button").remove(),
        com_group = this,
        $("#thread-table").hide({
            effect: "slide",
            direction: "left",
            complete: function() {
                com_group.render_reply_form()
            }
        })
    }
    ,
    this.post_reply = function() {
        "" != $("[name=reply-text]")[0].value ? (postData = {},
        postData.text = $("[name=reply-text]")[0].value,
        postData.thread_id = this.current_thread.id,
        this.clear_conversation_thread(),
        this.cancel_reply(),
        laloader.appendTo("#group-conversations"),
        $.ajax({
            url: "/cp/community_group/reply",
            type: "post",
            dataType: "json",
            context: this,
            data: postData
        }).success(function(data) {
            data.success !== !1 ? (this.current_thread.replies = data,
            this.render_conversation_thread(),
            laloader.remove()) : $.msgbox("Unable to reply")
        })) : $.msgbox("Please enter a reply")
    }
    ,
    this.cancel_reply = function() {
        $("#reply-form").hide({
            effect: "slide",
            direction: "right",
            complete: function() {
                $("#thread-table").length > 0 ? ($('<a href="#" id="group-back-button" onclick="community_group.hide_thread(); return false;">Back</a>').insertBefore("#thread-table"),
                $("#thread-table").show({
                    effect: "slide",
                    complete: function() {
                        $("#reply-form").remove()
                    }
                })) : ($('<a href="#" id="group-back-button" onclick="community_group.hide_thread(); return false;">Back</a>').appendTo("#group-conversations"),
                $("#reply-form").remove())
            }
        })
    }
    ,
    this.cancel_edit = function() {
        $("#edit-form").hide({
            effect: "slide",
            direction: "right",
            complete: function() {
                $("#thread-table").length > 0 ? ($('<a href="#" id="group-back-button" onclick="community_group.hide_thread(); return false;">Back</a>').insertBefore("#thread-table"),
                $("#thread-table").show({
                    effect: "slide",
                    complete: function() {
                        $("#edit-form").remove()
                    }
                })) : ($('<a href="#" id="group-back-button" onclick="community_group.hide_thread(); return false;">Back</a>').appendTo("#group-conversations"),
                $("#edit-form").remove())
            }
        })
    }
    ,
    this.cancel_conversation = function() {
        $("#conversation-form").hide({
            effect: "slide",
            direction: "right",
            complete: function() {
                $("#conversation-table").show({
                    effect: "slide",
                    complete: function() {
                        $("#conversation-form").remove(),
                        $(".new-conv-button").show()
                    }
                })
            }
        })
    }
    ,
    this.leave_group = function(user_id) {
        this.remove_user(user_id, !1).success(function(data) {
            data.success === !0 && ($("#modalGroup").modal("hide"),
            this.update_group_data(function() {
                this.clear_group_lists(),
                this.display_group_lists()
            }))
        })
    }
    ,
    this.remove_user = function(user_id, update) {
        return $.ajax({
            url: "/cp/community_group/remove_user/id/" + this.selected_group.ID + "/user_id/" + user_id,
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 ? (this.clear_manage_user_list(),
            update !== !1 && this.retrieve_group(this.selected_group).success(function() {
                this.render_manage_user_list(this.selected_group.users)
            })) : $.msgbox("Unable to remove user Error: " + data.error)
        })
    }
    ,
    this.invite_user = function(user_id) {
        postData = {},
        postData.message = $("[name=invite_message]")[0].value,
        $.ajax({
            url: "/cp/community_group/invite_user/id/" + this.selected_group.ID + "/user_id/" + user_id,
            data: postData,
            type: "post",
            dataType: "json",
            context: this
        }).success(function(data) {
            data.success === !0 ? (this.clear_manage_user_list(),
            this.retrieve_group(this.selected_group).success(function() {
                this.render_manage_user_list(this.selected_group.users)
            })) : $.msgbox("Could not invite user. This study group may aleady have 50 unanswered invites.")
        })
    }
    ,
    this.promote_post = function(id) {
        $.ajax({
            url: "/cp/community_group/admin/action/promote_post/id/" + id,
            context: this
        }).success(function() {
            this.refresh_current_thread()
        })
    }
    ,
    this.make_post_public = function(id) {
        $.ajax({
            url: "/cp/community_group/admin/action/set_post_public/id/" + id,
            context: this
        }).success(function() {
            this.refresh_current_thread()
        })
    }
    ,
    this.make_post_private = function(id) {
        $.ajax({
            url: "/cp/community_group/admin/action/set_post_private/id/" + id,
            context: this
        }).success(function() {
            this.refresh_current_thread()
        })
    }
    ,
    this.make_reply_public = function(id) {
        $.ajax({
            url: "/cp/community_group/admin/action/set_reply_public/id/" + id,
            context: this
        }).success(function() {
            this.refresh_current_thread()
        })
    }
    ,
    this.make_reply_private = function(id) {
        $.ajax({
            url: "/cp/community_group/admin/action/set_reply_private/id/" + id,
            context: this
        }).success(function() {
            this.refresh_current_thread()
        })
    }
    ,
    this.refresh_current_thread = function() {
        this.retrieve_group(this.selected_group).success(function() {
            this.clear_conversation_thread(),
            $("#group-back-button").remove(),
            this.show_thread(this.current_thread.id)
        })
    }
    ,
    this.clear_manage_user_list = function() {
        $(".manage-users-list").empty()
    }
    ,
    this.clear_user_search_results = function() {
        $(".user-search-list-results").empty()
    }
    ,
    this.render_user_search = function(results) {
        $.each(results, function(index, user) {
            $(".user-search-list-results").append('<div class="user">@' + user.username + " (" + user.first_name + ') <a onclick="community_group.invite_user(' + user.user_id + '); return false;" href="#">Invite and Include Message.</a></div>')
        })
    }
    ,
    this.render_manage_user_list = function(users) {
        user_status = "",
        self = this,
        $.each(users, function(index, user) {
            switch (user.status) {
            case "0":
                user_status = "invited";
                break;
            case "1":
                user_status = "ignored";
                break;
            case "2":
                user_status = "active";
                break;
            case "3":
                user_status = "left";
                break;
            case "4":
                user_status = "removed"
            }
            (4 != user.status || 3 != user.status) && $(".manage-users-list").append('<div class="user">@' + user.username + " (" + user.first_name + ") " + ("1" == user.instructor ? "instructor" : 4 != user.status ? user_status + (self.can_manage_users() ? ' <a href="#" onclick="community_group.remove_user(' + user.user_id + '); return false;">Remove</a></div>' : "") : user_status))
        })
    }
    ,
    this.clear_conversation_thread = function() {
        $("#thread-table").remove()
    }
    ,
    this.admin_menu_partial = function(type, value, is_public, is_promoted) {
        return this.admin === !0 ? ("post" == type ? menu = '<form method="post" class="hidden-action pull-right">' + (is_public === !0 ? '<button type="button" class="btn btn-la" onclick="community_group.make_post_private(' + value + ')">Make Private</button>' : '<button type="button" class="btn btn-la" onclick="community_group.make_post_public(' + value + ')">Make Public</button>') + (is_promoted === !1 ? '<button type="button" class="btn btn-la" onclick="community_group.promote_post(' + value + ')">Promote</button>' : "Promoted") + "</form>" : "reply" == type && (menu = '<form method="post" class="hidden-action pull-right">' + (is_public === !0 ? '<button type="button" class="btn btn-la" onclick="community_group.make_reply_private(' + value + ')">Make Private</button>' : '<button type="button" class="btn btn-la" onclick="community_group.make_reply_public(' + value + ')">Make Public</button>') + "</form>"),
        menu) : ""
    }
    ,
    this.render_conversation_thread = function() {
        self = this,
        $("#group-conversations").append('<table class="table table-striped" id="thread-table"><thead></thead><tbody></tbody></table>'),
        $("#thread-table thead").append("<tr><td>" + this.current_thread.subject + "</td></tr>"),
        $("#thread-table tbody").append('<tr><td>             <div class="col-xs-12 ' + ("1" == this.current_thread.gagged && self.admin === !0 ? "private" : "") + '">' + this.current_thread.text + '</div>                                                      <div class="row col-xs-12">                                                                <div class="col-xs-6">' + this.current_thread.first_name + '</div>                                                                <div class="col-xs-6 text-right">' + this.current_thread.date.slice(0, 10) + '</div>                                                      </div>              <div class="col-xs-12 text-right button-container">' + (this.admin === !0 || user_id == this.current_thread.user_id ? '<button type="button"  class="btn btn-la" onclick="community_group.edit(' + this.current_thread.id + ", 'post'); return false;\">edit</button>" : "") + this.admin_menu_partial("post", this.current_thread.id, 0 == this.current_thread.gagged, "1" == this.current_thread.visible) + "             </div>            </td></tr>"),
        self = this,
        $.each(this.current_thread.replies, function(index, reply) {
            $("#thread-table tbody").append('<tr><td>                                                      <div class="col-xs-12 ' + ("0" == reply.visible && self.admin === !0 ? "private" : "") + '">' + reply.text + '</div>                                                      <div class="row col-xs-12">                                                                <div class="col-xs-6">' + reply.first_name + '</div>                                                                <div class="col-xs-6 text-right">' + reply.date.slice(0, 10) + '</div>                                                      <div class="col-xs-12 text-right button-container">' + (self.admin === !0 || user_id == reply.user_id ? '<button type="button"  class="btn btn-la" onclick="community_group.edit(' + reply.id + ", 'reply'); return false;\">edit</button>" : "") + self.admin_menu_partial("reply", reply.id, 1 == reply.visible) + "                                                      </div>                                                      </div>                                              </td></tr>")
        }),
        $("#thread-table tbody").append('<tr><td>                                                              <div class="col-xs-12">                                                                      <button class="btn btn-la" onclick="community_group.reply();return false;">Reply</button>                                                              </div>                                                            </td></tr>')
    }
    ,
    this.render_conversation_form = function() {
        $("#group-conversations").append('<form id="conversation-form">             <label>Subject</label>              <input type="text" name="conversation-subject" class="form-control" />                                                      <label>Message</label>                                                      <textarea class="form-control" name="conversation-text"></textarea>                                                      <button class="btn btn-la-danger btn-top-pad" onclick="community_group.cancel_conversation(); return false;">Cancel</button>                                                      <button class="btn btn-la text-right btn-top-pad" onclick="community_group.submit_conversation(); return false">Submit</button>                                              </form>')
    }
    ,
    this.render_edit_form = function(id, type) {
        "post" == type ? message = this.current_thread.text : (replies = $.grep(this.current_thread.replies, function(reply) {
            return reply.id == id
        }),
        message = replies[0].text),
        $("#group-conversations").append('<form id="edit-form">                               <label>Edit</label>                                                      <textarea class="form-control" name="edit-text">' + message + '</textarea>                                                      <button class="btn btn-la-danger btn-top-pad" onclick="community_group.cancel_edit(); return false;">Cancel</button>                                                      <button class="btn btn-la text-right btn-top-pad" onclick="community_group.post_edit(' + id + ", '" + type + "');return false;\">Submit</button>                                              </form>")
    }
    ,
    this.render_reply_form = function() {
        $("#group-conversations").append('<form id="reply-form">              <label>Response</label>             <textarea class="form-control" name="reply-text"></textarea>              <button class="btn btn-la-danger btn-top-pad" onclick="community_group.cancel_reply(); return false;">Cancel</button>             <button class="btn btn-la text-right btn-top-pad" onclick="community_group.post_reply();return false;">Submit</button>            </form>')
    }
    ,
    this.clear_group_lists = function() {
        $("#my-groups").empty(),
        $("#open-invitations").empty(),
        $("#open-groups").empty()
    }
    ,
    this.display_group_lists = function() {
        this.display_open_groups(),
        this.display_my_groups(),
        this.display_my_invites()
    }
    ,
    this.display_open_groups = function() {
        this.open_groups.length > 0 ? ($("#open-groups").parent().show(),
        $.each(this.open_groups, function(index, group) {
            $("#open-groups").append('<div class="open-group"><p class="group-name">' + group.name + '</p><button class="btn btn-la"  -data-toggle="modal" data-target="#modalJoinGroup" onclick="community_group.show_join(' + group.ID + ');">Join</button></div>')
        })) : $("#open-groups").parent().hide()
    }
    ,
    this.display_my_groups = function() {
        this.my_groups.length > 0 ? ($("#my-groups").parent().show(),
        $.each(this.my_groups, function(index, group) {
            template = '<div class="my-group"><p class="group-name">' + group.name + '</p><button class="btn btn-la"  -data-toggle="modal" data-target="#modalGroup" onclick="community_group.open(' + group.ID + ');">view</button>',
            $("#my-groups").append(template)
        })) : $("#my-groups").parent().hide()
    }
    ,
    this.display_my_invites = function() {
        this.my_invites.length > 0 ? ($("#open-invitations").parent().show(),
        $.each(this.my_invites, function(index, invite) {
            $("#open-invitations").append('<div class="open-invite"><p class="group-name">' + invite.name + '</p><button class="btn btn-la" -data-toggle="modal" data-target="#modalJoinGroup" onclick="community_group.show_invite(' + invite.ID + ');">Answer Invite</button></div>')
        })) : $("#open-invitations").parent().hide()
    }
    ,
    this.show_join = function(id) {
        $("#modalJoinGroup").modal("show"),
        $(".join_invitation_message, #ignore_button").remove(),
        $("[name=community_group_id]")[0].value = id,
        $("[name=show_online]")[0].checked = !1,
        $("[name=introduce]")[0].checked = !1,
        $("[name=community_group_introduction]")[0].value = "",
        $("[name=join_type]")[0].value = "open",
        $("#join_button").html("Join")
    }
    ,
    this.show_invite = function(id) {
        this.show_join(id),
        $("[name=join_type]")[0].value = "invite",
        $("#join_button").html("Accept Invitation"),
        $('<button class="btn btn-la-danger" id="ignore_button" data-dismiss="modal" aria-label="Ignore" data-target="#modalJoinGroup" onclick="community_group.ignore_invite(' + id + '); return false;">Ignore</button>').insertBefore("#join_button"),
        this_invites = $.grep(this.my_invites, function(elet) {
            return elet.ID == id
        }),
        $("#modalJoinGroup .modal-body").prepend('<div class="join_invitation_message"><label>Invitation</label><p>' + this_invites[0].invite_message + "</p></div>")
    }
    ,
    this.clear_group_modal = function() {
        $("#modalGroup .modal-header h3").html("Group: "),
        $("#group-conversations, #group-user-list").empty()
    }
    ,
    this.can_manage_users = function() {
        return this.selected_group.leader_id == "" + user_id || 1 == user_admin
    }
    ,
    this.open = function(cg_id) {
        return this.clear_group_modal(),
        cg_matches = $.grep(this.my_groups, function(elet) {
            return elet.ID == cg_id
        }),
        cg_matches.length > 0 ? ($("#modalGroup").modal("show"),
        laloader.appendTo("#group-conversations"),
        cg = cg_matches[0],
        $("#modalGroup .modal-header h3").append(cg.name),
        this.retrieve_group(cg).success(function() {
            this.render_group_user_list(),
            this.render_group_posts(),
            laloader.remove(),
            "1" == this.selected_group.member_invite || this.can_manage_users() ? $(".manage_users").show() : $(".manage_users").hide()
        })) : (console.log("searching invites"),
        cg_matches = cg_matches = $.grep(this.my_invites, function(elet) {
            return elet.ID == cg_id
        }),
        console.log(cg_matches),
        cg_matches.length > 0 ? this.show_invite(cg_matches[0].ID) : (console.log("searching open groups"),
        cg_matches = cg_matches = $.grep(this.open_groups, function(elet) {
            return elet.ID == cg_id
        }),
        console.log(cg_matches),
        cg_matches.length > 0 ? this.show_join(cg_matches[0].ID) : $.msgbox("Study group not found / Access Denied")),
        return_obj = {},
        return_obj.success = function(anon_func) {
            anon_func.call(this)
        }
        ,
        return_obj)
    }
    ,
    this.render_group_user_list = function() {
        $.each(this.selected_group.users, function(index, user) {
            "2" == user.status && $("#group-user-list").append('<div class="user"><a href="/cp/socialize/profile/user/' + user.username + '" target="_blank">@' + user.username + "</a> (" + user.first_name + ")" + (void 0 !== user.online ? user.online === !0 ? ' <i class="fa fa-star" aria-hidden="true"></i>' : ' <i class="fa fa-star-o" aria-hidden="true"></i>' : "") + "</div>")
        })
    }
    ,
    this.clear_group_posts = function() {
        $("#group-conversations").empty()
    }
    ,
    this.render_group_posts = function() {
        $("#group-conversations").append('<table class="table table-striped" id="conversation-table"><tbody></tbody></table>'),
        self = this,
        $.each(this.selected_group.posts, function(index, post) {
            $("#conversation-table tbody").append('<tr>               <td>                  <div class="col-xs-12"><a href="#" onclick="community_group.show_thread(' + post.id + '); return false;">' + ("1" == post.gagged && self.admin === !0 ? "(priv) " + post.subject : post.subject) + '</a></div>                  <div class="row col-xs-12">                   <div class="col-xs-6">' + post.first_name + '</div>                   <div class="col-xs-6 text-right">' + post.date.slice(0, 10) + "</div>                 </div>                </td>               </tr>")
        }),
        $("#group-conversations").append('<div class="new-conversation-btn">        <button class="btn btn-la new-conv-button" onclick="community_group.new_conversation(); return false;">New Conversation</button>          </div>')
    }
};
