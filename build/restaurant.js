"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var RestaurantSeeder = /** @class */ (function () {
    function RestaurantSeeder() {
        this.maxTagsAllowed = 3;
        this.maxReviews = 600;
    }
    RestaurantSeeder.prototype.createRestaurant = function () {
        var name = '';
        var numberOfTags = Math.floor(Math.random() * this.maxTagsAllowed) + 1;
        var resturantNameLength = Math.floor(Math.random() * 6) + 2;
        for (var i = 0; i < resturantNameLength; i++) {
            var charCode = Math.floor(Math.random() * 25) + 97;
            name = "" + name + String.fromCharCode(charCode);
        }
        var tags = [];
        var city = utils_1.CITIES[Math.floor(Math.random() * utils_1.CITIES.length)];
        for (var i = 0; i < numberOfTags; i++) {
            var assignedTag = utils_1.TAGS[Math.floor(Math.random() * utils_1.TAGS.length)];
            while (tags.indexOf(assignedTag) !== -1) {
                assignedTag = utils_1.TAGS[Math.floor(Math.random() * utils_1.TAGS.length)];
            }
            tags.push(assignedTag);
        }
        var rating = +((Math.random() * 4) + 1).toFixed(2);
        var ratingCount = Math.floor((Math.random() * this.maxReviews) + 1);
        //return { name, tags, rating, ratingCount, city } as Restaurant;
    };
    RestaurantSeeder.prototype.seed = function (count) {
        // try {
        //   new Array(count).fill(null).map(() => {
        //     const restaurant = this.createRestaurant()
        //     db.doc(`resturants/${restaurant.name}`).set(restaurant)
        //   });
        // } catch(err) {
        //   console.log({err})
        // }
    };
    return RestaurantSeeder;
}());
var restaurant = new RestaurantSeeder();
restaurant.seed(100);
//# sourceMappingURL=restaurant.js.map