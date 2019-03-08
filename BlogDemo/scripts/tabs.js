function openRank(evnt, rankName){
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tabContent");
	for(i = 0; i < tabContent.length; i++){
		tabContent[i].style.display = "none";
	}
	tabLinks = document.getElementsByClassName("tabLinks");
	for(i = 0; i < tabLinks.length; i++){
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	document.getElementById(rankName).style.display = "block";
	evnt.currentTarget.className += " active";
}

function openSkillCube(evnt, row){
	var i ,cubeContent;
	cubeContent = document.getElementsByClassName(row);

	for(i = 0; i < cubeContent.length; i++){
		if(cubeContent[i].style.display === "none"){
			cubeContent[i].style.display = "table-row";
		}
		else{
			cubeContent[i].style.display = "none";
		}
	}
	
	

}