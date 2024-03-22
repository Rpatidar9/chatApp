const Users = require("../model/users")
const { SetToken, CheckToken } = require("../service/Auth")
const bcrypt = require("bcrypt")
module.exports = {
    CreateUser: async function (req, res) {
        const data = req.body;
        let hashPassword;
        if (data?.password) {
            const passwords = data?.password
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(passwords, 12);

        } else {
            return res.status(200).json({ message: 'Please Choice your Password' })
        }
        const user = await Users.create({
            name: data?.name,
            email: data?.email,
            password: hashPassword,
            age: data?.age
        })
        return res.status(201).json({ message: 'successfully create users' })
    },
    GetUser: async function (req, res) {
        const user = await Users.find();
        return res.status(201).json({ message: 'successfully get users', data: user })
    },
    SingleUser: async function (req, res) {
        const data = req?.body;
        data.id = req?.params.id
        const user = await Users.findOne({ _id: data?.id });
        const Token = SetToken(user)
        return res.status(201).json({ message: 'Successfully SignUp in this app', data: { user, Token } })
    },
    SignInUser: async function (req, res) {
        let data = req?.body;
        const user = await Users.findOne({ email: data?.email });
        const isMatchPassword = await bcrypt.compare(data.password, user.password);
        if (isMatchPassword === false) return res.status(201).json({ message: 'Enter correct password', data: "Enter correct password" })
        const Token = SetToken(user)
        return res.status(201).json({ message: 'Successfully SignUp in this app', data: { user, Token } })
    },
    SingleUserUpdate: async function (req, res) {
        const data = req?.body;
        data.id = req?.param.id
        const user = await Users.find();
        return res.status(201).json({ message: 'successfully get users', data: user })
    },
    GetHome: async function (req, res) {
        // const verifyUser = CheckToken(Token)
        const user = await Users.find({ _id: req.token._id });
        return res.status(201).json({ message: 'successfully get users', data: user })
    }
}