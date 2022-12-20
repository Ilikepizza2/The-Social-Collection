var current_page = "input_page";
var selectedPlatform = "reddit";

function changeDOM(toHide, toShow) {
  toHide.style.opacity = "0";
  toHide.style.position = "absolute";
  toHide.style.zIndex = "-1";
  toShow.style.opacity = "100";
  toShow.style.position = "relative";
  toShow.style.zIndex = "1";
}

function resetColors() {
  document.getElementById("reddit-select").style.backgroundColor = "white";
  document.getElementById("subreddit-select").style.backgroundColor = "white";
  document.getElementById("stackoverflow-select").style.backgroundColor =
    "white";
  document.getElementById("ddg-select").style.backgroundColor = "white";
  document.getElementById("reddit-select").style.color = "#8B7E74";
  document.getElementById("subreddit-select").style.color = "#8B7E74";
  document.getElementById("stackoverflow-select").style.color = "#8B7E74";
  document.getElementById("ddg-select").style.color = "#8B7E74";
}

document.getElementById("reddit-select").addEventListener("click", function () {
  selectedPlatform = "reddit";
  document.getElementsByClassName("drop-down-header-text")[0].innerText =
    "Reddit";
  resetColors();
  document.getElementById("reddit-select").style.backgroundColor = "#3c2a21";
  document.getElementById("reddit-select").style.color = "white";
});

document
  .getElementById("subreddit-select")
  .addEventListener("click", function () {
    selectedPlatform = "subreddit";
    document.getElementsByClassName("drop-down-header-text")[0].innerText =
      "Subreddit";
    resetColors();
    document.getElementById("subreddit-select").style.backgroundColor =
      "#3c2a21";
    document.getElementById("subreddit-select").style.color = "white";
  });

document
  .getElementById("stackoverflow-select")
  .addEventListener("click", function () {
    selectedPlatform = "stackoverflow";
    document.getElementsByClassName("drop-down-header-text")[0].innerText =
      "Stack Overflow";
    resetColors();
    document.getElementById("stackoverflow-select").style.backgroundColor =
      "#3c2a21";
    document.getElementById("stackoverflow-select").style.color = "white";
  });

document.getElementById("ddg-select").addEventListener("click", function () {
  selectedPlatform = "duckduckgo";
  document.getElementsByClassName("drop-down-header-text")[0].innerText =
    "DuckDuckGo";
  resetColors();
  document.getElementById("ddg-select").style.backgroundColor = "#3c2a21";
  document.getElementById("ddg-select").style.color = "white";
});

function getURL(selectedPlatform) {
  if (selectedPlatform == "reddit") {
    return "https://social-sentiment.glitch.me/api/reddit/search/";
  } else if (selectedPlatform == "subreddit") {
    return "https://social-sentiment.glitch.me/api/reddit/subreddit/";
  } else if (selectedPlatform == "stackoverflow") {
    return "https://social-sentiment.glitch.me/api/stackoverflow/";
  } else if (selectedPlatform == "duckduckgo") {
    return "https://social-sentiment.glitch.me/api/duckduckgo/";
  }
}

function submitForm() {
  var text = document.getElementById("input1").value;
  const loading = document.getElementById("loading");
  const input_page = document.getElementById("sentiment-input");
  const result_page = document.getElementById("sentiment-results");
  const arrow = document.getElementById("arrow-up");
  changeDOM(input_page, loading);
  text = text.replace(/ /g, "+");
  console.log(text);
  const url = getURL(selectedPlatform) + text;
  const initialMargin = 157.6;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == 200) {
        document.getElementById("result-value").innerHTML = data.analysis;
        const finalMargin = initialMargin + data.analysis * 50;
        arrow.style.marginLeft = finalMargin + "px";
        if (data.analysis > 0) {
          document.getElementById("result-text").innerText = "Good :)";
        } else if (data.analysis < 0) {
          document.getElementById("result-text").innerText = "Bad :(";
        } else {
          document.getElementById("result-text").innerText = "Neutral :|";
        }
        changeDOM(loading, result_page);
        current_page = "result_page";
      } else {
        document.getElementById("result-value").innerHTML = "Error";
        document.getElementById("result-text").innerText = "Error";
        changeDOM(loading, result_page);
        current_page = "result_page";
      }
    });
}

document.getElementById("back").addEventListener("click", function () {
  const input_page = document.getElementById("sentiment-input");
  const result_page = document.getElementById("sentiment-results");
  if (current_page == "result_page") {
    changeDOM(result_page, input_page);
    current_page = "input_page";
  } else {
    window.location.href = "index.html";
  }
});

document.getElementById("submit").addEventListener("click", submitForm);
