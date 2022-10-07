import axios from "axios";

export const getDataFromServerWithGivenParams = async ({ data, key, end_point, call_back }) => {

    let url = end_point
    const options = {
        headers: { "content-type": "application/json" }
    }
    axios.get(url, options)
        .then(function (response) {

            // success
            if (response?.data) {

                call_back({
                    status: 'success',
                    response: response?.data,
                    key
                })

                // error
            } else {


                call_back({
                    status: 'error',
                    error: response?.data?.message || 'Server Error! Please try again',
                    key
                })
            }
        })

        // axios error
        .catch(function (error) {

            call_back({
                status: 'error',
                error: error?.toString() || 'Server Error! Please try again....',
                key
            })

        })
        .catch(function (error) {
            console.log("error", error);
        });

}
