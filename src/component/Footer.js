"use client";
import Link from 'next/link'
import React, { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import Message from "./Message"
import Error from "./Error"

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email) {
            setError("Email is required");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            email: email,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/subscribe", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setMessage(result.message || "Thank you for subscribing!");
                    setEmail(""); // Reset email
                } else {
                    setError(result.message || "Something went wrong. Please try again.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Network error. Please check your connection and try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <> 
            {error && <Error error={error} onClose={() => setError(null)} />}
            {message && <Message message={message} onClose={() => setMessage(null)} />}
            
            <footer className="bg-gradient-to-b from-slate-200 to-slate-300 text-gray-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* Trust Badges Section */}
                <div className="relative z-10 bg-slate-250 border-b border-slate-300">
                    <div className="container mx-auto px-4 py-6">
                        <div className="text-center mb-4">
                            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-3">
                                Trusted & Secure Shopping
                            </h4>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {/* Security Badges */}
                            <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg border border-green-200">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-medium text-green-700">100% Secure</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-700">SSL Encrypted</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-700">Money Back Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="relative z-10 border-b border-slate-300 bg-slate-250/80">
                    <div className="container mx-auto px-4 py-6">
                        <div className="text-center mb-4">
                            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-3">
                                Accepted Payment Methods
                            </h4>
                        </div>
                        <div className="flex flex-nowrap sm:flex-wrap justify-center items-center gap-6 sm:gap-8 overflow-x-auto py-2">
                            <div className="flex flex-col items-center group">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="Paypal"
                                    className="h-8 transition-all duration-300 group-hover:scale-110"
                                />
                                <span className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">PayPal</span>
                            </div>
                            
                            <div className="flex flex-col items-center group">
                                <img 
                                    src="/visa.svg" 
                                    alt="Visa" 
                                    className="h-8 transition-all duration-300 group-hover:scale-110"
                                />
                                <span className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Visa</span>
                            </div>
                            
                            <div className="flex flex-col items-center group">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                    alt="Mastercard"
                                    className="h-8 transition-all duration-300 group-hover:scale-110"
                                />
                                <span className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Mastercard</span>
                            </div>
                            
                            <div className="flex flex-col items-center group">
                                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                                    <span className="font-bold text-white text-sm">AMEX</span>
                                </div>
                                <span className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Amex</span>
                            </div>
                            
                            <div className="flex flex-col items-center group">
                                <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="font-bold text-white text-xs">₿</span>
                                </div>
                                <span className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">Crypto</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Shopovix
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Your trusted partner for premium shopping experience. Quality products, secure payments, and exceptional customer service.
                                </p>
                            </div>
                            
                            {/* Newsletter Subscription - FIXED */}
                            <div className="mb-6">
                                <h4 className="text-gray-900 font-semibold mb-3 text-sm uppercase tracking-wider">
                                    Stay Updated
                                </h4>
                                <p className="text-gray-600 text-sm mb-3">
                                    Get exclusive deals and product updates delivered to your inbox.
                                </p>
                                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                                    <div className="relative">
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-2 pl-10 bg-white border border-slate-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm"
                                            required
                                        />
                                        <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                    </div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Subscribing...
                                            </>
                                        ) : (
                                            <>
                                                Subscribe
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                                <p className="text-gray-500 text-xs mt-2">
                                    No spam. Unsubscribe at any time.
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-4 text-lg relative inline-block">
                                Quick Links
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { href: "/about-Us", label: "About Us" },
                                    { href: "/shop", label: "Shop" },
                                    { href: "/collection", label: "Shop by Category" },
                                    { href: "/contact", label: "Contact Us" },
                                    { href: "/faqs", label: "FAQs" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            href={link.href}
                                            className="flex items-center text-gray-700 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 group text-sm"
                                        >
                                            <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-4 text-lg relative inline-block">
                                Support
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { href: "/return-&-exchanges", label: "Returns & Exchanges" },
                                    { href: "/shipping-info", label: "Shipping Information" },
                                    { href: "/payment-options", label: "Payment Options / COD" },
                                    { href: "/terms-&-conditions", label: "Terms & Conditions" },
                                    { href: "/privacy-policy", label: "Privacy Policy" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            href={link.href}
                                            className="flex items-center text-gray-700 hover:text-gray-900 hover:translate-x-2 transition-all duration-300 group text-sm"
                                        >
                                            <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-600 transition-colors"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div>
                            <h3 className="text-gray-900 font-semibold mb-4 text-lg relative inline-block">
                                Connect With Us
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            </h3>
                            
                            {/* Social Links */}
                            <div className="mb-6">
                                <h4 className="text-gray-700 font-medium mb-3 text-sm uppercase">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {[
                                        { 
                                            href: "https://www.instagram.com/ardsuhail", 
                                            icon: "https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png",
                                            name: "Instagram",
                                            color: "hover:text-pink-600"
                                        },
                                        { 
                                            href: "https://github.com/suhail134", 
                                            icon: "/github.svg",
                                            name: "GitHub",
                                            color: "hover:text-gray-900"
                                        },
                                        { 
                                            href: "https://www.facebook.com/ardsuhail", 
                                            icon: "/facebook.svg",
                                            name: "Facebook",
                                            color: "hover:text-blue-600"
                                        }
                                    ].map((social) => (
                                        <Link
                                            key={social.name}
                                            target="_blank"
                                            href={social.href}
                                            className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-300 ${social.color}`}
                                        >
                                            <img src={social.icon} alt={social.name} className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-gray-700 font-medium mb-3 text-sm uppercase">Need Help?</h4>
                                <div className="space-y-2 text-sm">
                                    <p className="flex items-center text-gray-700">
                                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Support: 24/7 Available
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Response Time: &lt; 2 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 border-t border-slate-300 bg-slate-250">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <p className="text-gray-700 text-sm">
                                    © 2025 <span className="text-gray-900 font-semibold">Shopovix Store</span>. All Rights Reserved.
                                </p>
                            </div>
                            
                            {/* Additional Links */}
                            <div className="flex flex-wrap justify-center space-x-6 text-sm">
                                <Link href="/sitemap-page" className="text-gray-700 hover:text-gray-900 transition-colors">
                                    Sitemap
                                </Link>
                                <Link href="/accessibility" className="text-gray-700 hover:text-gray-900 transition-colors">
                                    Accessibility
                                </Link>
                                <Link href="/cookie-policy" className="text-gray-700 hover:text-gray-900 transition-colors">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer