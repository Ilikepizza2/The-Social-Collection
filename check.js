var current_page = "input_page";
var selectedPlatform = "reddit";
var text = "";
const loading_page = document.getElementById("loading");
const input_page = document.getElementById("check-input");
const result_page = document.getElementById("check-results");
const heading = document.getElementById("heading");
const query = document.getElementById("query");
const platform = document.getElementById("platform");
const resultsLi = document.getElementById("results-li");
var results={};
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
    return "https://social-scraper-one.vercel.app/api/reddit/tags/";
  } else if (selectedPlatform == "subreddit") {
    return "https://social-scraper-one.vercel.app/api/reddit/subreddit/";
  } else if (selectedPlatform == "stackoverflow") {
    return "https://social-scraper-one.vercel.app/api/stackoverflow/tags/";
  } else if (selectedPlatform == "duckduckgo") {
    return "https://social-scraper-one.vercel.app/api/duckduckgo/";
  }
}

function changeDOM(toHide, toShow) {
  toHide.style.opacity = "0";
  toHide.style.position = "absolute";
  toHide.style.zIndex = "-1";
  toShow.style.opacity = "100";
  toShow.style.position = "relative";
  toShow.style.zIndex = "1";
}
var i=0;
function showResults(){
    changeDOM(loading_page, result_page);
    current_page = "result_page";
    if(selectedPlatform == "reddit"){
        platform.innerText = "Reddit";
        query.innerText = text + " - ";
    }
    else if(selectedPlatform == "subreddit"){
        platform.innerText = "Subreddit";
        query.innerText = text + " - ";
    }
    else if(selectedPlatform == "stackoverflow"){
        platform.innerText = "Stack Overflow";
        query.innerText = text + " - ";
    }
    else if(selectedPlatform == "duckduckgo"){
        platform.innerText = "DuckDuckGo";
        query.innerText = text + " - ";
    }
    // console.log(results.length)
    let [url1, url2, url3] = [results[i].url, results[i+1].url, results[i+2].url]
    if(selectedPlatform === "subreddit"){
        url1 = "https://www.reddit.com/"+url1;
        url2 = "https://www.reddit.com/"+url2;
        url3 = "https://www.reddit.com/"+url3;
    }
    let [title1, title2, title3] = [results[i].title, results[i+1].title, results[i+2].title]
    title1 = title1.length > 100 ? title1.substring(0, 100) + "..." : title1;
    title2 = title2.length > 100 ? title2.substring(0, 100) + "..." : title2;
    title3 = title3.length > 100 ? title3.substring(0, 100) + "..." : title3;
    document.getElementById('link1').innerText = title1
    document.getElementById('link1').href = url1
    document.getElementById('link2').innerText = title2
    document.getElementById('link2').href = url2
    document.getElementById('link3').innerText = title3
    document.getElementById('link3').href = url3
    

}

function submitForm() {
    changeDOM(input_page, loading_page);
    current_page = "loading_page";
    text = document.getElementById("input1").value;
    text = text.replace(/ /g, "+");
    const url = getURL(selectedPlatform)+text;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        results = data;
        // console.log(results);  
        showResults();
    })

}

document.getElementById("back").addEventListener("click", function () {
  if (current_page == "result_page") {
    changeDOM(result_page, input_page);
    current_page = "input_page";
  }
  if(current_page == "loading_page"){
    changeDOM(loading_page, input_page);
    current_page = "input_page";
  } 
  else {
    window.location.href = "index.html";
  }
});
document.getElementById("submit").addEventListener("click", submitForm);
document.getElementById("scrollNext").addEventListener("click", function () {
    if(i<7)
    i+=3;
    showResults();
});
document.getElementById("scrollPrev").addEventListener("click", function () {
    if(i>0)
    i-=3;
    showResults();
});
