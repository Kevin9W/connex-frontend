import React from 'react';
import { Helmet } from "react-helmet";
import Register from './components/Register'

const App = () => {
  return ( 
    <div className="app">
      <Helmet>
        <title>ConneX</title>
        <meta name="description" content="Discover if your favorite influencer is on another platform. Connect all your platforms as an influencer in a single spot. ConneX aims to make influencer discoverability across the disparate streaming and social media services easy with one site."/>
      </Helmet>
      <Register/>
    </div>
   );
}
 
export default App; 