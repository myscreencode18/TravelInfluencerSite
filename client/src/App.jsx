import React from 'react'
import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import FeaturedMosaic from './pages/FeaturedSection'
import Destinations from './pages/Destination'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DestinationDetail from './pages/DestinationDetail'
import MediaGallery from './pages/MediaGallery'
import Testimonials from './pages/Testimonial'
import NewsletterSection from './pages/NewsLetter'
import Footer from './components/Footer'
import Collaborations from './pages/Collaborator'
import AdventureInvitation from './pages/AdventureInvitation'
import TripDetails from './pages/TripDetals'
import UpcomingTrips from './pages/UpcomingTrip'
import Contact from './pages/ContactUs'
import ContactInfluencer from './pages/ContactUs'
import Travelogue from './pages/Travelogue'
import SingleBlogPost from './pages/SingleBlogPost'
import AdminDashboard from './admin/AdminDashboard'

const App = () => {
  return (

      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>

              <Hero />
              <AboutMe />
              <FeaturedMosaic />
              <Destinations />
              <MediaGallery/>
              <AdventureInvitation/>
              <Testimonials/>
              <Collaborations/>
              <Footer/>
              
         
            </>
          } 
        />

        {/* Destination Detail Page */}
        <Route path="/destination/:id" element={<DestinationDetail />} />

        <Route path="/UpcomingTrips" element={<UpcomingTrips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/contact" element={<ContactInfluencer />} />
        <Route path="/blog" element={<Travelogue />} />

          <Route path="/blog/:id" element={<SingleBlogPost />} />

          <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
   
  )
}

export default App
