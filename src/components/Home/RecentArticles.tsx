export const RecentArticles = () => {
  const firstBlogImagePath = "/images/blog/blog_1.png";
  const secondBlogImagePath = "/images/blog/blog_2.jpeg";
  const thrirdBlogImagePath = "/images/blog/blog_3.png";

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

          <div className="lg:w-[400px] w-full h-[280px] rounded-xl">
            <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
              <img
                className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                src={firstBlogImagePath}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white">Leverage Tokenized sFRW</h3>
              </div>
            </div>

            <div className="w-full mt-3 text-xl text-left">
              <p>
                How Banks Can Leverage Stablecoins for Cross-Border
                Efficiency
              </p>
            </div>
          </div>

          {/* blog 2 */}

          <div className="lg:w-[400px] w-full h-[280px] rounded-xl">
            <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
              <img
                className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                src={secondBlogImagePath}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white">Asset Tokenization</h3>
              </div>
            </div>

            <div className="w-full mt-3 text-xl text-left">
              <p>The Role of zkTLS in Asset Tokenization</p>
            </div>
          </div>

          {/* blog 3 */}

          <div className="lg:w-[400px] w-full  h-[280px] rounded-xl">
            <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
              <img
                className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                src={thrirdBlogImagePath}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white">ISO20022 Compliance</h3>
              </div>
            </div>

            <div className="w-full mt-3 text-xl text-left">
              <p>ISO20022 Compliance: Why It Matters for Crypto Institutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
