Feed.prototype.search_init = function() {
    Feed.prototype.is_currently_searching = !1,
    Feed.prototype.search = function(query) {
        this.is_currently_searching === !1 && (this.is_currently_searching = !0,
        old_index = this.user_feeds.find_index_of(function() {
            return void 0 !== this.query
        }),
        console.log(old_index),
        search_feed = {
            courses: [],
            users: [],
            achievements: !1,
            announcements: !1,
            "static": !0,
            name: "Results",
            query: query,
            sorting: !1
        },
        void 0 !== old_index ? this.user_feeds[old_index] = search_feed : this.user_feeds.push(search_feed),
        this.current_feed_index = this.user_feeds.length - 1,
        this.display_feed_links(),
        this.hide_feed_sorting(),
        this.search_refresh())
    }
    ,
    Feed.prototype.search_refresh = function() {
        this.continue_from = "initial",
        this.clear_feed_content(),
        this.data = [],
        this.getData().success(function(data) {
            this.is_currently_searching = !1
        }),
        current_feed = this.current_feed(),
        "Single Conversation" !== current_feed.name ? (this.scroll_enabled = !0,
        this.scroll_setup()) : (this.scroll_enabled = !1,
        $(window).off("scroll"))
    }
}
;
