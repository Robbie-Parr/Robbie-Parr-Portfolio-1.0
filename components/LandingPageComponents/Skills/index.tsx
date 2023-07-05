import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';
import SkillPoint from "./SkillPoint";

const Skills = () => {
    const [skills,setSkills] = useState([{name:"1",image:"ProfilePicture032.png"}])
    const [variations,setVariations] = useState([30,0,0])


    function *getCirclePoint(radius:number,center:number[],increment:number,offset=0): IterableIterator<[number,number]> {
        const convert = (theta:number) =>  theta/360 * (2 * Math.PI)
        const tan = (theta:number) => Math.tan(convert(theta))
        let [xFraction, yFraction,xPos,yPos] = [0,0,0,0]
        let [xMult,yMult] = [1,1]
        let [incrementDirection,flip] = [1,false]
        let theta = offset

        while(true){
            if(flip){
                theta = 90-theta
                //The Direction H vector must be corrected for 
            }


            //SOH CAH TOA
            //  \ 
            //   . 
            //  / \
            // O/A = tan(0) => y/x = tan(0)
            // x pos = y/tan(0)
            // y = tan(0) * x
            //
            // x**2 + y**2 = r**2 => 
            //                       x + y = r  
            //                      (for ratio/fraction of total r**2)
            //
            // tan(0) * x + x = r =>
            //                     x (tan(0) + 1) = r => 
            //                     x = r/(tan(0) + 1)
            // y/tan(0) + y = r =>
            //                    y(1/tan(0) + 1) = r =>
            //                    y = r/(1/tan(0) +1)

            yFraction = radius/(tan(theta) + 1);
            xFraction = radius/((1/tan(theta)) + 1);
            
            if(flip){
                theta = 90-theta
                //The Correction taken to account for the Direction H vector must be removed 
            }


            if(xMult==-1){
                [yFraction,xFraction] = [xFraction,yFraction]
                //Change of H vector reverses O and A values 
                //of SOH CAH TOA in TOA or tan(0) = O/A
            }


            //Equation of a Circle:
            //(x-x1)**2 + (y-y1)**2 = r**2
            //r**2 / 2 = (x-x1)**2
            // (((r**2)/2)**.5) = x-x1
            // (((r**2)/2)**.5)+x1 = x
            //x1 = x - (((r**2)*fraction)**.5)
            //y1 follows same structure as x1, just using y

            xPos = center[0]-(((radius**2)*xFraction)**.5);
            //x is xFraction of the total radius value

            yPos = center[1]-(((radius**2)*yFraction)**.5);
            //xyis yFraction of the total radius value


            if(xMult==-1){
                xPos+=(center[0]-xPos)*2
                //x pos right of the center, needs to be corrected for
            }

            if(yMult==-1){
                yPos+=(center[1]-yPos)*2
                //y pos below the center, needs to be corrected for
            }

            
            xPos = Math.round(xPos)
            //Returns xPos to integer values, as css px values must be integers
            
            yPos = Math.round(yPos)
            //Returns yPos to integer values, as css px values must be integers

            theta+=(incrementDirection*increment);
            //Changes theat angle dependent on increment (angle of change)
            //  And if the angle should increase and decrease, 
            //      enforcing a "cyclic consistancy"


            // [1, 1]   [-1,1]
            //       \ /
            //        . 
            //       / \
            // [1,-1]   [-1,-1]

            if(theta>=90 || theta<=offset){
                if(theta>=90){
                    theta -= (theta-90)
                }else if(theta<=offset){
                    theta += (offset-theta)
                }
                if (xMult==1 && yMult==1) {
                    //Was in first 90 degrees (0 - 90)
                    yMult = -1
                    incrementDirection = -1
                }else if (xMult==1 && yMult==-1) {
                    //Was in second 90 degrees (90 - 180)
                    flip=true
                    incrementDirection = 1
                    xMult = -1
                }else if (xMult==-1 && yMult==-1){
                    //Was in third 90 degrees (180 - 270)
                    incrementDirection = -1
                    yMult = 1
                }else if (xMult==-1 && yMult==1) {
                    //Was in last 90 degrees (270 - 360)
                    flip=false
                    incrementDirection = 1
                    xMult = 1
                    radius-=10
                }
            }

            yield [xPos,yPos];
            //Gives the coordinates to the next .next() call
        }
    }

    type item = {
        name:string,
        image:string,

    };

    type returnObject = [item,...number[]][];

    const convertToPercent = (i:number,max:number) => Math.floor(i/max * 100)

    const getNextPoints = (items:item[],iterator:IterableIterator<[number,number]>,max:number[]): returnObject => {
        let data:returnObject = []
        let quantity = items.length
        for(let i=0;i<quantity;i++){
            let value = iterator.next();
            let transformedValues = [...value.value].map( (i,n) => convertToPercent(i,max[n]))
            data.push([items[i],...transformedValues])
        }
        return data
    }

    const getDataPoints = (items:item[]) => {
        let iterator = getCirclePoint(variations[0],[730,200],(360/items.length)+variations[1],variations[2])
        //Creates coordinate generator

        return getNextPoints(items,iterator,[740*2,220*2])
        //Generates required coordinates and returns these to the caller
    }
    
    setInterval(() => {
        let r = Math.random()
        if(r>.8){
            setVariations([30,0,0])
        }else{
            setVariations([22+(10*Math.random()),15*Math.random(),20*Math.random()])
        }
    },10000)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("../../../../api/Skills",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            if(response.status !==404){
                const responsejson = await (response).json()
                let result = responsejson.data.map((skill:any) => {
                    return {name:skill.id,image:skill.data.image_url}
                })
                setSkills([...result])
            }}
        fetchData();
        },[]);

    return(
        <div className="text-center" id={styles.container}>
            <div id={styles.title}>
                <p>Skills</p>
            </div>

            
            <div id={styles.skill_area}>
            {(getDataPoints(skills)).map((i,index) => {
                
                let xPos = i[1]
                let yPos = i[2]

                
                
                return <SkillPoint key={i[0].name} object={i[0]} yPos={yPos} xPos={xPos} index={index}/>
            }
            )}
            </div>
            
        </div>
    )
}

export default Skills;