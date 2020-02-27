$(document).ready(function (e) {

	$("#btn-showMyResume").click(showResume);
	$("#btn-showMyProjects").click(showProjects);
	$("#btn-showMyStory").click(showStory);
	$("#btn-showContactMe").click(showContactMe);
	
	function showResume() {
		hideAllViews();
		$("#myResume").fadeIn();
		$("li.myResume").addClass("active");
	};
	
	function showProjects() {
		hideAllViews();
		$("#myProjects").fadeIn();
		$("li.myProjects").addClass("active");
	};
	
		function showStory() {
		hideAllViews();
		$("#myStory").fadeIn();
		$("li.myStory").addClass("active");
	};
	
		function showContactMe() {
		hideAllViews();
		$("#contactMe").fadeIn();
		$("li.contactMe").addClass("active");
	};
	
	function hideAllViews() {
		$(".mainView").hide();
		$("li.active").removeClass();
	}
});