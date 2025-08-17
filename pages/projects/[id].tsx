import { useRouter } from "next/router";
import React from "react";

import { Provider } from "react-redux";
import store from "@/Redux/store";

import Title from "../../components/Title";
import {Navigation} from "../../components/ProjectPageComponents"

import {SectionsMap,TitleSection} from "@/components/ProjectPageComponents";

const Page = () => {
  const router = useRouter();
  let {id} = router.query;
  id = ""+id;

  return(
    <Provider store={store}>
      <Title pageTitle={id+" Project"}/>
      <div id="single_project">
      
        <div id="header">
          <Navigation href="../projects"/>
          <TitleSection id={id}/>
        </div>      

        {/* todo: Map through Skills*/}
      
        <SectionsMap id={id}/>
      
      </div>
    </Provider>
  )
  }
  
export default Page;

