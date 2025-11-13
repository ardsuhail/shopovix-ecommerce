
// import Image from "next/image";
// import Link from "next/link";

// export default function AboutUs() {
//   return (
//     <main className="min-h-screen py-16 px-4 md:px-20">
     
//       <section className="text-center mb-16">
//         <h1 className="text-5xl font-bold   mb-4">
//           About Shopovix
//         </h1>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//           Shopovix is dedicated to bringing you premium products at unbeatable prices. Our mission is to make online shopping simple, reliable, and enjoyable for everyone.
//         </p>
//       </section>

//       {/* Our Story */}
//       <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
//         <div>
//           <h2 className="text-3xl font-semibold   mb-4">Our Story</h2>
//           <p className="text-gray-700 text-lg">
//             Founded with passion and commitment, Shopovix started as a small idea to make quality products accessible to everyone. Today, we have a wide range of categories and collections curated just for you.
//           </p>
//         </div>
//         <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
//           <img src="/Shopovix.png" alt="Shopovix"  className="object-cover"/>
//         </div>
//       </section>

     
//       <section className="mb-16 text-center">
//         <h2 className="text-3xl font-semibold   mb-8">Why Choose Us</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//           <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-xl font-semibold   mb-2">Fast Delivery</h3>
//             <p className="text-gray-600">Receive your products quickly and reliably.</p>
//           </div>
//           <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-xl font-semibold   mb-2">Easy Returns</h3>
//             <p className="text-gray-600">Hassle-free returns within 7 days.</p>
//           </div>
//           <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-xl font-semibold   mb-2">Cash on Delivery</h3>
//             <p className="text-gray-600">Pay only when you receive your order.</p>
//           </div>
//           <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-xl font-semibold   mb-2">Best Prices</h3>
//             <p className="text-gray-600">Premium quality without breaking the bank.</p>
//           </div>
//         </div>
//       </section>


//       <section className="mb-16 text-center">
//         <h2 className="text-3xl font-semibold   mb-8">Meet the Founder</h2>
//         <div className="flex flex-col items-center gap-4">
//           <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
//            <Image src="/Founder.png"alt="Suhail"  className="object-cover" fill />
//           </div>
//           <h3 className="text-xl font-bold  ">Suhail</h3>
//           <p className="text-gray-600">
//             Founder of Shopovix. Passionate about delivering premium products with ease and reliability.
//           </p>
//           <Link href="https://instagram.com/ardsuhail" target="_blank" className="text-red-600 underline mt-2">
//             Follow on Instagram: @ardsuhail
//           </Link>
//         </div>
//       </section>

     
//       <section className="text-center">
//         <h2 className="text-3xl font-semibold   mb-4">Get in Touch</h2>
//         <p className="text-gray-600 text-lg mb-2">Email: <a href="mailto:example@gmail.com" className="text-red-600 underline">example@gmail.com</a></p>
//         <p className="text-gray-600 text-lg">Phone: <span className=" ">+91 xxxxxxxxxx</span></p>
//       </section>
//     </main>
//   );
// }


// export const metadata = {
//   title: "about us - Shopovix",
//   description: "Learn more about Shopovix, our mission, and the team behind the brand. We're committed to providing the best shopping experience.",
// };

"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Truck, 
  RefreshCw, 
  DollarSign, 
  Award, 
  Star, 
  Shield, 
  Users, 
  Target,
  Heart,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Crown,
  CheckCircle
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To redefine online shopping by offering premium products with exceptional service and unbeatable value."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Passion",
      description: "We're driven by our love for quality and our commitment to customer satisfaction in every interaction."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Community",
      description: "Building lasting relationships with customers who trust us for their premium shopping needs."
    }
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Express shipping with real-time tracking"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free return policy"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "COD Available",
      description: "Pay when you receive your order"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Curated selection of top-tier products"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Shopping",
      description: "100% safe and encrypted transactions"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Support",
      description: "Dedicated customer care team"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Premium Shopping Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            About Shopovix
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Where <span className="font-semibold text-white">Premium Quality</span> Meets{" "}
            <span className="font-semibold text-white">Exceptional Value</span>. 
            We&apos;re redefining online shopping with curated excellence.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="relative max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <Crown className="w-4 h-4" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Crafting Excellence Since Day One
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Shopovix was born from a simple yet powerful vision: to create a shopping destination 
                where quality isn&apos;t a luxury, but a standard. What started as a passion project has 
                evolved into a trusted platform serving thousands of discerning customers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every product in our collection is meticulously curated, every service optimized, 
                and every customer interaction treated as an opportunity to exceed expectations.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {["Quality Assured", "Secure Payments", "Fast Shipping", "24/7 Support"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Shopovix.png" 
                  alt="Shopovix Headquarters" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we offer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Customers Love Shopovix</h2>
            <p className="text-xl text-slate-600">Experience the difference of premium shopping</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group hover:border-blue-200">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Meet The Visionary
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image 
                  src="/Founder.png" 
                  alt="Suhail - Founder of Shopovix" 
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-2">Suhail</h3>
              <p className="text-blue-200 font-medium mb-4">Founder & CEO</p>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                "At Shopovix, we believe that everyone deserves access to premium products without compromise. 
                Our commitment to quality, transparency, and customer satisfaction drives every decision we make."
              </p>
              
              <div className="flex justify-center gap-6 mt-8">
                <Link 
                  href="https://instagram.com/ardsuhail" 
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  Follow @ardsuhail
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Experience Premium Shopping?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Shopovix for their premium shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/shop"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Our Collection
              </Link>
              <Link 
                href="/contact"
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <a href="mailto:example@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                example@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <div className="text-slate-700 font-medium">+91 xxxxxxxxxx</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}