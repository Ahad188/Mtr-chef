import React from 'react';
import Banner from '../Banner/Banner';
 
import WorldChef from '../WorldChef/WorldChef';
import Popular from '../Popular/Popular';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
                <WorldChef></WorldChef>
                <Popular></Popular>
          </div>
     );
};

export default Home;