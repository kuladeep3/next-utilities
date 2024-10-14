import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/ussers"
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching users"
    );
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching users"
    );
  }
};

export const fetchCurrentTime = async () => {
  try {
    const response = await axios.get("/api/current-time");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching current time"
    );
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post("/api/login", formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Login failed");
  }
};
