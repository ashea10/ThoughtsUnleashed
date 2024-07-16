import React from 'react';
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Appbar />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <article className="lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
                                {blog.title}
                            </h1>
                            <p className="text-sm text-gray-500 mb-8">
                                Posted on {new Date().toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </p>
                            <div className="prose prose-lg text-gray-700">
                                {blog.content}
                            </div>
                        </div>
                    </article>
                    
                    <aside className="lg:w-1/3">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden sticky top-8">
                            <div className="px-6 py-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Author</h2>
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {blog.author.name || "Anonymous"}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Crafting compelling narratives that captivate and inspire readers
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}