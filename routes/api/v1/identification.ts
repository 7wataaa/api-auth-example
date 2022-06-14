import express from 'express';
export const router = express.Router();

/* GET home page. */
router.get('/:identificationId', function (req, res, next) {
  res.json({ message: 'Hello!' });
});
