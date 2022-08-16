import axios from "axios";
import {config} from './MoviesDatabase.Config'


export const ActorsIdByName = async (title) => {
   
    const url = `https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${title}/`
    try {
        const { data } = await axios.get(url, config)
        return data;
    } catch (e) {
        throw new Error('Actors In ActorsIdByName :', e);
    }
}
