import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';

const Skills = () => {

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
                    xMult = -1;
                }else if (xMult==-1 && yMult==-1){
                    //Was in third 90 degrees (180 - 270)
                    incrementDirection = -1
                    yMult = 1;
                }else if (xMult==-1 && yMult==1) {
                    //Was in last 90 degrees (270 - 360)
                    flip=false
                    incrementDirection = 1
                    xMult = 1;
                }
            }

            yield [xPos,yPos];
            //Gives the coordinates to the next .next() call
        }
    }

    type item = {
        id:number
    } | number;

    const getNextPoints = (items:item[],iterator:IterableIterator<[number,number]>): item[][] => {
        let data:number[][] = []
        let quantity = items.length
        for(let i=0;i<quantity;i++){
            let value = iterator.next();
            data.push([items[i],...value.value])
        }
        return data
    }

    const getDataPoints = (items:item[]) => {

        let iterator = getCirclePoint(30,[700,180],360/items.length,0)
        //Creates coordinate generator

        return getNextPoints(items,iterator)
        //Generates required coordinates and returns these to the caller
    }
    
    
    

    return(
        <div className="ml-4 mr-8 text-center self-center" id={styles.container}>
            <div className="self-center" id={styles.title}>
                <p>Skills</p>
            </div>

            {/* todo: change circle center based on screen size's */}

            {(getDataPoints([{id:1},
                            {id:2},
                            {id:3},
                            {id:4},
                            {id:5},
                            {id:6},
                            {id:7},
                            {id:8},
                            {id:9},
                            {id:10},
                            {id:11},
                            {id:12},
                            ])).map(i => {
                
                let xPos = i[1]
                let yPos = i[2]

                //Ensure only atempt to get .id of i[0] value 
                return(<p style={{top:`${yPos}px`,left:`${xPos}px`}}>{i[0].id}</p>)}
            )}
            
        </div>
    )
}

export default Skills;