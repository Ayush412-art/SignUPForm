const express = require('express')
const {register} = require("../controller/register")
const upload = require("../middleware/multerConfig.js")
const router = express.Router();

router.post("/Form", upload.single('image') , register)

module.exports = router