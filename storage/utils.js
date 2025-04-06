"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBucketName = getBucketName;
exports.getStorageInstance = getStorageInstance;
var admin = require("firebase-admin");
var serviceAccount = require("./firebase-service.json");
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "".concat(serviceAccount.project_id, ".appspot.com")
    });
}
catch (e) { }
var storage = admin.storage();
function getStorageInstance() {
    return storage;
}
function getBucketName() {
    return "".concat(serviceAccount.project_id, ".appspot.com");
}
function removeEmptyFields(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] && typeof obj[key] === "object") {
            removeEmptyFields(obj[key]);
        }
        else if (obj[key] === null || obj[key] === "" || obj[key] === " ") {
            delete obj[key];
        }
    });
}
