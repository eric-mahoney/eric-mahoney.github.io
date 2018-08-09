// hides the functions that are not currently on the screen
var welcomeVar = $('#welcome-message');
var aboutVar = $('#about-me').hide();
var projectsVar = $('#projects').hide();
var courseworkVar = $('#coursework').hide();
var socialLinksVar = $('#social-links').hide();

// sets current div as the welcome message
var currentDiv = $('#welcome-message');

// replaces the current div with the welcome-message div
function home(){
	$(currentDiv).fadeOut('slow', function(){
		$(this).replaceWith(welcomeVar);
		$(welcomeVar).fadeIn('slow');
	});
	currentDiv = $('#welcome-message');
};

// replaces the current div with the about-me div
function aboutMe(){
	$(currentDiv).fadeOut("slow", function(){
		$(this).replaceWith(aboutVar);
		$(aboutVar).fadeIn('slow');
	});
	currentDiv = $('#about-me');
};

// replaces the current div with the projects div
function projects(){
	$(currentDiv).fadeOut("slow", function(){
		$(this).replaceWith(projectsVar);
		$(projectsVar).fadeIn('slow');
	});
	currentDiv = $('#projects');
}

// replaces the current div with the coursework div
function coursework(){
	$(currentDiv).fadeOut("slow", function(){
		$(this).replaceWith(courseworkVar);
		$(courseworkVar).fadeIn('slow');
	});
	currentDiv = $('#coursework');
}

// replaces the current div with the social-links div
function socialLinks(){
	$(currentDiv).fadeOut("slow", function(){
		$(this).replaceWith(socialLinksVar);
		$(socialLinksVar).fadeIn('slow');
	});
	currentDiv = $('#social-links');
}