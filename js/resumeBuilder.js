var work = {
    "jobs": [
        {
            "employer": "Turner Duckworth",
            "position": "Graphic Designer",
            "location": "San Francisco, CA",
            "dates": "Placeholder Date",
            "description": "Placeholder Description"
        },
        {
            "employer": "IDEO",
            "position": "Designer",
            "location": "Palo Alto, CA",
            "dates": "Placeholder Date",
            "description": "Placeholder Description"
        },
        {
            "employer": "Placeholder Employer",
            "position": "Placeholder Position",
            "location": "Placeholder Location",
            "dates": "Placeholder Date",
            "description": "Placeholder Description"
        }
    ]
}

var projects = {
	"projects" : [
		{
			"title": "Shakespeare's Globe",
			"dates": "2013",
			"description": "Historic reconstruction of Shakespeare's original theater.",
			"images": [
			"images/projects/project1-1.jpg",
			"images/projects/project1-2.jpg",
			"images/projects/project1-3.jpg"
			]
		},
		{
			"title": "Film Independent",
			"dates": "Placeholder Dates",
			"description": "The primary exhibition arm of Film Independent, showcasing 74 feature films, 60 short films, and over 50 new media works representing 35 countries.",
			"images": [
			"images/projects/project2-1.jpg",
			"images/projects/project2-2.jpg",
			"images/projects/project2-3.jpg"
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

	"welcomeMessage": "Lorem Ipsum welcome message",

	"skills": ["awesomeness", "nunchuck skills", "ninja skills"
	],
	"biopic": "images/marty.png"
}
var education = {
	"schools" : [
		{
			"name": "Placeholder Title",
			"location": "Placeholder Dates",
			"degree": "Placeholder Description",
			"majors": "Placeholder Images",
			"dates": "Placeholder Images",
			"url": "Placeholder Images"
		}

	],
	"onlineCourses" : [
		{
			"title": "Placeholder Title",
			"school": "Placeholder School",
			"dates": "Placeholder Dates",
			"url": "Placeholder URL"
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
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
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
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
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





