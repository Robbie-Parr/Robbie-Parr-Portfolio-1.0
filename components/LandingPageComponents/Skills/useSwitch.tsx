import React,{useState} from "react";

const useSwitch = () => {
    const [boolVal,setBoolVal] = useState(false);

    const flip = ():void => {
        setBoolVal(!boolVal);
    }

    const value = boolVal;

    return {value,flip};
}

export default useSwitch;