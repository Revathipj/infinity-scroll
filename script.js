//import apiKey from "./script.js"

// Unplash API
const count = 10;
apiKey = 'TsqDrGyLLNfvX5YFjJzslSwbbjgTnlgjqGhGJKy4BsE';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// console.log(apiKey);
// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();