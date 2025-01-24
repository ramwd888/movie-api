import express from 'express';
import { getMoviesByYear } from './src/controllers/movieController';

const app = express();
const port = process.env.PORT || 3000;




app.get('/', (req, res)=> {res.status(200).json(
  "Hello, Navigate to http://localhost:3000/movies?year=YYYY"
)});

app.get('/movies', getMoviesByYear);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
