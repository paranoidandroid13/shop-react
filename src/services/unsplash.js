import axios from 'axios'

export async function getImages(count) {
  const URL = 'https://api.unsplash.com'
  const API_KEY = 'Poi0i-52sCT_C7bdt_7mjLrQYWbTaXJKcCjOcJpTtj4'
  const { data } = await axios(
    `${URL}/search/photos?query=cyberpunk&count=${count}&client_id=${API_KEY}`
  )
  const images = data.results.map((item) => item.urls.small)
  return images
}
