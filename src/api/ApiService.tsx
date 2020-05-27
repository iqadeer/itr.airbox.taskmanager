import axios, { AxiosRequestConfig } from 'axios';

export class APIService {
  private static BASE_URL = 'https://api.airboxsystems.com/taskmanager/v1';

  constructor() {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }

  public static get<T>(url: string, token: string, config?: AxiosRequestConfig): Promise<T> {
    url = `${this.BASE_URL}/${url}`;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return axios.get<T, T>(url, config);
  }

  public static delete(url: string, token: string): Promise<any> {
    url = `${this.BASE_URL}/${url}`;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return axios.delete(url);
  }

  public static getAnonymous<T>(url: string): Promise<T> {
    url = `${this.BASE_URL}/${url}`;
    return axios.get<T, T>(url);
  }

  public static put<TP, TR>(url: string, body: TP, token: string): Promise<TR> {
    url = `${this.BASE_URL}/${url}`;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return axios.put<TP, TR>(url, body);
  }

  public static post<TP, TR>(url: string, body: TP, token: string): Promise<TR> {
    url = `${this.BASE_URL}/${url}`;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return axios.post<TP, TR>(url, body);
  }

  public static patch<TP, TR>(url: string, body: TP, token: string): Promise<TR> {
    url = `${this.BASE_URL}/${url}`;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return axios.patch<TP, TR>(url, body);
  }
}
