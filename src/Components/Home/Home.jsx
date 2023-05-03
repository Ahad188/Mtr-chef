import React from 'react';
import Banner from '../Banner/Banner';
 
import WorldChef from '../WorldChef/WorldChef';
import Popular from '../Popular/Popular';
import ButomSection from '../ButomSection/ButomSection';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
                <WorldChef></WorldChef>
                <Popular></Popular>
                <ButomSection></ButomSection>
          </div>
     );
};

export default Home;