const { userRegister, userLogin } = require('../utils/Auth')

module.exports = {
    registerBuyer : async(req, res) => {
        await userRegister(req.body, "buyer", res)
    },
    loginBuyer : async(req, res) => {
        await userLogin(req.body, "buyer", res)
    }
}