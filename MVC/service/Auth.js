const jwt = require("jsonwebtoken")
const securtyKey = "rahulPatidar@112233"

function SetToken(user) {
    return jwt.sign({ _id: user.id, email: user.email, age: user.age }, securtyKey);
}
function CheckToken(Token) {
    if (!Token) return null;
    return jwt.verify(Token, securtyKey);
}
module.exports = {
    SetToken,
    CheckToken
}