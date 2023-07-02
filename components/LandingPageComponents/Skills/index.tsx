import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';

const Skills = () => {
    return(
        <div className="ml-4 mr-8 text-center self-center" id={styles.container}>
            <div className="self-center" id={styles.title}>
                <p>Skills</p>
            </div>

            {[[1.1,1.1,0,0],[1.3,1.3,5,5],
                [2,2,10,15],[4,4,15,22],
                [1.1,1,0,5],[1.3,1.3,1,34],
                [2,2,8,50],[4,4,10,60]].map((i) => {
                let val = 50-(((50**2)*(1/i[0]))**.5)
                let val2 = 50-(((50**2)*(1-(1/i[1])))**.5)
                val += i[2]
                val2+= i[3]
                //(x-x1)**2 + (y-y1)**2 = r**2
                //r**2 / 2 = (x-x1)**2
                // (((r**2)/2)**.5) = x-x1
                // (((r**2)/2)**.5)+x1 = x
                //x1 = x - (((r**2)/2)**.5)

                return(<p style={{top:val+"%",left:val2+"%"}}>{i[1]}</p>)
            })}
        </div>
    )
}

export default Skills;