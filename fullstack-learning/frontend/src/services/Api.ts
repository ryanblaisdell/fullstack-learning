const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api';

// Handle response from API
// If response is ok, proceed
// If response is not ok, throw an error
export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Fetch items from all tables through API
// Return items
// Parameters: query (string)
export const search = async (query: string) => {
  const response = await fetch(`${BASE_URL}/search/?query=${query}`);
  return handleResponse(response);
};