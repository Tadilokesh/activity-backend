const router = require('express').Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, bookingController.bookActivity);
router.get('/my', auth, bookingController.getMyBookings);

module.exports = router;
