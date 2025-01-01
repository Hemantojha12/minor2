import React, { useState, useEffect } from 'react';
import OurMission from '../../assets/images/OurMission.png';
import OurValues from '../../assets/images/OurValue.png';
import OurTeam from '../../assets/images/OurTeam.png';

const CountUpAnimation = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(progress * target), target));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);
  
  return <span>{count}</span>;
};

const Stats = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  const stats = [
    { title: "Wedding Vendors", count: 50, suffix: "+", color: "bg-gradient-to-br from-blue-700 to-blue-900", icon: "👰" },
    { title: "Wedding Venues", count: 500, suffix: "+", color: "bg-gradient-to-br from-blue-400 to-blue-600", icon: "🏰" },
    { title: "Active Users", count: 10000, suffix: "+", color: "bg-gradient-to-br from-green-500 to-green-700", icon: "👥" },
    { title: "Events Hosted", count: 1200, suffix: "+", color: "bg-gradient-to-br from-red-500 to-red-700", icon: "🎉" }
  ];

  return (
    <div id="stats-section" className="container mx-auto py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-2 mb-12">
        <span className="text-3xl animate-bounce">📊</span>
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Platform Statistics
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mt-4">
          Our growing community of event organizers and attendees
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-500 
                       hover:scale-105 hover:-rotate-1 cursor-pointer backdrop-blur-sm
                       ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredStat(index)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">{stat.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{stat.title}</h3>
            <p className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${hoveredStat === index ? 'scale-110' : ''}`}>
              {isVisible ? <CountUpAnimation target={stat.count} /> : 0}{stat.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    { title: "Discover Events", icon: "🔍", description: "Find and explore exciting events happening in your area" },
    { title: "Easy Planning", icon: "⚙️", description: "Streamlined tools for seamless event organization" },
    { title: "Ticket Management", icon: "🎫", description: "Hassle-free digital ticketing system" },
    { title: "Secure Payments", icon: "💳", description: "Multiple payment options with enhanced security" },
    { title: "Social Integration", icon: "📱", description: "Share and promote events across social platforms" },
    { title: "Analytics", icon: "📊", description: "Track event performance and attendance metrics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="w-full z-10 bg-gradient-to-r from-blue-700 to-blue-900 flex justify-center items-center text-4xl
                text-white font-extrabold py-12 shadow-xl mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <h1 className="relative animate-fade-in">About eVENTA</h1>
      </div>
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 animate-fade-in">
            Welcome to eVENTA, where we're reimagining the future of event management and attendance.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 animate-fade-in delay-100">
            Our platform combines cutting-edge technology with user-friendly design to create 
            seamless experiences for event organizers and attendees alike.
          </p>
        </div>

        <Stats />

        <div className="flex flex-wrap justify-center mb-16">
          {["mission", "values", "team"].map((section, index) => (
            <div key={section} className="w-full md:w-1/3 p-6 relative group">
              <div className="relative flex items-center overflow-hidden h-60 rounded-lg shadow-lg">
                <img 
                  src={OurMission }
                  alt={`Our ${section}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:-translate-x-10"
                />
                <div className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out ml-4 h-full flex items-center">
                  <div className="bg-white p-6 rounded shadow-xl">
                    <h2 className="text-2xl font-bold mb-4 capitalize">Our {section}</h2>
                    {section === "mission" && (
                      <p className="text-lg">
                        To revolutionize the event industry through innovation and simplicity, making event planning and attendance seamless for everyone.
                      </p>
                    )}
                    {section === "values" && (
                      
                      <ul className="text-left space-y-2">
                        <li>🚀 Innovation First</li>
                        <li>💫 Customer Excellence</li>
                        <li>🌱 Sustainable Future</li>
                        <li>🤝 Trust & Transparency</li>

                      </ul>
                    )}
                    {section === "team" && (
                      <p className="text-lg">
                        A passionate team of experts dedicated to creating exceptional experiences and driving innovation in the event industry.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg transition-all duration-300
                         hover:shadow-lg hover:scale-105 hover:-rotate-1"
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Join us in creating unforgettable experiences. From intimate gatherings to grand celebrations,
            eVENTA is your trusted partner in making every event extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;