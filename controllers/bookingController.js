const Booking = require('../models/Booking');

exports.bookActivity = async (req, res) => {
    const { activityId } = req.body;
    try {
        const booking = await Booking.create({
            user: req.user.id,
            activity: activityId
        });
        res.json(booking);
    } catch (err) {
        res.status(400).json({ message: 'Booking failed' });
    }
};

exports.getMyBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.json(bookings);
};
