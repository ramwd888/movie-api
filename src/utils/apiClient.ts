import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;
  private apiKey: string;
  private token: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.token = apiKey;
    this.client = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  public async discoverMovies(year: string, page: number): Promise<any> {
    const response = await this.client.get('/discover/movie', {
      params: {
        primary_release_year: year,
        page: page,
        sort_by: 'popularity.desc',
        language: 'en-US',
      },
    });
    return response.data.results;
  }

  public async getMovieCredits(movieId: number): Promise<any> {
    const response = await this.client.get(`/movie/${movieId}/credits`);
    return response.data;
  }

}

export default ApiClient;
