var bio = {
    "name" : "Lea Chung",
    "role" : "Front-End Web Developer",
    "biopic" : "file:///D:/Udacity/Front%20End%20ND/small%20quiz/P3L8/img/logo2.jpg",
    "welcomeMessage" : "I'm the one!",
    "contacts" : {
        "mobile" : "416-876-9367",
        "email" : "leachung41@gmail.com",
        "github" : "leachung41",
        "location" : "Toronto, ON"
        },
    "skills" : [
        "detail-oriented", "organized", "responsible"
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "Subway",
            "title" : "Sandwich Artist",
            "location" : "Toronto, ON",
            "dates" : "May 2016 - Sep 2016",
            "description" : [
                "▶ Served customers at cashier and made all kinds of sandwiches.",
                "▶ Prepared and made soups & sandwiches, stacked goods, and cleaned the store."
            ]
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Build a Portfolio Site",
            "dates" : "Sep 2017",
            "description" : "▶ You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS.",
            "images" : [
                "file:///D:/Udacity/Front%20End%20ND/small%20quiz/P3L8/img/re_portfolio_1.jpg"
            ]
        }
    ]
};

var education = {
    "schools" : [
        {
            "name" : "Hongik University",
            "location" : "Yeongi-gun, Chungcheongnam-do, South Korea",
            "degree" : "Bachelor of Science",
            "dates" : "Mar 01, 2006 - Feb 22, 2011",
            "major" : "Computer & Information Communication Eng."
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree Program",
            "school" : "Udacity",
            "dates" : "Aug 2017 - Oct 2017",
            "url" : "http://www.udacity.com"
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);


    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    };
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }

    if(education.onlineCourses.length > 0){
        $(".education-entry:last").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedonlineTitle + formattedonlineschool,formattedonlineDates,formattedonlineURL);
        };
    };
};


bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
