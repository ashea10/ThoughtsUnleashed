import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if (loading) {
        return <div>
            <Appbar></Appbar>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </div>
    }
    return <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
            <div className="">
                {blogs.map((blog) => 

                <BlogCard 
                  
                  authorName={blog.author.name || "Anonymous"}
                  title={blog.title}
                  content={blog.content}
                  id={blog.id}
                  publishedDate={"22 Feb 2024"} />)}

                </div>
            </div>
        </div>
}

