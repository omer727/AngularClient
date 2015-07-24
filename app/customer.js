(function (angular) {
    'use strict';
    angular.module('CrmApp', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/Customer-card', {
                    templateUrl: 'customer-card.html',
                    controller: 'CustomerController',
                })
                .when('/Customer-list', {
                    templateUrl: 'customer-list.html',
                    controller: 'CustomerController'
                })
                .when('/Customer-add', {
                    templateUrl: 'customer-add.html',
                    controller: 'CustomerController'
                })
                .otherwise({
                    redirectTo:'/Customer-card'
                })

        })
        .controller('CustomerController', ['$scope', function ($scope) {

            $scope.deleteCustomer = function (index) {
                $scope.customers.splice(index, 1);
            };

            $scope.customers = [
                {
                    name: 'Robert Downey Jr.',
                    character: 'Tony Stark / Iron Man',
                    sex: 'male',
                    orders: 15
                },
                {
                    name: 'Chris Evans',
                    character: 'Steve Rogers / Captain America',
                    sex: 'male',
                    orders: 13
                },
                {
                    name: 'Mark Ruffalo',
                    character: 'Bruce Banner / The Hulk',
                    sex: 'male',
                    orders: 12
                },
                {
                    name: 'Chris Hemsworth',
                    character: 'Thor',
                    sex: 'male',
                    orders: 16
                },
                {
                    name: 'Scarlett Johansson',
                    character: 'Natalie Rushman/Natasha Romano',
                    sex: 'female',
                    orders: 22
                },
                {
                    name: 'Jeremy Renner',
                    character: 'Natasha Romanoff / Black Widow',
                    sex: 'male',
                    orders: 14
                },
                {
                    name: 'Tom Hiddleston',
                    character: 'Clint Barton / Hawkeye',
                    sex: 'male',
                    orders: 17
                },
                {
                    name: 'Clark Gregg',
                    character: 'Loki',
                    sex: 'male',
                    orders: 19
                },
                {
                    name: 'Clark Gregg',
                    character: 'Agent Phil Coulson',
                    sex: 'male',
                    orders: 15
                },
                {
                    name: 'Cobie Smulders',
                    character: 'Agent Maria Hill',
                    sex: 'female',
                    orders: 1
                },
                {
                    name: 'Stellan Skarsgrd',
                    character: 'Selvig',
                    sex: 'male',
                    orders: 11
                },
                {
                    name: 'Samuel L. Jackson',
                    character: 'Nick Fury',
                    sex: 'male',
                    orders: 12
                },
                {
                    name: 'Gwyneth Paltrow',
                    character: 'Pepper Potts',
                    sex: 'male',
                    orders: 13
                },
                {
                    name: 'Paul Bettany',
                    character: 'Jarvis (voice)',
                    sex: 'male',
                    orders: 14
                },
                {
                    name: 'Alexis Denisof',
                    character: 'The Other',
                    sex: 'male',
                    orders: 14
                },
                {
                    name: 'Tina Benko',
                    character: 'NASA Scientist',
                    sex: 'female',
                    orders: 20
                },
                {
                    name: 'Terrence Howard',
                    character: 'Rhodey',
                    sex: 'male',
                    orders: 12
                },
                {
                    name: 'Jeff Bridges',
                    character: 'Obadiah Stane',
                    sex: 'male',
                    orders: 14
                },
                {
                    name: 'Leslie Bibb',
                    character: 'Christine Everhart',
                    sex: 'female',
                    orders: 16
                },
                {
                    name: 'Shaun Toub',
                    character: 'Yinsen',
                    sex: 'male',
                    orders: 18
                },
                {
                    name: 'Faran Tahir',
                    character: 'Raza',
                    sex: 'male',
                    orders: 18
                },
                {
                    name: 'Clark Gregg',
                    character: 'Agent Coulson',
                    sex: 'male',
                    orders: 20
                },
                {
                    name: 'Bill Smitrovich',
                    character: 'General Gabriel',
                    sex: 'male',
                    orders: 22
                },
                {
                    name: 'Sayed Badreya',
                    character: 'Abu Bakaar',
                    sex: 'male',
                    orders: 24
                },
                {
                    name: 'Paul Bettany',
                    character: 'Jarvis (voice)',
                    sex: 'male',
                    orders: 26
                },
                {
                    name: 'Jon Favreau',
                    character: 'Hogan',
                    sex: 'male',
                    orders: 28
                },
                {
                    name: 'Peter Billingsley',
                    character: 'William Ginter Riva',
                    sex: 'male',
                    orders: 30
                },
                {
                    name: 'Tim Guinee',
                    character: 'Major Allen',
                    sex: 'male',
                    orders: 32
                }
            ];

        }]);


})(window.angular);