"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restaurant_1 = __importDefault(require("./restaurant"));
var restaurantSeeder = new restaurant_1.default();
var restaurants = restaurantSeeder.seed(100);
console.table(restaurants);
//# sourceMappingURL=seed-data.js.map