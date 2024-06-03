"use server";

export const createPost = (formData: FormData) => {
    const body = formData.get('body') as string;
    console.log(body)
};

;