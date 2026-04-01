const users = [
  {name:'Mesto', age: 50},
  {name:'Filiz', age: 40},
  {name:'Bidik', age: 20},
  {name:'Helin', age: 17},
  {name:'Ilos', age: 14},
  {name:'isminur', age: 34}
]
let title = 'Webpack Module' //see this converted to var by babel
document.getElementById('title').innerText = title

let getUsers = () => {
  console.log(users)
}
getUsers()


import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
document.querySelector('img').src = img1
const imageName = [img1, img2, img3]

document.querySelectorAll('img').forEach((item, index) => {
  item.src = imageName[index]
});
//after bundle run on console node ./dist/bundle.js