const BASE_URL = 'https://api.jikan.moe/v4'

export const fetchPopularAnime = async ()=>{
    const response = await fetch(`${BASE_URL}/top/anime`)
    const data = await response.json()
    return data.data
}

export const fetchRecommendationAnime = async ()=>{
    const response = await fetch(`${BASE_URL}/recommendations/anime`)
    const data = await response.json()
    return data.data
}

export const fetchUpComingAnime = async ()=>{
    const response = await fetch(`${BASE_URL}/seasons/upcoming`)
    const data = await response.json()
    return data.data
}

export const fetchSearchAnime = async (query)=>{
    const response = await fetch(`${BASE_URL}/anime?q=${query}`)
    const data = await response.json()
    return data.data
}

export const fetchOnGoingAnime = async ()=>{
    const response = await fetch(`${BASE_URL}/seasons/now`)
    const data = await response.json()
    return data.data
}

export const fetchTopCharacters = async ()=>{
    const response = await fetch(`${BASE_URL}/top/characters`)
    const data = await response.json()
    return data.data
}