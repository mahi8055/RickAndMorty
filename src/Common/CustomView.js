//---------- imports

// react
import React, { useEffect } from "react";
import { View } from "react-native";

//---------- main app / component

const CustomView = (props) => {

    //---------- state, veriables and hooks

    //---------- life cycle

    //---------- return main view 

    return (
        <View
            style={[
                { backgroundColor: 'transparent' }, props?.style
            ]}
        >
            {
                props.children
            }
        </View>
    );
};

//---------- export component

export default CustomView;
