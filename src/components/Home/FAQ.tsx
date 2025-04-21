// Frequently Asked Questions Section

import FAQItems from "../FAQ/FaqItems";

export const FAQ = () => {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-[95%] mx-auto flex justify-center items-center flex-col">
        {/* Title */}

        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="text-5xl">Frequently Asked Questions</h3>
          <p className="mt-2 text-center">
            The solutions our product offers are seamless, secure and accessible
          </p>
        </div>


        <div className="w-full mt-10">

            <FAQItems />

        </div>
      </div>
    </section>
  );
};
