import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title || !description) {
            alert("Please fill in both title and content.");
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`);
        } catch (error) {
            console.error("Error publishing post:", error);
            alert("Failed to publish post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Appbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Post</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <input
                        type="text"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextEditor
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isSubmitting ? 'Publishing...' : 'Publish Post'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const TextEditor = ({ value, onChange }: { value: string; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return (
        <div className="mt-4">
            <label htmlFor="editor" className="block text-sm font-medium text-gray-700 mb-2">
                Content
            </label>
            <textarea
                id="editor"
                rows={12}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-y"
                placeholder="Write your article..."
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};