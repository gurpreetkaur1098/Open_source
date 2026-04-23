import { Request, Response } from "express";
import Car from "../models/Car";

export const addCar = async (req: Request, res: Response) => {
  try {
    const { name, brand, pricePerDay } = req.body;

    const car = new Car({
      name,
      brand,
      pricePerDay,
    });

    const savedCar = await car.save();

    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ message: "Error adding car" });
  }
};