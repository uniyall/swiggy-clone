import {useState, useEffect} from 'react';

export default function useTestData()
{
    const [beerList, setBeerList] = useState(null);
    useEffect(() => {
        const fun = async () => {
            const data = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=3');
            const json = await data.json();
            console.log(json);
            setBeerList(json);
        };
        fun();
    }, []);
    return beerList;
}