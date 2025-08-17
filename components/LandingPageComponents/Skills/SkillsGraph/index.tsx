import React,{ useState} from "react";
import useSkills from "../useSkills";
import SkillPoint from "./SkillPoint";

const SkillsGraph = () => {
    const skills = useSkills();
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
               
            }

            yFraction = radius/(tan(theta) + 1);
            xFraction = radius/((1/tan(theta)) + 1);
            
            if(flip){
                theta = 90-theta
               
            }

            if(xMult==-1){
                [yFraction,xFraction] = [xFraction,yFraction]
                
            }

            xPos = center[0]-(((radius**2)*xFraction)**.5);
            yPos = center[1]-(((radius**2)*yFraction)**.5);

            if(xMult==-1){
                xPos+=(center[0]-xPos)*2
            }

            if(yMult==-1){
                yPos+=(center[1]-yPos)*2
            }

            xPos = Math.round(xPos)
            yPos = Math.round(yPos)
            theta+=(incrementDirection*increment);
        
            if(theta>=90 || theta<=offset){
                if(theta>=90){
                    theta -= (theta-90)
                }else if(theta<=offset){
                    theta += (offset-theta)
                }
                if (xMult==1 && yMult==1) {
                    yMult = -1
                    incrementDirection = -1
                }else if (xMult==1 && yMult==-1) {
                    flip=true
                    incrementDirection = 1
                    xMult = -1
                }else if (xMult==-1 && yMult==-1){
                    incrementDirection = -1
                    yMult = 1
                }else if (xMult==-1 && yMult==1) {
                    flip=false
                    incrementDirection = 1
                    xMult = 1
                    radius-=10
                }
            }

            yield [xPos,yPos];
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
        
        return getNextPoints(items,iterator,[740*2,220*2])
    }
    
    setInterval(() => {
        let r = Math.random()
        if(r>.8){
            setVariations([30,0,0])
        }else{
            setVariations([22+(10*Math.random()),15*Math.random(),20*Math.random()])
        }
    },10000)

    return(
        <div className="text-center" id="skillscontainer">
            <div id="skillTitle">
                <p>Skills</p>
            </div>

            
            <div id="skill_area">
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

export default SkillsGraph;