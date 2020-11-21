import app from "./server/app.js";

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale
