var StudyDeck = function(deck_obj, deck_master) {
    this.deck_obj = deck_obj,
    this.deck_index = null,
    this.cards = [],
    this.master = deck_master,
    this.bin1 = [],
    this.bin2 = [],
    this.bin3 = [],
    this.learned = [],
    this.draw_number = null,
    this.current_card_data = null,
    this.deck_stats_key = null,
    this.init = function(deck_index) {
        $("#modalSharedDeck").length > 0 && $("#modalSharedDeck").modal("hide"),
        this.hide_response_buttons(),
        this.current_deck = this.deck_obj.decks[deck_index],
        this.instructor_offset = 0,
        $("#study-deck-title").html(void 0 !== this.current_deck.user_readable_name ? this.current_deck.user_readable_name : this.current_deck.name),
        $("#study-deck-author").html(void 0 !== this.current_deck.user_disp_name ? "by: " + this.current_deck.user_disp_name : ""),
        self = this,
        $.each(this.deck_obj.decks, function(index, thisdeck) {
            "self" == thisdeck.access && (self.instructor_offset = index + 1)
        }),
        this.deck_index = deck_index,
        this.setup_rating_widget(),
        this.draw_number = 0,
        self2 = this,
        "self" == this.deck_obj.decks[this.deck_index].access ? this.deck_obj.load_cards(deck_index, "deck").success(function(cards) {
            self2.cards = cards,
            self2.deck_stats_key = self2.current_deck.name + "_" + self2.deck_obj.user,
            self2.current_deck.user_id = self2.deck_obj.user,
            self2.setup_stats(),
            self2.clear_slider(),
            self2.show_deck_starter(),
            $("#study-deck-title-length").html("(" + self2.cards.length + " cards)")
        }) : "instructor" == this.deck_obj.decks[this.deck_index].access ? (self2 = this,
        $("#shared-deck-browser .item").remove(),
        this.deck_obj.load_shared_deck(deck_index, deck_index - this.instructor_offset).success(function(cards) {
            self2.cards = cards,
            self2.deck_stats_key = self2.current_deck.name + "_" + self2.current_deck.user_id,
            self2.setup_stats(),
            self2.clear_slider(),
            self2.show_deck_starter(),
            $("#study-deck-title-length").html("(" + self2.cards.length + " cards)")
        })) : (self2 = this,
        $("#shared-deck-browser .notecard-container").remove(),
        this.deck_obj.load_shared_deck(deck_index).success(function(cards) {
            self2.cards = cards,
            self2.deck_stats_key = self2.current_deck.name + "_" + self2.current_deck.user_id,
            self2.setup_stats(),
            self2.clear_slider(),
            self2.show_deck_starter(),
            $("#study-deck-title-length").html("(" + self2.cards.length + " cards)")
        }))
    }
    ,
    this.setup_rating_widget = function() {
        clearStudyEventListeners(),
        entity = this.deck_obj.decks[this.deck_index],
        entityId = "la_deck_" + entity.user_id + "_" + md5(entity.name),
        $("#modalPlayDeck .rating-container")[0].id = entityId,
        "undefined" != typeof ratingConfig && (ratingConfig[entityId] = ratingConfig.study_deck_,
        setupRatingEntity(entityId, ratingConfig[entityId]))
    }
    ,
    this.setup_stats = function() {
        void 0 !== this.master.study_stats[this.deck_stats_key] ? (study_stats = this.master.study_stats[this.deck_stats_key],
        this.load_study(study_stats)) : this.start_new_study(),
        this.update_stats()
    }
    ,
    this.load_study = function(study_stats) {
        void 0 !== study_stats.bin1 ? this.bin1 = study_stats.bin1 : this.bin1 = [],
        void 0 !== study_stats.bin2 ? this.bin2 = study_stats.bin2 : this.bin2 = [],
        void 0 !== study_stats.bin3 ? this.bin3 = study_stats.bin3 : this.bin3 = [],
        void 0 !== study_stats.learned ? this.learned = study_stats.learned : this.learned = [],
        this.cards.forEach(function(card, index) {
            this.bin1.indexOf(card.uid) < 0 && this.bin2.indexOf(card.uid) < 0 && this.bin3.indexOf(card.uid) < 0 && this.learned.indexOf(card.uid) < 0 && this.bin1.push(card.uid)
        }, this),
        this.bin1_removal = [],
        this.bin1.forEach(function(uid, index) {
            matches = $.grep(this.cards, function(card, index) {
                return card.uid == uid
            }),
            matches.length < 1 && this.bin1_removal.push(index)
        }, this),
        this.bin2_removal = [],
        this.bin2.forEach(function(uid, index) {
            matches = $.grep(this.cards, function(card, index) {
                return card.uid == uid
            }),
            matches.length < 1 && this.bin2_removal.push(index)
        }, this),
        this.bin3_removal = [],
        this.bin3.forEach(function(uid, index) {
            matches = $.grep(this.cards, function(card, index) {
                return card.uid == uid
            }),
            matches.length < 1 && this.bin3_removal.push(index)
        }, this),
        this.learned_removal = [],
        this.learned.forEach(function(uid, index) {
            matches = $.grep(this.cards, function(card, index) {
                return card.uid == uid
            }),
            matches.length < 1 && this.learned_removal.push(index)
        }, this),
        this.bin1_removal.forEach(function(bin_index, index) {
            this.bin1.splice(bin_index, 1)
        }, this),
        this.bin2_removal.forEach(function(bin_index, index) {
            this.bin2.splice(bin_index, 1)
        }, this),
        this.bin3_removal.forEach(function(bin_index, index) {
            this.bin3.splice(bin_index, 1)
        }, this),
        this.learned_removal.forEach(function(bin_index, index) {
            this.learned.splice(bin_index, 1)
        }, this)
    }
    ,
    this.start_new_study = function() {
        self = this,
        this.bin1 = [],
        this.bin2 = [],
        this.bin3 = [],
        this.learned = [],
        $.each(this.cards, function(index, card) {
            self.bin1.push(card.uid)
        })
    }
    ,
    this.save_study_stats = function() {
        return postData = {},
        postData.bin1 = this.bin1,
        postData.bin2 = this.bin2,
        postData.bin3 = this.bin3,
        postData.learned = this.learned,
        postData.deck_name = this.current_deck.name,
        postData.user_id = this.current_deck.user_id,
        self = this,
        $.ajax({
            url: "/cp/flashcards/saveStudyStats/",
            type: "post",
            data: postData,
            dataType: "json"
        }).success(function(data) {
            data.success === !0 && (self.master.study_stats[postData.deck_name + "_" + postData.user_id] = postData)
        }),
        postData
    }
    ,
    this.random_index = function(bin) {
        return Math.floor(Math.random() * bin.length)
    }
    ,
    this.draw_card = function() {
        if (this.draw_number = this.draw_number + 1,
        this.draw_number % 16 == 0) {
            if (this.bin3.length > 0)
                return [this.bin3[this.random_index(this.bin3)], 3];
            if (this.bin2.length > 0)
                return [this.bin2[this.random_index(this.bin2)], 2];
            if (this.bin1.length > 0)
                return [this.bin1[this.random_index(this.bin1)], 1]
        } else if (this.draw_number % 4 == 0) {
            if (this.bin2.length > 0)
                return [this.bin2[this.random_index(this.bin2)], 2];
            if (this.bin1.length > 0)
                return [this.bin1[this.random_index(this.bin1)], 1];
            if (this.bin3.length > 0)
                return [this.bin3[this.random_index(this.bin3)], 3]
        } else {
            if (this.bin1.length > 0)
                return [this.bin1[this.random_index(this.bin1)], 1];
            if (this.bin2.length > 0)
                return [this.bin2[this.random_index(this.bin2)], 2];
            if (this.bin3.length > 0)
                return [this.bin3[this.random_index(this.bin3)], 3]
        }
        return [null, 0]
    }
    ,
    this.answer_card = function(uid, answer, bin_number) {
        answer === !0 ? this.promote(uid, bin_number) : this.demote(uid, bin_number)
    }
    ,
    this.learned_card = function(uid, bin_number) {
        1 == bin_number ? (this.learned[this.learned.length] = uid,
        this.bin1 = $.grep(this.bin1, function(elet) {
            return elet !== uid
        })) : 2 == bin_number ? (this.learned[this.learned.length] = uid,
        this.bin2 = $.grep(this.bin2, function(elet) {
            return elet !== uid
        })) : 3 == bin_number && (this.learned[this.learned.length] = uid,
        this.bin3 = $.grep(this.bin3, function(elet) {
            return elet !== uid
        }))
    }
    ,
    this.promote = function(uid, bin_number) {
        1 == bin_number ? (this.bin2[this.bin2.length] = uid,
        this.bin1 = $.grep(this.bin1, function(elet) {
            return elet !== uid
        })) : 2 == bin_number ? (this.bin3[this.bin3.length] = uid,
        this.bin2 = $.grep(this.bin2, function(elet) {
            return elet !== uid
        })) : 3 == bin_number && (this.learned[this.learned.length] = uid,
        this.bin3 = $.grep(this.bin3, function(elet) {
            return elet !== uid
        }))
    }
    ,
    this.demote = function(uid, bin_number) {
        2 == bin_number ? (this.bin1[this.bin1.length] = uid,
        this.bin2 = $.grep(this.bin2, function(elet) {
            return elet !== uid
        })) : 3 == bin_number && (this.bin2[this.bin2.length] = uid,
        this.bin3 = $.grep(this.bin3, function(elet) {
            return elet !== uid
        }))
    }
    ,
    this.retrieve_card = function(uid) {
        return card_a = $.grep(this.cards, function(card) {
            return card.uid == uid
        }),
        card_a[0]
    }
    ,
    this.start = function() {
        this.current_card_data = this.draw_card(),
        $(".study-deck-starter").hide(),
        null !== this.current_card_data[0] ? (card = this.retrieve_card(this.current_card_data[0]),
        this.slide_card_in(card),
        this.show_reveal_button()) : (this.update_stats(),
        this.hide_reveal_button())
    }
    ,
    this.reset_stats = function() {
        this.start_new_study(),
        this.save_study_stats(),
        this.update_stats(),
        $("#start_study").show()
    }
    ,
    this.right = function() {
        this.hide_response_buttons(),
        $("#answer-instructions").hide(),
        this.promote(this.current_card_data[0], this.current_card_data[1]),
        this.slide_card_out("right"),
        this.current_card_data = this.draw_card(),
        null !== this.current_card_data[0] ? (card = this.retrieve_card(this.current_card_data[0]),
        this.slide_card_in(card)) : ($(".study-deck-starter").show(),
        $("#start_study").hide()),
        this.update_stats(),
        this.save_study_stats()
    }
    ,
    this.wrong = function() {
        $("#answer-instructions").hide(),
        this.hide_response_buttons(),
        this.demote(this.current_card_data[0], this.current_card_data[1]),
        this.slide_card_out("left"),
        this.current_card_data = this.draw_card(),
        null !== this.current_card_data[0] ? (card = this.retrieve_card(this.current_card_data[0]),
        this.slide_card_in(card)) : ($(".study-deck-starter").show(),
        $("#start_study").hide()),
        this.update_stats(),
        this.save_study_stats()
    }
    ,
    this.totally_learned = function() {
        $("#answer-instructions").hide(),
        this.hide_response_buttons(),
        this.learned_card(this.current_card_data[0], this.current_card_data[1]),
        this.slide_card_out("right"),
        this.current_card_data = this.draw_card(),
        null !== this.current_card_data[0] ? (card = this.retrieve_card(this.current_card_data[0]),
        this.slide_card_in(card)) : ($(".study-deck-starter").show(),
        $("#start_study").hide()),
        this.update_stats(),
        this.save_study_stats()
    }
    ,
    this.clear_slider = function() {
        $("#modalPlayDeck .modal-body .study-deck-card").empty()
    }
    ,
    this.show_deck_starter = function() {
        $(".study-deck-starter").show(),
        this.hide_reveal_button(),
        this.learned.length == this.cards.length ? $("#start_study").hide() : $("#start_study").show()
    }
    ,
    this.update_stats = function() {
        $("#cards-new").html(this.bin1.length),
        $("#cards-familiar").html(this.bin2.length),
        $("#cards-mastering").html(this.bin3.length),
        $("#cards-learned").html(this.learned.length),
        $("#study-deck-cards-learned").html(this.learned.length),
        $("#study-deck-size").html(this.cards.length)
    }
    ,
    this.hide_reveal_button = function() {
        $("#reveal_card").hide()
    }
    ,
    this.show_reveal_button = function() {
        $("#reveal_card").show()
    }
    ,
    this.disable_reveal_button = function() {
        $("#reveal_card").off("click"),
        $("#reveal_card").addClass("disabled")
    }
    ,
    this.enable_reveal_button = function() {
        $("#reveal_card").on("click", function() {
            $("#study_slider .notecard-content").flip(!0)
        }),
        $("#reveal_card").removeClass("disabled")
    }
    ,
    this.show_response_buttons = function() {
        $(".response-buttons").show()
    }
    ,
    this.hide_response_buttons = function() {
        $(".response-buttons").hide()
    }
    ,
    this.flip_listener = function() {
        self = this,
        $("#study_slider .notecard-content").on("flip:done", function() {
            self.disable_reveal_button(),
            self.show_response_buttons(),
            $("body").off("keydown"),
            $("body").keydown(function(event) {
                87 == event.which && self.wrong(),
                82 == event.which && self.right(),
                77 == event.which && self.totally_learned()
            })
        })
    }
    ,
    this.flipevent = null,
    this.slide_card_in = function(card) {
        $("#study_slider").length < 1 && $("#modalPlayDeck .modal-body .study-deck-card").append('<div id="study_slider" class="row" style="display:none"></div>'),
        $("#study_slider").append(this.deck_obj.play_card_template(card, "6 col-md-offset-3")),
        $("#study_slider .notecard-content").flip({
            trigger: "click",
            axis: "x",
            autoSize: !1
        }),
        this.flip_listener(),
        $("#study_slider").show("slide", {
            direction: "left"
        }),
        self = this,
        $("body").off("keydown"),
        $("#flip-instructions").show(),
        $("body").keydown(function(event) {
            32 == event.which && $("#study_slider .notecard-content").flip(!0),
            self.flipevent = event
        }),
        this.enable_reveal_button()
    }
    ,
    this.slide_card_out = function(direction) {
        $("#study_slider").hide("slide", {
            direction: direction,
            duration: 500,
            complete: function() {
                $("#study_slider .notecard-container:first").remove()
            }
        }),
        $("body").off("keydown")
    }
};
!function($) {
    "use strict";
    function safeAdd(x, y) {
        var lsw = (65535 & x) + (65535 & y)
          , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | 65535 & lsw
    }
    function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt
    }
    function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
    }
    function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t)
    }
    function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t)
    }
    function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t)
    }
    function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t)
    }
    function binlMD5(x, len) {
        x[len >> 5] |= 128 << len % 32,
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (i = 0; i < x.length; i += 16)
            olda = a,
            oldb = b,
            oldc = c,
            oldd = d,
            a = md5ff(a, b, c, d, x[i], 7, -680876936),
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586),
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819),
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330),
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897),
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426),
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341),
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983),
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416),
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417),
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063),
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162),
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682),
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101),
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290),
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329),
            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510),
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632),
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713),
            b = md5gg(b, c, d, a, x[i], 20, -373897302),
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691),
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083),
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335),
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848),
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438),
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690),
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961),
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501),
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467),
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784),
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473),
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734),
            a = md5hh(a, b, c, d, x[i + 5], 4, -378558),
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463),
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562),
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556),
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060),
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353),
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632),
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640),
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174),
            d = md5hh(d, a, b, c, x[i], 11, -358537222),
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979),
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189),
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487),
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835),
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520),
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651),
            a = md5ii(a, b, c, d, x[i], 6, -198630844),
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415),
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905),
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055),
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571),
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606),
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523),
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799),
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359),
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744),
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380),
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649),
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070),
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379),
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259),
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551),
            a = safeAdd(a, olda),
            b = safeAdd(b, oldb),
            c = safeAdd(c, oldc),
            d = safeAdd(d, oldd);
        return [a, b, c, d]
    }
    function binl2rstr(input) {
        var i, output = "", length32 = 32 * input.length;
        for (i = 0; length32 > i; i += 8)
            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        return output
    }
    function rstr2binl(input) {
        var i, output = [];
        for (output[(input.length >> 2) - 1] = void 0,
        i = 0; i < output.length; i += 1)
            output[i] = 0;
        var length8 = 8 * input.length;
        for (i = 0; length8 > i; i += 8)
            output[i >> 5] |= (255 & input.charCodeAt(i / 8)) << i % 32;
        return output
    }
    function rstrMD5(s) {
        return binl2rstr(binlMD5(rstr2binl(s), 8 * s.length))
    }
    function rstrHMACMD5(key, data) {
        var i, hash, bkey = rstr2binl(key), ipad = [], opad = [];
        for (ipad[15] = opad[15] = void 0,
        bkey.length > 16 && (bkey = binlMD5(bkey, 8 * key.length)),
        i = 0; 16 > i; i += 1)
            ipad[i] = 909522486 ^ bkey[i],
            opad[i] = 1549556828 ^ bkey[i];
        return hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + 8 * data.length),
        binl2rstr(binlMD5(opad.concat(hash), 640))
    }
    function rstr2hex(input) {
        var x, i, hexTab = "0123456789abcdef", output = "";
        for (i = 0; i < input.length; i += 1)
            x = input.charCodeAt(i),
            output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(15 & x);
        return output
    }
    function str2rstrUTF8(input) {
        return unescape(encodeURIComponent(input))
    }
    function rawMD5(s) {
        return rstrMD5(str2rstrUTF8(s))
    }
    function hexMD5(s) {
        return rstr2hex(rawMD5(s))
    }
    function rawHMACMD5(k, d) {
        return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
    }
    function hexHMACMD5(k, d) {
        return rstr2hex(rawHMACMD5(k, d))
    }
    function md5(string, key, raw) {
        return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string)
    }
    "function" == typeof define && define.amd ? define(function() {
        return md5
    }) : "object" == typeof module && module.exports ? module.exports = md5 : $.md5 = md5
}(this);
