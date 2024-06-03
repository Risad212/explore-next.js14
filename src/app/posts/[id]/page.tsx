import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`)
    const post = await response.json();
    return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
                {post.title}
            </h1>
            <p className="max-w-[750px] mx-auto leading-8">
                {post.body}
            </p>
        </main>
    );
};
