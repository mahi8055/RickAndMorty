// react
import React, { useEffect, useState } from "react";
import { ScrollView, ImageBackground, ActivityIndicator, TouchableOpacity, } from "react-native";

// third party lib
import { Shadow } from 'react-native-shadow-2';

// common
import CustomView from "../Common/CustomView";
import CustomText from "../Common/CustomText";

import ContextHelper from '../ContextHooks/ContextHelper';
import ArrowIcon from "../Assets/Icons/ArrowIcon";
import CustomLoder from "../Common/CustomLoder";


//---------- main component

const CharatersDetails = ({ navigation, route }) => {

    //---------- state, veriable, context and hooks , params

    const {
        appStateObject,
        getData,

    } = ContextHelper()

    let profileData = route?.params?.data

    const [location, setLocation] = useState()
    const [origin, setOrigin] = useState()
    const [loading, setLoading] = useState(false);


    //---------- life cycles

    // response location data
    useEffect(() => {
        setLoading(false)
        if (appStateObject?.show_Location_Poket?.response) {

            setLocation(appStateObject?.show_Location_Poket?.response)
        }
    }, [appStateObject?.show_Location_Poket?.response])

    // response origin 
    useEffect(() => {
        setLoading(false)
        if (appStateObject?.show_orogin_Poket?.response) {


            setOrigin(appStateObject?.show_orogin_Poket?.response)
        }
    }, [appStateObject?.show_orogin_Poket?.response])

    useEffect(() => {
        setLoading(true)
        // feth origin Data
        getData({
            key: 'show_orogin_Poket',
            end_point: profileData?.origin?.url,
            is_force_request: true
        })

        // feth Location Data
        getData({
            key: 'show_Location_Poket',
            end_point: profileData?.location?.url,
            is_force_request: true
        })
    }, [])

    //---------- main return

    if (loading) {

        return (
            <CustomLoder />
        )
    }

    else {

        return (

            <CustomView
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}
            >

                {/* scrolling section */}
                <ScrollView
                    style={{
                        position: 'relative'
                    }}
                >

                    <CustomView
                        style={{
                            flex: 1,
                            paddingBottom: 50
                        }}
                    >

                        {
                            //---------- top image section
                        }
                        <Shadow
                            style={{
                                height: 250,
                                width: '100%',
                            }}
                        >
                            <ImageBackground
                                source={{ uri: profileData?.image }}
                                resizeMode='stretch'
                                style={{
                                    alignItems: 'flex-start',
                                    height: '100%',

                                }}
                            >

                                {
                                    //---------- back arrow
                                }
                                <TouchableOpacity
                                    style={{
                                        margin: 10
                                    }}

                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                >
                                    <ArrowIcon
                                        fill={null}
                                        stroke={"#000"}
                                        height={30}
                                        width={30}
                                    />
                                </TouchableOpacity>

                                {
                                    //---------- content
                                }
                                <CustomView
                                    style={{
                                        paddingHorizontal: 10,
                                        paddingTop: "45%",
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        flexDirection: 'row',


                                    }}
                                >

                                    <CustomText
                                        text={profileData?.name}
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            textShadowColor: 'black',
                                            textShadowOffset: { width: 1, height: 2 },
                                            textShadowRadius: 10,
                                        }}
                                    />
                                    <CustomText
                                        text={`${profileData?.status}`}
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            textShadowColor: 'black',
                                            textShadowOffset: { width: 1, height: 2 },
                                            textShadowRadius: 10,
                                        }}
                                    />
                                </CustomView>

                            </ImageBackground>

                        </Shadow>

                        {
                            //---------- bottom detail section
                        }
                        <CustomView
                            style={{
                                paddingHorizontal: 20,
                            }}
                        >

                            {
                                //---------- origin
                            }
                            <>

                                <CustomText
                                    text={'Origin'}
                                    style={{
                                        marginTop: 30,
                                        marginBottom: 10,
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: '#747474'
                                    }}
                                />

                                <CustomText
                                    text={`Name : ${origin?.name}`}
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: '#A4A4A4'
                                    }}
                                />

                                <CustomText
                                    text={`Dimension : ${origin?.dimension}`}

                                    style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: '#A4A4A4'
                                    }}
                                />
                                <CustomText
                                    text={`Type : ${origin?.type}`}

                                    style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: '#A4A4A4'
                                    }}
                                />

                                <CustomText
                                    text={`Amount of Residents : ${origin?.residents?.length}`}

                                    style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: '#A4A4A4'
                                    }}
                                />
                            </>

                            {
                                //---------- Location
                            }
                            <CustomView
                                style={{
                                    marginTop: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >

                                <CustomView>

                                    <CustomText
                                        text={'Location'}
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            color: '#747474'
                                        }}
                                    />

                                    <CustomText

                                        text={`Name : ${location?.name}`}
                                        style={{
                                            marginTop: 10,
                                            fontSize: 20,
                                            fontWeight: '400',
                                            color: '#A4A4A4'
                                        }}
                                    />
                                    <CustomText
                                        text={`dimension : ${location?.dimension}`}
                                        style={{
                                            fontSize: 20,
                                            fontWeight: '400',
                                            color: '#A4A4A4'
                                        }}
                                    />
                                    <CustomText
                                        text={`Amount of Residents : ${location?.residents?.length}`}
                                        style={{
                                            fontSize: 20,
                                            fontWeight: '400',
                                            color: '#A4A4A4'
                                        }}
                                    />

                                </CustomView>

                            </CustomView>

                            {
                                //---------- episodes
                            }
                            <>
                                <CustomText
                                    text={'Episode'}
                                    style={{
                                        marginTop: 10,
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: '#747474'

                                    }}
                                />

                                <CustomText
                                    text={`All Episode : ${profileData?.episode?.length}`}
                                    style={{
                                        marginTop: 10,
                                        fontSize: 20,
                                        fontWeight: '400',
                                        color: '#A4A4A4'
                                    }}
                                />

                            </>

                        </CustomView>

                    </CustomView>

                </ScrollView >

            </CustomView>
        );
    }

};

//---------- export component

export default CharatersDetails;

