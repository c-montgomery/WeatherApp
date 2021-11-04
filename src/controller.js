import {API_KEY} from './apikey'
import './style.css'
import pic from './background.jpg'
import Weather from './Weather'

let thing = new Image()
thing.src = pic

let html = document.querySelector('html')


let input = document.querySelector('input')
window.addEventListener('keydown',(e)=> {
    Weather.checkKey(e)
    let info = new Weather()
    info.retrieve(85014)
    
})






