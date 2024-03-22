const express = require("express")
const UserRouter = require("./MVC/router/users");
const HomeRouter = require("./MVC/router/home");
const ConnectionDB = require("./connectDB")
const app = express();
ConnectionDB("mongodb://localhost:27017/ChatApp").then(() => console.log("Successfully connect server"));
app.use(express.json())
app.use(express.urlencoded({ extends: false }));
// app.use(cookieParser());
app.use('/api/user', UserRouter)
app.use('/home', HomeRouter)

const PORT = 4000
app.listen(PORT, () => {
    console.log(`server connecting at PORT ${PORT}`);
});
