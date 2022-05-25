import Get from "./Get";
import Put from './Put'
// GET
const getNewsMovie = () => Get('movies?_sort=id&_order=desc');
const updateNewsMovie = (data, id) => Put(`movies/${id}`, data);
const API = {
    getNewsMovie,
    updateNewsMovie
}

export default API;
