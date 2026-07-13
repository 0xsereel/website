export const ProofStrip = () => {
  return (
    <section
      data-testid="proof-strip"
      className="hairline-t hairline-b w-full bg-[#0E141B]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-3 px-6 py-14 text-center">
        <p className="text-sm font-light text-[#98A2B3]">
          Trusted by institutions building tokenized financial products.
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-[#667085]">
          Banks · Asset managers · Fund administrators · Broker-dealers
        </p>
      </div>
    </section>
  );
};
