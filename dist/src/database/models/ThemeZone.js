"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeZoneModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "ThemeZone";
exports.COLLECTION_NAME = "themeZones";
const schema = new mongoose_1.Schema({
    percentage: Number,
});
exports.ThemeZoneModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
