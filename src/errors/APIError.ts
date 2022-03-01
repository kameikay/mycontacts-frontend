interface IBody {
  error?: string | null;
}

export default class APIError extends Error {
  response: Response;

  body: Object | null;

  constructor(response: Response, body: IBody) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
