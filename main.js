function projectDetails(name, details) {
	document.getElementById("projectName").innerHTML = name;
	document.getElementById("projectDetails").innerHTML = details;
}

$(document).ready(function(){
  $(".card").hover(function(){
    $(this).children(".project-img").css("opacity", "0.2");
    $(this).children(".skills-div").css("display", "block");
    }, function(){
    $(this).children(".project-img").css("opacity", "1");
    $(this).children(".skills-div").css("display", "none");
  });
});
