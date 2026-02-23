import express from "express";
import { pool } from "../db.js";

const router = express.Router();

/* GET pending items */
router.get("/pending", async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM trakt_review_queue
     WHERE status = 'pending'
     ORDER BY created_at DESC`
  );

  res.json(result.rows);
});

/* Mark completed */
router.patch("/complete/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query(
    `UPDATE trakt_review_queue
     SET status = 'completed',
         manually_added = true,
         completed_at = CURRENT_TIMESTAMP,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1`,
    [id]
  );

  res.json({ success: true });
});

/* Ignore item */
router.patch("/ignore/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query(
    `UPDATE trakt_review_queue
     SET status = 'ignored',
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1`,
    [id]
  );

  res.json({ success: true });
});

export default router;