const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://${process.env.DB_USER_PASS}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Connected to the database`);
  });
