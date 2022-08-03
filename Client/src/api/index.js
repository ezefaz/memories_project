import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

// const url = 'https://memories-events-app.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`, likePost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); 
export const deletePost = (id) => API.delete(`/posts/${id}`, deletePost);

export const signIn = (formData) => API.post('/user/signin', formData); 
export const signUp = (formData) => API.post('/user/signup', formData); 