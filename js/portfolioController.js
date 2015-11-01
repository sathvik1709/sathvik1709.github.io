/**
 * Created by Sathvik on 01/11/15.
 */


app.controller('portfolioCtrl', ['$scope','$mdSidenav','$location', function($scope,$mdSidenav,$location){

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.navigatePages = function(page){
        $location.path(page);
    }

    $scope.projects = [
        {
            projectTitle: "LetsQuiz",
            projectDescription: "An android application that lets a person conduct quiz to the connected clients. This involves multithreaded socket programming for server-client interaction.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "WeMeet",
            projectDescription: "A Meeting scheduler android application. This application selects a feasible meeting point based on geographical location of the group members. Suggests meeting places using Google Places API and Yelp API.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Wireless Audio Streamer",
            projectDescription: "Android application which can be used as computer based wireless extension or wireless headphone. Android device acts as client and the windows application on the computer acts as server. Windows application was developed in C# using NAudio libraries.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Ukonnekt",
            projectDescription: "An Android Application that was developed to make communication between professor and student better and faster. Professor is able to post assignments, announcements and grades. Syllabus meter is one of the unique features of the application. The application is designed using latest android user interface elements.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Movie web application",
            projectDescription: "A movie web application that makes use of RESTful web services of TMDb displays the search results and description of the movie. This involved parsing JSON data returned from the web service using JavaScript.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Web Mash up of Google maps and yelp web services",
            projectDescription: "Displaying the best restaurants on the map area, the results are from yelp, the address is geocoded to get the latitude and longitude of the restaurant and displayed on map. This involved JSON Parsing using JavaScript.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Shopping cart using PHP",
            projectDescription: "Retrieving and displaying the search results in XML from the eBay Commerce Network API and allowing users to add and remove items from the shopping cart. Using PHP.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Map Reduce - Hadoop",
            projectDescription: "Using dataset from NHTSA which contains recalls of vehicles in US over the last few decades and Computed the number of recalls per manufacturer, number of recalls pre manufacturer per year and identified the reason for recall each model.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Performance analysis of different database models",
            projectDescription: "Measured time for inserting data in a CSV file which contains 250,000 tuples and performing 50,000 random queries on it with RDS (Sql), DynamoDB (NoSql) and MemCache.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Memory de-duplication in Linux Kernel",
            projectDescription: "Simulated memory de-duplication operation in Linux kernel. The project was implemented in java and involved Red-Black trees (Insertion, Deletion and updating algorithms).",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Population Survey web application",
            projectDescription: "A simple web application related to health care where survey taker is allowed to enter new survey and view aggregated information of specific location. Developed using JSP, Servlets, and Bootstrap. Deployed on cloud (Amazon AWS) elastic bean stalk.",
            gitLink: false,
            projectGitLink: ""
        }, {
            projectTitle: "Data Integrity of Cloud Storage",
            projectDescription: "A metadata file was appended to the files that are being added to the cloud. While retrieving the file, the metadata with the file is compared with the metadata stored on the local computer that was created while uploading to the file.",
            gitLink: false,
            projectGitLink: ""
        }
    ];

    $scope.experience = [{
        experienceTitle: 'Software Engieering Intern',
        companyName: 'INSZoom.com, Inc',
        description: 'Involved in Integrating Fusebill Services, which brought about Automation of billing process. Worked on adding enhancements to the existing web application. Also involved in implementing NCache which brought about performance improvements to the entire application.',
        start: 'June - 2015',
        end: 'August - 2015'
    }];

    $scope.skills = [
        {
            type:'Programming languages',
            skills:'C#, Java, Python'
        },
        {
            type:'Mobile technologies',
            skills:'Android'
        },
        {
            type:'Web technologies',
            skills:'HTML5, CSS3, JavaScript, PHP, JSP, Servlets, jQuery, jQuery UI, Bootstrap, AJAX, REST services, Angular JS, Angular JS Material'
        },
        {
            type:'Cloud Platforms',
            skills:'Amazon Web Services(AWS) RDS, AWS Dynamo DB,  Hadoop'
        },
        {
            type:'Version Control',
            skills:'Git, GitHub, BitBucket'
        },
        {
            type:'Development tools',
            skills:'Eclipse, Android Studio, Visual Studio'
        },
        {
            type:'Operating Systems',
            skills:'Windows 7/8/8.1, Ubuntu'
        },
    ];

}]);
