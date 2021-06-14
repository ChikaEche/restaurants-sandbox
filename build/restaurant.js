"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = __importDefault(require("firebase"));
var projectId = "myportfolio-2f9e2";
var config = {
    databaseURL: 'http://localhost:8080?ns=emulatorui',
    projectId: projectId
};
firebase_1.default.initializeApp(config);
var db = firebase_1.default.firestore();
db.useEmulator("localhost", 8080);
var RestaurantSeeder = /** @class */ (function () {
    function RestaurantSeeder() {
        this.tags = [
            'Korean', 'Chinesse', 'Indian', 'Turkish', 'African', 'Vegan', 'Vegetarian'
        ];
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
        for (var i = 0; i < numberOfTags; i++) {
            var assignedTag = this.tags[Math.floor(Math.random() * this.tags.length)];
            while (tags.indexOf(assignedTag) !== -1) {
                assignedTag = this.tags[Math.floor(Math.random() * this.tags.length)];
            }
            tags.push(assignedTag);
        }
        var rating = +((Math.random() * 4) + 1).toFixed(2);
        var reviews = Math.floor((Math.random() * this.maxReviews) + 1);
        return { name: name, tags: tags, rating: rating, reviews: reviews };
    };
    RestaurantSeeder.prototype.seed = function (count) {
        var _this = this;
        try {
            new Array(count).fill(null).map(function () {
                db.collection('resturants').add(_this.createRestaurant());
            });
        }
        catch (err) {
            console.log({ err: err });
        }
    };
    return RestaurantSeeder;
}());
exports.default = RestaurantSeeder;
var restaurant = new RestaurantSeeder();
restaurant.seed(100);
//# sourceMappingURL=restaurant.js.map