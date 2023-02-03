//inserts the nav links into a page so we dont have to repeat code. 
//if we want to add a new link, we only change this file and it appears on all pages

var oldChild = document.getElementById("replace_navigation");
var newChild = document.createElement("div");
newChild.className = "inserted_navigation";

newChild.innerHTML = `
<div class="topnav">
    <div class="darken"></div>
    <div class="across">
        <div class="teamname">
            <p>11Rouge</p>
        </div>
        <div class="links">
            <a class="navlink" href="index.html">Home</a>
            <a class="navlink" href="societies.html">Societies</a>
            <a class="navlink" href="experiences.html">Experiences</a>
            <a class="navlink" href="collegeVsUni.html">College vs University</a>
            <a class="navlink" href="video.html">Videos</a>
            <a class="navlink" href="tips.html">Tips</a>
        </div>
    </div>
</div>
`;
oldChild.parentNode.replaceChild(newChild, oldChild);