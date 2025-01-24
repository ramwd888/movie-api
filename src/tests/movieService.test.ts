import MovieService from '../services/movieService';
import ApiClient from '../utils/apiClient';

jest.mock('../utils/apiClient');

describe('MovieService', () => {
  let movieService: MovieService;

  beforeEach(() => {
    movieService = new MovieService('dummy-api-key');
  });

  it('should fetch movies by year and return them with editors', async () => {
    const movieResponse = {
      results: [
        { id: 1, title: 'Test Movie', release_date: '2020-01-01', vote_average: 7.5 },
      ],
    };
    const creditResponse = {
      crew: [{ name: 'Editor Name', known_for_department: 'Editing' }],
    };

    (ApiClient.prototype.discoverMovies as jest.Mock).mockResolvedValue(movieResponse.results);
    (ApiClient.prototype.getMovieCredits as jest.Mock).mockResolvedValue(creditResponse);

    const movies = await movieService.getMoviesByYear('2020');

    expect(movies).toHaveLength(1);
    expect(movies[0].editors).toEqual(['Editor Name']);
  });

  it('should return an empty array if there is an error', async () => {
    (ApiClient.prototype.discoverMovies as jest.Mock).mockRejectedValue(new Error('API Error'));

    const movies = await movieService.getMoviesByYear('2020');

    expect(movies).toEqual([]);
  });
});
