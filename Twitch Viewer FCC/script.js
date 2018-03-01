var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];
var url = "https://wind-bow.gomix.me/twitch-api/";

$(document).ready(function () {
  // first channel, getting user id with one call and their status in another
  // first call to get the username   
  $.getJSON(url + "users/" + channels[0] + '?callback=?', function (data) {
    $("#userName").append(data.display_name);
  });
  // second call to get the status of the stream, outputting what game they are playing if online, or outputting offline if they are not
  $.getJSON(url + "streams/" + channels[0] + '?callback=?', function (data) {
    if (data.stream !== null) {
      $("#status").text(data.stream.game);
      $("#status").append("<br>");
      $("#status").append(data.stream.viewers + " viewers");
    }

    if (data.stream == null) {
      $("#status").text("offline");
    }
    // opening a new window to the user's twitch account if the status link is pressed
    $("#status").click(function () {
      window.open("https://www.twitch.tv/" + channels[0]);
    });
  });
  // process repeats but for the next channel
  $.getJSON(url + "users/" + channels[1] + '?callback=?', function (data) {
    $("#second").append(data.display_name);

  });

  $.getJSON(url + "streams/" + channels[1] + '?callback=?', function (data) {
    console.log(data.stream);
    if (data.stream == null) {
      $("#secondStatus").append("offline");
    }

    if (data.stream !== null) {
      $("#secondStatus").text(data.stream.game);
      $("#secondStatus").append("<br>");
      $("#secondStatus").append(data.stream.viewers + " viewers");
    }
    $("#secondStatus").click(function () {
      window.open("https://www.twitch.tv/" + channels[1]);
    });

  });
  // third channel
  $.getJSON(url + "users/" + channels[2] + '?callback=?', function (data) {
    $("#third").append(data.display_name);

  });

  $.getJSON(url + "streams/" + channels[2] + '?callback=?', function (data) {
    console.log(data.stream);
    if (data.stream == null) {
      $("#thirdStatus").append("offline");
    }
    if (data.stream !== null) {
      $("#fourthStatus").append(data.stream.game);
    }

    $("#thirdStatus").click(function () {
      window.open("https://www.twitch.tv/" + channels[2]);
    });


  });
  // fourth channel
  $.getJSON(url + "users/" + channels[3] + '?callback=?', function (data) {
    $("#fourth").append(data.display_name);

  });

  $.getJSON(url + "streams/" + channels[3] + '?callback=?', function (data) {
    console.log(data.stream);
    if (data.stream == null) {
      $("#fourthStatus").append("offline");

    }

    if (data.stream !== null) {
      $("#fourthStatus").append(data.stream.game);
    }

    $("#fourthStatus").click(function () {
      window.open("https://www.twitch.tv/" + channels[3]);
    });

  });




});