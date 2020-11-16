import $ from "jquery";
import "./css/styles.css";
import "bootstrap";

$(document).ready(function() {
  $("#gifSearch").click(function() {
    const userSearch = $("#userSearch").val();
    $("#userSearch").val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=l${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readystate === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".showGifs").show(`Here's your gif ${userSearch} : ${response.data[0].images}`);
    }
  });
});


