"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_config_1 = __importDefault(require("./firebase-config"));
var utils_1 = require("./utils");
var projectId = "myportfolio-2f9e2";
var config = {
    databaseURL: 'http://localhost:8080?ns=emulatorui',
    projectId: projectId
};
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
        return { name: name, tags: tags, rating: rating, ratingCount: ratingCount, city: city };
    };
    RestaurantSeeder.prototype.seed = function (count) {
        var _this = this;
        try {
            new Array(count).fill(null).map(function () {
                var restaurant = _this.createRestaurant();
                firebase_config_1.default.doc("resturants/" + restaurant.name).set(restaurant);
            });
        }
        catch (err) {
            console.log({ err: err });
        }
    };
    return RestaurantSeeder;
}());
var restaurant = new RestaurantSeeder();
restaurant.seed(100);
//# sourceMappingURL=restaurant.js.map