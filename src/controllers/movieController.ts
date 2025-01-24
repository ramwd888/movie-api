import { Request, Response } from 'express';
import MovieService from '../services/movieService';

const apiKey = process.env.API_KEY || '';

const movieService = new MovieService(apiKey);

export const getMoviesByYear = async (req: Request, res: Response): Promise<void> => {
  const year = req.query.year as string;
  const page = parseInt(req.query.page as string) || 1;
  try {
    const movies = await movieService.getMoviesByYear(year, page);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
