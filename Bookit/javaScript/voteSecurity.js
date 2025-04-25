const pageLink = document.getElementById('voting');
var stopVotes = localStorage.getItem("voteStatus");
if( stopVotes){
        

    pageLink.href = 'AlreadySubmitted.html';
   
        }