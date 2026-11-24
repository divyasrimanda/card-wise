
import express from "express";
import { createCard, getAllCards, getCardById, updateCard, deleteCard } from "../controllers/cardController";
import validateObjectId from "../middleware/validateObjectId";

const router = express.Router();

router.post("/", createCard);
router.get("/", getAllCards);


router.get("/:id", validateObjectId, getCardById);

router.put("/:id", validateObjectId, updateCard);

router.delete("/:id", validateObjectId, deleteCard);

router.get("/:id", getCardById);
router.put("/:id", updateCard);
router.delete("/:id", deleteCard);

export default router;
