"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnector = void 0;
const mongoose_1 = require("mongoose");
async function mongoConnector(mongo_link) {
    await (0, mongoose_1.connect)(mongo_link)
        .then(() => console.log("Database connected !"))
        .catch(err => console.log(err));
}
exports.mongoConnector = mongoConnector;
