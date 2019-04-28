// From Nate
// const xhr = new XMLHttpRequest()

        // Method    // URL
// xhr.open("GET", "https://rickandmortyapi.com/api/character")
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const data = JSON.parse(xhr.responseText)
//         // console.log(data)
//     }
// }


// Promises
// 3 Different Status
    // 1. Pending
    // 2. Resolves
    // 3. Rejects


// const coinFlip = () => {
//     const randomNum = Math.floor(Math.random() * 2)
//     return new Promise((resolve, reject) => {
//         if(randomNum === 0){
//             resolve("It landed on Heads")
//         } else if(randomNum === 1){
//             reject("It landed on Tails")
//         }
//     })
// }

// coinFlip()
//     .then(response => console.log("RESPONSE:" + response))
//     .catch(err => console.log("REJECT:" + err))



function get(url){
  const xhr = new XMLHttpRequest()
  xhr.open("GET", url)
  xhr.send()

  return new Promise((resolve, reject) => {
      
      xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
              const data = JSON.parse(xhr.responseText)
              resolve(data.results)
          } else if(xhr.readyState === 4 && xhr.status !== 200){
              const err = JSON.parse(xhr.responseText)
              reject(err)
          }
      }
  })
}

// get("https://rickandmortyapi.com/api/character")
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

// "https://rickandmortyapi.com/api/character"
// "https://rickandmortyapi.com/api/location"
// "https://rickandmortyapi.com/api/episode"

async function getAllRickData(){
  try{
      const characters = await get("https://rickandmortyapi.com/api/character")
      const locations = await get("https://rickandmortyapi.com/api/location")
      const episodes = await get("https://rickandmortyapi.com/api/episode")
      console.log(characters)
      console.log(locations)
      console.log(episodes)
  }
  catch(err){
      console.log(err)
  }
}

// getAllRickData()



// const getAllData = async () => {

// }
