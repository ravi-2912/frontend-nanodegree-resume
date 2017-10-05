/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

var bio = {
    "name" : "John Doe",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "650-555-5555",
        "email": "john@eample.com" ,
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco",
    },          
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc" ,
    "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
    "biopic": "images/fry.jpg",
    "display": function () {
        $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
        $("#header").prepend(HTMLheaderName.replace(data, bio.name));
        
        $("#topContacts, #footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace(data, bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
        
        $("#header").append(HTMLbioPic.replace(data, bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for(var i = 0; i < bio.skills.length; i++){
            $("#skills").append(HTMLskills.replace(data, bio.skills[i]));
        }        
    }
};


    

var education = {
    "schools": [
        {
            "name": "Nova Southeastern University",
            "location": "Fort Lauderdale, FL, US",
            "degree": "Masters",
            "majors": ["CompSci"],
            "dates": 2013,
            "url": "www.nsu.edu"
        }, {
            "name": "Eckerd College",
            "location": "St. Petersburg, FL, US",
            "degree": "BA",
            "majors": ["CompSci", "French"],
            "dates": 2009,
            "url": "www.ec.edu"
        }        
    ],
         
    "onlineCourses": [
        {
            "title": "Javascript Crash Course",
            "school": "Udacity",
            "dates": 2017,
            "url": "www.udacity.com"
        }         
    ],

    "display": function () {
        var i;
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace(data, education.schools[i].name) + 
                                  HTMLschoolDegree.replace(data, education.schools[i].degree);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(HTMLschoolDates.replace(data, education.schools[i].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace(data, education.schools[i].location));
            var majors = "";
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                majors += education.schools[i].majors[j];
                if(j != education.schools[i].majors.length-1) {
                    majors += ", ";
                }                    
            }
            $(".education-entry:last").append(HTMLschoolMajor.replace(data, majors));
        }        
        if(education.onlineCourses.length > 0){
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOCourse = HTMLonlineTitle.replace(data, education.onlineCourses[i].title) + HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
                $(".education-entry:last").append(formattedOCourse);
                $(".education-entry:last").append(HTMLonlineDates.replace(data, education.onlineCourses[i].dates));
                $(".education-entry:last").append(HTMLonlineURL.replace(data, education.onlineCourses[i].url));
            }
        }
        
    }
};

var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title": "Delivery Boy",
            "dates": "Jan 2003 - Present",
            "location": "San Franscisco",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quo quis " + 
            "voluptatum fuga officia non excepturi incidunt veritatis beatae corporis quos pariatur " +
            "officiis optio odit dicta, iure saepe id nihil quaerat, dolore aspernatur maxime eligen" +
            "di? Repellendus ea molestiae facere quis, repudiandae, recusandae porro, itaque quaerat " +
            "doloribus totam quia temporibus delectus?"
        }, {
            "employer": "Pannucci Pizza",
            "title": "Delivery Boy",
            "dates": "1998 - Dec 2002",
            "location": "San Franscisco",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quo quis " + 
            "voluptatum fuga officia non excepturi incidunt veritatis beatae corporis quos pariatur " +
            "officiis optio odit dicta, iure saepe id nihil quaerat, dolore aspernatur maxime eligen" +
            "di? Repellendus ea molestiae facere quis, repudiandae, recusandae porro, itaque quaerat " +
            "doloribus totam quia temporibus delectus?"
        }
    ],

    "display": function () {
        for (var i = 0; i < work.jobs.length; i++) {  
            $("#workExperience").append(HTMLworkStart);    
            var formattedWorkHeading = HTMLworkEmployer.replace(data, work.jobs[i].employer) + 
                                       HTMLworkTitle.replace(data, work.jobs[i].title);
            $(".work-entry:last").append(formattedWorkHeading);
            $(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[i].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[i].location));
            $(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[i].description));
        }        
    }
};


var project = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quo quis " + 
            "voluptatum fuga officia non excepturi incidunt veritatis beatae corporis quos pariatur " +
            "officiis optio odit dicta, iure saepe id nihil quaerat, dolore aspernatur maxime eligen" +
            "di? Repellendus ea molestiae facere quis, repudiandae, recusandae porro, itaque quaerat " +
            "doloribus totam quia temporibus delectus?",
            "images": ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"]
        }
    ],
    
    "display": function () {
        for(var i = 0; i < project.projects.length; i++){
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace(data, project.projects[i].title));
            $(".project-entry:last").append(HTMLprojectDates.replace(data, project.projects[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace(data, project.projects[i].description));
            if(project.projects[i].images.length>0) {
                for (var imgIndex = 0; imgIndex < project.projects[i].images.length; imgIndex++) {
                    $(".project-entry:last").append(HTMLprojectImage.replace(data, project.projects[i].images[imgIndex]));
                }
            }
        }
    }
};

var addMaps = function (API_key) {
    $("head").append("<script src=\"http://maps.googleapis.com/maps/api/js?libraries=places\"></script>");
    var key = "<script src=\"http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]\"></script>";
    key.replace("[YOUR_API_KEY]", API_key);     
    $("body").append(key);
    $("#mapDiv").append(googleMap);    
};

bio.display();
work.display();
project.display();
education.display();
addMaps("AIzaSyB0JR146h4Qidqhjm_KriNeOjjOlxC3FBI");