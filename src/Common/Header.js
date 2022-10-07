//---------- imports

// react
import React, { useEffect } from "react";
import { Dimensions } from "react-native";

// third party lib
import { Shadow } from 'react-native-shadow-2';

// common
import CustomText from "../Common/CustomText";
import CustomView from "../Common/CustomView";

//---------- main component

const Header = ({ title, fontWeight }) => {

    //---------- state, veriable, context and hooks


    //---------- main return

    return (
        <Shadow
            style={{
                width: '100%',
            }}
        >
            <CustomView
                style={{
                    padding: 18,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >


                <CustomText

                    numberOfLine={2}
                    style={{
                        color: '#000',
                        fontSize: 20,
                        fontWeight: 'bold',

                        textShadowColor: '#A4A4A4',
                        textShadowOffset: { width: 1, height: 3 },
                        textShadowRadius: 10,

                    }}
                    text={title}
                />
            </CustomView>



        </Shadow>
    );
};



//---------- export component

export default Header;
