import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Star, ArrowRight, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [activeTab, setActiveTab] = React.useState('message');
  const [expandedFaq, setExpandedFaq] = React.useState(null);
  const [formStatus, setFormStatus] = React.useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-24">
        {/* Section Navigation - Now part of the flow instead of floating */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-2 flex gap-2">
            {['message', 'info', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-blue-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl font-bold mb-4 relative">
              Let's Create Something
              <span className="absolute -right-8 -top-6">
                <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl text-gray-600">
              <span>Amazing</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Together</span>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="max-w-5xl mx-auto">
          {/* Message Tab Content */}
          {activeTab === 'message' && (
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Tell us about your event..."
                      rows="4"
                      className="w-full px-4 py-3 bg-transparent border-2 rounded-xl border-gray-200 focus:border-blue-500 outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {formStatus === 'submitting' ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : formStatus === 'success' ? (
                      <span>Message Sent!</span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Quick Contact Cards */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <div className="p-6 flex items-center gap-4">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-sm opacity-90">+1 234 567 890</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <div className="p-6 flex items-center gap-4">
                    <Mail className="h-6 w-6" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-sm opacity-90">info@eventa.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <div className="p-6 flex items-center gap-4">
                    <Clock className="h-6 w-6" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm opacity-90">Mon - Fri, 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Tab Content */}
          {activeTab === 'info' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h2 className="text-3xl font-bold">Our Office</h2>
                <p className="text-gray-600">
                  Visit us at our creative space where we turn ideas into unforgettable events.
                </p>
                <div className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h2 className="text-3xl font-bold">Let's Connect</h2>
                <p className="text-gray-600">
                  Follow us on social media for inspiration and updates.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map((social) => (
                    <button
                      key={social}
                      className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab Content */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              {[
                {
                  q: "What makes your event planning unique?",
                  a: "We combine creativity, technology, and personal touch to create unforgettable experiences."
                },
                {
                  q: "How do you handle event budgeting?",
                  a: "We work transparently with detailed breakdowns and flexible options to match your budget."
                },
                {
                  q: "Can you handle international events?",
                  a: "Yes! We have experience coordinating events worldwide with local partners."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{faq.q}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {expandedFaq === index && (
                      <p className="mt-4 text-gray-600">{faq.a}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;