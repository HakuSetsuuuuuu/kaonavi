// api.ts
const BASE_URL = 'http://localhost:3000';

interface RequestOptions extends RequestInit {
    body?: any; // 可以根据需要自定义类型
}

const apiFetch = async (endpoint: string, options: RequestOptions = {}) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '请求失败');
    }

    return response.json();
};

// 封装 GET 请求
export const getData = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
    const queryString = params ? `?${new URLSearchParams(params)}` : '';
    return await apiFetch(`${endpoint}${queryString}`);
};

// 封装 POST 请求
export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
    return await apiFetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

// 封装 PUT 请求
export const putData = async <T>(endpoint: string, data: any): Promise<T> => {
    return await apiFetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
};

// 封装 DELETE 请求
export const deleteData = async (endpoint: string): Promise<void> => {
    await apiFetch(endpoint, {
        method: 'DELETE',
    });
};
