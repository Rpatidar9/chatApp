const { CheckToken } = require("../MVC/service/Auth")
module.exports = {
    verifyUserToken: async function (req, res, next) {
        const TokenWithBearer = req?.headers["authorization"]
        if (typeof TokenWithBearer !== undefined) {
            const Tokens = TokenWithBearer.split(" ")[1];
            const user = CheckToken(Tokens);
            console.log(user);
            req.token = user;
        }
        next()
    },
    CollectLastloginOfSit: async function (req, res, next) {
        console.log(`${new Date().toLocaleDateString()} and request URL : ${req.originalUrl}`);
        next();
    }

    // verifyUserToken
}
