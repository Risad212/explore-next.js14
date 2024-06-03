import React from 'react';
import Link from "next/link";

export const dynamic = "force-dynamic";

const PostList = async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const response = await fetch(`https://dummyjson.com/posts?limit=${randomNumber}`, {cache: 'no-cache'})
    const data = await response.json();
    return (
        <>
            <ul>
                {data.posts.map((post: any) => (
                    <li key={post.id} className="mb-3">
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PostList;