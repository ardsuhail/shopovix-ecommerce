

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  PlusCircle, 
  Contact, 
  ShoppingCart, 
  HelpCircle, 
  Box, 
  Layers, 
  Users, 
  UserCheck, 
  Settings, 
  Info, 
  User, 
  X,
  Crown,
  Shield,
  Star,
  Truck,
  Phone,
  Mail,
  Heart
} from "lucide-react";
import { useSession } from "next-auth/react"
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const MobileNavSlider = ({ navSidebar, setNavSidebar }) => {
  const pathName = usePathname();
  const { data: session } = useSession()
  const ref = useRef()
  const router = useRouter()

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={22} />, premium: false },
    { href: "/shop", label: "Shop", icon: <ShoppingCart size={22} />, premium: true },
    { href: "/collection", label: "Collections", icon: <Layers size={22} />, premium: true },
    { href: "/about-Us", label: "About Us", icon: <Info size={22} />, premium: false },
    { href: "/contact", label: "Contact Us", icon: <Contact size={22} />, premium: false },
    { href: "/faqs", label: "FAQs", icon: <HelpCircle size={22} />, premium: false },
    { href: "/user", label: "My Account", icon: <User size={22} />, premium: true },
  ];

  // Trust Features
  const trustFeatures = [
    { icon: <Shield size={16} />, text: "100% Secure" },
    { icon: <Truck size={16} />, text: "Free Shipping" },
    { icon: <Star size={16} />, text: "Premium Quality" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;

      // Swipe left to close
      if (navSidebar && diffX < -50) {
        setNavSidebar(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navSidebar]);

  const handleAccountClick = () => {
    if(session){
      router.push("/user");
      setNavSidebar(false);
    } else {
      router.push("/login");
      setNavSidebar(false);
    }
  }

  useEffect(() => {
    setNavSidebar(false);
  }, [pathName]);

  return (
    <>
      {/* Overlay */}
      {navSidebar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      {/* Sidebar */}
      <div ref={ref}
        className={`fixed overflow-y-auto left-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200 shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          navSidebar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Shopovix" 
                className="w-25 rounded-xl shadow-lg border-2 border-slate-200" 
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
           
              <p className="text-sm text-slate-500">Premium Shopping</p>
            </div>
          </div>
          <button
            onClick={() => setNavSidebar(false)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {/* User Info Section */}
        {session && (
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <img 
                src={session.user.image} 
                alt={session.user.name}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-800 truncate">{session.user.name}</h3>
                <p className="text-sm text-slate-600 truncate">{session.user.email}</p>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                Verified
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="p-4 border-b border-slate-200 bg-white/50">
          <div className="grid grid-cols-3 gap-2">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <div className="text-blue-600 mb-1">
                  {feature.icon}
                </div>
                <span className="text-xs font-medium text-slate-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            {navItems.map((item) => {
              const active = pathName === item.href;

              if (item.label === "My Account") {
                return (
                  <div
                    key={item.href}
                    onClick={handleAccountClick}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 group ${
                      active 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                        : "hover:bg-white hover:shadow-md border border-transparent hover:border-slate-200"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      active 
                        ? "bg-white/20" 
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium flex-1 ${
                      active ? "text-white" : "text-slate-700"
                    }`}>
                      {item.label}
                    </span>
                    {item.premium && (
                      <Crown size={16} className={active ? "text-yellow-300" : "text-yellow-500"} />
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 group ${
                      active 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                        : "hover:bg-white hover:shadow-md border border-transparent hover:border-slate-200"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      active 
                        ? "bg-white/20" 
                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium flex-1 ${
                      active ? "text-white" : "text-slate-700"
                    }`}>
                      {item.label}
                    </span>
                    {item.premium && (
                      <Crown size={16} className={active ? "text-yellow-300" : "text-yellow-500"} />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Section */}
        <div className="p-6 border-t border-slate-200 bg-white/80">
          {/* Support Info */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-slate-600">
              <Phone size={18} />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Mail size={18} />
              <span className="text-sm">help@shopovix.com</span>
            </div>
          </div>

          {/* Auth Buttons */}
          {!session ? (
            <div className="space-y-2">
              <Link href="/login">
                <button 
                  onClick={() => setNavSidebar(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Sign In
                </button>
              </Link>
              <Link href="/signUp">
                <button 
                  onClick={() => setNavSidebar(false)}
                  className="w-full border border-slate-300 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-50 transition-all duration-200"
                >
                  Create Account
                </button>
              </Link>
            </div>
          ) : (
            <button 
              onClick={() => {
                signOut();
                setNavSidebar(false);
              }}
              className="w-full border border-red-200 text-red-600 py-3 rounded-xl font-medium hover:bg-red-50 transition-all duration-200"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavSlider;