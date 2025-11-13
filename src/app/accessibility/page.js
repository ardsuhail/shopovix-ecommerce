"use client";
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Smartphone, 
  Shield,
  CheckCircle,
  Users,
  Target,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Accessibility() {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Accessibility",
      description: "High contrast ratios, resizable text, and screen reader compatibility",
      points: [
        "Text scaling up to 200% without loss of content",
        "Color contrast ratio of 4.5:1 or higher",
        "Alt text for all meaningful images",
        "Clear focus indicators for keyboard navigation"
      ]
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Keyboard Navigation",
      description: "Full website functionality using keyboard only",
      points: [
        "Logical tab order throughout the site",
        "Skip to main content links",
        "Keyboard shortcuts for common actions",
        "Visible focus indicators"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Accessibility",
      description: "Optimized for all devices and touch interfaces",
      points: [
        "Touch-friendly target sizes (min 44px)",
        "Responsive design for all screen sizes",
        "Gesture-based navigation alternatives",
        "Portrait and landscape orientation support"
      ]
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: "Auditory Accessibility",
      description: "Content accessible to users with hearing impairments",
      points: [
        "Transcripts for audio content",
        "Closed captions for videos",
        "Visual alternatives for audio alerts",
        "Volume control options"
      ]
    }
  ];

  const compliance = [
    {
      standard: "WCAG 2.1",
      level: "AA",
      status: "Fully Compliant",
      color: "bg-green-100 text-green-800"
    },
    {
      standard: "ADA",
      level: "Title III",
      status: "Compliant",
      color: "bg-blue-100 text-blue-800"
    },
    {
      standard: "Section 508",
      level: "Updated",
      status: "Compliant",
      color: "bg-purple-100 text-purple-800"
    },
    {
      standard: "EN 301 549",
      level: "European",
      status: "Compliant",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Target className="w-4 h-4" />
            <span>Inclusive Design</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Accessibility
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We believe the web should be accessible to everyone. 
            <span className="font-semibold text-white"> Shopovix is committed </span>
            to providing an inclusive shopping experience for all users.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Accessibility Commitment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Shopovix, we&apos;re dedicated to ensuring our website is accessible to all individuals, 
              regardless of ability or technology. We continuously work to improve the user experience for everyone.
            </p>
          </div>

          {/* Compliance Standards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {compliance.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${item.color}`}>
                  {item.status}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.standard}</h3>
                <p className="text-slate-600">{item.level}</p>
              </div>
            ))}
          </div>

          {/* Accessibility Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-lg text-slate-600 mb-6">{feature.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Supported Technologies</h2>
            <p className="text-xl text-slate-600">Our website works seamlessly with popular assistive technologies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200">
              <MousePointer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Screen Readers</h3>
              <p className="text-slate-600">Compatible with JAWS, NVDA, VoiceOver, and TalkBack</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200">
              <Keyboard className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Navigation</h3>
              <p className="text-slate-600">Full keyboard navigation with logical tab order</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200">
              <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Devices</h3>
              <p className="text-slate-600">Optimized for touch screens and voice control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Help Us Improve</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Your feedback helps us make Shopovix more accessible. If you encounter any barriers 
              or have suggestions for improvement, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Provide Feedback
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="mailto:accessibility@shopovix.com"
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}