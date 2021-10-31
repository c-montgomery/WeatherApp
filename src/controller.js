import {API_KEY} from './apikey'
import './style.css'
let html = document.querySelector('html')

let input = document.querySelector('input')
window.addEventListener('keydown',(e)=> {
    Weather.checkKey(e)
    
})


class Weather{
    constructor(zip){
    this.zip = zip
    }
    get makeWindow(){
        input.className = 'fade'
        let window = document.createElement('main')
        window.className = 'window'
        window.textContent = 'WEATHERINFO'

        let windowHeader = document.createElement('div');
        windowHeader.className = 'windowHeader'
        let windowBody = document.createElement('div');
        windowBody.className = 'windowBody'

        window.appendChild(windowHeader)
        window.appendChild(windowBody)
        
        return window
    }
    retrieve(zip){
        const query = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&APPID=${API_KEY}`
        return query
    }
    static checkKey(e){
        if (e.code == 'Enter'){
            let mainWindow = new Weather();
            html.appendChild(mainWindow.makeWindow)
        }
    }
}