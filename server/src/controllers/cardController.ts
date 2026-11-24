
import { Request, Response } from "express";
import Card from "../models/Card";

export const createCard = async (req: Request, res: Response) => {
  try {
    const {
      nickname,
      bankName,
      lastFourDigits,
      cardNetwork,
      creditLimit,
      billingCycleDay,
      paymentDueDay,
      currency,
    } = req.body;

    const card = await Card.create({
      nickname,
      bankName,
      lastFourDigits,
      cardNetwork,
      creditLimit,
      billingCycleDay,
      paymentDueDay,
      currency,
    });

    res.status(201).json({
      success: true,
      message: "Credit card added successfully",
      data: card,
    });
  } catch (error) {
    console.error("Create card error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add credit card",
    });
  }
};


export const getAllCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Credit cards retrieved successfully",
      count: cards.length,
      data: cards,
    });
  } catch (error) {
    console.error("Get cards error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve credit cards",
    });
  }
};


export const getCardById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const card = await Card.findById(id);

    if (!card) {
      res.status(404).json({
        success: false,
        message: "Credit card not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Credit card retrieved successfully",
      data: card,
    });
  } catch (error) {
    console.error("Get card by ID error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve credit card",
    });
  }
};


export const updateCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const card = await Card.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!card) {
      res.status(404).json({
        success: false,
        message: "Credit card not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Credit card updated successfully",
      data: card,
    });
  } catch (error) {
    console.error("Update card error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update credit card",
    });
  }
};


export const deleteCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const card = await Card.findByIdAndDelete(id);

    if (!card) {
      res.status(404).json({
        success: false,
        message: "Credit card not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Credit card deleted successfully",
      data: card,
    });
  } catch (error) {
    console.error("Delete card error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete credit card",
    });
  }
};

