"use strict";
const fs = require("node:fs");
const saveToDatabase = (db) => {
    if (!fs.existsSync) {
        console.log("File doesn't exist");
    }
    else {
        fs.writeFileSync("db.json", JSON.stringify(db, null, 2), {
            encoding: "utf-8",
            flag: "w"
        });
    }
};
module.exports = { saveToDatabase };
