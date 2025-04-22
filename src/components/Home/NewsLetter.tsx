import { Button } from "../Button/Button";

export const NewsLetter = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 bg-gradient-to-bl from-[#1CA36E]/50 via-black  to-[#1CA36E]/50 h-[550px]">
      <div className="w-[95%] mx-auto flex justify-center items-center flex-col">
        {/* Title */}

        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="lg:text-5xl text-3xl text-center">
            Newsletter Signup
          </h3>
          <p className="mt-2 text-center">
            The solutions our product offers are seamless, secure and accessible
          </p>
        </div>

        <div className="w-full my-20 flex items-center justify-center">
          <div className="lg:w-[600px] w-full bg-black border border-[#202026] rounded-full flex items-center justify-between p-2">
            <input
              type="text"
              className=" outline-none border-none text-xl w-[69%]"
              placeholder="hello@example.com"
            />
            <div className="hidden lg:block">
              <Button onClick={() => {}}>Get started now</Button>
            </div>
            <div className="lg:hidden">
              <Button onClick={() => {}}><></></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
