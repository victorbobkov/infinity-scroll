// Unsplash API
const count = 10
const apiKey = '8AwK046-BjaeBFDcWwMKgt5sSGhs9R8OKPVHU_-tqhI'
const collectionsId = '12196158'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&collections=${collectionsId}`

// Get photos from Unsplash API
async function getPhotos() {
   try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
   } catch (e) {
      console.log(e)
   }
}

// On Load
getPhotos()