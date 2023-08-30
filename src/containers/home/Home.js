import React from "react"
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './index'
import { CTA, Brand, Navbar } from '../../components2';
import Image from '../../components2/Image_optimi'
import Model from "../Model";

function Home(){
    return (
        <>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            {/* <Model /> */}
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Image />
            <Blog />
        </>
    )
}

export default Home
        