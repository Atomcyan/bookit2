var bookName = document.getElementById("bookName");
var reviewPage = document.getElementById("Reviews");
var reviewInput = document.getElementById("reviewInput");
var postButton = document.getElementById("postReview");
var reviewAuthor = document.getElementById("reviewAuthor");
const reviewArea = document.getElementById("reviewArea");
const hiddenReviews = document.querySelectorAll(".hiddenReview");
const hiddenPanels = document.getElementsByClassName("reviewPanel");
var endPrint;



function printReviews(){


const yourReview = reviewInput.value;
const yourReviewTitle = bookName.value;
const AuthorName = reviewAuthor.value;
localStorage.setItem("reviewTitle", yourReviewTitle);
localStorage.setItem("review", yourReview);
localStorage.setItem("Author", AuthorName);
const reviewTab = document.createElement('Button');
reviewTab.classList.add("hiddenReview");
const postedReview = document.createElement('div');
postedReview.classList.add("reviewPanel");
const reviewTitle = document.createElement('h2');
const authorHeading = document.createElement("h4");
const titleContent = localStorage.getItem('reviewTitle');
const reviewContent = localStorage.getItem('review');
const postAuthor = localStorage.getItem("Author");
postedReview.innerText = reviewContent;
reviewTitle.innerText = titleContent; 
authorHeading.innerText =`Written By:  ${postAuthor} `;
if(reviewArea){
  if(localStorage.getItem("reviewTitle") != ''&& 
   localStorage.getItem("review")  != ''&&
   localStorage.getItem("Author") != ''){  
    reviewTab.appendChild(reviewTitle);
reviewArea.appendChild(reviewTab);
postedReview.appendChild(authorHeading);

reviewArea.appendChild(postedReview); 
}
console.log(reviewArea.innerHTML);
reviewInput.value = "";
bookName.value = "";
reviewAuthor.value = "";
}
saveReview();
}

postButton.addEventListener("click", printReviews);




function saveReview(){
    localStorage.setItem("userReviews", reviewArea.innerHTML);
}


function displayReview(){
if(reviewArea){
reviewArea.innerHTML = localStorage.getItem("userReviews");
}
}

displayReview();

if(reviewArea){
    reviewArea.addEventListener('click', function(e) {
    if(e.target.tagName === "BUTTON"){
    e.target.classList.toggle("activeReview");
    var panel = e.target.nextElementSibling;
    panel.classList.toggle("activePanel");
    }
    saveReview();
    });
    }