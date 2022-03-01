import HttpClient from './utils/HttpClient';

class CategoriesSerivce {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }

  // async createContact(contact: string) {
  //   return this.httpClient.post('/contacts', contact);
  // }
}

export default new CategoriesSerivce();
