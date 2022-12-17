export const properties = {

    method: 'GET',
    params: { property_id: '3199790641' },
    headers: {

        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}