import React from 'react';


const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
       <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white sm:py-6 mt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 pt-24"> {/* Added padding-top to ensure it's not overlapping with navbar */}
          <h1 className="text-5xl font-bold mb-6 leading-tight">Plan Your Dream Event with EventA</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">From weddings to corporate events, we bring your ideas to life with expert planning and seamless execution.</p>
          <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-4">
            <div className="text-4xl text-blue-600">📅</div>
            <h3 className="text-xl font-semibold">Step 1: Choose Your Event</h3>
            <p>Select the event type and provide the essential details.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl text-blue-600">💡</div>
            <h3 className="text-xl font-semibold">Step 2: Custom Packages</h3>
            <p>Choose from our customizable packages that fit your needs.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl text-blue-600">🤝</div>
            <h3 className="text-xl font-semibold">Step 3: Collaborate</h3>
            <p>Work with our expert planners to finalize every detail.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl text-blue-600">🎉</div>
            <h3 className="text-xl font-semibold">Step 4: Enjoy the Event</h3>
            <p>Relax and enjoy as we bring your vision to life with flawless execution.</p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <div className="text-5xl text-blue-600">🎉</div>
            <h3 className="text-xl font-semibold">Event Planning</h3>
            <p>Our team works with you to create the perfect event, tailored to your vision.</p>
          </div>
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <div className="text-5xl text-blue-600">🔗</div>
            <h3 className="text-xl font-semibold">Vendor Coordination</h3>
            <p>We handle all vendor management, ensuring seamless event execution.</p>
          </div>
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <div className="text-5xl text-blue-600">📣</div>
            <h3 className="text-xl font-semibold">Event Marketing</h3>
            <p>Our strategies will help you promote your event to reach the right audience.</p>
          </div>
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <div className="text-5xl text-blue-600">🎯</div>
            <h3 className="text-xl font-semibold">On-the-Day Management</h3>
            <p>Our team ensures everything runs smoothly from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Achievements & Impact Section */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-4xl font-semibold mb-8">Our Achievements</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">With a proven track record of successful events, we're the trusted choice for event planning.</p>
        <div className="space-y-4 text-lg">
          <p>✔ Over 100 successful events planned and executed.</p>
          <p>✔ Worked with top brands like [Brand1], [Brand2], and more.</p>
          <p>✔ Rated 5 stars by clients for our excellence and attention to detail.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">What Our Clients Are Saying</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <blockquote className="italic text-lg">"EventA made our wedding day unforgettable. The team was so attentive, and everything went off without a hitch!" – Emily & John</blockquote>
          <blockquote className="italic text-lg">"From start to finish, EventA was a dream to work with. The corporate event they organized was flawless!" – Mark, CEO</blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-semibold mb-6">Let’s Make Your Event Unforgettable</h2>
        <p className="text-lg mb-8">Get in touch with our team and start planning your perfect event today.</p>
        <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default App;
