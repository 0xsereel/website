import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const RecentArticles = () => {
  const recentBlogs = typedBlogs.slice(0, 3);

  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-[95%] mx-auto flex justify-center items-center flex-col">
        {/* Title */}

        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="lg:text-5xl text-3xl">Recent Articles</h3>
          <p className="mt-2 text-center">
            The solutions our product offers are seamless, secure and accessible{" "}
          </p>
        </div>

        <div className="w-full flex items-center justify-center mt-10 gap-5 lg:flex-row flex-col">
          {/* blog 1 */}

          {recentBlogs.length > 0 ? (
            recentBlogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} className="lg:w-[400px] w-full h-[280px] rounded-xl">
                <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
                  <img
                    className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                    src={blog.image}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white">{blog.title}</h3>
                  </div>
                </div>
                <div className="w-full mt-3 text-xl text-left">
               
                  <p>{blog.content.substring(0, 100).replace(/[^\w\s]/g, "")}...</p>
                </div>
              </Link>
            ))
          ) : (
            <div className=" w-full rounded-xl">
              <div className="w-full rounded-xl  h-[200px]  relative flex items-center justify-center flex-col">
                <h3 className="text-white text-4xl">
                  No Articles Found at the moment
                </h3>
                {/* <img src="/images/blog/no-blog.png" className="w-[100px] h-[100px] object-cover rounded-xl" alt="" /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
