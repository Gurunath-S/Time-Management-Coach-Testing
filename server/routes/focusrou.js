const express = require('express');
const router = express.Router();
const focusController = require('../controllers/focuscon');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, focusController.saveFocusSession);
router.get('/', authMiddleware, focusController.getFocusSessions);

module.exports = router;
