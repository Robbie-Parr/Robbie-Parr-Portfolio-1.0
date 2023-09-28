import { useRouter } from "next/router";
import React, {useEffect, useState } from "react";

import styles from '@/styles/Projects.module.scss';
import Title from "../../components/Title";
import {Navigation} from "../../components/ProjectPageComponents"

import {SectionsMap,TitleSection} from "@/components/ProjectPageComponents";

const Page = () => {
  const router = useRouter();
  let {id} = router.query;
  id = ""+id;

  return(
    <>
      <Title pageTitle={id+" Project"}/>
      <div id={styles.single_project}>
      
        <div id={styles.header}>
          <Navigation href="../projects"/>
          <TitleSection id={id}/>
        </div>      

        {/* todo: Map through Skills*/}
      
        <SectionsMap id={id}/>
      
      </div>
    </>
  )
  }
  
export default Page;

