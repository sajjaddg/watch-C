import axios from "axios";

const config = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
};

export const MovieIdByTitle = async (title) => {
   
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${title}/`
    try {
        const { data } = await axios.get(url, config)
        console.log(data);
        return data;
    } catch (e) {
        throw new Error('Movies In MovieIdByTitle :', e);
    }
}
export const MovieById = async (id) =>{
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`
    try {
        const { data } = await axios.get(url, config)
        return data;
    } catch (e) {
        throw new Error('Movies In MovieById :', e);
    }
}
