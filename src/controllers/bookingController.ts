import Booking from "../models/Booking";

export const bookCar = async (req: any, res: any) => {
  const { carId, startDate, endDate } = req.body;

  const booking = new Booking({
    userId: req.user.id,
    carId,
    startDate,
    endDate,
  });

  const saved = await booking.save();

  res.status(201).json(saved);
};
export const cancelBooking = async (req: any, res: any) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  booking.status = "cancelled";
  await booking.save();

  res.json({ message: "Booking cancelled" });
};
const existing = await Booking.findOne({
  carId,
  startDate: { $lt: endDate },
  endDate: { $gt: startDate },
});

if (existing) {
  return res.status(400).json({ message: "Car already booked for this time slot" });
}
export const updateBookingStatus = async (req: any, res: any) => {
  const { status } = req.body;

  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  booking.status = status; // approved or rejected
  await booking.save();

  res.json(booking);
};