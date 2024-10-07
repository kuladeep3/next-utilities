import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching users"
    );
  }
};
