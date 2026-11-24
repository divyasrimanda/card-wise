
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const validateObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid credit card ID",
    });
    return;
  }

  next();
};

export default validateObjectId;
