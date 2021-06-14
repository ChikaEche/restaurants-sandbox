"use strict";
var RestaurantSeeder = /** @class */ (function () {
    function RestaurantSeeder() {
        this.tags = [
            'Korean', 'Chinesse', 'Indian', 'Turkish', 'African', 'Vegan', 'Vegetarian'
        ];
        this.maxTagsAllowed = 3;
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
        return { name: name, tags: tags, rating: rating };
    };
    RestaurantSeeder.prototype.seed = function (count) {
        var _this = this;
        return new Array(count).fill(null).map(function () { return _this.createRestaurant(); });
    };
    return RestaurantSeeder;
}());
var restaurantSeeder = new RestaurantSeeder();
var restaurants = restaurantSeeder.seed(100);
console.table(restaurants);
//# sourceMappingURL=restaurant.js.map