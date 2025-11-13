// "use client";
// import { useState } from "react";
// import Message from "@/component/Message";
// import Error from "@/component/Error";
// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [error, setError] = useState(null)
//   const [message, setMessage] = useState(null)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "name": formData.name,
//       "email": formData.email,
//       "message": formData.message
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("/api/contact", requestOptions)
//       .then((response) => response.json())
//       .then((result) =>{ 
//         if(result.success){ 
//         setMessage(result.message);
//         setFormData({
//           name:"",
//           email:"",
//           message:""
//         })} else{
//           setError(result.message || "Something went wrong");
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <>
//     {error && <Error error={error} onClose={()=>setError(null)} />}
//     {message && <Message message={message} onClose={()=>setMessage(null)} />}
//     <main className=" min-h-screen py-16 px-4 md:px-20">
//       {/* Heading */}
//       <section className="text-center mb-12">
//         <h1 className="text-5xl font-bold   mb-4">Contact Us</h1>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//           Have questions or suggestions? Reach out to us and we&quot;ll get back to you as soon as possible.
//         </p>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//         {/* Contact Info */}
//         <div className="flex flex-col text-center relative sm:left-0   gap-6">
//           <h2 className="text-3xl font-semibold relative sm:left-0 le  mb-4">Our Contact Info</h2>
//           <p className="text-gray-700 text-lg">
//             Email: <a href="mailto:example@gmail.com" className="text-red-600 underline">example@gmail.com</a>
//           </p>
//           <p className="text-gray-700 text-lg">Phone: <span className=" ">+91 xxxxxxxxx</span></p>
//           <p className="text-gray-700 text-lg">
//             Instagram: <a href="https://instagram.com/ardsuhail" target="_blank" className="text-red-600 underline">@ardsuhail</a>
//           </p>
//         </div>

//         {/* Contact Form */}
//         <form
//           className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-md"
//           onSubmit={handleSubmit}
//         >
//           <label className="block mb-2 text-gray-700 font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//           />

//           <label className="block mb-2 text-gray-700 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//           />

//           <label className="block mb-2 text-gray-700 font-medium">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={5}
//             required
//             className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//           />

//           <button 
//             type="submit"
//             className="bg-red-600 cursor-pointer hover:bg-red-700 active:bg-red-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full"
//           >
//             Send Message
//           </button>
//         </form>
//       </section>
//     </main>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import Message from "@/component/Message";
import Error from "@/component/Error";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  MapPin, 
  Clock, 
  Shield, 
  Users,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": formData.name,
      "email": formData.email,
      "message": formData.message
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/contact", requestOptions)
      .then((response) => response.json())
      .then((result) => { 
        if(result.success){ 
          setMessage(result.message || "Thank you! Your message has been sent successfully.");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        } else {
          setError(result.message || "Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        setError("Network error. Please check your connection and try again.");
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond within 2 hours",
      value: "example@gmail.com",
      link: "mailto:example@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Sun, 9AM-9PM",
      value: "+91 xxxxxxxxx",
      link: "tel:+91xxxxxxxxx",
      color: "bg-green-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support",
      value: "Start Chat",
      link: "#chat",
      color: "bg-purple-500"
    }
  ];

  const features = [
    { text: "24/7 Customer Support", icon: <Clock className="w-4 h-4" /> },
    { text: "Secure & Private", icon: <Shield className="w-4 h-4" /> },
    { text: "Expert Assistance", icon: <Users className="w-4 h-4" /> },
    { text: "Quick Response", icon: <Star className="w-4 h-4" /> }
  ];

  return (
    <>
      {error && <Error error={error} onClose={() => setError(null)} />}
      {message && <Message message={message} onClose={() => setMessage(null)} />}
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Have questions or need assistance? Our dedicated team is ready to provide 
              <span className="font-semibold text-white"> premium support </span>
              and help you find the perfect solution.
            </p>
          </div>
        </section>

        {/* Trust Features */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-600 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Start a Conversation</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Whether you have questions about our products, need technical support, 
                    or want to explore partnership opportunities, we're here to listen and help.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group hover:border-blue-200"
                    >
                      <div className={`${method.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                        <p className="text-slate-600 text-sm mb-2">{method.description}</p>
                        <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-slate-900 mb-3">Why Choose Us?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Expert product guidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Personalized solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Quick resolution times</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                  {/* Form Header */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
                    <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                    <p className="text-slate-300">
                      Fill out the form below and we&apos;ll get back to you within 2 hours.
                    </p>
                  </div>

                  {/* Form Body */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-slate-500 text-sm">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us for exceptional support and quality products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:example@gmail.com"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us Directly
                </a>
                <a 
                  href="tel:+91xxxxxxxxx"
                  className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}