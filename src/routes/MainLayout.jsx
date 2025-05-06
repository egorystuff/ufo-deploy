import React, {useEffect} from 'react';
import Header from "@components/Site/Header.jsx";
import AppInfoBlock from "@components/Site/AppInfoBlock.jsx";
import ResultsBlock from "@components/Site/ResultsBlock.jsx";
import CoachBlock from "@components/Site/CoachBlock.jsx";
import FaqBlock from "@components/Site/FAQBlock.jsx";
import CounterBlock from "@components/Site/CounterBlock.jsx";
import Footer from "@components/Site/Footer.jsx";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "@/firebase.js";
import {ref, set} from "firebase/database";
import {doc, setDoc} from "firebase/firestore";
import {useFirestoreDataStore} from "@/store/store.js";

const MainLayout = () => {

    return (
        <>
            <Header/>
            <AppInfoBlock/>
            <ResultsBlock/>
            <CoachBlock/>
            <FaqBlock/>
            <CounterBlock/>
            <Footer/>
        </>
    );
};

export default MainLayout;
