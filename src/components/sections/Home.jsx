import { RevealOnScroll } from "../RevealOnScroll";
import { FaShoppingBasket, FaLeaf, FaAppleAlt, FaTruck } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-stone-50"
    >
      {/* Background with food texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-stone-900/70" />

      {/* Floating food icons */}
      <div className="absolute top-1/4 left-1/4 text-green-400/20 text-6xl">
        <FaAppleAlt className="animate-float-slow" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-amber-400/20 text-5xl">
        <FaShoppingBasket className="animate-float-medium" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-emerald-400/20 text-7xl">
        <FaLeaf className="animate-float-slow" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative w-full max-w-[90vw] md:max-w-2xl mx-auto">
          {/* Logo/Icon with effects */}
          <div className="mb-6 sm:mb-10 transform perspective-1000">
            <div className="relative w-32 sm:w-40 md:w-52 mx-auto mb-4 sm:mb-6 group">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full border-2 border-green-500 shadow-xl">
                <FaShoppingBasket className="text-green-400 text-4xl sm:text-5xl md:text-6xl mx-auto" />
              </div>
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-green-400/40 scale-110 -z-10" />
            </div>

            {/* Design Line */}
            <div className="relative inline-block">
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-green-400/70 font-medium relative 
                before:absolute before:-left-5 sm:before:-left-7 before:top-1/2 before:w-4 sm:before:w-6 before:h-px 
                before:bg-gradient-to-r before:from-transparent before:to-green-400/40 
                after:absolute after:-right-5 sm:after:-right-7 after:top-1/2 after:w-4 sm:after:w-6 after:h-px 
                after:bg-gradient-to-l after:from-transparent after:to-green-400/40">
                FRESH GROCERY MARKET
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="relative mx-auto mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-green-400">Fresh</span> Groceries <br />
              Delivered to <span className="text-green-400">Your Doorstep</span>
            </h1>
            <p className="text-stone-200 text-sm sm:text-lg md:text-xl font-light leading-relaxed sm:leading-relaxed text-center">
              At <span className="font-medium text-white">Your Provision Store</span>, we bring you the 
              <span className="text-green-300"> freshest produce</span>, 
              <span className="text-amber-300"> pantry staples</span>, and 
              <span className="text-green-400"> household essentials</span> with 
              <span className="font-medium text-white"> convenient home delivery</span>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 sm:mb-12 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-green-500/30">
              <FaLeaf className="text-green-400 text-2xl mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm">Fresh Produce</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-amber-500/30">
              <FaShoppingBasket className="text-amber-400 text-2xl mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm">Daily Essentials</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-emerald-500/30">
              <FaTruck className="text-emerald-400 text-2xl mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm">Fast Delivery</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-green-500/30">
              <div className="text-green-400 text-2xl mx-auto mb-2">₹</div>
              <p className="text-white text-xs sm:text-sm">Best Prices</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="relative bg-green-600/90 text-white hover:text-white py-3 sm:py-3 px-6 sm:px-8 font-medium transition-all duration-300 
              hover:bg-green-500 hover:shadow-lg group overflow-hidden rounded-lg text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaShoppingBasket className="w-4 h-4 sm:w-5 sm:h-5" />
                Lucky Draw
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="relative bg-white/10 text-white py-3 sm:py-3 px-6 sm:px-8 font-medium transition-all duration-300
              border border-white/20 hover:border-white/30 hover:bg-white/20 hover:shadow-lg group overflow-hidden rounded-lg text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaTruck className="w-4 h-4 sm:w-5 sm:h-5" />
                ORDER DELIVERY
              </span>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Footer Effects */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-10">
        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
        <span className="text-[0.6rem] xs:text-xs text-green-400/40 tracking-widest font-mono">FRESH EVERY DAY</span>
        <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-green-400/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent z-0" />
    </section>
  );
};

