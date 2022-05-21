const express = require('express')

const router = express.Router();

router.get('/:id', async (req, res) => {
	// get single employee
});
router.get('/', async (req, res) => {
	// get all employee
});
router.post('/', async (req, res) => {
	// create employee
});
router.put('/:id', async (req, res) => {
	// update employee
});
router.delete('/:id', async (req, res) => {
	// delete employee
});

module.exports = router;