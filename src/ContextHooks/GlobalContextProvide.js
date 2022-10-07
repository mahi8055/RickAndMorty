//---------- imports

// react
import React, { useEffect, useState, createContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme, Keyboard } from "react-native";

// third party lib
import { showMessage, hideMessage } from "react-native-flash-message";
import { getDataFromServerWithGivenParams } from "../Utils/Axios";

//---------- context

const AppContext = createContext();

//---------- main app / component

const GlobalContextProvide = (props) => {

    //---------- state, veriables and hooks

    const [appStateObject, setAppStateObject] = useState({})
    const [loading, setLoading] = useState(false);

    //---------- life cycle

    //---------------------------------- Axios Api cal ----------------------------------------//

    const getData = ({
        data, key, end_point, params = {}, is_force_request = false
    }) => {

        if (!loading || is_force_request) {

            // for global loading
            setLoading(true);

            // get data from api send call back function
            getDataFromServerWithGivenParams({
                data, key, end_point, call_back: postDataCallBack
            })
        }
    }

    // call back from api
    const postDataCallBack = (response) => {

        // veriable
        let key = response.key
        let data

        // success
        if (response.status === 'success') {

            data = {
                response: response.response
            }
        }

        // error
        else {

            data = {
                error: response.error
            }

            setLoading(false);

            // show error
            showMessage({
                message: response.error || errors[key],
                type: 'danger',
            });

        }

        // save data in the global state
        storeDataInAppState({ key, data })
    }

    //----------------------------------- Store data in state---------------------------------//

    // store data in state
    const storeDataInAppState = ({ key, data }) => {

        setAppStateObject({
            ...appStateObject,
            [key]: data,
        })

        // set global loading
        setLoading(false);

    }

    // remove data from app state
    const removeDataFromAppState = ({ key }) => {

        setAppStateObject({
            ...appStateObject,
            [key]: {},
        })

        setLoading(false);
    }


    // remove data from app state
    const removeAllDataFromAppState = () => {

        setAppStateObject({})
    }


    //---------- return main view

    return (
        <AppContext.Provider
            value={{
                loading,
                appStateObject,

                setLoading,
                getData,
                storeDataInAppState,
                removeDataFromAppState,
                removeAllDataFromAppState,
            }}
        >

            {
                props.children
            }

        </AppContext.Provider >

    );
};

//---------- export component

export { GlobalContextProvide, AppContext };
