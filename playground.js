function showPlaygroundReady() {
  $("#playground-not-ready").hide(), optedInNow === !1 && $("#playground-ready").show()
}

function showPlaygroundNotReady() {
  $("#playground-not-ready").show(), $("#playground-ready").hide()
}

function setStatusCheck(numberOfChecks) {
  numberOfChecks > statusChecksCounter && (statusChecksCounter = numberOfChecks)
}

function anyStatusChecksNeeded() {
  return totalStatusLoops % 10 == 0 || statusChecksCounter > 0
}

function subtractAllStatusCheckCounts() {
  statusChecksCounter > 0 && statusChecksCounter--
}

function hideAllMount(serverNumber) {
  $("#mount_device_" + serverNumber).hide(), $("#unmount_device_" + serverNumber).hide(), $("#mount_title_" + serverNumber).hide(), $("#mount_" + this.server_number).html(" ")
}

function resetPasswordHide(reset_password) {
  "" != reset_password && $(reset_password).hide()
}

function resetPasswordShow(reset_password) {
  "" != reset_password && $(reset_password).show()
}

function webConsoleHide(webconsole) {
  "" != webconsole && $(webconsole).hide()
}

function webConsoleShow(webconsole) {
  "" != webconsole && $(webconsole).show()
}

function setServerStatus(json) {
  $(json).each(function() {
    var mount = "#mount_device_" + this.server_number,
      unmount = "#unmount_device_" + this.server_number;
    null == this.mount && "stopped" != this.status ? ($(mount).show(), $("#mount_" + this.server_number).html("")) : null == this.mount ? hideAllMount(this.server_number) : ($(mount).hide(), $(unmount).show(), $("#mount_" + this.server_number).html(this.mount)), $("#distribution_" + this.server_number).html(this.logo + this.distribution), $("#private_ip_" + this.server_number).html('<a href="' + this.webconsole + '" target="_blank">' + this.private_ip + "</a>"), $("#public_ip_" + this.server_number).html('<a href="' + this.webconsole + '" target="_blank">' + this.public_ip + "</a>"), $("#hostname_" + this.server_number).html(this.hostname), $("#role_" + this.server_number).val(this.role), $("#server_role_" + this.server_number + " option[value='" + this.role + "']").attr("selected", "selected");
    var ami = "#ami_" + this.server_number,
      role = "#role_" + this.server_number,
      start_server = "#start_server_" + this.server_number,
      create_server = "#create_server_" + this.server_number,
      stop_server = "#stop_server_" + this.server_number,
      delete_server = "#delete_server_" + this.server_number,
      expire_date = "#days_till_expire_" + this.server_number,
      hostname = "#hostname_" + this.server_number,
      status = ("#console_" + this.server_number, "#status_" + this.server_number),
      how_to_connect = "#how_to_connect_" + this.server_number;
    if (0 != this.webconsole && this.public_ip && this.public_ip.length > 0) {
      var webconsole = "#webconsole_" + this.server_number;
      $("#webconsole_" + this.server_number).html('<i class="fa fa-terminal"></i><a href="' + this.webconsole + '" target="_blank">Open SSH Web Console</a>');
      var vncConn = encodeConnection({
        p: "vnc",
        i: this.public_ip
      });
      if (vncConn && vncConn.length > 0 && 1 == this.vncconsole) {
        var webconsoleVnc = "#webconsole_vnc_" + this.server_number;
        $("#webconsole_vnc_" + this.server_number).html('<i class="fa fa-desktop webconsole_vnc"></i><a href=/cp/labconnections/c/d/' + vncConn + ' target="_blank">Open VNC Web Console (Beta)</a>')
      }
      var rdpConn = encodeConnection({
        p: "rdp",
        i: this.public_ip
      });
      if (rdpConn && rdpConn.length > 0 && 1 == this.rdpconsole) {
        var webconsoleRdp = "#webconsole_rdp_" + this.server_number;
        $("#webconsole_rdp_" + this.server_number).html('<i class="fa fa-desktop webconsole_rdp"></i><a href=/cp/labconnections/c/d/' + rdpConn + ' target="_blank">Open RDP Web Console (Beta)</a>')
      }
      "running" == this.status && $("#console_" + this.server_number).html('<a href="' + this.webconsole + '" target="_blank">Login</a>')
    }
    if (this.reset_password === !0) var reset_password = "#reset_password_" + this.server_number;
    if ($(expire_date).html(this.days_till_expire), "running" == this.status || "pending" == this.status || "starting" == this.status) {
      if ($(ami).hide(), $(role).show(), $(start_server).hide(), $(create_server).hide(), $(stop_server).show(), $(how_to_connect).show(), $(delete_server).show(), $("#mount_title_" + this.server_number).show(), $(status).html("<img src='/templates/cp/assets/img/load.gif' /> starting"), this.private_ip.length <= 1) {
        var private_ip = "#private_ip_" + this.server_number;
        $(private_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading")
      }
      if (this.public_ip.length <= 1) {
        var public_ip = "#public_ip_" + this.server_number;
        $(public_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading")
      }
    }
    "stopped" == this.status ? ($(ami).hide(), $(role).hide(), $(start_server).show(), $(hostname).html(""), $(create_server).hide(), $(stop_server).hide(), $(delete_server).show(), resetPasswordHide(reset_password), webConsoleHide(webconsole), webConsoleHide(webconsoleVnc), webConsoleHide(webconsoleRdp), $(status).html("stopped"), hideAllMount(this.server_number)) : "starting" == this.status ? ($(ami).hide(), $(create_server).hide()) : "stopping" == this.status ? ($(ami).hide(), $(role).hide(), $(hostname).html(""), hideAllMount(this.server_number), $(create_server).hide(), $(status).html("<img src='/templates/cp/assets/img/load.gif' /> stopping"), $(start_server).hide(), resetPasswordHide(reset_password), webConsoleHide(webconsole), webConsoleHide(webconsoleVnc), webConsoleHide(webconsoleRdp), $(stop_server).hide(), $(delete_server).hide(), hideAllMount(this.server_number)) : "running" == this.status && ($(status).html("running"), resetPasswordShow(reset_password), webConsoleShow(webconsole), webConsoleShow(webconsoleVnc), webConsoleShow(webconsoleRdp))
  })
}

function setTimeoutStatus(json) {
  $(json).each(function() {
    void 0 == minutes_till_timeout ? this.minutes_till_timeout = 0 : 1 == this.minutes_till_timeout && (window.location = "https://linuxacademy.com/cp/login"), $("#minutes_till_timeout").html(this.minutes_till_timeout + "  Minute(s) Till Timeout")
  })
}

function serversStatus() {
  $.getJSON("/cp/server2/status/ajax/1", function(json) {
    void 0 !== json.server_status && "none" == json.server_status ? (setServerStatus(json), showPlaygroundReady(), $("#cloud-servers-loading").hide(), $(".btn-server-dropdown").attr("disabled", !1)) : (setServerStatus(json), showPlaygroundNotReady(), $("#cloud-servers-loading").hide(), $(".btn-server-dropdown").attr("disabled", !1))
  })
}

function setTimeOut() {
  $.getJSON("/cp/server2/gettimeout/ajax/1", function(json) {
    setTimeoutStatus(json)
  })
}

function encodeConnection(connection) {
  return btoa(JSON.stringify(connection))
}

function createServer(serverNumber, ami) {
  showPlaygroundNotReady();
  var dataString = "ami=" + ami + "&server_number=" + serverNumber;
  $.ajax({
    type: "POST",
    url: "/cp/server2/create",
    data: dataString,
    success: function() {
      setStatusCheck(10)
    }
  });
  var create_server = "#create_server_" + serverNumber,
    ami = "#ami_" + serverNumber,
    status = "#status_" + serverNumber,
    private_ip = "#private_ip_" + serverNumber,
    public_ip = "#public_ip_" + serverNumber;
  $(create_server).hide(), $(ami).hide(), $(status).html("<img src='/templates/cp/assets/img/load.gif' /> starting"), $(public_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $(private_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading")
}

function mountDevice(serverNumber) {
  var mount = "#mount_device_" + serverNumber,
    unmount = "#unmount_device_" + serverNumber;
  $(unmount).show(), $(mount).hide(), $("#mount_" + serverNumber).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $.ajax({
    type: "GET",
    url: "/cp/server2/mount/action/create/server_number/" + serverNumber,
    success: function() {
      setStatusCheck(3)
    }
  })
}

function unmountDevice(serverNumber) {
  var mount = "#mount_device_" + serverNumber,
    unmount = "#unmount_device_" + serverNumber;
  $(unmount).hide(), $(mount).show(), $("#mount_" + serverNumber).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $.ajax({
    type: "GET",
    url: "/cp/server2/mount/action/delete/server_number/" + serverNumber,
    success: function() {
      setStatusCheck(3)
    }
  })
}

function stopServer(serverNumber) {
  hideAllMount(serverNumber), resetPasswordHide("#reset_password_" + serverNumber), webConsoleHide("#webconsole_" + serverNumber), webConsoleHide("#webconsole_vnc_" + serverNumber), webConsoleHide("#webconsole_rdp_" + serverNumber), $.ajax({
    type: "GET",
    url: "/cp/server2/stop/server_number/" + serverNumber,
    success: function() {
      setStatusCheck(4)
    }
  });
  var role = "#role_" + this.server_number,
    stop_server = "#stop_server_" + serverNumber,
    delete_server = "#delete_server_" + serverNumber,
    status = "#status_" + serverNumber,
    private_ip = "#private_ip_" + serverNumber,
    public_ip = "#public_ip_" + serverNumber,
    hostname = "#hostname_" + serverNumber,
    console = "#console_" + serverNumber;
  $(status).html("<img src='/templates/cp/assets/img/load.gif' /> stopping"), $(public_ip).html(""), $(private_ip).html(""), $(hostname).html(""), $(console).html(""), $(role).hide(), $(stop_server).hide(), $(delete_server).hide()
}

function startServer(serverNumber) {
  setStatusCheck(1), $.get("/cp/server2/start/server_number/" + serverNumber, function(data) {
    setStatusCheck(5)
  });
  var start_server = "#start_server_" + serverNumber,
    stop_server = "#stop_server_" + serverNumber,
    delete_server = "#delete_server_" + serverNumber,
    status = "#status_" + serverNumber,
    private_ip = "#private_ip_" + serverNumber,
    public_ip = "#public_ip_" + serverNumber,
    hostname = "#hostname_" + serverNumber,
    how_to_connect = "#how_to_connect_" + serverNumber;
  $(status).html("<img src='/templates/cp/assets/img/load.gif' /> starting"), $(public_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $(private_ip).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $(hostname).html("<img src='/templates/cp/assets/img/load.gif' /> loading"), $(stop_server).show(), $(delete_server).hide(), $(start_server).hide(), $(how_to_connect).show()
}

function deleteServer(serverNumber) {
  setStatusCheck(1);
  var create_server = "#create_server_" + serverNumber,
    start_server = "#start_server_" + serverNumber,
    ami = "#ami_" + serverNumber,
    start_server = "#start_server_" + serverNumber,
    stop_server = "#stop_server_" + serverNumber,
    delete_server = "#delete_server_" + serverNumber,
    status = "#status_" + serverNumber,
    private_ip = "#private_ip_" + serverNumber,
    public_ip = "#public_ip_" + serverNumber,
    hostname = "#hostname_" + serverNumber,
    console = "#console_" + serverNumber,
    how_to_connect = "#how_to_connect_" + serverNumber,
    distribution = "#distribution_" + serverNumber,
    days_till_expire = "#days_till_expire_" + serverNumber,
    role = "#role_" + serverNumber;
  $("#server_role_" + this.server_number + " option[value='none']").attr("selected", "selected"), $(distribution).html(""), $(days_till_expire).html(""), $(status).html(""), $(distribution).html(""), $(start_server).hide(), $(how_to_connect).hide(), $(public_ip).html(""), $(private_ip).html(""), $(hostname).html(""), $(console).html(""), $(stop_server).hide(), resetPasswordHide("#reset_password_" + serverNumber), webConsoleHide("#webconsole_" + serverNumber), webConsoleHide("#webconsole_vnc_" + serverNumber), webConsoleHide("#webconsole_rdp_" + serverNumber), $(delete_server).hide(), $(create_server).show(), $(ami).show(), $(role).css("display", "none"), hideAllMount(serverNumber), $.ajax({
    type: "GET",
    url: "/cp/server2/delete/server_number/" + serverNumber,
    success: function() {
      hideAllMount(serverNumber)
    }
  })
}

function updateRole(serverNumber, role) {
  $.get("/cp/server2/role/servernumber/" + serverNumber + "/role/" + role)
}

function pgLogoutResponse(message) {
  $.msgbox(message, {
    type: "confirm",
    buttons: [{
      type: "submit",
      value: "Auto Logout and Log In"
    }, {
      type: "cancel",
      value: "Not Yet"
    }]
  }, function(result) {
    "Auto Logout and Log In" == result && (localStorage.clear(), window.location = "/cp/ssologin")
  })
}

function pgOptIn() {
  $("#playground-opt-in")[0].disabled = !0, $.getJSON("/cp/server2/pgOptIn").done(function(data) {
    data.success === !0 ? (pgLogoutResponse(data.message), optedInNow = !0) : pgLogoutResponse(data.error + " You may need to logout and login again to complete the process."), $("#playground-ready").hide(), $("#playground-activated").show(), $(".cloud-server-container .modal-body").hide(), $(".cloud-server-container .modal-footer").hide()
  })
}

function pgOptOut() {
  $("#playground-opt-out")[0].disabled = !0, $.getJSON("/cp/server2/pgOptOut").done(function(data) {
    data.success === !0 ? (pgLogoutResponse(data.message), $("#playground-ready").show(), $("#playground-activated").hide(), optedInNow = !1) : pgLogoutResponse(data.error + " You may need to logout and login again to complete the process.")
  })
}

function initCloudServersLegacy() {
  legacyStarted === !1 && (legacyStarted = !0, setTimeOut(), serversStatus(), setInterval(function() {
    setTimeOut(), anyStatusChecksNeeded() && (serversStatus(), subtractAllStatusCheckCounts()), totalStatusLoops++
  }, 24e3))
}
var statusChecksCounter = 4,
  totalStatusLoops = 0,
  serverRunning = !0,
  optedInNow = !1,
  legacyStarted = !1;
$("#lab2").on("shown.bs.modal", function() {
  $.getJSON("/cp/server2/checkPg").done(function(data) {
    data.opted_in === !1 ? initCloudServersLegacy() : ($(".cloud-server-container .modal-body").hide(), $(".cloud-server-container .modal-footer").hide(), $("#playground-activated").show(), $("#cloud-servers-loading").hide())
  })
}), $(window).on("load", function() {
  function stopServerClick(serverNumber) {
    $.msgbox("Are you sure that you want to STOP this server?", {
      type: "confirm",
      buttons: [{
        type: "submit",
        value: "Yes"
      }, {
        type: "cancel",
        value: "Cancel"
      }]
    }, function(result) {
      "Yes" == result && stopServer(serverNumber)
    })
  }

  function deleteServerClick(serverNumber) {
    $.msgbox("Are you sure that you want to permanently delete this server?", {
      type: "confirm",
      buttons: [{
        type: "submit",
        value: "Yes"
      }, {
        type: "cancel",
        value: "Cancel"
      }]
    }, function(result) {
      "Yes" == result && deleteServer(serverNumber)
    })
  }
  $(".btn-server-dropdown").attr("disabled", !0), $("#playground-not-ready").hide(), $("#playground-ready").hide(), $("#playground-activated").hide(), $("#refresh_timeout").click(function() {
    $("#refresh_timeout").html("Refreshing..."), $.get("/cp/server2/status/", function(data) {
      $("#refresh_timeout").html("Refresh Timeout")
    })
  }), $("#mount_device_1").click(function() {
    mountDevice(1)
  }), $("#mount_device_2").click(function() {
    mountDevice(2)
  }), $("#mount_device_3").click(function() {
    mountDevice(3)
  }), $("#mount_device_4").click(function() {
    mountDevice(4)
  }), $("#mount_device_5").click(function() {
    mountDevice(5)
  }), $("#mount_device_6").click(function() {
    mountDevice(6)
  }), $("#unmount_device_1").click(function() {
    unmountDevice(1)
  }), $("#unmount_device_2").click(function() {
    unmountDevice(2)
  }), $("#unmount_device_3").click(function() {
    unmountDevice(3)
  }), $("#unmount_device_4").click(function() {
    unmountDevice(4)
  }), $("#unmount_device_5").click(function() {
    unmountDevice(5)
  }), $("#unmount_device_6").click(function() {
    unmountDevice(6)
  }), $("#create_server_1").click(function() {
    var ami = $("#ami_1").val();
    createServer(1, ami)
  }), $("#create_server_2").click(function() {
    var ami = $("#ami_2").val();
    createServer(2, ami)
  }), $("#create_server_3").click(function() {
    var ami = $("#ami_3").val();
    createServer(3, ami)
  }), $("#create_server_4").click(function() {
    var ami = $("#ami_4").val();
    createServer(4, ami)
  }), $("#create_server_5").click(function() {
    var ami = $("#ami_5").val();
    createServer(5, ami)
  }), $("#create_server_6").click(function() {
    var ami = $("#ami_6").val();
    createServer(6, ami)
  }), $("#start_server_1").click(function() {
    startServer(1)
  }), $("#start_server_2").click(function() {
    startServer(2)
  }), $("#start_server_3").click(function() {
    startServer(3)
  }), $("#start_server_4").click(function() {
    startServer(4)
  }), $("#start_server_5").click(function() {
    startServer(5)
  }), $("#start_server_6").click(function() {
    startServer(6)
  }), $("#playground-opt-in").click(function() {
    pgOptIn()
  }), $("#playground-opt-out").click(function() {
    pgOptOut()
  }), $("#stop_server_1").click(function() {
    stopServerClick(1)
  }), $("#stop_server_2").click(function() {
    stopServerClick(2)
  }), $("#stop_server_3").click(function() {
    stopServerClick(3)
  }), $("#stop_server_4").click(function() {
    stopServerClick(4)
  }), $("#stop_server_5").click(function() {
    stopServerClick(5)
  }), $("#stop_server_6").click(function() {
    stopServerClick(6)
  }), $("#delete_server_1").click(function() {
    deleteServerClick(1)
  }), $("#delete_server_2").click(function() {
    deleteServerClick(2)
  }), $("#delete_server_3").click(function() {
    deleteServerClick(3)
  }), $("#delete_server_4").click(function() {
    deleteServerClick(4)
  }), $("#delete_server_5").click(function() {
    deleteServerClick(5)
  }), $("#delete_server_6").click(function() {
    deleteServerClick(6)
  }), $("#server_role_1").change(function() {
    var role = $(this).val();
    updateRole(1, role)
  }), $("#server_role_2").change(function() {
    var role = $(this).val();
    updateRole(2, role)
  }), $("#server_role_3").change(function() {
    var role = $(this).val();
    updateRole(3, role)
  }), $("#server_role_4").change(function() {
    var role = $(this).val();
    updateRole(4, role)
  }), $("#server_role_5").change(function() {
    var role = $(this).val();
    updateRole(5, role)
  }), $("#server_role_6").change(function() {
    var role = $(this).val();
    updateRole(6, role)
  })
});
