/*
name: Eric Mahoney
date: 08/09/18
desc: supporting javascript [jQuery] for my personal portfolio site
 */

// gives the divs each a variable:
var welcomeVar = $('#welcome-div');
var aboutVar = $('#about-div');
var projectsVar = $('#projects-div');
var courseworkVar = $('#coursework-div');
var socialLinksVar = $('#social-div');


// creates a function that hides all of the divs that are not currently on the screen
function hideDivs(){
	aboutVar.hide();
	projectsVar.hide();
	courseworkVar.hide();
	socialLinksVar.hide();
};

// creates currentDiv variable as homepage
// - this variable we will use to keep track of which div we need to fade upon the click of another link
var currentDiv = welcomeVar;

// replaces the current div with the welcome-message div
function home(){
	$(currentDiv).fadeOut('slow', function(){
		$(this).replaceWith(welcomeVar);
		$(welcomeVar).fadeIn('slow');
	});

	// updates variable
	currentDiv = welcomeVar;
};

// replaces current div with about-me div onclick of navbar link
function aboutMe(){
	$(currentDiv).fadeOut('slow',function(){
		$(this).replaceWith(aboutVar);
		$(aboutVar).fadeIn('slow');
	});

	// updates variable
	currentDiv = aboutVar;
}

// replaces current div with projects div onclick of navbar link
function projects(){
	$(currentDiv).fadeOut('slow',function(){
		$(this).replaceWith(projectsVar);
		$(projectsVar).fadeIn('slow');
	});

	// updates variable
	currentDiv = projectsVar;
}

// replaces current div with coursework div onclick of navbar link
function coursework(){
	$(currentDiv).fadeOut('slow',function(){
		$(this).replaceWith(courseworkVar);
		$(courseworkVar).fadeIn('slow');
	});

	// updates variable
	currentDiv = courseworkVar;
}


// replaces current div with social-links div onclick of navbar link
function socialLinks(){
	$(currentDiv).fadeOut('slow',function(){
		$(this).replaceWith(socialLinksVar);
		$(socialLinksVar).fadeIn('slow');
	});
	currentDiv = socialLinksVar;
}

hideDivs();