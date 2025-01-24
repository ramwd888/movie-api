import ApiClient from '../utils/apiClient';

class MovieService {
  private apiClient: ApiClient;

  constructor(apiKey: string) {
    this.apiClient = new ApiClient(apiKey);
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  public async getMoviesByYear(year: string, page: number = 1): Promise<any[]> {
    try {
      const movies = await this.apiClient.discoverMovies(year, page);
      return await Promise.all(movies.map(async (movie: any) => {
        let editors: string[] = [];

        try {
          const credits = await this.apiClient.getMovieCredits(movie.id);
          editors = credits.crew.filter((member: any) => member.known_for_department === 'Editing')
                                .map((editor: any) => editor.name);
        } catch (creditError) {
          console.error(`Error fetching credits for movie ${movie.title}:`, creditError);
        }

        return {
          title: movie.title,
          release_date: this.formatDate(movie.release_date),
          vote_average: movie.vote_average,
          editors,
        };
      }));
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return [];
    }
  }
}

export default MovieService;
