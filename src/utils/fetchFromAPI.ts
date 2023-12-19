import axios from 'axios';

export const fetchFromAPI = async (url: string) => {
    const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`, {
        params: {
            maxResults: 50,
        },
        headers: {
            'X-RapidAPI-Key': "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
    });

    return data;
};
