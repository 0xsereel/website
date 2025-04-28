import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const BlogPost = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Blog not found</div>;
  }

  if(typedBlogs.length === 0) {
    return <div>No blogs found</div>;
  }

  const blog = typedBlogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    console.log("Blog not found for id:", id);
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-full my-20 flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
        <div>
          <h1 className="text-5xl font-gilroy-bold">{blog.title}</h1>
          <p className="text-gray-500 my-3">30 November 2024</p>
        </div>

        <div className="w-full my-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[500px] object-cover object-center rounded-lg"
          />
        </div>

        <div className="blog-content w-full">
          <div className="prose prose-lg max-w-none w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
