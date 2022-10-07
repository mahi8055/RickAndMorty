
//---------- import 

import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

//---------- main component

const CustomText = (props) => {

  //----------- state veriable and props

  const { numberOfLines, text, text2, style, style2 } = props;

  //---------- main return

  return (
    <>
      <Text numberOfLines={numberOfLines} style={[{ color: '#000', fontFamily: 'Inter-Regular' }, style,]}>
        {text}
      </Text>
      {
        !!text2 && <Text numberOfLines={numberOfLines} style={[{ color: '#000', fontFamily: 'Inter-Regular' }, style2]}>
          {text2}
        </Text>
      }
    </>


  );
};

export default CustomText;

