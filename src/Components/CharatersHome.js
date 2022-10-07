//---------- imports

// react
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, TouchableOpacity } from "react-native";

// common
import CustomView from "../Common/CustomView";
import CustomLoder from "../Common/CustomLoder";
import GridCard from "../Common/GridCard";
import Header from "../Common/Header";

// context 
import ContextHelper from "../ContextHooks/ContextHelper";

// constants
const windowHeight = Dimensions.get('window').height;

//---------- main list component

const CharatersHome = ({ navigation }) => {

    //---------- state, redux state, veriable and hooks
    const {
        appStateObject,
        getData,

    } = ContextHelper()

    const [dataCharaters, setDataCharaters] = useState([])
    const [offset, setOffset] = useState(1);
    const [loading, setLoading] = useState(false);

    //---------- life cycles

    // fetch data Server
    useEffect(() => {
        FetchCharacters()
    }, [])

    // Api Response 
    useEffect(() => {

        if (appStateObject?.show_Characters_Poket?.response?.results) {

            var response = appStateObject?.show_Characters_Poket?.response?.results

            setDataCharaters([...response, ...dataCharaters])

            setOffset(offset + 1);
            setLoading(false)
        }
    }, [appStateObject?.show_Characters_Poket?.response,])

    //---------- helpers

    // api call
    const FetchCharacters = () => {

        setLoading(true)
        getData({
            key: 'show_Characters_Poket',
            end_point: ` https://rickandmortyapi.com/api/character?page=${offset}`,

            is_force_request: true
        })
    }

    //---------- render helper

    const renderItem = ({ item, index }) => {

        let length_of_data = dataCharaters?.length

        return (
            <>

                {/* card */}

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("charatersDetails", { data: item })

                    }}
                    style={{
                        height: 225,
                        marginBottom: (length_of_data - 1) === index ? 100 : 0,
                    }}
                >
                    <GridCard item={item} />

                </TouchableOpacity>

                {/* loading */}
                {
                    (length_of_data - 1) === index && loading &&
                    <ActivityIndicator color={'#000'} />
                }
            </>
        )
    }

    //---------- Main View

    return (

        <CustomView
            style={{
                height: windowHeight,
            }}
        >

            {/* top header section */}
            <Header
                isCenter={true}
                navigation={navigation}
                title={'CHARACTERS'}
            />

            {/* bottom content section */}
            <FlatList
                ItemSeparatorComponent={() => {
                    return (
                        <CustomView style={{ height: 20 }} />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <CustomView style={{ height: 100 }} />
                    )
                }}
                initialNumToRender={5}
                style={{
                    paddingHorizontal: 15,
                    paddingTop: 20,
                    paddingBottom: 100
                }}
                data={dataCharaters}
                renderItem={({ item, index }) => renderItem({ item, index })}
                keyExtractor={(item, index) => index}
                onEndReached={FetchCharacters}
                onEndReachedThreshold={0.5}

            />

        </CustomView>
    )

}

export default CharatersHome;

