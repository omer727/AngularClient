(function (angular) {
    'use strict';
    angular.module('CrmApp')
        .factory('CustomerService', function () {
            return {
                getCustomers : function () {
                    return this.customers;
                },
                customers: [
                    {
                        name: 'Robert Downey Jr.',
                        character: 'Tony Stark / Iron Man',
                        sex: 'male',
                        orders: [
                            {product: 'Basket', date: '11\/28\/1997', quantity: 1, price: '29.9'},
                            {product: 'Basket', date: '11\/28\/1997', quantity: 2, price: '29.9'}
                        ]
                    },
                    {
                        name: 'Chris Evans',
                        character: 'Steve Rogers / Captain America',
                        sex: 'male',
                        orders: [
                            {product: 'Controller', date: '11\/28\/1999', quantity: 1, price: '49.9'},
                            {product: 'Controller', date: '11\/28\/1999', quantity: 3, price: '49.9'}
                        ]
                    },
                    {
                        name: 'Mark Ruffalo',
                        character: 'Bruce Banner / The Hulk',
                        sex: 'male',
                        orders: [
                            {product: 'Lego City', date: '22\/12\/1999', quantity: 3, price: '49.9'}
                        ]
                    },
                    {
                        name: 'Chris Hemsworth',
                        character: 'Thor',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Scarlett Johansson',
                        character: 'Natalie Rushman/Natasha Romano',
                        sex: 'female',
                        orders: []
                    },
                    {
                        name: 'Jeremy Renner',
                        character: 'Natasha Romanoff / Black Widow',
                        sex: 'male',
                        orders: [
                            {product: 'Pen', date: '12\/11\/1999', quantity: 1, price: '0.9'}
                        ]
                    },
                    {
                        name: 'Tom Hiddleston',
                        character: 'Clint Barton / Hawkeye',
                        sex: 'male',
                        orders: [
                            {product: 'Needles', date: '12\/12\/2011', quantity: 2, price: '6.9'}
                        ]
                    },

                    {
                        name: 'Cobie Smulders',
                        character: 'Agent Maria Hill',
                        sex: 'female',
                        orders: []
                    },
                    {
                        name: 'Stellan Skarsgrd',
                        character: 'Selvig',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Samuel L. Jackson',
                        character: 'Nick Fury',
                        sex: 'male',
                        orders: [
                            {product: 'Basket', date: '22\/2\/2011', quantity: 1, price: '59.9'}
                        ]
                    },
                    {
                        name: 'Gwyneth Paltrow',
                        character: 'Pepper Potts',
                        sex: 'male',
                        orders: [
                            {product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'}
                        ]
                    },
                    {
                        name: 'Paul Bettany',
                        character: 'Jarvis (voice)',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Alexis Denisof',
                        character: 'The Other',
                        sex: 'male',
                        orders: [
                            {product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}
                        ]
                    },
                    {
                        name: 'Tina Benko',
                        character: 'NASA Scientist',
                        sex: 'female',
                        orders: []
                    },
                    {
                        name: 'Terrence Howard',
                        character: 'Rhodey',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Jeff Bridges',
                        character: 'Obadiah Stane',
                        sex: 'male',
                        orders: [
                            {product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}
                        ]
                    },
                    {
                        name: 'Leslie Bibb',
                        character: 'Christine Everhart',
                        sex: 'female',
                        orders: []
                    },
                    {
                        name: 'Shaun Toub',
                        character: 'Yinsen',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    },
                    {
                        name: 'Faran Tahir',
                        character: 'Raza',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Clark Gregg',
                        character: 'Agent Coulson',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 5, price: '5.9'},
                            {product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]


                    },
                    {
                        name: 'Bill Smitrovich',
                        character: 'General Gabriel',
                        sex: 'male',
                        orders: []
                    },
                    {
                        name: 'Sayed Badreya',
                        character: 'Abu Bakaar',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    },
                    {
                        name: 'Paul Bettany',
                        character: 'Jarvis (voice)',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    },
                    {
                        name: 'Jon Favreau',
                        character: 'Hogan',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    },
                    {
                        name: 'Peter Billingsley',
                        character: 'William Ginter Riva',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    },
                    {
                        name: 'Tim Guinee',
                        character: 'Major Allen',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    }
                ]

        }
        });


})(window.angular);