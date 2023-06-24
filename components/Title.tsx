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
        </Head>
    )

}

export default Title;