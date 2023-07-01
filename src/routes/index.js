const router = require("express").Router();
const moralis = require("./moralis");

router.use(moralis);

module.exports = router;
