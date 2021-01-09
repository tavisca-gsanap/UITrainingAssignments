var noteCount = {'1':1,'2':1,'2':1};
var currentEditingNoteId = "";

window.onload = function() {
    let form1 = document.getElementById('stickyForm1');
    form1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        addSticky('1', form1);
        }
    });
    let form2 = document.getElementById('stickyForm2');
    form2.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        addSticky('2', form2);
        }
    });
    let form3 = document.getElementById('stickyForm3');
    form3.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        addSticky('3', form3);
        }
    });
  };

function editNote(pointsId, notesId){
    console.log(pointsId);
    console.log(notesId);
    document.getElementById('editFormOverlay').style.display = "inline";
    currentEditingNoteId = notesId;
    let colorClass="";
    switch(pointsId){
        case "1":colorClass = "greenyellow"
        break;
        case "2":colorClass = "yellow"
        break;
        case "2":colorClass = "burlywood"
        break;
        default:colorClass = "green"
        break;
    }
    let textForm = document.getElementById('editStickyForm');
    textForm.className+=" "+colorClass;
    textForm.value = document.getElementById(currentEditingNoteId).innerText;
}

function saveEdits(){
    console.log("sadascoacoknsalknl");
    let text = document.getElementById('editStickyForm').value;
    document.getElementById(currentEditingNoteId).innerText = text;
    document.getElementById('editFormOverlay').style.display = "none";

}

function addVote(votesId){
    console.log(votesId);
    let cntText = document.getElementById(votesId).innerText;
    let cnt = Number(cntText.split(' ')[1]) + 1;
    console.log(cnt);
    document.getElementById(votesId).innerText = "+ " + cnt;
}

function writeNote(formId){
    console.log(document.getElementById('stickyForm'+formId).innerHTML);
    let form = document.getElementById('stickyForm'+formId);
    form.style.display = "inline";
    form.focus();
}

function addSticky(pointsId, form){
    console.log(document.getElementById('points'+pointsId).innerHTML);
    let points = document.getElementById('points'+pointsId);
    let div = document.createElement("div");
    div.className = "sticky";
    let text = form.firstElementChild.value;
    console.log(text);
    noteCount[pointsId]++;
    let noteId = "note"+pointsId+"_"+noteCount[pointsId];
    let voteId = "vote"+pointsId+"_"+noteCount[pointsId];
    div.innerHTML = "<div class='stickyText' id=" + noteId +" onclick=\"editNote('"
    + pointsId + "','"+noteId+"')\">"+ text +
    "</div>";
    div.innerHTML+="<div class='voteCount'><span class='count' style='float: left;' id=" + voteId +
    ">+ 0</span><span style='float: right;'  onclick=\"addVote('"+voteId+"')\">Like</span></div>";
    points.appendChild(div);
    form.firstElementChild.value = '';
    form.style.display = "none";
}