import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaShoppingBasket, FaMap } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    order: "",
  });

  const handleWhatsApp = () => {
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nOrder Details: ${formData.order}`;
    const url = `https://wa.me/917358755490?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const openMap = () => {
    window.open("https://maps.app.goo.gl/zTSUpx7zkcWqH3RN8", "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20 relative bg-stone-50 bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/80"></div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-stone-300 text-xs sm:text-sm">
        Developed by <span className="font-medium text-green-400">Rishi</span>
      </footer>

      <RevealOnScroll>
        <div className="px-4 w-full max-w-4xl z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-green-500 shadow-lg">
                <FaShoppingBasket className="text-green-400 text-4xl sm:text-5xl" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-green-400 font-serif [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
              Order Your Groceries
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-green-500 mx-auto rounded-full mb-3 sm:mb-4 shadow-md"></div>
            <p className="text-white mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
              Place your order for fresh groceries and household essentials. We deliver to your doorstep!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Order Form */}
            <form className="space-y-4 sm:space-y-6 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-green-500/30">
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-2 font-serif [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]">
                Place Your Order
              </h3>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white border-2 border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 font-medium text-sm sm:text-base shadow-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white border-2 border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 font-medium text-sm sm:text-base shadow-sm"
                />
              </div>

              <div>
                <textarea
                  name="order"
                  rows={4}
                  required
                  value={formData.order}
                  placeholder="List the items you want to order (e.g., 1kg Rice, 2L Milk, 5 Eggs)..."
                  onChange={(e) =>
                    setFormData({ ...formData, order: e.target.value })
                  }
                  className="w-full bg-white border-2 border-stone-300 px-4 py-2 sm:py-3 rounded-lg text-stone-800 transition focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 font-medium text-sm sm:text-base shadow-sm"
                />
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold shadow-lg transition-all text-sm sm:text-base border-2 border-green-800/50 hover:scale-[1.02] active:scale-95"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span>Send Order via WhatsApp</span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-stone-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl text-white border-2 border-green-500/30 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-serif text-green-400 [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
                Store Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 bg-stone-800/50 p-3 sm:p-4 rounded-lg border border-stone-700/50">
                  <div className="bg-green-600 p-2 rounded-full">
                    <FaPhoneAlt className="text-white mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-green-300">Phone</h4>
                    <a href="tel:93606 81036" className="text-white hover:text-green-300 transition text-sm sm:text-base font-medium">
                      +91 93606 81036
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 bg-stone-800/50 p-3 sm:p-4 rounded-lg border border-stone-700/50">
                  <div className="bg-green-600 p-2 rounded-full">
                    <FiMail className="text-white mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-green-300">Email</h4>
                    <a href="mailto:saravanastores.ch113@gmail.com" className="text-white hover:text-green-300 transition text-sm sm:text-base font-medium">
                      saravanastores.ch113@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 bg-stone-800/50 p-3 sm:p-4 rounded-lg border border-stone-700/50">
                  <div className="bg-green-600 p-2 rounded-full">
                    <FaMapMarkerAlt className="text-white mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-green-300">Store Address</h4>
                    <p className="text-white text-sm sm:text-base font-medium">
                      40, Thiruveethi Amman Kovil Street, Kazhikundram, Tharamani, Chennai, Tamil Nadu 600113
                    </p>
                    <button 
                      onClick={openMap}
                      className="mt-2 flex items-center gap-2 text-green-300 hover:text-green-400 transition text-xs sm:text-sm font-bold"
                    >
                      <FaMap className="text-xs" />
                      <span>View on Google Maps</span>
                    </button>
                  </div>
                </div>

                <div className="bg-stone-800/50 p-3 sm:p-4 rounded-lg border border-stone-700/50">
                  <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base text-green-300">Opening Hours</h4>
                  <p className="text-white text-sm sm:text-base font-medium">
                    Monday - Sunday: 6AM - 10PM<br />
                    Open all days (except national holidays)
                  </p>
                </div>

                <div className="bg-stone-800/50 p-3 sm:p-4 rounded-lg border border-stone-700/50">
                  <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base text-green-300">Delivery Policy</h4>
                  <p className="text-white text-sm sm:text-base font-medium">
                    <span className="block">🕒 8AM - 9PM daily</span>
                    <span className="block">💰 Minimum order: ₹200</span>
                    <span className="block">🚚 Free delivery within 3km</span>
                    <span className="block">⏱️ Same day delivery for orders before 6PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};