// user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    // 其他字段...
}

export interface Post {
    id: number;
    title: string;
    content: string;
    // 其他字段...
}

export interface Comment {
    id: number;
    postId: number;
    body: string;
    // 其他字段...
}
