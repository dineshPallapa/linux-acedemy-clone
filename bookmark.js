var SearchEngine = function(type, output_jq_selector) {
  switch (void 0 !== type ? this.type = type : this.type = library, this.contentCategories = ["content-linux", "content-aws", "content-redhat", "content-openstack", "content-devops", "content-linuxacademy", "content-learningpath", "content-azure", "content-community", "content-bigdata", "content-googlecloud platform", "content-containers", "content-security"], this.contentTitles = ["Linux", "AWS", "RedHat", "OpenStack", "DevOps", "Linux Academy", "Learning Path", "Azure", "Community", "Big Data", "Google Cloud Platform", "Containers", "Security"], this.contentImages = ["/templates/cp/assets/img/library-content-linux.png", "/templates/cp/assets/img/library-content-aws.png", "/templates/cp/assets/img/library-content-redhat.png", "/templates/cp/assets/img/library-content-openstack.png", "/templates/cp/assets/img/library-content-devops.png", "/templates/cp/assets/img/library-content-la.png", "/templates/cp/assets/img/library-content-path.png", "/templates/cp/assets/img/library-content-la.png"], this.contentTypes = ["module", "assessment", "challenge", "cloudcredential", "livelab", "nugget", "learningpath", "community", "guide"], this.contentTypeTitles = ["Course", "Cloud Credential Challenge", "Cloud Credential Challenge", "Cloud Credential Challenge", "Hands-On Lab", "Nugget", "Learning Path", "Community Guide", "Guide"], this.contentFontAwesome = ["fa-graduation-cap", "fa-cloud", "fa-cloud", "fa-cloud", "fa-flask", "fa-diamond", "fa-book", "fa-comments-o"], this.start_at = 0, this.category_params = "", this.type_params = "", this.max_length = null, this.search_phrase = "", this.search_is_new = !0, this.search_is_complete = !1, this.sort_param = "", this.sort_direction = "", this.dependent_search_engines = [], this.output_jq_selector = output_jq_selector, this.bookmarked_items = {}, this.selected_categories = [], this.selected_types = [], this.excluded_types = [], this.running = !1, this.get_user_bookmarks = function() {
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
      this.bookmarked_items = data
    }) : (return_object = {}, search_engine = this, return_object.success = function(anon_func) {
      anon_func.call(search_engine)
    }, return_object)
  }, add_user_bookmark = function(title, url, duration, type, htmlId) {
    "Community" == type && (type = "Community Guide"), $.ajax({
      method: "POST",
      dataType: "JSON",
      cache: !1,
      url: "/cp/bookmarks/api",
      data: {
        action: "addBookmark",
        bookmarkTitle: title,
        bookmarkUrl: url,
        bookmarkDuration: duration,
        bookmarkContentType: type,
        bookmarkHtmlId: htmlId
      }
    })
  }, remove_user_bookmark = function(title) {
    $.ajax({
      method: "POST",
      dataType: "JSON",
      cache: !1,
      url: "/cp/bookmarks/api",
      data: {
        action: "removeBookmark",
        bookmarkTitle: title
      }
    })
  }, this.query = function() {
    return "" == this.category_params && "" == this.type_params && "" == this.search_phrase && null === this.max_length ? this.excluded_types.length < 1 ? query = "matchall" : (query = "(and ", $.each(this.excluded_types, function(index, ex_type) {
      "community" == ex_type ? query += " (not (and type: '" + ex_type + "' (range field=guide {,0]))) " : query += " (not type: '" + ex_type + "') "
    }), query += ")") : (query = "(and ", null !== this.max_length && (query += "(range field=length{," + this.max_length + "])"), "" != this.search_phrase && (search_array = this.search_phrase.split(" "), $.each(search_array, function(index, term) {
      index == search_array.length - 1 ? query += "(or (prefix '" + term + "')(term '" + term + "')) (or (and boost=10 type: 'module')(not (term field=type 'module')))" : query += "(term '" + term + "') (or (and boost=10 type: 'module')(not (term field=type 'module')))"
    })), this.excluded_types.length < 1 ? query += this.category_params + this.type_params + " )" : (query += this.category_params + this.type_params, $.each(this.excluded_types, function(index, ex_type) {
      "community" == ex_type ? query += " (not (and type: '" + ex_type + "' (range field=guide {,0]))) " : query += " (not type: '" + ex_type + "') "
    }), query += " ) ")), query
  }, this.related_assessments = function(related_category_params, related_type_params, related_search_phrase) {
    return this.related_challenges(related_category_params, related_type_params, related_search_phrase)
  }, this.related_challenges = function(related_category_params, related_type_params, related_search_phrase) {
    return this.reset_search(), this.excluded_types = related_type_params, this.selected_categories = related_category_params, this.selected_categories.length > 0 && (this.category_params = "(or ", thisengine = this, $.each(this.selected_categories, function(index, cat) {
      thisengine.category_params += "categories: '" + cat + "' "
    }), this.category_params += ")"), this.type_params = "(and type: 'cloudcredential')", "" != related_search_phrase && (this.search_phrase = related_search_phrase), this.search().success(function(data) {
      "undefined" == typeof data || data.hit.length < 1 ? $(".related-content-as-holder").css("display", "none") : $(".related-content-as-holder").css("display", "block")
    })
  }, this.related_nuggets = function(related_category_params, related_type_params, related_search_phrase) {
    return this.reset_search(), this.excluded_types = related_type_params, this.selected_categories = related_category_params, this.selected_categories.length > 0 && (this.category_params = "(or ", thisengine = this, $.each(this.selected_categories, function(index, cat) {
      thisengine.category_params += "categories: '" + cat + "' tags: '" + cat + "'"
    }), this.category_params += ")"), this.type_params = "(and type: 'nugget')", "" != related_search_phrase && (this.search_phrase = related_search_phrase), this.search().success(function(data) {
      "undefined" == typeof data || data.hit.length < 1 ? $(".related-content-ng-holder").css("display", "none") : $(".related-content-ng-holder").css("display", "block")
    })
  }, this.related_guides = function(related_category_params, related_type_params, related_search_phrase) {
    return this.reset_search(), this.excluded_types = related_type_params, this.selected_categories = related_category_params, this.selected_categories.length > 0 && (this.category_params = "(or ", thisengine = this, $.each(this.selected_categories, function(index, cat) {
      thisengine.category_params += "categories: '" + cat + "' tags: '" + cat + "'"
    }), this.category_params += ")"), this.type_params = "(and type: 'community' guide: 1 (range field=instructor_approvals [1,} ))", "" != related_search_phrase && (this.search_phrase = related_search_phrase), this.search().success(function(data) {
      "undefined" == typeof data || data.hit.length < 1 ? $(".related-content-guide-holder").css("display", "none") : $(".related-content-guide-holder").css("display", "block")
    })
  }, this.related_content = function(related_category_params, related_type_params, related_search_phrase) {}, this.register_dependent_engine = function(engine, update_method) {
    this.dependent_search_engines.push([engine, update_method]), engine.controlling_engine = this
  }, this.hide_or_show_dependents = function() {
    nuggets = $.grep(this.selected_types, function(elet) {
      return "nugget" == elet
    }), nuggets.length < 1 ? $(".related-nuggets ul").parent().parent().show() : $(".related-nuggets ul").parent().parent().hide(), challenges = $.grep(this.selected_types, function(elet) {
      return "cloudcredential" == elet
    }), challenges.length < 1 ? $(".related-assessments ul").parent().parent().show() : $(".related-assessments ul").parent().parent().hide(), nuggets.length > 0 && challenges.length > 0 && $("#toggle1").length > 0 && $("#toggle1")[0].checked && $("#toggle1")[0].click()
  }, this.running_dependents = [], this.update_dependent_searches = function() {
    parent_engine = this, void 0 !== parent_engine.running_dependents && parent_engine.running_dependents.length > 0 && ($.each(parent_engine.running_dependents, function(index, element) {
      clearInterval(element)
    }), parent_engine.executing_dependent = !1), parent_engine.running_dependents = [], $.each(this.dependent_search_engines, function(index, engine_array) {
      engine = engine_array[0], registered_function = engine[engine_array[1]], "function" == typeof registered_function && engine.controlling_engine.running_dependents.push(setInterval(function() {
        engine = engine.controlling_engine.dependent_search_engines[index][0], registered_function = engine[engine.controlling_engine.dependent_search_engines[index][1]], engine.controlling_engine.executing_dependent !== !0 && (engine.controlling_engine.executing_dependent = !0, registered_function.call(engine, engine.controlling_engine.selected_categories, engine.controlling_engine.selected_types, engine.controlling_engine.search_phrase).success(function() {
          clearInterval(this.controlling_engine.running_dependents[index]), this.controlling_engine.running_dependents[index] = null, this.controlling_engine.executing_dependent = !1
        }))
      }, 250, engine, index))
    })
  }, this.reset_search = function() {
    this.search_is_new = !0, this.search_is_complete = !1, this.current_difficulty_sort_level = 0, this.start_at = 0
  }, this.search = function() {
    return postData = {}, postData.type = this.type, postData.query = this.query(), postData.start_at = this.start_at, postData.category_params = this.category_params, postData.type_params = this.type_params, postData.search_phrase = this.search_phrase, postData.sort = this.sort_param, postData.categories = this.selected_categories.join(",").toLowerCase(), "" != this.sort_param && "" == this.sort_direction && (this.sort_direction = "asc"), postData.direction = this.sort_direction, searching_engine = this, this.search_is_complete !== !0 ? $.ajax({
      url: "/cp/library/search",
      type: "post",
      data: postData,
      dataType: "json",
      context: this
    }).success(function(data) {
      0 == this.start_at && this.search_is_new === !0 && this.clear_results(), this.search_is_new = !1, this.results = data, this.render_results(data), data.start + 12 < data.found ? this.start_at = data.start + 12 : this.search_is_complete = !0, laloader.remove(), this.update_dependent_searches()
    }) : (laloader.remove(), return_object = {}, return_object.success = function(anon_func) {
      anon_func.call(this)
    }, return_object)
  }, this.register_exclusions = function(exclude) {
    this.excluded_types.push(exclude)
  }, this.progress = [], this.getProgress = function() {
    return search_engine = this, this.progress.length < 1 ? $.ajax({
      url: "/cp/modules/progress",
      dataType: "json",
      context: this
    }).success(function(data) {
      this.progress = data
    }) : (return_object = {}, return_object.success = function(anon_func) {
      anon_func.call(search_engine)
    }, return_object)
  }, this.search_lock = !1, this.library_responders = function() {
    library_engine = this, $(".library-search-input").on("input", function() {
      library_engine.search_lock === !1 && (library_engine.search_lock = !0, library_engine.search_phrase = $(".library-search-input")[0].value.replace("'", "").replace("\\", ""), library_engine.reset_search(), library_engine.search().success(function() {
        this.search_lock = !1
      }))
    }), $(".select-topic").on("change", function() {
      library_engine.reset_search(), library_engine.selected_categories = [], $(".select-topic option:selected").length < 1 ? library_engine.category_params = "" : (library_engine.category_params = "(or ", $(".select-topic option:selected").each(function(index, category) {
        cat_string = category.innerHTML, "Red Hat" == cat_string && (cat_string = "Redhat"), library_engine.category_params += " categories: '" + cat_string + "'", library_engine.selected_categories.push(cat_string)
      }), library_engine.category_params += ")"), library_engine.search()
    }), $(".select-type").on("change", function() {
      library_engine.reset_search(), library_engine.selected_types = [], $(".select-type option:selected").length < 1 ? library_engine.type_params = "" : (library_engine.type_params = "(or ", $(".select-type option:selected").each(function(index, ctype) {
        ctype.innerHTML.indexOf("Cloud Credential") >= 0 ? ctype_index = $.inArray("cloudcredential", library_engine.contentTypes) : (ctype_index = $.inArray(ctype.innerHTML.slice(0, ctype.innerHTML.length - 1), library_engine.contentTypeTitles), -1 == ctype_index && (ctype_index = $.inArray(ctype.innerHTML, library_engine.contentTypeTitles))), library_engine.selected_types.push(library_engine.contentTypes[ctype_index]), "guide" == library_engine.contentTypes[ctype_index] ? library_engine.type_params += "(and type: 'community' guide: 1 (range field=instructor_approvals [1,} ))" : library_engine.type_params += "type: '" + library_engine.contentTypes[ctype_index] + "'"
      }), library_engine.type_params += ")"), library_engine.hide_or_show_dependents(), library_engine.search()
    }), $(".select-time").on("change", function() {
      library_engine.reset_search(), $(".select-time option:selected").length < 1 ? (self = this, $(".select-time option").each(function(index, option) {
        void 0 !== option.attributes.selected && (self.max_length = option.value, option.selected = !0, $(".library-time-btn-container .dropdown-menu li:nth-child(" + (index + 1) + ") a input").click())
      })) : library_engine.max_length = $(".select-time option:selected").val(), library_engine.search()
    }), $(".library-container").on("click", ".bookmark-icon", function(e) {
      var bookmarkState = !1,
        targetBookmarkId = this.id,
        $targetIcon = $(this);
      return $targetIcon.hasClass("fa-bookmark") && (bookmarkState = !0), bookmarkState === !1 ? (add_user_bookmark($targetIcon.attr("data-bookmark-title"), $targetIcon.attr("data-bookmark-url"), $targetIcon.attr("data-bookmark-duration"), $targetIcon.attr("data-bookmark-type"), targetBookmarkId), $targetIcon.addClass("fa-bookmark").removeClass("fa-bookmark-o")) : (remove_user_bookmark($targetIcon.attr("data-bookmark-title")), $targetIcon.addClass("fa-bookmark-o").removeClass("fa-bookmark"))
    }), library_engine.scroll_lock = !1, $(window).scroll(function() {
      1 == library_engine.running && $(window).scrollTop() + $("body")[0].offsetHeight + 10 > $("body")[0].scrollHeight && library_engine.scroll_lock === !1 && (laloader.appendTo("body"), library_engine.scroll_lock = !0, library_engine.search_is_complete === !0 ? (laloader.remove(), library_engine.scroll_lock = !1) : library_engine.search().success(function() {
        library_engine.scroll_lock = !1
      }))
    }), "complete" == document.readyState ? library_engine.initializer() : document.onreadystatechange = function() {
      "complete" == document.readyState && library_engine.initializer()
    }
  }, this.initializer = function() {
    this.reset_search(), this.search_phrase = $(".library-search-input")[0].value.replace("'", "").replace("\\", ""), this.selected_categories = [], $(".select-topic option:selected").length < 1 ? this.category_params = "" : (this.category_params = "(or ", library_engine = this, $(".select-topic option:selected").each(function(index, category) {
      cat_string = category.innerHTML, "Red Hat" == cat_string && (cat_string = "Redhat"), library_engine.category_params += " categories: '" + cat_string + "'", library_engine.selected_categories.push(cat_string)
    }), this.category_params += ")"), this.selected_types = [], $(".select-type option:selected").length < 1 ? this.type_params = "" : (this.type_params = "(or ", library_engine = this, $(".select-type option:selected").each(function(index, ctype) {
      ctype.innerHTML.indexOf("Cloud Credential") >= 0 ? ctype_index = $.inArray("cloudcredential", library_engine.contentTypes) : (ctype_index = $.inArray(ctype.innerHTML.slice(0, ctype.innerHTML.length - 1), library_engine.contentTypeTitles), -1 == ctype_index && (ctype_index = $.inArray(ctype.innerHTML, library_engine.contentTypeTitles))), library_engine.selected_types.push(library_engine.contentTypes[ctype_index]), "guide" == library_engine.contentTypes[ctype_index] ? library_engine.type_params += "(and type: 'community' guide: 1 (range field=instructor_approvals [1,} ))" : library_engine.type_params += "type: '" + library_engine.contentTypes[ctype_index] + "'"
    }), library_engine.type_params += ")"), $(".select-time option:selected").length < 1 ? $(".select-time option").each(function(index, option) {
      self = this, void 0 !== option.attributes.selected && (self.max_length = option.value, option.selected = !0, $(".library-time-btn-container .dropdown-menu li:nth-child(" + (index + 1) + ") a input").click())
    }) : this.max_length = $(".select-time option:selected").val(), this.hide_or_show_dependents(), this.search().success(function() {
      this.running = !0
    })
  }, this.type) {
    case "library":
    case "finder":
      this.library_responders();
      break;
    case "dependent":
  }
  this.update_tags = function() {
    this.userInfo && this.userInfo.organization && 1 == this.userInfo.organization.free_assessments && $(".btn-assessment-beta").each(function() {
      var tag = $(this);
      tag.text().match(/Voucher/) && (tag.text("Free for Organization"), tag.addClass("btn-assessment-free"), tag.removeClass("btn-assessment-beta"))
    })
  }, this.clear_results = function() {
    $(this.output_jq_selector).empty()
  }, this.render_item = function(hit, id) {
    var contentCategoryTemp = "";
    contentCategoryTemp = "learningpath" == hit.type[0] ? "content-learningpath" : "community" == hit.type[0] ? "content-community" : void 0 !== hit.category ? "content-" + hit.category[0].toLowerCase().replace(" ", "") : "content-linux", void 0 !== hit.free ? "true" == hit.free[0] ? free_tag = '<span class="free-tag">Free</span>' : free_tag = '<span class="locked-tag">Locked</span>' : void 0 !== hit.paused ? "true" == hit.paused[0] ? free_tag = '<span class="free-tag">Included</span>' : free_tag = '<span class="locked-tag">Locked</span>' : free_tag = "";
    var matchingContentTitle = $.inArray(contentCategoryTemp, this.contentCategories),
      contentTypeTemp = hit.type[0],
      matchingContentType = $.inArray(contentTypeTemp, this.contentTypes),
      betaTag = "",
      costTag = "",
      excerpt = this.getExcerpt(hit.description);
    if (void 0 !== hit.beta) {
      1 == hit.beta[0] && (betaTag = '<span class="label label-la-major btn-assessment-beta">Beta</span>');
      var freeForOrg = this.userInfo && this.userInfo.organization && 1 == this.userInfo.organization.free_assessments,
        voucherCost = parseInt(hit.voucher_cost[0]);
      if (freeForOrg && (voucherCost = 0), 0 == voucherCost) label = "Free", freeForOrg && (label += " for Organization"), costTag = '<span class="label label-la-major btn-assessment-free">' + label + "</span>";
      else if (voucherCost > 0) {
        var label = "" + voucherCost + " Voucher";
        voucherCost > 1 && (label += "s"), costTag = '<span class="label label-la-major btn-assessment-beta">' + label + "</span>"
      }
    }
    if (void 0 !== hit.length && (hours = 0, minutes = 0, total_seconds = hit.length[0], seconds = total_seconds % 60, total_minutes = (total_seconds - seconds) / 60, minutes = total_minutes % 60, hours = (total_minutes - minutes) / 60, string_hours = hours < 10 ? "0" + hours : hours, string_minutes = minutes < 10 ? "0" + minutes : minutes, string_seconds = seconds < 10 ? "0" + seconds : seconds, hit.duration = [string_hours + ":" + string_minutes + ":" + string_seconds]), "livelab" === hit.type[0] || "module" === hit.type[0] || "nugget" === hit.type[0]) var contentType = this.contentTitles[matchingContentTitle];
    else var contentType = "";
    "finder" == this.type ? $(this.output_jq_selector).append('<div class="col-xs-12 p-x-10 m-x-10 library-content-box-container m-b-30 ' + contentCategoryTemp + '" id="' + id + '">      <div class="library-content-box">              <div class="library-content-box-header">                      <i class="fa ' + this.contentFontAwesome[matchingContentType] + '"></i>                      <span class="library-content-type">' + this.contentTypeTitles[matchingContentType] + '</span>                      <span class="course-bookmark" data-toggle="tooltip" data-placement="top" data-original-title="Bookmark this for later!"><i' + (void 0 !== hit.duration ? ' data-bookmark-duration="' + hit.duration[0] + '"' : "") + ' data-bookmark-title="' + hit.title[0] + '" data-bookmark-type="' + this.contentTypeTitles[matchingContentType] + '" data-bookmark-url="' + hit.url[0] + '" class="fa fa-bookmark-o bookmark-icon" id="bookmark_' + id + '"></i></span>              </div>              <a href="' + hit.url[0] + '">                  <div class="library-content-box-body content-box-border">                      <div class="row">                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-title">' + hit.title[0] + "</span>                                      " + (void 0 !== hit.duration ? '<span class="library-content-length">Length: ' + hit.duration[0] + "</span>" : "") + '                              </div>                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-description">' + excerpt + '</span>                              </div>               <div class="col-xs-12 p-x-12">' + betaTag + " " + costTag + " " + free_tag + '                </div>                              <div class="col-xs-4 p-x-12 text-left">                                      <span class="library-course-completion-text"></span>                                      <div class="library-content-box-progress-bg" style="display:none">                                              <div class="library-content-box-progress-bar">                                              </div>                                      </div>                                      <span class="library-content-completion" style="display:none">Complete!</span>                              </div>                              <div class="col-xs-8 p-x-12 text-right"><!-- Placeholder  -->                              </div>                      </div>                  </div>              </a>      </div></div>') : "library" == this.type ? 1 == this.selected_types.length && "module" == this.selected_types[0] ? $(this.output_jq_selector).append('<a class="col-xs-12 p-x-0 library-content-box-container" href="' + hit.url[0] + '" id="' + id + '">  <div class="library-content-box">   <div class="library-content-box-body slim-line">      <div class="row">       <div class="col-xs-8 p-x-12">         <span class="library-content-title">' + hit.title[0] + " " + free_tag + "</span>          " + (void 0 !== hit.duration ? '<span class="library-content-length">Length: ' + hit.duration[0] + "</span>" : "") + '        </div>              <div class="col-xs-4 p-x-12">         <span class="library-course-completion-text vcenter">0%</span>          <div class="library-content-box-progress-bg">           <div class="library-content-box-progress-bar">            </div>          </div>        </div>      </div>    </div>  </div></a>') : $(this.output_jq_selector).append('<div class="col-xs-12 p-x-0 library-content-box-container m-b-30 ' + contentCategoryTemp + '" id="' + id + '">      <div class="library-content-box">              <div class="library-content-box-header">                      <i class="fa ' + this.contentFontAwesome[matchingContentType] + '"></i>                      <span class="library-content-type">' + contentType + " " + this.contentTypeTitles[matchingContentType] + '</span>                      <span class="course-bookmark" data-toggle="tooltip" data-placement="top" data-original-title="Bookmark this for later!"><i' + (void 0 !== hit.duration ? ' data-bookmark-duration="' + hit.duration[0] + '"' : "") + ' data-bookmark-title="' + hit.title[0] + '" data-bookmark-type="' + this.contentTypeTitles[matchingContentType] + '" data-bookmark-url="' + hit.url[0] + '" class="fa fa-bookmark-o bookmark-icon" id="bookmark_' + id + '"></i></span>              </div>              <a href="' + hit.url[0] + '">                  <div class="library-content-box-body content-box-border">                      <div class="row">                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-title">' + hit.title[0] + "</span>                                      " + (void 0 !== hit.duration ? '<span class="library-content-length">Length: ' + hit.duration[0] + "</span>" : "") + '                              </div>                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-description">' + excerpt + '</span>                              </div>                <div class="col-xs-12 p-x-12">' + betaTag + " " + costTag + " " + free_tag + '                </div>                              <div class="col-xs-4 p-x-12 text-left">                                      <span class="library-course-completion-text"></span>                                      <div class="library-content-box-progress-bg" style="display:none">                                              <div class="library-content-box-progress-bar">                                              </div>                                      </div>                                      <span class="library-content-completion" style="display:none">Complete!</span>                              </div>                              <div class="col-xs-8 p-x-12 text-right"><!-- Placeholder  -->                              </div>                      </div>                  </div>              </a>      </div></div>') : "dependent" == this.type && $(this.output_jq_selector).append('<li><a href="' + hit.url[0] + '">' + hit.title[0] + "</a></li>")
  }, this.render_ca_lab = function(hit, id) {
    this.getExcerpt(hit.description);
    "library" == this.type && $(this.output_jq_selector).append('<div class="col-xs-12 p-x-0 m-x-10 library-content-box-container m-b-30 content-ca-lab" id="' + id + '">      <div class="library-content-box">              <div class="library-content-box-header">             <i class="fa"><img src="/templates/cp/assets/img/ca-assessment-icon.svg" class="lib-icon"></i>                      <span class="library-content-type">Learning Activity</span>                      <span class="course-bookmark" data-toggle="tooltip" data-placement="top" data-original-title="Bookmark this for later!">              <i data-bookmark-duration="" data-bookmark-title="' + hit.name + '" data-bookmark-type="Learning Activity" data-bookmark-url="' + hit.url + '" class="fa fa-bookmark-o bookmark-icon" id="bookmark_' + id + '"></i>            </span>              </div>              <a href="' + hit.url + '">                  <div class="library-content-box-body content-box-border">                      <div class="row">                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-title">' + hit.name + '</span>                              </div>                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-description"></span>                              </div>                 <div class="col-xs-12 p-x-12"></div>                              <div class="col-xs-4 p-x-12 text-left">                                      <span class="library-course-completion-text"></span>                                      <div class="library-content-box-progress-bg" style="display:none">                                              <div class="library-content-box-progress-bar">                                              </div>                                      </div>                                      <span class="library-content-completion" style="display:none">Complete!</span>                              </div>                              <div class="col-xs-8 p-x-12 text-right"><!-- Placeholder  -->                              </div>                      </div>                  </div>              </a>      </div></div>')
  }, this.render_ca_assessment = function(hit, id) {
    var excerpt = this.getExcerpt(hit.description);
    "library" == this.type && $(this.output_jq_selector).append('<div class="col-xs-12 p-x-0 m-x-10 library-content-box-container m-b-30 content-ca-assessment" id="' + id + '">      <div class="library-content-box">              <div class="library-content-box-header">            <i class="fa"><img src="/templates/cp/assets/img/ca-lab-icon.svg" class="lib-icon"></i>                      <span class="library-content-type">Challenge</span>                      <span class="course-bookmark" data-toggle="tooltip" data-placement="top" data-original-title="Bookmark this for later!">             <i data-bookmark-duration="" data-bookmark-title="' + hit.name + '" data-bookmark-type="Challenge" data-bookmark-url="' + hit.url + '" class="fa fa-bookmark-o bookmark-icon" id="bookmark_' + id + '"></i>            </span>              </div>              <a href="' + hit.url + '">                  <div class="library-content-box-body content-box-border">                      <div class="row">                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-title">' + hit.name + '</span>                              </div>                              <div class="col-xs-12 p-x-12">                                      <span class="library-content-description">' + excerpt + '</span>                              </div>                <div class="col-xs-12 p-x-12"></div>                              <div class="col-xs-4 p-x-12 text-left">                                      <span class="library-course-completion-text"></span>                                      <div class="library-content-box-progress-bg" style="display:none">                                              <div class="library-content-box-progress-bar">                                              </div>                                      </div>                                      <span class="library-content-completion" style="display:none">Complete!</span>                              </div>                              <div class="col-xs-8 p-x-12 text-right"><!-- Placeholder  -->                              </div>                      </div>                  </div>              </a>      </div></div>')
  }, this.level_string = "", this.render_difficulty_header = function(level) {
    if (this.current_difficulty_sort_level != level && "difficulty" == this.sort_param) {
      switch (this.current_difficulty_sort_level = level, level) {
        case "1":
          this.level_string = "Start Here";
          break;
        case "2":
          this.level_string = "Beginner";
          break;
        case "3":
          this.level_string = "Intermediate";
          break;
        case "4":
          this.level_string = "Advanced";
          break;
        case "5":
          this.level_string = "Master";
          break;
        case "0":
          this.level_string = "Any Difficulty Level";
          break;
        default:
          this.level_string = ""
      }
      "" != this.level_string && $(".library-container-row").append('<div class="col-xs-12 course-level-container"><h3 class="course-level">' + this.level_string + "</h3></div>")
    }
  }, this.update_current_user = function() {
    void 0 === this.userInfo ? (this.userInfo = null, $.ajax({
      url: "/cp/library/currentUser",
      type: "post",
      data: postData,
      dataType: "json",
      context: this
    }).success(function(results) {
      this.userInfo = results.user, this.update_tags()
    })) : this.update_tags()
  }, this.render_results = function(data) {
    $(".library-content-box-container");
    this.renderLAContent(data.hit), this.selected_types.includes("livelab") && (this.renderCALabs(data.labs), this.renderCAAssessments(data.assessments)), this.get_user_bookmarks().success(function() {
      userBookmarks = this.bookmarked_items.bookmarks || [];
      for (var j = 0; j < userBookmarks.length; j++) {
        var bookmarkId = userBookmarks[j].html_id;
        $("#" + bookmarkId).addClass("fa-bookmark").removeClass("fa-bookmark-o")
      }
    }), rendering_engine = this, ("library" == this.type || "finder" == this.type) && (this.getProgress().success(function() {
      $.each(this.progress, function(index, progress) {
        $("#" + progress.module_id + "_course_module .library-course-completion-text").length > 0 && $("#" + progress.module_id + "_course_module .library-course-completion-text").html(progress.progress + "%"), $("#" + progress.module_id + "_course_module .library-content-box-progress-bar").length > 0 && ($("#" + progress.module_id + "_course_module .library-content-box-progress-bar")[0].style.width = progress.progress + "%", $("#" + progress.module_id + "_course_module .library-content-box-progress-bg").show()), $("#" + progress.module_id + "_course_module .library-content-box-progress-bg").length > 0 && 100 == progress.progress && $("#" + progress.module_id + "_course_module .library-content-completion").show()
      })
    }), this.update_current_user()), this.hide_aws_text_boxes(), this.countLibraryItems()
  }, this.renderLAContent = function(results) {
    for (var i = 0; i < results.length; i++) hit = results[i].fields, void 0 !== hit.difficulty ? this.render_difficulty_header(hit.difficulty[0]) : this.render_difficulty_header("0"), this.render_item(hit, results[i].id)
  }, this.renderCALabs = function(labs) {
    if (labs)
      for (var i = 0; i < labs.length; i++) this.render_ca_lab(labs[i], labs[i].id + "_calab")
  }, this.renderCAAssessments = function(assessments) {
    if (assessments)
      for (var i = 0; i < assessments.length; i++) this.render_ca_assessment(assessments[i], assessments[i].id + "_caassessment")
  }, this.getExcerpt = function(desc) {
    if (desc) {
      var stripped_text = Array.isArray(desc) ? desc.join(" ").replace(/<[^>]+>/g, "") : desc.replace(/<[^>]+>/g, ""),
        choppedDescriptionChop = stripped_text.slice(0, 120).lastIndexOf(" ");
      return stripped_text.slice(0, choppedDescriptionChop) + "&hellip;"
    }
    return ""
  }, this.hide_aws_text_boxes = function() {
    $(".library-content-box-header-text").each(function() {
      $(this).html().length >= 1 || $(this).css("display", "none")
    })
  }, this.countLibraryItems = function() {
    var libraryItemCount = $(".library-content-box-container").length;
    3 >= libraryItemCount ? $(".back-to-top-container").hide() : libraryItemCount > 3 && $(".back-to-top-container").show(), $("h3").prev(".library-content-box-container").children("div").children(".library-content-box-body.slim-line").css("border-bottom", "none")
  }
};
