"use client";
import { 
  Map, 
  Home, 
  ShoppingCart, 
  Users, 
  Info, 
  Mail, 
  HelpCircle,
  Shield,
  FileText,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function SitemapPage() {
  const siteSections = [
    {
      title: "Main Navigation",
      icon: <Home className="w-6 h-6" />,
      pages: [
        { name: "Home", path: "/", description: "Welcome to Shopovix" },
        { name: "Shop", path: "/shop", description: "Browse all products" },
        { name: "Collections", path: "/collection", description: "Curated product categories" },
        { name: "About Us", path: "/about-Us", description: "Our story and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      title: "Product & Shopping",
      icon: <ShoppingCart className="w-6 h-6" />,
      pages: [
        { name: "All Products", path: "/shop", description: "Complete product catalog" },
        { name: "Categories", path: "/collection", description: "Shop by category" },
        { name: "Product Details", path: "/shop", description: "Browse individual products" }, // Fixed: Changed from dynamic route
        { name: "Shopping Cart", path: "#cart", description: "Your selected items" },
        { name: "Wishlist", path: "/user", description: "Saved favorite products" }
      ]
    },
    {
      title: "User Account",
      icon: <Users className="w-6 h-6" />,
      pages: [
        { name: "User Dashboard", path: "/user", description: "Account management" },
        { name: "Login", path: "/login", description: "Sign in to your account" },
        { name: "Sign Up", path: "/signUp", description: "Create new account" },
        { name: "Order History", path: "/user", description: "Past purchases and orders" },
        { name: "Profile Settings", path: "/user", description: "Manage account details" }
      ]
    },
    {
      title: "Support & Information",
      icon: <HelpCircle className="w-6 h-6" />,
      pages: [
        { name: "FAQs", path: "/faqs", description: "Frequently asked questions" },
        { name: "Shipping Information", path: "/shipping-info", description: "Delivery options and times" },
        { name: "Returns & Exchanges", path: "/return-&-exchanges", description: "Return policy and process" },
        { name: "Payment Options", path: "/payment-options", description: "Accepted payment methods" }
      ]
    },
    {
      title: "Legal & Policies",
      icon: <Shield className="w-6 h-6" />,
      pages: [
        { name: "Privacy Policy", path: "/privacy-policy", description: "Data protection and privacy" },
        { name: "Terms & Conditions", path: "/terms-&-conditions", description: "Website terms of use" },
        { name: "Cookie Policy", path: "/cookie-policy", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility commitment" },
        { name: "Sitemap", path: "/sitemap-page", description: "Complete website structure" }
      ]
    },
   
  ];

  const quickLinks = [
    { name: "New Arrivals", path: "/shop?filter=new", count: "50+ items" },
    { name: "Best Sellers", path: "/shop?filter=bestsellers", count: "100+ items" },
    { name: "On Sale", path: "/shop?filter=sale", count: "30+ items" },
    { name: "Premium Collection", path: "/collection?type=premium", count: "75+ items" }
  ];

  // For dynamic routes that can't be linked directly, we'll create a helper function
  const renderPageLink = (page, pageIndex) => {
    // Check if it's a dynamic route that can't be linked
    if (page.path.includes('[') && page.path.includes(']')) {
      return (
        <div
          key={pageIndex}
          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 cursor-not-allowed"
        >
          <ArrowRight className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-900">
                {page.name}
              </h3>
              <Info className="w-3 h-3 text-slate-400 mt-1.5 flex-shrink-0" />
            </div>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              {page.description}
            </p>
            <p className="text-slate-500 text-xs mt-1 italic">
              Dynamic page - browse products to access
            </p>
          </div>
        </div>
      );
    }

    // Regular static links
    return (
      <Link
        key={pageIndex}
        href={page.path}
        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group"
      >
        <ArrowRight className="w-4 h-4 text-slate-400 mt-1 group-hover:text-blue-600 transition-colors flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
              {page.name}
            </h3>
            <ExternalLink className="w-3 h-3 text-slate-400 mt-1.5 group-hover:text-blue-600 transition-colors flex-shrink-0" />
          </div>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            {page.description}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Map className="w-4 h-4" />
            <span>Website Navigation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explore the complete structure of Shopovix. 
            <span className="font-semibold text-white"> Find exactly what you're looking for </span>
            with our organized website map.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-slate-600">Quick access to our most visited sections</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:border-blue-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-slate-600 text-sm">{link.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                </div>

                {/* Section Pages */}
                <div className="p-6">
                  <div className="space-y-4">
                    {section.pages.map((page, pageIndex) => renderPageLink(page, pageIndex))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Assistance */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
            <Map className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Can't Find What You Need?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              If you're having trouble finding specific information or products, 
              our search feature and customer support team are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/faqs"
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
                Browse FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* XML Sitemap Notice */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <Info className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">For Search Engines</h3>
            <p className="text-slate-600 mb-4">
              Search engines can access our XML sitemap for automated crawling:
            </p>
            <code className="bg-white px-4 py-2 rounded-lg border border-slate-300 text-sm font-mono text-slate-700">
              /sitemap.xml
            </code>
          </div>
        </div>
      </section>
    </main>
  );
}