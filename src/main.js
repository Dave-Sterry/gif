import $ from "jquery";
import "./css/styles.css";
import "bootstrap";
// import Method from "./method.js";

$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();
    const userSearch = $("#userSearch").val();

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=l9wbr3917CHeTuV3nddAriQ7oRdk92ra&limit=5`

    request.onreadystatechange = function () {
      if (this.readystate === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
});