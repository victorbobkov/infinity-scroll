const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

// Unsplash API
const count = 10
const apiKey = '8AwK046-BjaeBFDcWwMKgt5sSGhs9R8OKPVHU_-tqhI'
const collectionsId = '12196158,4260285,661099,989896'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&collections=${collectionsId}`

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
   for (const key in attributes) {
      element.setAttribute(key, attributes[key])
   }
}

// Create Elements For Links & Photos, add to DOM
const displayPhotos = () => {
   // Run function for each object in photosArray
   photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a')
      setAttributes(item, {
         href: photo.links.html,
         target: '_blank',
      })

      // Create <img> for photo
      const img = document.createElement('img')
      setAttributes(img, {
         src: photo.urls.regular,
         alt: photo.alt_description,
         title: photo.alt_description,
      })

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