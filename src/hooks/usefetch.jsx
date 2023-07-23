import { useEffect, useState } from "react";

function useFetch(url, method='GET'){
    let [data,setData] = useState(null);
    let [loading,setLoading] = useState(null);
    let [error,setError] = useState(null);
    let [postData , setPostData] = useState(null);


    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;

            setLoading(true);

            let options={
                signal,
                method
            }
            let fetchData = ()=>{
                fetch(url,options)
            .then(res => {
                if(!res.ok) {
                    throw Error('Something Went wrong');
                }
                return res.json();
            })
            .then(data => {   
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch(e => {
                setError(e.message);
            })
        //cleanup function
            }
            if(method == 'POST' && postData){
                options={
                    ...options,
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(postData) 
                }
                fetchData();
            }
            if(method == 'GET'){
                fetchData();
            }
        return () => {
            controller.abort();
        }
    },[url,postData]);
    return { setPostData, data, loading, error,setLoading};
}
export default useFetch;