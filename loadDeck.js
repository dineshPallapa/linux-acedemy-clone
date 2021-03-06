function paste_area_check(o) {
    o.in_progress !== !0 && (o.in_progress = !0,
    $("[name=puid]").length > 0 && ($("[name=puid]")[0].value = ""),
    index = myTimeOut.length,
    myTimeOut[index] = setInterval(function() {
        o.scrollHeight > 212 ? o.value = o.value.slice(0, o.value.length - 1) : (clearInterval(myTimeOut[index]),
        o.in_progress = !1)
    }, 1, o, myTimeOut, index))
}
var DeckMaster = function() {
    this.deck_list = null,
    this.sharing = null,
    this.study_stats = [],
    this.init = function() {
        return self = this,
        $.ajax({
            url: "/cp/flashcards/getDeckMaster",
            dataType: "json"
        }).success(function(data) {
            void 0 !== data.deck_list ? (self.deck_list = data.deck_list,
            $.each(self.deck_list, function(index, deck_ob) {
                self.deck_list[index].access = "self"
            })) : self.deck_list = [],
            void 0 !== data.study_stats && (self.study_stats = data.study_stats),
            void 0 !== data.sharing ? (self.sharing = !0,
            $("#deck-share-status").append("On"),
            $("#deck-share-activate").remove()) : (self.sharing = !1,
            self.turnOnSharing().success(function(data) {
                data.success === !0 && (self.sharing = !0)
            }))
        })
    }
    ,
    this.turnOnSharing = function() {
        return $.ajax({
            url: "/cp/flashcards/turnOnSharing",
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && ($("#deck-share-status").replaceWith('<span id="#deck-share-status">On</span>'),
            $("#deck-share-activate").remove())
        })
    }
}
  , Deck = function(deck_list, object_name, edit_object_name) {
    void 0 === object_name && (object_name = "deck"),
    void 0 === edit_object_name && (edit_object_name = "deck_edit"),
    this.edit_object_name = edit_object_name,
    this.object_name = object_name,
    this.cards = [],
    this.cards_list = [],
    this.user_readable_name = null,
    this.name = null,
    this.module_id,
    this.user = null,
    this.deck_index = null,
    this.decks = deck_list,
    this.cards_in_play = [],
    this.shared_cards = [],
    this.shared_deck_index = null,
    this.view_shared_decks = function() {
        0 != this.module_id ? window.location = "/cp/modules/view/id/" + this.module_id + "/tab/flashcards" : $.msgbox('Please assign this deck to a course. (click the "edit" icon and select a course from the dropdown box)')
    }
    ,
    this.video_init = function(user_module_decks, video_id) {
        this.video_id = video_id,
        self = this,
        user_module_decks.length > 0 ? (user_video_deck_data = {
            user_decks: []
        },
        $.each(user_module_decks, function(index, deck) {
            user_video_deck_data.user_decks.push({
                name: void 0 !== deck.user_readable_name ? deck.user_readable_name : deck.name,
                module_id: deck.module_id,
                index: index,
                edit_object: self.edit_object_name
            })
        }),
        rendered_deck_modules = Mustache.render($("#video-page-module-deck").html(), user_video_deck_data),
        $(".note-card-section").append(rendered_deck_modules),
        attachCarouselHandler(),
        self = this,
        $.each(user_module_decks, function(deck_index, deck) {
            self.load_cards(deck_index).success(function(data) {
                if (innser_self = this,
                0 == data.length) {
                    var deckArrayLength = user_video_deck_data.user_decks.length;
                    console.log(deckArrayLength),
                    1 >= deckArrayLength ? $(".vl-card-count, .vl-note-card-section-header").hide() : deckArrayLength > 1 && ($(".vl-card-count, .vl-note-card-section-header").show(),
                    $(".edit-deck-link").hide()),
                    $(".notecard-display").siblings("div.p-x-0").hide(),
                    $(".add-card-btn").parent("div").removeClass("text-right").addClass("text-center"),
                    $(".add-card-btn").text("Create My First Flash Card"),
                    $("#module-deck_" + deck_index + " .carousel-inner").append('<div class="row empty-state-message"><div class="col-sm-10 col-sm-offset-2"><p class="vl-placeholder-text">Looks like you haven\'t created any flash cards for this deck yet.</p></div></div>'),
                    $(".video-page-deck").css("display", "block")
                } else
                    0 == !data.length && (data.forEach(function(card, card_index) {
                        $(".notecard-display").siblings("div.p-x-0").show(),
                        $(".add-card-btn").parent("div").removeClass("text-center").addClass("text-right"),
                        $(".add-card-btn").text("Add Flash Card"),
                        $("#module-deck_" + deck_index + " .carousel-inner").append(innser_self.card_template(card, 12))
                    }),
                    $(".notecard-content").flip({
                        trigger: "hover",
                        axis: "x",
                        autoSize: !1
                    }),
                    $("#module-deck_" + deck_index + " .carousel-inner :first").addClass("active"),
                    updateDeckCount(),
                    $(".video-page-deck").css("display", "block"))
            })
        }),
        rendered_popular = Mustache.render($("#video-page-pop-decks").html(), {}),
        $(".note-card-section").append(rendered_popular),
        attachPopDeckHandler(),
        this.inst_index = 0,
        this.decks.forEach(function(thisdeck, index) {
            index > 0 && ("instructor" == thisdeck.access ? ($(".deck-list-holder").append(deck.deck_template(thisdeck, index, this.inst_index)),
            this.inst_index = this.inst_index + 1) : "other" == thisdeck.access && $(".deck-list-holder").append(deck.deck_template(thisdeck, index)))
        }, this),
        $.ajax({
            url: "/cp/flashcards/getVideoCards/video_id/" + self.video_id,
            dataType: "json",
            context: this
        }).success(function(cards) {
            this.video_cards = cards,
            self = this,
            $.each(cards, function(index, card) {
                $(".popular-card-row").append(self.other_card_template(card, 12))
            }),
            $(".notecard-content").flip({
                trigger: "hover",
                axis: "x",
                autoSize: !1
            }),
            attachOptionsHandler(".popular-card-row ")
        })) : this.create_deck()
    }
    ,
    this.deck_template = function(thisdeck, index, inst_index) {
        return void 0 !== inst_index ? inst_string = ", " + inst_index : inst_string = "",
        template = Mustache.render($("#video-page-decks-template").html(), {
            object_name: this.object_name,
            index: index,
            inst_string: inst_string,
            length: thisdeck.meta.length,
            title: void 0 !== thisdeck.user_readable_name ? thisdeck.user_readable_name : thisdeck.name,
            user_disp_name: thisdeck.user_disp_name,
            forks: thisdeck.meta.forks
        }),
        template
    }
    ,
    this.module_page_decks_template = $("#module-page-decks-template").html(),
    Mustache.parse(this.module_page_decks_template),
    this.deck_template_syllabus = function(thisdeck, index, inst_index) {
        return void 0 !== inst_index ? inst_string = ", " + inst_index : inst_string = "",
        creation_date = new Date(1e3 * thisdeck.meta.created_at),
        template = Mustache.render(this.module_page_decks_template, {
            object_name: this.object_name,
            index: index,
            inst_string: inst_string,
            length: thisdeck.meta.length,
            title: void 0 !== thisdeck.user_readable_name ? thisdeck.user_readable_name : thisdeck.name,
            user_disp_name: thisdeck.user_disp_name,
            creation_date: creation_date.getMonth() + "/" + creation_date.getDate() + "/" + creation_date.getFullYear(),
            forks: thisdeck.meta.forks
        }),
        template
    }
    ,
    this.deck_spacer = "",
    this.load_shared_deck = function(deck_index, inst_index) {
        if (this.shared_scroll_first = 0,
        this.shared_scroll_last = this.shared_scroll_increment - 1,
        self = this,
        $("#modalSharedDeck .modal-body").html(""),
        $("#modalSharedDeck #shared-deck-title").html(void 0 !== this.decks[deck_index].user_readable_name ? this.decks[deck_index].user_readable_name : this.decks[deck_index].name),
        $("#shared-deck-author").html(void 0 !== this.decks[deck_index].user_disp_name ? "by " + this.decks[deck_index].user_disp_name : ""),
        laloader.appendTo("#modalSharedDeck .modal-body"),
        $("#modalSharedDeck .modal-body").append('<div class="row" id="shared-deck-browser"></div>'),
        void 0 !== this.decks[deck_index].module_id ? this.module_id = this.decks[deck_index].module_id : this.module_id = 0,
        "instructor" == this.decks[deck_index].access)
            return $.ajax({
                context: this,
                url: "/cp/flashcards/getInstructorDeck/module_id/" + this.decks[deck_index].module_id + "/inst_index/" + inst_index,
                dataType: "json",
                context: this
            }).success(function(data) {
                this.shared_cards = data,
                this.shared_deck_index = deck_index,
                laloader.remove(),
                data.forEach(function(card, index) {
                    index <= this.shared_scroll_last && $("#shared-deck-browser").append(deck.other_card_template(card, 4))
                }, this),
                $(".notecard-content").flip({
                    trigger: "hover",
                    axis: "x",
                    autoSize: !1
                }),
                attachOptionsHandler("#shared-deck-browser"),
                this.shared_scroll_setup(),
                $("#shared-deck-title-length").html("(" + this.shared_cards.length + " cards)")
            });
        if ("other" == this.decks[deck_index].access)
            return requested_deck = {},
            requested_deck.deck_name = this.decks[deck_index].name,
            requested_deck.user_id = this.decks[deck_index].user_id,
            $.ajax({
                context: this,
                url: "/cp/flashcards/getSharedDeck",
                dataType: "json",
                data: requested_deck,
                type: "post",
                context: this
            }).success(function(data) {
                this.shared_cards = data,
                this.shared_deck_index = deck_index,
                laloader.remove(),
                data.forEach(function(card, index) {
                    index <= this.shared_scroll_last && $("#shared-deck-browser").append(deck.other_card_template(card, 4))
                }, this),
                $(".notecard-content").flip({
                    trigger: "hover",
                    axis: "x",
                    autoSize: !1
                }),
                attachOptionsHandler("#shared-deck-browser"),
                $(".note-card-maybe-spam").parent().parent().parent().tooltip({
                    title: "This might be spam."
                }),
                this.shared_scroll_setup(),
                $("#shared-deck-title-length").html("(" + this.shared_cards.length + " cards)")
            });
        if ("self" == this.decks[deck_index].access) {
            var postDeck = {};
            return postDeck.name = this.decks[deck_index].name,
            $.ajax({
                context: this,
                url: "/cp/flashcards/getDeck/ajax/1",
                type: "post",
                data: postDeck,
                dataType: "json",
                context: this
            }).success(function(data) {
                laloader.remove(),
                this.shared_cards = data,
                this.shared_deck_index = deck_index,
                this.cards = data.sort(function(a, b) {
                    return b.updated_at - a.updated_at
                }),
                data.forEach(function(card, index) {
                    $("#shared-deck-browser").append(deck.card_template(card, 4))
                }, this),
                $(".notecard-content").flip({
                    trigger: "hover",
                    axis: "x",
                    autoSize: !1
                }),
                $("#shared-deck-title-length").html("(" + this.shared_cards.length + " cards)")
            })
        }
    }
    ,
    this.shared_scroll_first = 0,
    this.shared_scroll_last = 23,
    this.shared_scroll_increment = 24,
    this.shared_scroll_loading = !1,
    this.shared_scroll_setup = function() {
        self = this,
        $("#shared-deck-browser").scroll(function() {
            $("#shared-deck-browser").scrollTop() + $("#shared-deck-browser")[0].offsetHeight + 40 > $("#shared-deck-browser")[0].scrollHeight && self.shared_scroll_loading === !1 ? (self.shared_scroll_loading = !0,
            laloader.appendTo("#modalSharedDeck .modal-footer"),
            current_cards = $("#shared-deck-browser").children(),
            last_card = current_cards[current_cards.length - 1],
            last_card_position = $(last_card).position(),
            $("#shared-deck-browser .notecard-container").length > 2 * self.shared_scroll_increment && (start_offset = self.shared_scroll_first,
            self.shared_scroll_first = self.shared_scroll_first + self.shared_scroll_increment,
            $("#shared-deck-browser .notecard-container").each(function(index, notecard) {
                index + start_offset < self.shared_scroll_first && ($(notecard).remove(),
                console.log("removed"))
            })),
            $.each(deck.shared_cards, function(index, card) {
                index > self.shared_scroll_last && index <= self.shared_scroll_increment + self.shared_scroll_last && ($("#shared-deck-browser").append(self.other_card_template(card, 4)),
                console.log("added"))
            }),
            $("#shared-deck-browser").scrollTop(last_card.offsetTop - last_card_position.top),
            self.shared_scroll_last += self.shared_scroll_increment,
            $(".notecard-content").flip({
                trigger: "hover",
                axis: "x",
                autoSize: !1
            }),
            attachOptionsHandler("#shared-deck-browser"),
            self.shared_scroll_loading = !1,
            laloader.remove()) : 0 == $("#shared-deck-browser").scrollTop() && self.shared_scroll_loading === !1 && (self.shared_scroll_loading = !0,
            $("#shared-deck-browser .notecard-container").length > 2 * self.shared_scroll_increment && (start_offset = self.shared_scroll_first,
            self.shared_scroll_last = self.shared_scroll_last - self.shared_scroll_increment,
            $("#shared-deck-browser .notecard-container").each(function(index, notecard) {
                index + start_offset > self.shared_scroll_last && ($(notecard).remove(),
                console.log("removed"))
            })),
            output_card_list = [],
            top_card = $("#shared-deck-browser").children()[0],
            $.each(deck.shared_cards, function(index, card) {
                index < self.shared_scroll_first && index >= self.shared_scroll_first - self.shared_scroll_increment && output_card_list.push(card)
            }),
            $.each(output_card_list.reverse(), function(index, card) {
                $("#shared-deck-browser").prepend(self.other_card_template(card, 4)),
                console.log("added")
            }),
            output_card_list.length > 0 && (card_position = $(top_card).position(),
            $("#shared-deck-browser").scrollTop(card_position.top)),
            self.shared_scroll_first -= self.shared_scroll_increment,
            self.shared_scroll_first < 0 && (self.shared_scroll_first = 0),
            $(".notecard-content").flip({
                trigger: "hover",
                axis: "x",
                autoSize: !1
            }),
            attachOptionsHandler("#shared-deck-browser"),
            self.shared_scroll_loading = !1,
            laloader.remove())
        })
    }
    ,
    this.module_init = function(module_decks) {
        $("#instructor-deck-header, #popular-deck-header").hide(),
        $(".deck-section.instructor-section").hide(),
        module_decks.length > 0 ? (deck_data = {
            user_decks: []
        },
        module_decks.forEach(function(deck, index) {
            deck_data.user_decks.push({
                deck_index: index,
                title: void 0 !== deck.user_readable_name ? deck.user_readable_name : deck.name,
                module_id: deck.module_id
            })
        }, this),
        rendered = Mustache.render($("#module-page-module-deck").html(), deck_data),
        $(".course-page-note-cards").prepend(rendered),
        module_decks.forEach(function(deck, index) {
            this.load_cards(index, "deck").success(function(data) {
                this.cards_list[index].forEach(function(card, card_index) {
                    5 >= card_index && $("#" + index + "_module_deck .syl-mydeck-holder").append(this.card_template(card, "4 col-sm-6"))
                }, this),
                $(".notecard-content").flip({
                    trigger: "hover",
                    axis: "x",
                    autoSize: !1
                }),
                this.cards_list[index].length < 1 && $("#" + index + "_module_deck .syl-mydeck-holder").append('<div class="no-card-message col-sm-8 col-sm-offset-2 text-center"><p class="vl-placeholder-text">Looks like you haven\'t created any flash cards for this deck yet. Create flash cards to help you study material!</p></div>')
            }),
            $(".note-card-maybe-spam").parent().parent().parent().tooltip({
                title: "Other users suspect this might be spam. Please edit."
            }),
            $(".note-card-confirmed-spam").parent().parent().parent().tooltip({
                title: "This is spam. Please edit, or remove."
            })
        }, this),
        this.inst_index = 0,
        this.decks.forEach(function(thisdeck, index) {
            index > 0 && ("instructor" == thisdeck.access ? ($(".deck-section.instructor-section").show(),
            $("#instructor-deck-header").show(),
            $(".instructor-deck-holder").append(this.deck_template_syllabus(thisdeck, index, this.inst_index)),
            this.inst_index = this.inst_index + 1) : "other" == thisdeck.access && ($("#popular-deck-header").show(),
            $(".popular-decks-row").append(this.deck_template_syllabus(thisdeck, index)),
            $(".popular-decks-row").append(this.deck_spacer)))
        }, this)) : this.create_deck()
    }
    ,
    this.module_share_init = function() {
        self = this,
        $.each(this.decks, function(index, d) {
            "instructor" == d.access && (self.disp_instructor_deck_header(d),
            self.disp_deck_meta(d, index),
            self.decks.length > index + 1 && self.disp_other_deck_header()),
            "other" == d.access && 1 == index ? (self.disp_other_deck_header(),
            self.disp_deck_meta(d, index)) : "other" == d.access && self.disp_deck_meta(d, index)
        }),
        $("#course-progress-loading").hide()
    }
    ,
    this.share_deck_init = function(user_id, deck_name) {
        post_deck = {},
        post_deck.user_id = user_id,
        post_deck.name = deck_name,
        $.ajax({
            url: "/cp/flashcards/getDeck/ajax/1",
            type: "post",
            data: post_deck,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.cards = data
        })
    }
    ,
    this.review_deck_init = function() {
        self = this,
        this.decks.length > 0 && ($("#deck_reviewer").append("<ol></ol>"),
        $.each(this.decks, function(deck_index, d) {
            $("#deck_reviewer ol").append("<li>" + self.review_deck_link(deck_index) + "</li>")
        }))
    }
    ,
    this.review_deck_link = function(deck_index) {
        return template = '<a href="#" onclick="' + edit_object_name + ".load_deck_reviewer(" + deck_index + ')">' + this.decks[deck_index].user_readable_name + "</a>",
        template
    }
    ,
    this.disp_instructor_deck_header = function(d) {
        disp = '      <h3 id="instructor-deck-header">Instructor Deck</h3>      <hr class="shared-browser-hr"/>     ',
        $("#shared-deck-browser").append(disp)
    }
    ,
    this.disp_other_deck_header = function() {
        disp = '                        <h3 id="other-deck-header">Top Shared Decks</h3>                        <hr class="shared-browser-hr"/>                        ',
        $("#shared-deck-browser").append(disp)
    }
    ,
    this.deck_meta_template = $("#disp-deck-meta-template").html(),
    Mustache.parse(this.deck_meta_template),
    this.disp_deck_meta = function(d, index) {
        disp = Mustache.render(this.deck_meta_template, {
            index: index,
            name: d.name,
            user_disp_name: d.user_disp_name,
            created_on: new Date(1e3 * d.meta.created_at).toDateString(),
            updated_on: new Date(1e3 * d.meta.updated_at).toDateString(),
            length: d.meta.lenth
        }),
        $("#shared-deck-browser").append(disp)
    }
    ,
    this.share_browser = function(deck_index) {
        $(".card-browser").empty(),
        "instructor" == this.decks[deck_index].access && (current_deck = this.decks[deck_index],
        self = this,
        $.ajax({
            url: "/cp/flashcards/getInstructorDeck/module_id/" + current_deck.module_id,
            dataType: "json"
        }).success(function(data) {
            self.deck_index = deck_index,
            self.cards = data,
            $.each(data, function(index, card) {
                $("#shareBrowser_" + deck_index).append(deck.other_card_template(card, 4))
            })
        })),
        "other" == this.decks[deck_index].access && (current_deck = this.decks[deck_index],
        self = this,
        shared_deck = {},
        shared_deck.deck_name = current_deck.name,
        shared_deck.user_id = current_deck.user_id,
        $.ajax({
            url: "/cp/flashcards/getSharedDeck/",
            dataType: "json",
            type: "post",
            data: shared_deck
        }).success(function(data) {
            self.deck_index = deck_index,
            self.cards = data,
            $.each(data, function(index, card) {
                $("#shareBrowser_" + deck_index).append(deck.other_card_template(card, 4))
            })
        }))
    }
    ,
    this.load_review_cards = function(deck_index) {
        return post_deck = {},
        post_deck.name = this.decks[deck_index].name,
        post_deck.user_id = this.decks[deck_index].user_id,
        self = this,
        $.ajax({
            url: "/cp/flashcards/getDeck/ajax/1",
            type: "post",
            data: post_deck,
            dataType: "json"
        }).success(function(data) {
            self.cards = data
        })
    }
    ,
    this.create_deck = function(module_id) {
        if (module_id = $("[name=deck_module_id]")[0].value,
        self = this,
        new_deck_name = $("[name=create_deck_name]")[0].value,
        postDeck = {},
        postDeck.name = new_deck_name,
        postDeck.module_id = module_id,
        postDeck.user_readable_name = new_deck_name,
        1 == $("[name=is_new_deck]")[0].value) {
            if ("" != module_id && "" != new_deck_name)
                return new_index = this.decks.length,
                this.decks[new_index] = postDeck,
                $.ajax({
                    url: "/cp/flashcards/createDeck/ajax/1/module_id/" + module_id,
                    type: "post",
                    data: postDeck,
                    dataType: "json",
                    context: this
                }).success(function(data) {
                    data.success === !0 || "exists" == data.status ? $("#deckNav").length > 0 ? ($("#deckNav > ul").prepend('<li><a href="javascript:" onclick="' + self.edit_object_name + ".load_deck_editor(" + new_index + ', this)" id="edit_index_' + new_index + '">' + new_deck_name + "</a></li>"),
                    $("#deckNav > ul > li >a")[0].click()) : ($(".note-card-section").length > 0 || $(".note-card-section").length > 0) && $.ajax({
                        url: "/cp/flashcards/getCourseDecks/module_id/" + module_id,
                        dataType: "json",
                        context: this
                    }).success(function(deck_list) {
                        this.decks = deck_list,
                        module_decks = $.grep(deck_list, function(adeck, index) {
                            return adeck.user_id == user_id
                        }),
                        void 0 === this.video_id ? this.module_init(module_decks) : ($(".note-card-section").empty(),
                        this.video_init(module_decks, this.video_id))
                    }) : jq_orig.msgbox("Unable to create new deck with name " + new_deck_name)
                })
        } else
            postDeck.deck_name = this.name,
            $.ajax({
                url: "/cp/flashcards/updateDeck/ajax/1/module_id/" + module_id,
                type: "post",
                data: postDeck,
                dataType: "json"
            }).success(function(data) {
                data.success === !0 ? (self.user_readable_name = new_deck_name,
                self.module_id = module_id,
                self.decks[self.deck_index].user_readable_name = new_deck_name,
                self.decks[self.deck_index].module_id = module_id,
                $("#edit_index_" + self.deck_index)[0].innerHTML = new_deck_name,
                deck_edit.load_deck_editor(self.deck_index),
                $("[name=markDeckReview]").length > 0 && $("[name=markDeckReview]")[0].checked === !0 ? (post_review = {},
                post_review.user_id = self.user,
                post_review.deck_name = self.decks[self.deck_index].name,
                post_review.user_readable_name = postDeck.name,
                $.ajax({
                    url: "/cp/flashcards/markDeckReview",
                    dataType: "json",
                    type: "post",
                    data: post_review
                }).success(function(data) {
                    data.success === !0 ? (post_review.name = post_review.deck_name,
                    review_deck.push(post_review),
                    jq_orig.msgbox("Marked For Review")) : jq_orig.msgbox("Error Marking For Review")
                })) : $("[name=markDeckReview]").length > 0 && $("[name=markDeckReview]")[0].checked === !1 && (post_review = {},
                post_review.user_id = self.user,
                post_review.deck_name = self.decks[self.deck_index].name,
                $.ajax({
                    url: "/cp/flashcards/unMarkDeckReview",
                    dataType: "json",
                    type: "post",
                    data: post_review
                }).success(function(data) {
                    data.success === !0 ? (reviewdeck = review_deck.filter(function(n) {
                        return n.name == post_review.deck_name && n.user_id == post_review.user_id ? !1 : !0
                    }),
                    review_deck = reviewdeck,
                    jq_orig.msgbox("un-Marked For Review")) : jq_orig.msgbox("Error un-Marking For Review")
                }))) : jq_orig.msgbox("Unable to update deck with name " + new_deck_name)
            })
    }
    ,
    this.load_cards = function(deck_index, object_name) {
        void 0 === object_name && (object_name = "deck_edit"),
        this.object_name = object_name,
        void 0 === this.decks[deck_index].user_readable_name ? this.user_readable_name = this.decks[deck_index].name : this.user_readable_name = this.decks[deck_index].user_readable_name,
        this.name = this.decks[deck_index].name,
        this.module_id = this.decks[deck_index].module_id,
        this.user = user_id,
        this.deck_index = deck_index;
        var postDeck = {};
        return postDeck.name = this.name,
        self = this,
        $.ajax({
            url: "/cp/flashcards/getDeck/ajax/1",
            type: "post",
            data: postDeck,
            dataType: "json",
            context: this
        }).success(function(data) {
            this.cards = data.sort(function(a, b) {
                return b.updated_at - a.updated_at
            }),
            this.cards_list[deck_index] = data.sort(function(a, b) {
                return b.updated_at - a.updated_at
            })
        })
    }
    ,
    this.confirm_spam = function(uid) {
        $.ajax({
            url: "/cp/flashcards/confirmSpam/uid/" + uid,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && $("#card_" + uid.replace(".", "\\2e ")).parent().remove()
        })
    }
    ,
    this.disconfirm_spam = function(uid) {
        $.ajax({
            url: "/cp/flashcards/disConfirmSpam/uid/" + uid,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && $("#card_" + uid.replace(".", "\\2e ")).parent().remove()
        })
    }
    ,
    this.basic_card_template = $("#basic-card-template").html(),
    Mustache.parse(this.basic_card_template),
    this.card_template = function(card, size) {
        return void 0 === size ? bootstrap = "" : bootstrap = " col-md-" + size + " ",
        1 == card.is_spam ? spam_class = "note-card-confirmed-spam" : void 0 !== card.spam_count && card.spam_count > 0 ? spam_class = "note-card-maybe-spam" : spam_class = "",
        rendered_card = Mustache.render(this.basic_card_template, {
            size: bootstrap,
            spam_class: spam_class,
            edit_object_name: this.edit_object_name,
            uid: card.uid,
            front: card.front.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            back: card.back.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            forks: void 0 !== card.forks_count ? card.forks_count : 0,
            likes: void 0 !== card.likes_balance ? card.likes_balance : 0
        }),
        rendered_card
    }
    ,
    this.moderate_card_template = function(card) {
        return template = Mustache.render($("#moderate-card-template").html(), {
            object_name: this.object_name,
            uid: card.uid,
            front: card.front.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            back: card.back.replace(/(\r\n|\n\r|\r|\n)/g, "<br>")
        }),
        template
    }
    ,
    this.study_player_card_template = $("#study-player-card-template").html(),
    Mustache.parse(this.study_player_card_template),
    this.play_card_template = function(card, size) {
        return void 0 === size ? bootstrap = "" : bootstrap = " col-md-" + size + " ",
        1 == card.is_spam && (spam_class = "note-card-confirmed-spam"),
        card_temp = Mustache.render(this.study_player_card_template, {
            size: bootstrap,
            spam_class: spam_class,
            front: card.front.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            back: card.back.replace(/(\r\n|\n\r|\r|\n)/g, "<br>")
        }),
        card_temp
    }
    ,
    this.sharing_card_template = $("#sharing-card-template").html(),
    Mustache.parse(this.sharing_card_template),
    this.other_card_template = function(card, size) {
        return void 0 === size && (size = 4),
        void 0 !== card.spam_count && card.spam_count > 0 ? spam_class = "note-card-maybe-spam" : spam_class = "",
        card_temp = Mustache.render(this.sharing_card_template, {
            size: size,
            spam_class: spam_class,
            uid: card.uid,
            front: card.front.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            back: card.back.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"),
            edit_object_name: this.edit_object_name,
            forks: void 0 !== card.forks_count ? card.forks_count : 0,
            likes: void 0 !== card.likes_balance ? card.likes_balance : 0
        }),
        card_temp
    }
}
  , DeckEditor = function(deck) {
    this.deck = deck,
    self = this,
    this.load_deck_reviewer = function(deck_index) {
        this.deck.load_review_cards(deck_index).success(function(data) {
            $("#card_reviewer").empty(),
            $.each(self.cards, function(index, card) {
                $("#card_reviewer").append(self.card_template(card, 6))
            }),
            $(".notecard-content").flip({
                trigger: "hover",
                axis: "x",
                autoSize: !1
            }),
            $("#card_reviewer").append("<div><span>Total Cards: " + self.cards.length + '</span><a href="#" class="btn btn-la" onclick="' + self.edit_object_name + ".un_mark_review(" + deck_index + ')">Review Finished</a></div>')
        })
    }
    ,
    this.un_mark_review = function(index) {
        review_data = {},
        review_data.deck_name = this.deck.decks[index].name,
        review_data.user_id = this.deck.decks[index].user_id,
        $.ajax({
            url: "/cp/flashcards/unMarkDeckReview",
            data: review_data,
            dataType: "json",
            type: "post"
        }).success(function(data) {
            data.success === !0 && (jq_orig.msgbox("Deck is no longer under review"),
            window.location = "/cp/admin/noteCardAdmin/")
        })
    }
    ,
    this.clear_editor = function(deck_index) {
        "undefined" != typeof deck_index ? this.deck_index = deck_index : void 0 !== this.deck.deck_index && (this.deck_index = this.deck.deck_index),
        $("[name=card_front]").empty()[0].value = "",
        $("[name=card_back]").empty()[0].value = "",
        $("[name=card_index]")[0].value = "new"
    }
    ,
    this.locate_card = function(uid) {
        return card = $.grep(deck.cards, function(n) {
            return n.uid == uid
        })[0],
        void 0 === card && (this.deck.cards_list.forEach(function(list, deck_index) {
            card = $.grep(list, function(n) {
                return n.uid == uid
            })[0],
            void 0 !== card && (this.deck_index = deck_index,
            this.temp_card_holder = card)
        }, this),
        card = this.temp_card_holder),
        void 0 === card && (card = $.grep(this.deck.shared_cards, function(n) {
            return n.uid == uid
        })[0]),
        void 0 === card && (card = $.grep(this.deck.video_cards, function(n) {
            return n.uid == uid
        })[0]),
        card
    }
    ,
    this.set_editor = function(uid) {
        card = this.locate_card(uid),
        this.clear_editor(),
        $("[name=card_front]")[0].value = card.front.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
        $("[name=card_back]")[0].value = card.back.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
        $("[name=card_index]")[0].value = card.uid
    }
    ,
    this.fork = function(uid) {
        card = this.locate_card(uid),
        this.set_editor(uid),
        void 0 !== card.puid ? $("[name=puid]")[0].value = card.puid : $("[name=puid]")[0].value = card.uid,
        $("[name=video_id]")[0].value = card.video_id,
        $("[name=card_index]")[0].value = "fork",
        $("#modalCardEdit").modal("show")
    }
    ,
    this.save_fork = function(display_size, video_id) {
        card = {},
        card.front = $("[name=card_front]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        card.back = $("[name=card_back]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        "undefined" != $("[name=puid]")[0].value && (card.puid = $("[name=puid]")[0].value),
        "undefined" != $("[name=video_id]")[0].value ? card.video_id = $("[name=video_id]")[0].value : void 0 !== video_id && (card.video_id = video_id),
        "self" == this.deck.decks[0].access ? (card.deck_name = this.deck.decks[0].name,
        card.user_id = this.deck.decks[0].user_id,
        self = this,
        $.ajax({
            type: "post",
            url: "/cp/flashcards/createCard/ajax/1",
            dataType: "json",
            data: card
        }).success(function(data) {
            data.error ? $.msgbox(data.error) : (self.deck.video_id == data.video_id ? self.display_created_card(data, display_size) : $.msgbox("Forked Card to Current Deck"),
            total = parseInt($("#deck_" + self.deck.shared_deck_index + " .number-of-forks p span").html()),
            $("#deck_" + self.deck.shared_deck_index + " .number-of-forks p span").html(total + 1))
        })) : $.msgbox("Could not copy to course deck, please create or assign a deck to this course.")
    }
    ,
    this.like = function(uid, elet) {
        $.ajax({
            url: "/cp/flashcards/likeCard/uid/" + uid,
            dataType: "json",
            context: this
        }).success(function(data) {
            1 == data.success && (this.deck.shared_cards.forEach(function(card, index) {
                card.uid == uid && (void 0 === this.deck.shared_cards[index].likes_balance && (this.deck.shared_cards[index].likes_balance = 0),
                this.deck.shared_cards[index].likes_balance += 1,
                $("#card_" + uid.replace(".", "\\2e ") + " .card_likes").html(this.deck.shared_cards[index].likes_balance))
            }, this),
            void 0 !== this.deck.video_cards && this.deck.video_cards.forEach(function(card, index) {
                card.uid == uid && (void 0 === this.deck.video_cards[index].likes_balance && (this.deck.video_cards[index].likes_balance = 0),
                this.deck.video_cards[index].likes_balance += 1,
                $("#card_" + uid.replace(".", "\\2e ") + " .card_likes").html(this.deck.video_cards[index].likes_balance))
            }, this)),
            elet.classList.add("disabled")
        })
    }
    ,
    this.disLike = function(uid, elet) {
        $.ajax({
            url: "/cp/flashcards/disLikeCard/uid/" + uid,
            dataType: "json",
            context: this
        }).success(function(data) {
            1 == data.success && (this.deck.shared_cards.forEach(function(card, index) {
                card.uid == uid && (void 0 === this.deck.shared_cards[index].likes_balance && (this.deck.shared_cards[index].likes_balance = 0),
                this.deck.shared_cards[index].likes_balance -= 1,
                $("#card_" + uid.replace(".", "\\2e ") + " .card_likes").html(this.deck.shared_cards[index].likes_balance))
            }, this),
            void 0 !== this.deck.video_cards && this.deck.video_cards.forEach(function(card, index) {
                card.uid == uid && (void 0 === this.deck.video_cards[index].likes_balance && (this.deck.video_cards[index].likes_balance = 0),
                this.deck.video_cards[index].likes_balance -= 1,
                $("#card_" + uid.replace(".", "\\2e ") + " .card_likes").html(this.deck.video_cards[index].likes_balance))
            }, this)),
            elet.classList.add("disabled")
        })
    }
    ,
    this.flag = function(uid, elet) {
        $.ajax({
            url: "/cp/flashcards/markSpam/uid/" + uid
        }),
        elet.classList.add("disabled")
    }
    ,
    this.save_card = function(display_size, video_id) {
        void 0 === display_size && (display_size = 4),
        "new" == $("[name=card_index]")[0].value ? this.create_card(display_size, video_id) : "fork" == $("[name=card_index]")[0].value ? this.save_fork(display_size, video_id) : this.update_card($("[name=card_index]")[0].value)
    }
    ,
    this.update_card = function(uid) {
        card = this.locate_card(uid),
        post_data = {},
        post_data.deck_name = card.deck_name,
        post_data.user_id = card.user_id,
        post_data.uid = uid,
        post_data.front = $("[name=card_front]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        post_data.back = $("[name=card_back]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        self = this,
        $.ajax({
            type: "post",
            url: "/cp/flashcards/updateCard/ajax/1",
            dataType: "json",
            data: post_data
        }).success(function(data) {
            card.front = post_data.front,
            card.back = post_data.back,
            $("#card_" + uid.replace(".", "\\2e ") + "  .notecard-content .front").html(post_data.front.replace(/(\r\n|\n\r|\r|\n)/g, "<br>")),
            $("#card_" + uid.replace(".", "\\2e ") + "  .notecard-content .back").html(post_data.back.replace(/(\r\n|\n\r|\r|\n)/g, "<br>"))
        })
    }
    ,
    this.create_card = function(display_size, video_id) {
        "self" == this.deck.decks[this.deck_index].access ? (post_data = {},
        post_data.deck_name = this.deck.decks[this.deck_index].name,
        post_data.user_id = this.deck.decks[this.deck_index].user_id,
        post_data.front = $("[name=card_front]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        post_data.back = $("[name=card_back]")[0].value.replace(/>/g, "&gt;").replace(/</g, "&lt;"),
        void 0 !== video_id && (post_data.video_id = video_id),
        $.ajax({
            type: "post",
            url: "/cp/flashcards/createCard/ajax/1",
            dataType: "json",
            data: post_data,
            context: this
        }).success(function(data) {
            data.error ? $.msgbox(data.error) : this.display_created_card(data, display_size)
        })) : $.msgbox("error : incorrect deck selected")
    }
    ,
    this.display_created_card = function(new_card, display_size) {
        $(".no-card-message").hide(),
        this.deck.cards_list[this.deck_index][this.deck.cards_list[this.deck_index].length] = new_card,
        console.log(this.deck_index),
        $(".card-browser .create-card-box").length > 0 ? ($(this.deck.card_template(new_card, display_size)).insertAfter(".card-browser .create-card-box"),
        $(".notecard-content").flip({
            trigger: "hover",
            axis: "x",
            autoSize: !1
        })) : $("#module-deck_" + this.deck_index + " .new-card-save").length > 0 ? ($(".vl-note-card-section-header, .vl-card-count").show(),
        $(".notecard-display").siblings("div.p-x-0").show(),
        $(".add-card-btn").parent("div").removeClass("text-center").addClass("text-right"),
        $(".add-card-btn").text("Add Flash Card"),
        $(".empty-state-message").hide(),
        $("#module-deck_" + this.deck_index + " .new-card-save").append(this.deck.card_template(new_card, display_size)),
        $(".notecard-content").flip({
            trigger: "hover",
            axis: "x",
            autoSize: !1
        }),
        1 == $("#module-deck_" + this.deck_index + " .carousel-inner").children(".item").length && $("#module-deck_" + this.deck_index + " .carousel-inner .notecard-container").addClass("active")) : $("#" + this.deck_index + "_module_deck .syl-mydeck-holder").length > 0 && ($("#" + this.deck_index + "_module_deck .syl-mydeck-holder .notecard-container").length >= 6 ? (self = this,
        console.log("hidding last catd of dec: " + this.deck_index),
        $("#" + this.deck_index + "_module_deck .syl-mydeck-holder").children().last().hide("slide", {
            direction: "right",
            complete: function() {
                module_parent_element = $(this).parents(".deck-section"),
                console.log(module_parent_element),
                module_parent_element.find(".syl-mydeck-holder").children().last().remove(),
                $(self.deck.card_template(new_card, display_size)).prependTo(module_parent_element.find(".syl-mydeck-holder")),
                $(".notecard-content").flip({
                    trigger: "hover",
                    axis: "x",
                    autoSize: !1
                })
            }
        })) : ($(this.deck.card_template(new_card, display_size)).prependTo("#" + this.deck_index + "_module_deck .syl-mydeck-holder"),
        $(".notecard-content").flip({
            trigger: "hover",
            axis: "x",
            autoSize: !1
        }))),
        "undefined" != typeof updateDeckCount && updateDeckCount()
    }
    ,
    this.delete_card = function() {
        self = this,
        jq_orig.msgbox("Are you sure you want to delete this card?", {
            type: "confirm",
            buttons: [{
                type: "submit",
                value: "Yes"
            }, {
                type: "cancel",
                value: "Cancel"
            }]
        }, function(result) {
            "Yes" == result ? self.apply_delete_card() : $("#modalCardEdit").modal()
        })
    }
    ,
    this.apply_delete_card = function() {
        uid = $("[name=card_index]")[0].value,
        "fork" != uid && "new" !== uid && (card = $.grep(deck.cards, function(n) {
            return n.uid == uid
        })[0],
        card_index = null,
        $.each(deck.cards, function(index, card) {
            card.uid == uid && (card_index = index)
        }),
        self = this,
        $.ajax({
            url: "/cp/flashcards/deleteCard/ajax/1/uid/" + card.uid + "/user_id/" + card.user_id,
            dataType: "json"
        }).success(function(data) {
            1 == data.success && (self.deck.cards.splice(card_index, 1),
            $("#card_" + uid.replace(".", "\\2e ")).hide("puff", {
                complete: function() {
                    $("#card_" + uid.replace(".", "\\2e ")).remove(),
                    $("#module-deck_" + deck.deck_index + " .new-card-save .item:first-child").addClass("active"),
                    "undefined" != typeof updateDeckCount && updateDeckCount()
                }
            }))
        }))
    }
    ,
    this.current_edit_link_object = null,
    this.load_deck_editor = function(deck_index, link_object) {
        $(".team-organize-single").show(),
        $("#deckNav li").removeClass("active"),
        void 0 !== link_object ? (this.current_edit_link_object = link_object,
        link_object.parentElement.classList.add("active")) : ($("#edit_index_" + deck_index).parent().addClass("active"),
        this.current_edit_link_object = $("#edit_index_" + deck_index)[0]),
        $(".card-browser").empty(),
        self = this,
        this.deck.load_cards(deck_index).success(function(data) {
            $("#editor_deck_name")[0].innerHTML = self.user_readable_name,
            create_card = Mustache.render($("#create-card-template").html(), {
                edit_object_name: self.edit_object_name
            }),
            $(".card-browser").append(create_card),
            $.each(data, function(index, card) {
                $(".card-browser").append(self.card_template(card, 6))
            }),
            $(".notecard-content").flip({
                trigger: "hover",
                axis: "x",
                autoSize: !1
            }),
            $(".note-card-maybe-spam").parent().parent().parent().tooltip({
                title: "Other users suspect this might be spam. Please edit."
            }),
            $(".note-card-confirmed-spam").parent().parent().parent().tooltip({
                title: "This is spam. Please edit, or remove."
            })
        })
    }
    ,
    this.delete_deck = function() {
        self = this,
        jq_orig.msgbox("Delete this deck and all note cards within it?", {
            type: "confirm",
            buttons: [{
                type: "submit",
                value: "Yes"
            }, {
                type: "cancel",
                value: "No"
            }]
        }, function(result) {
            "Yes" == result && (postDeck = {},
            postDeck.name = self.deck.name,
            $.ajax({
                url: "/cp/flashcards/deleteDeck/ajax/1/user_id/" + self.deck.user,
                type: "post",
                data: postDeck,
                dataType: "json"
            }).success(function(data) {
                data.success === !0 ? ($("#edit_index_" + self.deck.deck_index).parent().remove(),
                $("#deckNav > ul > li > a").length > 1 ? $("#deckNav > ul > li > a")[0].click() : $(".team-organize-single").hide()) : alert("Error, sorry for the inconvenience")
            }))
        })
    }
    ,
    this.clear_create_deck = function(default_module_id) {
        void 0 === default_module_id && (default_module_id = 0),
        $("[name=is_new_deck]")[0].value = 1,
        $("[name=create_deck_name]")[0].value = "",
        $("[name=deck_module_id]")[0].value = default_module_id
    }
    ,
    this.edit_deck_properties = function() {
        $("[name=is_new_deck]")[0].value = 0,
        $("[name=create_deck_name]")[0].value = this.deck.user_readable_name,
        $("[name=deck_module_id]")[0].value = this.deck.module_id,
        "undefined" != typeof review_deck ? (marked = $.grep(review_deck, function(n) {
            return n.user_id == this.deck.user && n.name == this.deck.name
        }),
        marked.length < 1 ? $("[name=markDeckReview]")[0].checked = !1 : $("[name=markDeckReview]")[0].checked = !0) : $("[name=markDeckReview]").length > 0 && ($("[name=markDeckReview]")[0].checked = !0)
    }
}
  , myTimeOut = [];
