var currentTitle = document.getElementById('currentTitle');

const storedTitle = localStorage.getItem('selectedTitle') ;

if(currentTitle){
currentTitle.innerHTML =storedTitle ;
}

var currentAuthor = document.getElementById("currentAuthor");
const storedAuthor = localStorage.getItem('selectedAuthor');
var firstTitle = document.getElementById("firstTitle");
const title1 = localStorage.getItem("title1Votes");

var secondTitle = document.getElementById("secondTitle");
const title2 = localStorage.getItem("title2Votes");

var thirdTitle = document.getElementById("thirdTitle");
const title3 = localStorage.getItem("title3Votes");
firstTitle.innerHTML = title1;
secondTitle.innerHTML = title2;
thirdTitle.innerHTML = title3;
var firstAuthor = document.getElementById("firstAuthor");
const author1 = localStorage.getItem("author1Votes");
var secondAuthor = document.getElementById("secondAuthor");
const author2 = localStorage.getItem("author2Votes");
var thirdAuthor = document.getElementById("thirdAuthor");
const author3 = localStorage.getItem("author3Votes");
firstAuthor.innerHTML = author1;
secondAuthor.innerHTML = author2;
thirdAuthor.innerHTML = author3;
if(currentAuthor){
currentAuthor.innerHTML = storedAuthor;
}

