const key = 'bc62b179481c4b0180e201430231601'

const fetchData = async (city) => {
    const fetchResponse = (await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)).json()
    return fetchResponse
}

export default fetchData