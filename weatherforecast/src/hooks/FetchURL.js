import {useState, useEffect} from 'react';

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
    
