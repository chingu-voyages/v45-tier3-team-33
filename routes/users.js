const router = require("express").Router()
const { userRegister, userLogin, userAuth } = require('../utils/Auth')
const adminController = require('../controllers/admin')
const agentController = require('../controllers/agent')
const buyerController = require('../controllers/buyer')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Agent registration route
router.post('/register-agent', agentController.registerAgent)

// Buyer registration route
router.post('/register-buyer', buyerController.registerBuyer)


// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Agent login route
router.post('/login-agent', agentController.loginAgent)

// Buyer login route
router.post('/login-buyer', buyerController.loginBuyer)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json("Hello")
})

/* To be completed later.. */

// Admin protected route
// router.post('/admin-protected', async(req, res) => {})

// Agent protected route
// router.post('/agent-protected', async(req, res) => {})

// Buyer protected route
// router.post('/buyer-protected', async(req, res) => {})

module.exports = router