import React from 'react';
import Header from './../../Sheared/Header/Header';
import MainSection from './../../Home/MainSection/MainSection';
import Banner from './../../Home/Banner/Banner';
import Services from './../../Home/Services/Services';
import DoctorBanner from './../../Home/DoctorBanner/DoctorBanner';
import Review from './../../Home/Review/Review';
import ContactForm from './../../Home/ContactForm/ContactForm';
import Footer from './../../Sheared/Footer/Footer';
import AllDoctors from '../AllDoctors/AllDoctors';

const Home = () => {
    return (
        <>
            <Header></Header>
            <MainSection></MainSection>
            <Banner></Banner>
            <Services></Services>
            <DoctorBanner></DoctorBanner>
            <Review></Review>
            <AllDoctors></AllDoctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>
    );
};

export default Home;