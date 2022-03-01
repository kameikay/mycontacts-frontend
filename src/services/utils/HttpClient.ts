import APIError from '../../errors/APIError';

interface IContacts {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  category_name: string | null;
  category_id: string | null;
}

class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string): Promise<IContacts[]> {
    const response = await fetch(`${this.baseUrl}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
