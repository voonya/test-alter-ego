class HttpService {
  public get(path: string) {
    return this.handleResponse(fetch(path));
  }

  public delete(path: string, params: RequestInit = {}) {
    return this.handleResponse(fetch(path, { ...params, method: 'DELETE' }));
  }

  private handleResponse(response: Promise<Response>) {
    return response.then((res) => {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return res.json();
      }

      return res.text();
    });
  }
}

export { HttpService };
