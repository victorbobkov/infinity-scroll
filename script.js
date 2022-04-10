const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

// Unsplash API
const count = 10
const apiKey = '8AwK046-BjaeBFDcWwMKgt5sSGhs9R8OKPVHU_-tqhI'
const collectionsId = '12196158,4260285,661099,989896'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&collections=${collectionsId}`

// Create Elements For Links & Photos, add to DOM
const displayPhotos = () => {
   // Run function for each object in photosArray
   photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a')
      item.setAttribute('href', photo.links.html)
      item.setAttribute('target', '_blank')
      // Create <img> for photo
      const img = document.createElement('img')
      img.setAttribute('src', photo.urls.regular)
      img.setAttribute('alt', photo.alt_description)
      img.setAttribute('title', photo.alt_description)
      // Put <img> inside <a>, then put both inside imageContainer element
      item.appendChild(img)
      imageContainer.appendChild(item)
   })
}

// Get photos from Unsplash API
async function getPhotos() {
   try {
      const response = await fetch(apiUrl)
      photosArray = await response.json()
      displayPhotos()
   } catch (e) {
      console.log(e)
   }
}

// On Load
getPhotos()