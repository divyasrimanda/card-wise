
import mongoose, { Document, Schema } from "mongoose";

export interface ICard extends Document {
  nickname: string;
  bankName: string;
  lastFourDigits: string;
  cardNetwork: "Visa" | "Mastercard" | "Amex" | "RuPay" | "Other";
  creditLimit: number;
  billingCycleDay: number;
  paymentDueDay: number;
  currency: string;
  isActive: boolean;
}

const cardSchema = new Schema<ICard>(
  {
    nickname: {
      type: String,
      required: true,
      trim: true,
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
    },

    lastFourDigits: {
      type: String,
      required: true,
      match: /^\d{4}$/,
    },

    cardNetwork: {
      type: String,
      enum: ["Visa", "Mastercard", "Amex", "RuPay", "Other"],
      required: true,
    },

    creditLimit: {
      type: Number,
      required: true,
      min: 0,
    },

    billingCycleDay: {
      type: Number,
      required: true,
      min: 1,
      max: 31,
    },

    paymentDueDay: {
      type: Number,
      required: true,
      min: 1,
      max: 31,
    },

    currency: {
      type: String,
      default: "AED",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Card =
  mongoose.models.Card || mongoose.model<ICard>("Card", cardSchema);

export default Card;
