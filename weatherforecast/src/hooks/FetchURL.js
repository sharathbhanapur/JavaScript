import {useState, useEffect} from 'react';

/* 
Hook for fetching weather details from the URL set in APP.js and return response with error(if any)
Loader UI will displayed after button/key down event and after API return result renders on screen.
*/
const FetchURL = (initialURL) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const [url, setURL] = useState(initialURL);

    useEffect(() => {
        if(!url) return;
        setIsLoading(true);
        setError(null);
        setData(null);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                // If given location is not found
                if(data.cod >= 400) {
                    setError(data.message);
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
         }, [url]);

         return { data, error, isLoading, setURL };
       };
       
       export default FetchURL;
    
