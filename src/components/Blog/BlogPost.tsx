import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";
import { useState, useEffect } from "react";

interface Blog {
  id: number;
  date: string;
  title: string;
  image: string;
  content: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const BlogPost = () => {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);

  // Find blog post on mount or when ID changes
  useEffect(() => {
    if (id) {
      const foundBlog = typedBlogs.find((blog) => blog.id === parseInt(id));
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
  }, [id]);

useEffect(() => {
  if (blog) {
    setImageSrc("images/blog/Seree_con_logo.jpg");
    
    setTimeout(() => {
      try {
        const paths = [
          blog.image,
          blog.image.startsWith('/') ? blog.image.substring(1) : blog.image,
          `../public/${blog.image.replace(/^\//, '')}`,
          `${window.location.origin}/${blog.image.replace(/^\//, '')}`
        ];
        
        console.log("Attempting to load image from paths:", paths);
        
        const tryNextPath = (index) => {
          if (index >= paths.length) return;
          
          const img = new Image();
          img.onload = () => {
            console.log("Image loaded successfully:", paths[index]);
            setImageSrc(paths[index]);
          };
          img.onerror = () => tryNextPath(index + 1);
          img.src = paths[index];
        };
        
        tryNextPath(0);
      } catch (error) {
        console.error("Error in image loading:", error);
      }
    }, 200);
  }
}, [blog]);

  if (!id || !blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-full my-20 flex items-center justify-center">
      <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
        <div>
          <h1 className="text-5xl font-gilroy-bold">{blog.title}</h1>
          <p className="text-gray-500 my-3">{blog.date}</p>
        </div>

        <div className="w-full my-10">
          <img
            src={imageSrc}
            alt={blog.title}
            className="w-full max-h-[500px] object-contain md:object-cover object-center rounded-lg bg-gray-100"
          />
        </div>

        <div className="blog-content w-full">
          <div className="prose prose-lg max-w-none w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};