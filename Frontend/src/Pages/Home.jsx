import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper CSS
import "swiper/css/navigation"; // Import Navigation module CSS
import "swiper/css/pagination"; // Import Pagination module CSS
import "swiper/css/autoplay"; // Import Autoplay module CSS
import { Link } from 'react-router-dom';
//Import Images 
import weddingImage from "@/assets/images/Wedding.jpg.jpg";
import concertImage from "@/assets/images/Concert.jpg";
import politicalImage from "@/assets/images/Political.jpg";
import educationalImage from "@/assets/images/Educational.jpg";
import sportsImage from "@/assets/images/Sports.jpg";
import foodfestivalImage from "@/assets/images/Foodfestival.jpg";
import wedImage from "@/assets/images/Wed.jpg";
//import wedsImage from "@/assets/images/Weds.jpg";

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules


const Home = () => {
  return (
    <>
    
      <div
        className="w-full z-10 bg-blue-800 flex justify-center items-center text-4xl text-white font-extrabold py-4 shadow-md mt-20"
      >
        Find and Host Events with eventA
      </div>
      
      {/* Swiper Section */}
      <div className="w-full mt-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true} // Enable navigation
          pagination={{ clickable: true }} // Enable pagination
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay with 3s delay
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to modules
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={wedImage} alt="Slide 1" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://placehold.co/1200x400"} alt="Slide 2" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1200x400" alt="Slide 3" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1200x400" alt="Slide 4" className="w-full h-auto" />
          </SwiperSlide>
        </Swiper>
      </div>

      <br />

      {/* Event Cards Section */}
      <div className="flex justify-evenly cursor-pointer">
        
        <div
         
          className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg"
         >
          <div className="card-body">
            <h2 className="card-title">Wedding</h2>
            <p>Book your wedding venues</p>
          </div>
          <figure>
            <img src={weddingImage} alt="Wedding" />
          </figure>
         
        </div>
        

        <div
          className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <div className="card-body">
            <h2 className="card-title">Live Concert</h2>
            <p>Book your tickets</p>
          </div>
          <figure>
            <img src={concertImage} alt="Concert" />
          </figure>
        </div>

      <div>
        <Link to="/PoliticalEventsPage">
          <div className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg">
           <div className="card-body">
               <h2 className="card-title">Political Event</h2>
             <p>Participate in your favorite political event</p>
           </div>
             <figure>
               <img src={politicalImage} alt="Political Event" />
              </figure>
            </div>
        </Link>
       </div>
      </div>

      <br />
      <br />

      <div className="flex justify-evenly cursor-pointer">
       <Link to="/EducationalEventPage">
        <div
          className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg"
         >
          <div className="card-body">
            <h2 className="card-title">Educational Event</h2>
            <p>Participate in your favorite education session</p>
          </div>
          <figure>
            <img src={educationalImage} alt="Educational Event" />
          </figure>
         </div>
          </Link>
        <div
         
          className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <Link to="/SportsEvents">
          <div className="card-body">
            <h2 className="card-title">Sports</h2>
            <p>Register your team or buy tickets.</p>
          </div>
          <figure>
            <img src={sportsImage} alt="Sports" />
          </figure>
          </Link>
        </div>
         

        <div
          className="card bg-base-100 w-96 shadow-xl object-cover transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <div className="card-body">
            <h2 className="card-title">Food Festival</h2>
            <p>Book your tickets for the festival.</p>
          </div>
          <figure>
            <img src={foodfestivalImage} alt="Food Festival" />
          </figure>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
