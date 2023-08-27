const { userRegister, userLogin } = require('../utils/Auth')

module.exports = {
    registerAgent : async(req, res) => {
        await userRegister(req.body, "agent", res)
    },
    loginAgent : async(req, res) => {
        await userLogin(req.body, "agent", res)
    }
}