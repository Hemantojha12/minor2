import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SearchEvent from './Pages/SearchEvent';
import CreateEvent from './Pages/CreateEvent';
import About from './Pages/About/About';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import LoginSignup from './Pages/LoginSignup';
import AdminDashboard from './Pages/Dashbord/AdminDashboard';
import OrganizerDashboard from './Pages/Dashbord/OrganizerDashboard'; 
import UserProfile from './Pages/Dashbord/Userprofile';
import EducationalEventPage from './Pages/Dashbord/EducationalEventPage';
import SportsEvents from './Pages/Dashbord/SportsEvents';
import PoliticalEventsPage from './Pages/Dashbord/PoliticalEvents';
import UserLandingPage from './Pages/Dashbord/UserLandingPage';
import ConcertEvents from './Pages/Dashbord/ConcertEvets';
import HomePage from './Pages/Dashbord/HomePage';






const App = () => {
  return (
    <Router>
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-event" element={<SearchEvent />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/admindb" element={<AdminDashboard />} />
          <Route path="/orgdb" element={<OrganizerDashboard />} />
          <Route path="/Userprofile" element={<UserProfile/>}/>
          <Route path="/EducationalEventPage" element={<EducationalEventPage />} />
          <Route path="/SportsEvents" element={<SportsEvents />} />
          <Route path="/PoliticalEventsPage" element={<PoliticalEventsPage />} />
          <Route path="/UserLandingpage" element={<UserLandingPage />} />
          <Route path="/ConcertEvents" element={<ConcertEvents />} />
          <Route path="/HomePage" element={<HomePage />} />
          
          
          
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;