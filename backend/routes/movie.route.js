import express from 'express';
const router = express.Router();
import {getTrendingMovie, getTrailer, getMovieDetails} from '../controller/movie.controller.js'

router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getTrailer);
router.get("/:id/detais", getMovieDetails);

export default router;