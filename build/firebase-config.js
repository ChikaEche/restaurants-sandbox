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
exports.default = db;
//# sourceMappingURL=firebase-config.js.map