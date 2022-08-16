import { MovieIdByTitle } from "./Movies"
import { SeriesIdByTitle } from "./Series"

export const SearchByTitle = async (title) => {
    let data = {}
    try {
        let movies = await MovieIdByTitle(title)
        let series = await SeriesIdByTitle(title)
        data = {
            movies,
            series
        }
      return data;
    } catch (e) {
        throw new Error('index In SearchByTitle :', e);
    }
}