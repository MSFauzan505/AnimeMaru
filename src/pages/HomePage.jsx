import MainLayout from '../layout/MainLayout'
import useAnimeData from '../hooks/useAnimeData'
import Slider from '../fragment/SliderTopAnime'
import HightLightAnime from '../fragment/HightLightAnime'
import Ongoing from '../fragment/Ongoing'
import RecommendAnime from '../fragment/RecommendAnime'
import TopChara from '../fragment/TopChara'
import UpComing from '../fragment/UpComing'

function HomePage({onLogOut}) {
    const { popularAnime, loading, searchAnime, upComingAnime, onGoing, recommendationsAnime, topCharacters } = useAnimeData()
    
    return (
        <MainLayout className='font-poppins' onLogOut={onLogOut}>
            <Slider popularAnime={popularAnime} loading={loading}/>
            <HightLightAnime popularAnime={popularAnime}/>
            <RecommendAnime recommendationsAnime={recommendationsAnime} loading={loading}/>
            <Ongoing onGoing={onGoing} loading={loading}/>
            <UpComing upComingAnime={upComingAnime} loading={loading}/>
            <TopChara topCharacters={topCharacters} loading={loading}/>
        </MainLayout>
    )
}

export default HomePage