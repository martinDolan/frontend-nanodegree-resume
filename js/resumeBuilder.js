	var work = {
    "jobs": [
        {
            "employer": "Turner Duckworth",
            "title": "Graphic Designer",
            "location": "San Francisco, CA",
            "dates": "2005-2009",
            "description": "Branding, packaging, corporate identity"
        },
        {
            "employer": "IDEO",
            "title": "Graphic Designer (Contractor)",
            "location": "Palo Alto, CA",
            "dates": "2009-2011",
            "description": "Over 20 contract jobs for IDEO"
        },
        {
            "employer": "Pace",
            "title": "Interactive Designer",
            "location": "Greensboro, NC",
            "dates": "2012-Present",
            "description": "Design and code websites"
        }
    ]
}

var projects = {
	"projects" : [
		{
			"title": "Shakespeare's Globe",
			"dates": "2013",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images": [
			"http://placehold.it/500x250/999999/222222?text=Placeholder+Image+1", "http://placehold.it/500x250/999999/222222?text=Placeholder+Image+2"
			]
		},
		{
			"title": "Film Independent",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images": [
			"http://placehold.it/500x250/999999/222222?text=Placeholder+Image+1", "http://placehold.it/500x250/999999/222222?text=Placeholder+Image+2"
			]
		}

	]
}

var bio = {
	"name": "Marty O'Connor",
	"role": "Front End Web Developer",

	"contacts": {
		"mobile": "415-205-8636",
		"email": "martyopants@gmail.com",
		"github": "martinjdolan",
		"twitter": "@martinjdolan",
		"location": "Greensboro, NC"
	},

	"welcomeMessage": "Welcome to my site. I am currently seeking a web design position in the Washington DC area.",

	"skills": ["Front End Web Development", "Graphic Design", "Branding", "Packaging", "Corporate Identity"
	],
	"biopic": "images/marty.png"
}

var education = {
	"schools" : [
		{
			"name": "Academy of Art University",
			"location": "San Francisco, CA",
			"degree": "B.A. Graphic Design",
			"majors": "Graphic Design",
			"dates": "2001-2005",
			"url": "Academyart.edu"
		}

	],
	"onlineCourses" : [
		{
			"title": "Front End Web Development",
			"school": "Udacity.com",
			"dates": "2015",
			"url": "Udacity.com"
		}

	]
}

function displaySkills() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		$("#header").append(HTMLskillsStart);


	for (skill in bio.skills) {
		$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}

displaySkills();

function displayConnect () {
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

displayConnect();

function displayWork() {
	for (job in work.jobs) {
		// Create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concatenate employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displaySchools() {

	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	};
}

displaySchools();

function displayOnlineCourses() {

	for (course in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

	};
}

displayOnlineCourses();

function inName(name) {
 name = name.trim().split(" ");
 console.log(name);
 name[1] = name[1].toUpperCase();
 name[0] = name [0].slice(0,1).toUpperCase() +
 	name[0].slice(1).toLowerCase();

 return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

var displayProjects = function() {};


	projects.display = function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);


			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}

projects.display();

$("#map-div").append(googleMap);





