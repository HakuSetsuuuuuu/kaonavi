// apiRequests.ts
import { User, Post } from 'interface/user';
import { getData, postData, putData, deleteData } from './api';

export const apiRequests = {
    getUsers: (params?: Record<string, any>) => getData<User[]>('/users', params),
    getPosts: (params?: Record<string, any>) => getData<Post[]>('/posts', params),
    getComments: (params?: Record<string, any>) => getData<Comment[]>('/comments', params),
    createUser: (data: User) => postData<User>('/users', data),
    updateUser: (id: number, data: User) => putData<User>(`/users/${id}`, data),
    deleteUser: (id: number) => deleteData(`/users/${id}`),
    // 更多请求...
};
