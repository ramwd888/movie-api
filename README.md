# Movie Discovery API

## Description

This project is a Node.js API that retrieves movie information for a specified year. It integrates with The Movie Database (TMDb) API to fetch movie details and credits.

## Features

- Retrieves a page of movies for a given year, sorted by descending popularity
- Includes movie title, release date, vote average, and a list of editors for each movie
- Handles API failures gracefully

## Requirements

- Node.js v21 or higher
- TypeScript

## Installation

1. Clone the repository:
git clone https://github.com/ramwd888/movie-api/

2. Install dependencies:
npm install

3. Create a `.env` file in the root directory and add your TMDb API key:
**API_KEY=your_api_key_here**


## Usage

1. Start the server:
**npx --exec ts-node index.ts**


2. Make a GET request to the API endpoint:
/movies?year={YYYY}
Example: http://localhost:3000/movies?year=2024

Replace `YYYY` with the desired year.

## API Response

The API returns an array of movie objects with the following structure:

[
    {
        title: 'Joker'
        release_date: 'January 1, 2019'
        vote_average: 8.19,
        editors: [
            "Jill Bogdanowicz",
            "Jason Saulog",
            "Cindy Bond",
            "Jeff Groth",
            "Jeff Mee",
            "Ray Neapolitan",
            "Thomas J. Cabela"
        ]
    }
]

## Testing

Run the unit tests:

npx jest


