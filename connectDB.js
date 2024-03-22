const mongoose = require("mongoose")
async function ConnectionDB(URL) {
    return mongoose.connect(URL)
}
module.exports = ConnectionDB; 