import React from "react";
import Banner from "../../../components/default/banner";
import Footer from "../../../components/default/footer";
import Header from "../../../components/default/header";
import QuickSearch from "../../../components/default/quick-search";

function HomePage() {
  return (
    <div className="hp__wrapper">
      <Header />
      <Banner />
      <QuickSearch />
      <Footer />
    </div>
  );
}

export default HomePage;
