import Booking from "../models/Booking";
import Car from "../models/Car";
import User from "../models/User";

export const getAnalytics = async (req: any, res: any) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCars = await Car.countDocuments();
    const totalBookings = await Booking.countDocuments();

    const revenue = await Booking.aggregate([
      { $match: { status: "approved" } },
      {
        $group: {
          _id: null,
          total: { $sum: "$price" },
        },
      },
    ]);

    res.json({
      totalUsers,
      totalCars,
      totalBookings,
      revenue: revenue[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Analytics error" });
  }
};