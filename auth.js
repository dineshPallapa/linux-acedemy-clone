function setSession(authResult) {
  var expiresAt = JSON.stringify(1e3 * authResult.expiresIn + (new Date).getTime());
  localStorage.setItem("access_token", authResult.accessToken), localStorage.setItem("id_token", authResult.idToken), localStorage.setItem("expires_at", expiresAt)
}

function logout() {
  localStorage.removeItem("access_token"), localStorage.removeItem("id_token"), localStorage.removeItem("expires_at")
}

function isAuthenticated() {
  var expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return (new Date).getTime() < expiresAt
}

function handleAuthentication(callback) {
  webAuth.parseHash(function(err, authResult) {
    authResult && authResult.accessToken && authResult.idToken ? (window.location.hash = "", setSession(authResult), "function" == typeof callback && callback.call(this, authResult)) : err && console.log(err)
  })
}

function checkSession(webAuth, ssoConfig, callback) {
  webAuth.checkSession({
    audience: ssoConfig.audience,
    scope: ssoConfig.scope,
    redirectUri: ssoConfig.redirectUri,
    usePostMessage: !0
  }, function(err, authResult) {
    callback.call(this, err, authResult)
  })
}

function validateToken(token, callback) {
  $.ajax({
    url: "/cp/login/tokenValidateLogin/token/" + token,
    dataType: "json"
  }).done(function(data) {
    "function" == typeof callback && callback.call(this, data)
  })
}

function getErrorHash(hash) {
  return params = hash.slice(1).split("&"), message = {}, $.each(params, function(index, value) {
    kv = value.split("="), message[kv[0]] = decodeURI(kv[1])
  }), message
}
var authRedirectCookieName = "LinuxAcademyAuthRedirect";
