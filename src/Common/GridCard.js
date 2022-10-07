//----------imports

// react
import React from "react";
import { ImageBackground, Image } from "react-native";

// common
import CustomView from "../Common/CustomView";
import CustomText from "../Common/CustomText";


//---------- main components

const GridCard = (props) => {

    //---------- state, veriable, context and hooks

    let data = props?.item || {}

    //---------- Main View
    return (
        <>

            <CustomView
                style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#000',
                    flex: 1,
                    flexDirection: 'row',

                }}
            >

                {
                    //---------- profile image
                }
                <Image
                    source={{ uri: data?.image }}
                    style={{
                        flex: 1,

                    }}
                />

                {
                    //---------- blur image and info
                }
                <ImageBackground
                    source={{ uri: data?.image }}
                    blurRadius={7}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                    }}
                >
                    <CustomView
                        style={{
                            paddingTop: 15,
                            paddingHorizontal: 8
                        }}
                    >

                        <CustomText
                            style={{
                                color: '#93f373',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textShadowColor: 'black',
                                textShadowOffset: { width: -1, height: 0 },
                                textShadowRadius: 10,
                            }}

                            text={`${data?.name}`}
                        />

                        <CustomText
                            style={{
                                color: '#000',
                                fontSize: 18,
                                fontWeight: '500',
                                paddingTop: 7,
                            }}
                            text={`Species : ${data?.species}`}
                        />

                        <CustomText
                            style={{
                                color: '#000',
                                fontSize: 18,
                                fontWeight: '500',
                                paddingTop: 7,


                            }}

                            text={`Gender : ${data?.gender}`}
                        />


                        <CustomView>
                            <CustomText
                                numberOfLine={1}
                                style={{
                                    color: '#000',
                                    fontSize: 18,

                                    fontWeight: '400',

                                }}
                                text={`Status : ${data?.status}`}
                            />

                            <CustomText
                                style={{
                                    color: '#000',
                                    fontWeight: '400',
                                    fontSize: 18,

                                }}
                                text={`Location : ${data?.location?.name}`}
                            />
                        </CustomView>

                    </CustomView>
                </ImageBackground>

            </CustomView>
        </>

    );
};

//---------- export component

export default GridCard;



