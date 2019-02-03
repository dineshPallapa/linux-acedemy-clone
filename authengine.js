var NewLAButton = {
  optInUrl: {
    production: "https://authengine.linuxacademy.com/beta/opt/in",
    staging: "https://svc-user-staging.linuxacademy.com/beta/opt/in",
    travis: "https://svc-user-staging.linuxacademy.com/beta/opt/in",
    dev: "https://svc-user-staging.linuxacademy.com/beta/opt/in",
    testing: "https://svc-user-staging.linuxacademy.com/beta/opt/in"
  },
  tryUrl: "/cp/library/try/view/",
  init: function() {
    $(".btn-new-la").on("click", function(e) {
      e.preventDefault(), NewLAButton.optin()
    })
  },
  optin: function() {
    $.ajax({
      url: NewLAButton.optInUrl[$(".btn-new-la").data("env")],
      type: "GET",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"))
      }
    }).done(function(data) {
      NewLAButton.redirect()
    }).fail(function(err, status) {})
  },
  redirect: function() {
    var segment = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $.ajax({
      url: NewLAButton.tryUrl + segment,
      type: "GET"
    }).done(function(data) {
      data = JSON.parse(data), window.location.href = data.url
    }).fail(function(err, status) {})
  }
};
$(document).ready(function() {
  NewLAButton.init()
});
