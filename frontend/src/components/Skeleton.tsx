import { Circle } from "./BlogCard";

export const Skeleton = () => {
    return (
        <div role="status" className="animate-pulse bg-white shadow-md rounded-lg overflow-hidden max-w-2xl mx-auto my-8">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="mt-6 flex items-center">
                    <Circle />
                    <div className="ml-2 h-3 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};