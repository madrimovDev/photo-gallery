let API_URL = "https://api.unsplash.com/photos?page=2"

let columns = document.querySelectorAll('.column')

fetch(API_URL, {
  headers: {
    Authorization: "Client-ID Mmq9Xan9yMp_3eRZZISIQhtIBZoJLHUyXp01TmCk418"
  },
}).then(response => {
  return response.json()
}).then(result => {
  const res1 = result.slice(0, 3)
  const res2 = result.slice(3, 6 )
  const res3 = result.slice(6, 10 )

  res1.forEach((item, index) => {
    let img = document.createElement('img')
    img.src = item.urls.regular
    columns.forEach((column, index) => {
      if(index === 0){
        column.append(img)
      }
    })
  })

  res2.forEach((item, index) => {
    let img = document.createElement('img')
    img.src = item.urls.regular
    columns.forEach((column, index) => {
      if(index === 1){
        column.append(img)
      }
    })
  })

  res3.forEach((item, index) => {
    let img = document.createElement('img')
    img.src = item.urls.regular
    columns.forEach((column, index) => {
      if(index === 2){
        column.append(img)
      }
    })
  })
})

