import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { NewsLetter } from "../Home/NewsLetter";
interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const BlogPageContent = () => {
  return (
    <div className="w-full ">
      <div className="w-full lg:h-[400px] bg-black h-[200px] flex items-center  bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30   justify-center ">
        <div className=" text-center px-5 ">
          <h3 className="lg:text-5xl text-3xl">
            Welcome to Our Blog <br className="hidden lg:block" /> Stay Updated
            with the Latest Insights
          </h3>
        </div>
      </div>

      <div className="w-full bg-black flex-wrap   flex flex-col items-center  bg-gradient-to-bl from-black via-black to-[#1CA36E]/30   justify-center py-20">
        <div className="w-full flex flex-wrap items-center justify-center mt-10 gap-8 lg:flex-row flex-col">
          {typedBlogs.length > 0 ? (
            typedBlogs.map((blog) => (
              <Link
                to={`/blog/${blog ? blog.id : ""}`}
                className="lg:w-[400px] w-[95%] h-[280px] rounded-xl bg-black"
              >
                <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
                  <img
                    className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                    src={blog ? blog.image : ""}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white">{blog ? blog.title : ""}</h3>
                  </div>
                </div>

                <div className="w-full mt-3 text-xl text-left px-2">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: blog.summary,
                    }}
                  ></p>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full flex items-center justify-center">
              <h3 className="text-white text-4xl">
                No blogs found at the moment
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Before footer */}

      <NewsLetter />
    </div>
  );
};
