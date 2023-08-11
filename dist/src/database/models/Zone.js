"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Zone";
exports.COLLECTION_NAME = "zones";
const schema = new mongoose_1.Schema({
    zone_name: String,
});
exports.ZoneModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
