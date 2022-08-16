import axios from "axios";
import {config} from './MoviesDatabase.Config'


export const SeriesIdByTitle = async (title) => {
   
    const url = `https://moviesminidatabase.p.rapidapi.com/series/idbyTitle/${title}/`
    try {
        const { data } = await axios.get(url, config)
        return data;
    } catch (e) {
        throw new Error('Series In SeriesIdByTitle :', e);
    }
}
