import React from 'react';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Branding from './Branding/Branding';
import DisplayProduct from './DisplayProduct/DisplayProduct';
import Review from '../Home/Review/Review'


const Home = () => {
    return (
        <div>
            

           <Header/>
           <Banner/>
           <DisplayProduct/>
           <Review/>
           <Branding/>
           <Footer/>
        </div>
    );
};

export default Home;