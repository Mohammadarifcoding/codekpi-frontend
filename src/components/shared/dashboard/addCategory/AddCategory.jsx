"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { ImageHosting } from '../../Cloudinary';
import { convertValuesToLowerCase } from '@/utils/convert';
import { usePostCategoriesMutation } from '@/components/Redux/services/categoriesApi/categoriesApi';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const [postCategories, { isLoading }] = usePostCategoriesMutation();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const image = e.target.image.files[0];
        const title = e.target.name.value; 

        try {
            const imageData = await ImageHosting(image);
            console.log(imageData);
            const categoryData = {
                title,
                icon: imageData.url 
            };
            console.log("data", categoryData);
            const convertData = convertValuesToLowerCase(categoryData)
            await postCategories(convertData).unwrap(); 
            toast.success("Category created successfully!");
            e.target.reset()
        } catch (error) {
            console.error("Error uploading category:", error);
            toast.error("Error creating category.");
        }
    };
    return (
        <div className="p-4">
            <h3 className="my-10 text-xl">Create Add Categories</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-2 w-full mb-4">
                    <div className="w-1/2">
                        <Label>Categories Image</Label>
                        <Input
                            name="image"
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            className="mt-2"
                        />
                    </div>
                    <div className="w-1/2">
                        <Label>Categories Title</Label>
                        <Input
                            name="name"
                            type="text"
                            className="h-[43px] mt-2"
                            placeholder="Categories title"
                        />
                    </div>
                </div>
                <Input
                    type="submit"
                    className="bg-primary cursor-pointer text-white"
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default AddCategory;