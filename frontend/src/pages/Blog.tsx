import { useParams } from "react-router-dom";
import { useBlog, useBlogs } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
    const {id} = useParams();
    const {blog, loading} = useBlog({
        id: id || ""
    });


    // const {blogs, loading} = useBlogs();
    if (loading) {
        return <div>
            <Appbar></Appbar>
            <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <Spinner></Spinner>
            </div>
            </div>
            </div>
    }
    return (
        <div>
            {blog ? <FullBlog blog={blog} /> : <div>No blog found</div>}
        </div>
    );
}