const mongoose = require("mongoose");

module.exports = mongoose
  .connect(`mongodb+srv://eapoduzova:123456789_ea@cluster0.kqefnmm.mongodb.net/`)
  .then(() => {
    console.log("mongodb up");
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
