import React from "react"
import Head from 'next/head';

type Props  ={
    pageTitle:string
}

const Title = ({pageTitle}:Props) => {
    const fullTitle = pageTitle + " | Robbie Parr"

    return(
        <Head>
            <title>{fullTitle}</title>
            <link rel="icon" href="/LogoIcon.png"/>
            <meta property="og:image" content="/LogoIcon.png" />
            <meta property="og:title" content={fullTitle}/>
            <meta property="og:description" content="Hello there, Welcome to Robbie Parr's Portfolio website"/>
            <meta property="description" content="Hello there, Welcome to Robbie Parr's Portfolio website"/>
            
        </Head>
    )

}

export default Title;