
//---------- imports

// react
import React from "react";

import { ActivityIndicator } from "react-native";

//common
import CustomView from "./CustomView";


const CustomLoder = () => {

    return (

        <CustomView
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                backgroundColor: 'transparent',
            }}
        >

            <ActivityIndicator size={"large"} color={'#000'} />

        </CustomView>
    )

}

export default CustomLoder;