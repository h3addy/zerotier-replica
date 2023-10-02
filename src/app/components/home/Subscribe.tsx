const Subscribe = () => {
  return (
    <section className="subscribe__wrapper py-4">
      <div className="w-full h-full lg:flex justify-center items-center">
        <div className="px-4 w-full lg:w-[1280px] h-full">
          <div className={`h-full w-full p-8 bg-[#000] rounded-2xl`}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start flex-auto">
                <div className="text-[#fff] font-medium text-[clamp(22px,4.5vw,24px)]">
                  Newsletter Signup
                </div>
                <div className="text-[#fff] font-medium text-[clamp(18px,4.5vw,20px)] mb-2">
                  Join over 325,000 community members worldwide and receive the
                  latest news from Team ZeroTier.
                </div>
              </div>
              <div className="flex flex-[1_0_auto] justify-right items-center gap-2">
                <form
                  method="POST"
                  action="https://zerotier.activehosted.com/proc.php"
                >
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex-auto flex justify-end items-center">
                      <input
                        placeholder="Email Address"
                        type="email"
                        className="block p-4 w-full rounded-lg focus:drop-shadow-[0_0_10px_#ffb441] transition-[filter] duration-500 ease-in-out delay-0"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="p-2 rounded-3xl bg-brand-yellow text-[#000] text-[clamp(16px,4.5vw,20px)]"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
