import { Button } from "../Button/Button";

export const BlogPageContent = () => {
  const firstBlogImagePath = "/images/blog/blog_1.png";
  const secondBlogImagePath = "/images/blog/blog_2.jpeg";
  const thrirdBlogImagePath = "/images/blog/blog_3.png";

  return (
    <div className="w-full ">
      <div className="w-full lg:h-[400px] bg-black h-[200px] flex items-center  bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30   justify-center ">
        <div className=" text-center px-5 ">
          <h3 className="lg:text-5xl text-3xl">
            Learn More and get to know <br className="hidden lg:block" /> what’s going on{" "}
          </h3>
        </div>
      </div>

      <div className="w-full bg-black  flex flex-col items-center  bg-gradient-to-bl from-black via-black to-[#1CA36E]/30   justify-center py-20">
        <div className="w-full flex items-center justify-center mt-10 gap-5 lg:flex-row flex-col">
          {/* blog 1 */}

          <div className="lg:w-[400px] w-[95%] h-[280px] rounded-xl bg-black">
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

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>
                How Rwanda's Banks Can Leverage Tokenized sFRW for Cross-Border
                Efficiency
              </p>
            </div>
          </div>

          {/* blog 2 */}

          <div className="lg:w-[400px] w-[95%] h-[280px] rounded-xl bg-black">
            <div className="w-full rounded-xl h-[180px] bg-green-600 relative">
              <img
                className="w-full h-full rounded-xl object-cover object-[20%_50%]"
                src={secondBlogImagePath}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent ">
                <h3 className="text-white">Asset Tokenization</h3>
              </div>
            </div>

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>The Role of zkTLS in Asset Tokenization</p>
            </div>
          </div>

          {/* blog 3 */}

          <div className="lg:w-[400px] w-[95%]  h-[280px] rounded-xl bg-black">
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

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>ISO20022 Compliance: Why It Matters for Crypto Institutions</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-10 gap-5 lg:flex-row flex-col">
          {/* blog 1 */}

          <div className="lg:w-[400px] w-[95%] h-[280px] rounded-xl bg-black">
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

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>
                How Rwanda's Banks Can Leverage Tokenized sFRW for Cross-Border
                Efficiency
              </p>
            </div>
          </div>

          {/* blog 2 */}

          <div className="lg:w-[400px] w-[95%] h-[280px] rounded-xl bg-black">
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

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>The Role of zkTLS in Asset Tokenization</p>
            </div>
          </div>

          {/* blog 3 */}

          <div className="lg:w-[400px] w-[95%]  h-[280px] rounded-xl bg-black   ">
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

            <div className="w-full mt-3 text-xl text-left px-2">
              <p>ISO20022 Compliance: Why It Matters for Crypto Institutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Before footer */}

      <section className="w-full flex items-center justify-center py-20 bg-gradient-to-br from-[#1CA36E]/30 via-black  to-[#1CA36E]/30 h-[550px]">
        <div className="w-[95%] mx-auto flex justify-center items-center flex-col">
          {/* Title */}
          <div className="w-full flex items-center justify-center flex-col">
            <h3 className="lg:text-5xl text-3xl text-center">
              Seree, Read about our development
            </h3>
            <p className="mt-2 text-center">
              
            </p>
          </div>

          <div className="mt-3">
            <Button>Read White paper</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
