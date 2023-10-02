alert("\"Hello There\"-Ewan Mcgregor")

console.log('5')
console.log('10')

function addComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var commentsList = document.getElementById("commentsList");
  
    var newComment = document.createElement("p");
    newComment.textContent = name + ": " + comment;
  
    commentsList.appendChild(newComment);
  
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }