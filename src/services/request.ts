type RequestOptions = {
  headers?: Record<string, string>;
  method?: string;
  body?: string;
};

const request = async (url: string, options: RequestOptions = {}) => {

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response?.status}`);
  }
  const data = await response.json()
  return data
}

export default request