import {API_KEY} from './apikey'
import './style.css'
let html = document.querySelector('html')

class Weather{
    constructor(zip){
    this.zip = zip
    }
    get window(){
        return window
    }
    retrieve(zip){
        const query = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&APPID=${API_KEY}`
        return query
    }
}