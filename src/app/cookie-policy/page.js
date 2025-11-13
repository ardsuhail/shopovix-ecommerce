"use client";
import { 
  Shield, 
  Cookie, 
  Settings, 
  Eye, 
  Users, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Info
} from "lucide-react";
import { useState } from "react";

export default function CookiePolicy() {
  const [activeCategory, setActiveCategory] = useState("all");

  const cookieCategories = [
    {
      id: "essential",
      name: "Essential Cookies",
      icon: <Shield className="w-6 h-6" />,
      description: "Required for basic website functionality",
      necessary: true,
      cookies: [
        { name: "session_id", purpose: "Maintain user session", duration: "Session" },
        { name: "csrf_token", purpose: "Security protection", duration: "Session" },
        { name: "consent_status", purpose: "Store cookie preferences", duration: "1 year" }
      ]
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Help us understand how visitors interact with our website",
      necessary: false,
      cookies: [
        { name: "_ga", purpose: "Google Analytics tracking", duration: "2 years" },
        { name: "_gid", purpose: "Google Analytics session", duration: "24 hours" },
        { name: "_gat", purpose: "Request rate limiting", duration: "1 minute" }
      ]
    },
    {
      id: "preferences",
      name: "Preference Cookies",
      icon: <Settings className="w-6 h-6" />,
      description: "Remember your settings and preferences",
      necessary: false,
      cookies: [
        { name: "theme_preference", purpose: "Store theme selection", duration: "1 year" },
        { name: "language", purpose: "Store language preference", duration: "1 year" },
        { name: "currency", purpose: "Store currency preference", duration: "1 year" }
      ]
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      icon: <Users className="w-6 h-6" />,
      description: "Used to deliver relevant advertisements",
      necessary: false,
      cookies: [
        { name: "_fbp", purpose: "Facebook pixel tracking", duration: "3 months" },
        { name: "_gcl_au", purpose: "Google Ads conversion", duration: "3 months" },
        { name: "tracking_id", purpose: "Marketing campaign tracking", duration: "1 year" }
      ]
    }
  ];

  const filteredCategories = activeCategory === "all" 
    ? cookieCategories 
    : cookieCategories.filter(cat => cat.id === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Cookie className="w-4 h-4" />
            <span>Transparent Privacy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We believe in transparent data practices. 
            <span className="font-semibold text-white"> Understand how we use cookies </span>
            to enhance your shopping experience while protecting your privacy.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">What Are Cookies?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cookies are small text files stored on your device when you visit websites. 
                They help websites remember information about your visit, which can make 
                your next visit easier and the site more useful to you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    Cookies are safe - they cannot be used to run programs or deliver viruses to your computer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    You have full control over cookies and can manage your preferences at any time.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-700">Essential Cookies</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Always Active
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-700">Optional Cookies</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Your Choice
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-700">Data Protection</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    GDPR Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Cookie Categories</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === "all" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-white text-slate-700 border border-slate-300 hover:border-blue-300"
                }`}
              >
                All Cookies
              </button>
              {cookieCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "bg-blue-600 text-white shadow-lg" 
                      : "bg-white text-slate-700 border border-slate-300 hover:border-blue-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Cookie Details */}
            <div className="space-y-6">
              {filteredCategories.map(category => (
                <div key={category.id} className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-2xl ${
                        category.necessary ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                      }`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                          {category.necessary && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              Necessary
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-slate-600 mb-6">{category.description}</p>
                        
                        <div className="bg-slate-50 rounded-2xl p-6">
                          <h4 className="font-semibold text-slate-900 mb-4">Cookies Used</h4>
                          <div className="space-y-4">
                            {category.cookies.map((cookie, index) => (
                              <div key={index} className="flex justify-between items-start py-3 border-b border-slate-200 last:border-b-0">
                                <div>
                                  <div className="font-medium text-slate-900">{cookie.name}</div>
                                  <div className="text-slate-600 text-sm">{cookie.purpose}</div>
                                </div>
                                <div className="text-slate-500 text-sm bg-white px-3 py-1 rounded-full border border-slate-300">
                                  {cookie.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management Section */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <Settings className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Manage Your Preferences</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                You have full control over which cookies we use. Update your preferences at any time.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Browser Settings</h3>
                <p className="text-slate-600 text-sm">Manage cookies through your browser preferences</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-200">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Cookie Consent</h3>
                <p className="text-slate-600 text-sm">Update preferences via our consent banner</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-200">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Opt-Out Tools</h3>
                <p className="text-slate-600 text-sm">Use industry-standard opt-out mechanisms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}