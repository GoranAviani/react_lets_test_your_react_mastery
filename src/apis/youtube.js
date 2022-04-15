import axios from 'axios';


const KEY = 'AIzaSyA2bxs44nmD9x_XTKl2q-zTfser9LgaPFg'



export default axios.create(
    {
        baseURL: ' https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY
        }
    }
)