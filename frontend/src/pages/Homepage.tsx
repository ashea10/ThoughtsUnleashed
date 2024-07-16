import { Link } from 'react-router-dom';
import { Appbar } from "../components/Appbar";

export const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
            <Appbar />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
                    Welcome to <span className="text-green-600">ThoughtsUnleashed</span>
                </h1>
                <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                    Unleash your thoughts, connect with ideas, and explore a world of diverse perspectives.
                </p>
                <div className="space-x-4">
                    <Link to="/signin" className="px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out">
                        Sign In
                    </Link>
                    <Link to="/signup" className="px-8 py-3 text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out">
                        Sign Up
                    </Link>
                </div>
            </main>
        </div>
    );
};