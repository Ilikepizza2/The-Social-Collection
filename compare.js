var current_page = "input_page1";
var query1 = "";
var query2 = "";
var selectedPlatform1 = "reddit";
var selectedPlatform2 = "reddit";
const input_page1 = document.getElementById("compare-input1");
const input_page2 = document.getElementById("compare-input2");
const result_page = document.getElementById("compare-results");
const loading_page = document.getElementById("loading");
function changeDOM(toHide, toShow) {
  toHide.style.opacity = "0";
  toHide.style.position = "absolute";
  toHide.style.zIndex = "-1";
  toShow.style.opacity = "100";
  toShow.style.position = "relative";
  toShow.style.zIndex = "1";
}

function resetColors1() {
  document.getElementById("reddit-select1").style.backgroundColor = "white";
  document.getElementById("subreddit-select1").style.backgroundColor = "white";
  document.getElementById("stackoverflow-select1").style.backgroundColor =
    "white";
  document.getElementById("ddg-select1").style.backgroundColor = "white";
  document.getElementById("reddit-select1").style.color = "#8B7E74";
  document.getElementById("subreddit-select1").style.color = "#8B7E74";
  document.getElementById("stackoverflow-select1").style.color = "#8B7E74";
  document.getElementById("ddg-select1").style.color = "#8B7E74";
}

document
  .getElementById("reddit-select1")
  .addEventListener("click", function () {
    selectedPlatform1 = "reddit";
    document.getElementsByClassName("drop-down-header-text")[0].innerText =
      "Reddit";
    resetColors1();
    document.getElementById("reddit-select1").style.backgroundColor = "#3c2a21";
    document.getElementById("reddit-select1").style.color = "white";
  });

document
  .getElementById("subreddit-select1")
  .addEventListener("click", function () {
    selectedPlatform1 = "subreddit";
    document.getElementsByClassName("drop-down-header-text")[0].innerText =
      "Subreddit";
    resetColors1();
    document.getElementById("subreddit-select1").style.backgroundColor =
      "#3c2a21";
    document.getElementById("subreddit-select1").style.color = "white";
  });

document
  .getElementById("stackoverflow-select1")
  .addEventListener("click", function () {
    selectedPlatform1 = "stackoverflow";
    document.getElementsByClassName("drop-down-header-text")[0].innerText =
      "Stack Overflow";
    resetColors1();
    document.getElementById("stackoverflow-select1").style.backgroundColor =
      "#3c2a21";
    document.getElementById("stackoverflow-select1").style.color = "white";
  });

document.getElementById("ddg-select1").addEventListener("click", function () {
  selectedPlatform1 = "duckduckgo";
  document.getElementsByClassName("drop-down-header-text")[0].innerText =
    "DuckDuckGo";
  resetColors1();
  document.getElementById("ddg-select1").style.backgroundColor = "#3c2a21";
  document.getElementById("ddg-select1").style.color = "white";
});

function resetColors2() {
  document.getElementById("reddit-select2").style.backgroundColor = "white";
  document.getElementById("subreddit-select2").style.backgroundColor = "white";
  document.getElementById("stackoverflow-select2").style.backgroundColor =
    "white";
  document.getElementById("ddg-select2").style.backgroundColor = "white";
  document.getElementById("reddit-select2").style.color = "#8B7E74";
  document.getElementById("subreddit-select2").style.color = "#8B7E74";
  document.getElementById("stackoverflow-select2").style.color = "#8B7E74";
  document.getElementById("ddg-select2").style.color = "#8B7E74";
}

document
  .getElementById("reddit-select2")
  .addEventListener("click", function () {
    selectedPlatform2 = "reddit";
    document.getElementsByClassName("drop-down-header-text")[1].innerText =
      "Reddit";
    resetColors2();
    document.getElementById("reddit-select2").style.backgroundColor = "#3c2a21";
    document.getElementById("reddit-select2").style.color = "white";
  });

document
  .getElementById("subreddit-select2")
  .addEventListener("click", function () {
    selectedPlatform2 = "subreddit";
    document.getElementsByClassName("drop-down-header-text")[1].innerText =
      "Subreddit";
    resetColors2();
    document.getElementById("subreddit-select2").style.backgroundColor =
      "#3c2a21";
    document.getElementById("subreddit-select2").style.color = "white";
  });

document
  .getElementById("stackoverflow-select2")
  .addEventListener("click", function () {
    selectedPlatform2 = "stackoverflow";
    document.getElementsByClassName("drop-down-header-text")[1].innerText =
      "Stack Overflow";
    resetColors2();
    document.getElementById("stackoverflow-select2").style.backgroundColor =
      "#3c2a21";
    document.getElementById("stackoverflow-select2").style.color = "white";
  });

document.getElementById("ddg-select2").addEventListener("click", function () {
  selectedPlatform2 = "duckduckgo";
  document.getElementsByClassName("drop-down-header-text")[1].innerText =
    "DuckDuckGo";
  resetColors2();
  document.getElementById("ddg-select2").style.backgroundColor = "#3c2a21";
  document.getElementById("ddg-select2").style.color = "white";
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

document.getElementById("back").addEventListener("click", function () {
  if (current_page == "result_page") {
    changeDOM(result_page, input_page1);
    current_page = "input_page1";
  } else if (current_page == "input_page2") {
    changeDOM(input_page2, input_page1);
    current_page = "input_page1";
  } else if(current_page == "loading_page"){
    changeDOM(loading_page, input_page1);
    current_page = "input_page1";
  }
  else {
    window.location.href = "index.html";
  }
});

function updateResults(result1, result2) {
    const result1Round=result1.toFixed(10);
    const result2Round=result2.toFixed(10);
//   console.log("result1 = " + result1 + " result2 = " + result2);
  const arrowUp = document.getElementById("arrow-up");
  const arrowDown = document.getElementById("arrow-down");
  const initialMargin = 157.6;
  if (query1.length > 10) {
    query1 = query1.substring(0, 10) + "...";
  }
  if (query2.length > 10) {
    query2 = query2.substring(0, 10) + "...";
  }

  document.getElementById("heading1").innerText = query1;
  document.getElementById("heading2").innerText = query2;
  document.getElementById("platform1").innerText = selectedPlatform1;
  document.getElementById("platform2").innerText = selectedPlatform2;
  document.getElementById("value1").innerHTML = result1Round;
  document.getElementById("value2").innerHTML = result2Round;
  if (result1 > 0) {
    document.getElementById("text1").innerText = "Good :)";
  } else if (result1 == 0) {
    document.getElementById("text1").innerText = "Neutral :|";
  } else {
    document.getElementById("text1").innerText = "Bad :(";
  }
  if (result2 > 0) {
    document.getElementById("text2").innerText = "Good :)";
  } else if (result2 == 0) {
    document.getElementById("text2").innerText = "Neutral :|";
  } else {
    document.getElementById("text2").innerText = "Bad :(";
  }
  const finalMargin1 = initialMargin + result1 * 50;
  arrowUp.style.marginLeft = finalMargin1 + "px";
  const finalMargin2 = initialMargin + result2 * 50;
  arrowDown.style.marginLeft = finalMargin2 + "px";
//   arrowDown.style.marginTop = "0px";
  changeDOM(loading, result_page);
  current_page = "result_page";
}

function formatquery(query) {
    query = query.replace(/ /g, "+");
  return query;
}

function submitForm() {
  var text = formatquery(query1);
  console.log(text);
  const url = getURL(selectedPlatform1) + text;
  var result1 = 0;
  var result2 = 0;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status == 200) {
        result1 = data.analysis;
        text = formatquery(query2);
        console.log(text);
        const url2 = getURL(selectedPlatform2) + text;
        fetch(url2)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              result2 = data.analysis;
              updateResults(result1, result2);
            } else {
              document.getElementById("value2").innerHTML = "Error";
              document.getElementById("text1").innerText = "Error";
              changeDOM(loading, result_page);
              current_page = "result_page";
            }
          });
      } else {
        document.getElementById("value1").innerHTML = "Error";
        document.getElementById("text1").innerText = "Error";
        changeDOM(loading, result_page);
        current_page = "result_page";
      }
    });

}

document.getElementById("next").addEventListener("click", function () {
  if (current_page == "input_page1") {
    changeDOM(input_page1, input_page2);
    current_page = "input_page2";
    query1 = document.getElementById("input1").value;
  }
});

document.getElementById("submit").addEventListener("click", function () {
  if (current_page == "input_page2") {
    query2 = document.getElementById("input2").value;
    current_page = "loading_page";
    console.log("query1 = " + query1 + " query2 = " + query2);
    console.log(
      "selectedPlatform1 = " +
        selectedPlatform1 +
        " selectedPlatform2 = " +
        selectedPlatform2
    );
    changeDOM(input_page2, loading_page);
    submitForm();
  }
});


// changeDOM(input_page1, result_page);
