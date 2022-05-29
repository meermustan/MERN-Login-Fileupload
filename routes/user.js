const express = require("express")
const router = express.Router();

const {
    getAllUsers,
    postCreateUser,
    postLoginUser,
} = require("../controllers/user");

/**
 * @route GET api/user
 * @description get all users
 * @access public
 */
router.get("/", getAllUsers);

/**
 * @route GET api/user
 * @description create user
 * @access public
 */
router.post("/register", postCreateUser);

 /**
  * @route POST api/user
  * @description get user
  * @access public
  */
router.post("/login", postLoginUser);
 
module.exports = router;