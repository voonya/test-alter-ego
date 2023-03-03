enum ApiEndpoint {
  NEWS = 'https://jsonplaceholder.typicode.com/posts',
}

enum NewsApiEndpoint {
  GET_BY_ID = '/:id',
  DELETE = '/:id',
}

export { ApiEndpoint, NewsApiEndpoint };
