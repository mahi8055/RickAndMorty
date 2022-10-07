//---------- imports

// react
import React, { useContext } from "react";

//---------- context

import { AppContext } from '../ContextHooks/GlobalContextProvide'


const ContextHelper = () => {

    //---------- state, veriable, context and hooks
    const {
        loading,
        appStateObject,

        setLoading,
        getData,
        storeDataInAppState,
        removeDataFromAppState,
        removeAllDataFromAppState,
    } = useContext(AppContext);

    //---------- main app / component

    return {
        loading,
        appStateObject,

        setLoading,
        getData,
        storeDataInAppState,
        removeDataFromAppState,
        removeAllDataFromAppState,
    }

}

//---------- export component

export default ContextHelper;
