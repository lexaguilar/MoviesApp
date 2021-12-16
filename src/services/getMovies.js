import { allMovies } from '../data/moviedata';

export const getMovies = async ({title_like, dates, pageSize, pageNumber}) => {

    let data = allMovies.filter(movie => movie.year >= dates[0] && movie.year <= dates[1]);

    if(title_like)
        data = data.filter(movie => movie.title.toLowerCase().includes(title_like.toLowerCase()));    
        
    const start = (pageNumber * pageSize) - pageSize;
    const end = (pageNumber * pageSize);

    const result = {
        totalCounts: data.length,
        data: data.slice(start, end)
    };

    return new Promise((resolve, reject) => resolve(result));

}

