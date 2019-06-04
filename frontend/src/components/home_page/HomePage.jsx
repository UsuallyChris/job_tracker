import React, {Fragment} from 'react';

// Component Imports
import Nav from './Nav';
import Hero from './Hero';
import TalkingPoints from './TalkingPoints';
import Footer from './Footer';

function HomePage() {
  return(
    <Fragment>
      <Nav />
      <Hero />
      <TalkingPoints />
      <Footer />
    </Fragment>
  );
};

export default HomePage;