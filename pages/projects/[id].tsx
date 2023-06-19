import React from "react"
import { useRouter } from "next/router";


const Page = () => {
  const router = useRouter();
  const {id} = router.query;
  return(
    <>
      {/*todo: add project root using Project id:{id}*/}
      <h4>This page is in development</h4>
      <a href="../">
        <h2>{"<- Back"}</h2>
      </a>
    </>
  )
    
  }
  
  export default Page;