let API_URL = "https://api.unsplash.com/photos/?client_id=Mmq9Xan9yMp_3eRZZISIQhtIBZoJLHUyXp01TmCk418"

// malumot so'rash - GET

fetch(API_URL).then(response => {
  return response.json()
}).then(result => {
  console.log(result)
})