import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import JobCategories from "../../components/jobcategories/JobCategories";
import FeaturedJobs from "../../components/featuredjobs/FeaturedJobs";
import LatestJobs from "../../components/latestjobs/LatestJobs";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCategories />
      <FeaturedJobs />
      {/* <LatestJobs /> */}
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
