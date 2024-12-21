import { useEffect, useState } from 'react';
import { fetchPopularAnime, fetchRecommendationAnime, fetchUpComingAnime, fetchSearchAnime, fetchOnGoingAnime, fetchTopCharacters } from '../Api/JikanApi';

const useAnimeData = () => {
    const [popularAnime, setPopularAnime] = useState(() => {
        return JSON.parse(localStorage.getItem('popularAnime')) || [];
    });
    const [recommendationsAnime, setRecommendationsAnime] = useState(() => {
        return JSON.parse(localStorage.getItem('recommendationsAnime')) || [];
    });
    const [upComingAnime, setUpComingAnime] = useState(() => {
        return JSON.parse(localStorage.getItem('upComingAnime')) || [];
    });
    const [onGoing, setOnGoing] = useState(() => {
        return JSON.parse(localStorage.getItem('onGoing')) || [];
    });
    const [searchAnime, setSearchAnime] = useState(() => {
        return JSON.parse(localStorage.getItem('searchAnime')) || '';
    });
    const [topCharacters, setTopCharacters] = useState(() => {
        return JSON.parse(localStorage.getItem('topCharacters')) || [];
    });
    const [loading, setLoading] = useState(true);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const search = await fetchSearchAnime();
                setSearchAnime(search);
                localStorage.setItem('searchAnime', JSON.stringify(search));

                await delay(1000);

                const topChars = await fetchTopCharacters();
                setTopCharacters(topChars);
                localStorage.setItem('topCharacters', JSON.stringify(topChars));

                await delay(1000);

                const popular = await fetchPopularAnime();
                setPopularAnime(popular);
                localStorage.setItem('popularAnime', JSON.stringify(popular));

                await delay(1000);

                const recommendations = await fetchRecommendationAnime();
                setRecommendationsAnime(recommendations);
                localStorage.setItem('recommendationsAnime', JSON.stringify(recommendations));

                await delay(1000);

                const upComing = await fetchUpComingAnime();
                setUpComingAnime(upComing);
                localStorage.setItem('upComingAnime', JSON.stringify(upComing));

                await delay(1000);

                const onGoingAnime = await fetchOnGoingAnime();
                setOnGoing(onGoingAnime);
                localStorage.setItem('onGoing', JSON.stringify(onGoingAnime));



            } catch (error) {
                console.error(`Fetch data gagal: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        if (
            !localStorage.getItem('popularAnime') ||
            !localStorage.getItem('recommendationsAnime') ||
            !localStorage.getItem('upComingAnime') ||
            !localStorage.getItem('onGoing') ||
            !localStorage.getItem('searchAnime') ||
            !localStorage.getItem('topCharacters')
        ) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    return { popularAnime, recommendationsAnime, upComingAnime, onGoing, loading, searchAnime, topCharacters };
};

export default useAnimeData;
