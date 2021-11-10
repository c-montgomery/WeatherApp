import {API_KEY} from './apikey'


let input = document.querySelector('input')
let html = document.querySelector('html')

class Weather{
    
    constructor(zip){
    this.zip = zip
    }
    
    get makeWindow(){
        input.className = 'fade'
        let window = document.createElement('main')
        window.className = 'window'

        let windowHeader = document.createElement('div');
        windowHeader.className = 'windowHeader'
        let windowBody = document.createElement('div');
        windowBody.className = 'windowBody'

        let headerLeft = document.createElement('div');
        headerLeft.className = 'headerLeft'
        let headerRight = document.createElement('div');
        headerRight.className = 'headerRight'
        windowHeader.appendChild(headerLeft)
        windowHeader.appendChild(headerRight)

        window.appendChild(windowHeader)
        window.appendChild(windowBody)
        
        return window
    }
    retrieve(zipCode){
        this.zip = zipCode
        const img = document.querySelector('img');
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.zip}&APPID=${API_KEY}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let words = document.querySelector('.headerLeft')
            words.textContent = response.weather[0].description
            console.log(response.weather[0].description)
            let temp = ((response.main.temp - 273.15) * 9/5 + 32)
            let windowHeader = document.querySelector('.windowBody')
            let para = document.createElement('p');
            para.textContent = temp
            console.log(temp)
            windowHeader.appendChild(para)
            
        });

    }
    static attachWindow(e){
        let mainWindow = new Weather();
        html.appendChild(mainWindow.makeWindow)
    }
    
}

export{ Weather }