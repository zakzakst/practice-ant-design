import axios from "axios";
import { User, Post } from "../types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const userRepository = {
  getUser: async (id: number): Promise<User> => {
    const response = await axios.get<User>(`${API_BASE_URL}/users/${id}`);
    return response.data;
  },
  getPosts: async (authorId: number): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_BASE_URL}/users/${authorId}/posts`);
    return response.data;
  },
};
