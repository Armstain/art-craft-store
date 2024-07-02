import React from 'react';
import ItemCards from '../../components/ItemCards/ItemCards.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import HomeItemCards from '../../components/HomeItemCards/HomeItemCards.jsx';
import Accordion from '../../components/Accordion/Accordion.jsx';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HomeItemCards></HomeItemCards>
            <div className='mt-10'>
                <Accordion></Accordion>
            </div>
        </div>
    );
};

export default Home;