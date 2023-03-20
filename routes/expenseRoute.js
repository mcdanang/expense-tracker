import express from 'express';
import { 
  getExpensesByQuery,
  getExpenseDetail,
  addNewExpense,
  editExpense,
  deleteExpense
} from '../controller/expenseController.js';

const router = express.Router();

router.get("/", getExpensesByQuery);
router.get("/:id", getExpenseDetail);

router.post("/", addNewExpense);
router.patch("/:id", editExpense);
router.delete("/:id", deleteExpense);

export const expenseRouter = router;