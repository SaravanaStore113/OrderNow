import { FaRulerCombined, FaBolt, FaHardHat, FaCouch, FaTools, FaRedo, FaPalette } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-b from-stone-100 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4 sm:mb-6 font-serif">
            Crafting Inspired Spaces
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-stone-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Where visionary design meets exceptional craftsmanship to create environments that elevate living.
          </p>
        </div>

        {/* Company Description */}
        <div className="mb-16 sm:mb-20 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm border border-stone-200/50">
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="bg-amber-100/30 p-3 sm:p-4 rounded-lg border border-amber-200/50">
              <FaPalette className="text-amber-600 text-2xl sm:text-3xl" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-3 sm:mb-4 font-serif">Our Design Philosophy</h3>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                Nivuzz redefines interior spaces through a harmonious blend of <span className="text-amber-600 font-medium">aesthetic vision</span> and <span className="text-stone-800 font-medium">technical precision</span>. As a premier design and build firm, we transform ordinary spaces into extraordinary experiences. Our process begins with deep listening, evolves through collaborative ideation, and culminates in flawless execution - delivering environments that resonate with your identity while exceeding functional demands.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-8 sm:mb-12 text-center font-serif">
            The Nivuzz Difference
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Creative Design */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-stone-200/50 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-amber-100 p-3 sm:p-4 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                  <FaRulerCombined className="text-amber-600 text-xl sm:text-2xl group-hover:text-amber-700 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2 sm:mb-3 font-serif">Creative Design</h4>
                  <ul className="text-stone-600 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Meticulous attention to every design element and spatial relationship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Bespoke solutions reflecting your unique personality and lifestyle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Cutting-edge trends balanced with timeless design principles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fast Execution */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-stone-200/50 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-amber-100 p-3 sm:p-4 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                  <FaBolt className="text-amber-600 text-xl sm:text-2xl group-hover:text-amber-700 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2 sm:mb-3 font-serif">Precision Execution</h4>
                  <ul className="text-stone-600 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Streamlined workflows with military-grade project planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Transparent communication at every project phase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 sm:mr-3 mt-1">•</span>
                      <span>Relentless quality control without timeline compromises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-8 sm:mb-12 text-center font-serif">
            Comprehensive Services
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                title: "2D & 3D Design", 
                icon: <FaRulerCombined className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Conceptual sketches to photorealistic renderings that bring your vision to life before construction begins"
              },
              { 
                title: "Commercial Spaces", 
                icon: <FaCouch className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Brand-enhancing environments for retail, offices, and hospitality that balance form and function"
              },
              { 
                title: "Residential Design", 
                icon: <FaHardHat className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Personal sanctuaries reflecting your personality through custom material palettes and spatial planning"
              },
              { 
                title: "Construction", 
                icon: <FaTools className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Turnkey building solutions with artisan craftsmanship and premium materials"
              },
              { 
                title: "Renovation", 
                icon: <FaRedo className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Breathing new life into existing structures while preserving architectural integrity"
              },
              { 
                title: "Maintenance", 
                icon: <FaTools className="text-amber-600 text-lg sm:text-xl" />,
                desc: "Ongoing care programs to maintain the beauty and functionality of your spaces"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-stone-200/50 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all hover:border-amber-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-lg group-hover:bg-amber-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-stone-800">{service.title}</h4>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm pl-12 sm:pl-14">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};