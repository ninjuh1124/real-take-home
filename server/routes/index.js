const { mission } = require('../controllers');
const router = require('express').Router();

// gotta admit, the file structure i'm used to makes this one route really lonely
router.post('/mission', (req, res) => {
	mission(req, res);
});
// router.all('/*', (_req, res) => {
// 	res.status(404).send();
// });

module.exports = router;
