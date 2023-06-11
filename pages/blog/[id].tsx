import React from "react"
import { useRouter } from "next/router";


const Page = () => {
  const router = useRouter();
  const {id} = router.query;
  return(
    <>
      {/*h1>Blog id:{id}</h1>*/}
      <h4>This page is in development</h4>
      <a href="../">
        <h2>{"<- Back"}</h2>
      </a>
    </>
  )
    
  }
  
  export default Page;