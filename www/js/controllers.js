angular.module('conference', [])

.controller('participantsCtrl', function($scope) {
    $scope.people = [
            {
                name: "John Doe",
                img: "img/male1.png",
                description: "Front-end developer at XYZ Corporation",
                textOne: "The new era of the Angular 2.0",
                textTwo: "Throw away your jQuery code",
                day: "Monday",
            },
            {
                name: "Mary Doe",
                img: "img/female1.png",
                description: "Webdesigner at Ingrid's",
                textOne: "Best practices with CSS",
                textTwo: "SASS and LESS: why use them?",
                day: "Tuesday",
            },
            {
                name: "Brian Doe",
                img: "img/male2.png",
                description: "Teacher and scientist at Github University",
                textOne: "How to build an app using Ionic",
                textTwo: "The fascinating world of Cordova",
                day: "Wednesday",
            },
            {
                name: "Lucy Doe",
                img: "img/female2.png",
                description: "CEO at Education 4Everyone",
                textOne: "Why kids must learn programming",
                textTwo: "Developing internationally",
                day: "Thursday",
            },
            {
                name: "Jeff Doe",
                img: "img/male3.png",
                description: "Data scientist at Github University",
                textOne: "The newest frameworks in the web",
                textTwo: "The future of the internet",
                day: "Friday",
            },
    ];
})
