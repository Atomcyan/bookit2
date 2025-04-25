

let titles = document.querySelectorAll('input[class="Titles"]');
var authors = document.querySelectorAll('input[class="Authors]');
var title1 = document.getElementById("option1");
var title2 = document.getElementById("option2");
var title3 = document.getElementById("option3");
var author1 = document.getElementById("option4");
var author2 = document.getElementById("option5");
var author3 = document.getElementById("option6");
var vote_form = document.getElementById('voteForm');
var voteButton = document.getElementById("voteButton");
var title_value;
var author_value;
var voteStatus = false;
var checked;

titles.forEach(function(e) {
   
    e.addEventListener('click', function() {
    e.checked = !checked;
    checked = !checked;
    console.log(e.checked);
   
    });   
    });

    authors.forEach(function(e){
        e.addEventListener('click', function(){
            e.checked = !checked;
            checked = !checked;
            console.log(e.checked);
        });
        });

    if(localStorage.getItem("title1Votes") === null &&
    localStorage.getItem("title2Votes") === null  &&
   localStorage.getItem("title3Votes") === null){
     localStorage.setItem("title1Votes", 0);
     localStorage.setItem("title2Votes", 0);
     localStorage.setItem("title3Votes", 0);
 }

if(localStorage.getItem("author1Votes") === null &&
localStorage.getItem("author2Votes") === null  &&
localStorage.getItem("author3Votes") === null){
    localStorage.setItem("author1Votes", 0) ;
    localStorage.setItem("author2Votes", 0) ;
    localStorage.setItem("author3Votes", 0) ;
}
 
    window.onload =function(){
    vote_form.addEventListener("submit", event =>{
    var title1VoteCount = parseInt(localStorage.getItem("title1Votes"));
    var titleVoteCount2 = parseInt(localStorage.getItem("title2Votes"));
    var titleVoteCount3 = parseInt(localStorage.getItem("title3Votes"));
    var authorVoteCount = parseInt(localStorage.getItem("author1Votes"));
    var authorVoteCount2 = parseInt(localStorage.getItem("author2Votes"));
    var authorVoteCount3 = parseInt(localStorage.getItem("author3Votes"));
    
    event.preventDefault();
     
    if(title1.checked){
        voteStatus = true;
       title1VoteCount++;
       localStorage.setItem("title1Votes", title1VoteCount);
        alert('Thank you for your selection');
        console.log(title1.value);
        console.log(title1VoteCount);
    }

    if(title2.checked){
    voteStatus = true;
    titleVoteCount2++;
    localStorage.setItem("title2Votes", titleVoteCount2);
    alert("Thank you for making the second selection");
    console.log(title2.value);
    console.log(titleVoteCount2);
    }

    if(title3.checked){
   voteStatus = true;
    titleVoteCount3++;
    localStorage.setItem("title3Votes", titleVoteCount3);
    alert("Thank you for selecting the third option");
    console.log(title3.value);
    console.log(titleVoteCount3);
    }

    if(author1.checked){
        voteStatus = true;
        authorVoteCount++;
           localStorage.setItem("author1Votes", authorVoteCount);
            alert('Thank you for your selection');
            console.log(author1.value);
            console.log(authorVoteCount);
       }
    
    
       if(author2.checked){
        voteStatus = true;
        authorVoteCount2++;
           localStorage.setItem("author2Votes", authorVoteCount2);
            alert('Thank you for your selection');
            console.log(author2.value);
            console.log(authorVoteCount2);
       }
    
       if(author3.checked){
        voteStatus = true;
        authorVoteCount3++;
           localStorage.setItem("author3Votes", authorVoteCount3);
            alert('Thank you for your selection');
            console.log(author3.value);
            console.log(authorVoteCount3);
       }
    

    if(title1VoteCount === 3){
    title_value = title1.value; 
    localStorage.setItem('selectedTitle', title_value);
    localStorage.removeItem("title2Votes");
    localStorage.removeItem("title3Votes");
    }
    else if(titleVoteCount2 === 15){ 
    title_value = title2.value;
    localStorage.setItem('title',title_value);
    localStorage.removeItem('title1Votes');
    localStorage.removeItem('title3Votes');
    }
    else if(titleVoteCount3 === 15){   
    title_value = title3.value;
    localStorage.setItem('title', title_value);
    localStorage.removeItem("title1Votes");
    localStorage.removeItem("title2Votes");
    }      


    
   if(authorVoteCount === 15){
    author_value = author1.value;
     localStorage.setItem('selectedAuthor', author_value);
     localStorage.removeItem("author2Votes");
     localStorage.removeItem("author3Votes");
     }
     else  if(authorVoteCount2 === 15){
         author_value = author2.value;
         localStorage.setItem('author', author_value);
         localStorage.removeItem("author1Votes");
         localStorage.removeItem("author3Votes");
         }
     else  if(authorVoteCount3 === 15){
         author_value = author3.value;
         localStorage.setItem('author', author_value);
         localStorage.removeItem("author1Votes");
         localStorage.removeItem("author2Votes");
         }
     localStorage.setItem("voteStatus", voteStatus);
 
console.log(voteStatus);
    })
    }


function clearVotes(){
localStorage.removeItem("author1votes")
localStorage.removeItem("author2votes")
localStorage.removeItem("author3votes")
localStorage.removeItem("title1votes")
localStorage.removeItem("title2votes")
localStorage.removeItem("title3votes")
if(localStorage.setItem("selectedTitle", title_value)){
localStorage.removeItem("selectedTitle");
}
if(localStorage.setItem("selectedAuthor", author_value)){
localStorage.removeItem("selectedAuthor");
}
if(localStorage.setItem("voteStatus", voteStatus)){
localStorage.removeItem("voteStatus");
}
}

setInterval(clearVotes, 604800000);

 
      
   


  