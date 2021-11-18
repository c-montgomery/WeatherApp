import {API_KEY} from './apikey'
import tempUnit from './Weather_SVGs/tempUnit.svg'


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
        let headerRightTop = document.createElement('div');
        headerRightTop.className = 'headerRightTop'
        let headerRightMiddle = document.createElement('div');
        headerRightMiddle.className = 'headerRightMiddle'
        let headerRightBottom = document.createElement('div');
        headerRightBottom.className = 'headerRightBottom';

        headerRight.appendChild(headerRightTop);
        headerRight.appendChild(headerRightMiddle);
        headerRight.appendChild(headerRightBottom)

        windowHeader.appendChild(headerLeft)
        windowHeader.appendChild(headerRight)

        window.appendChild(windowHeader)
        window.appendChild(windowBody)
        
        return window
    }
    retrieve(zipCode){
        this.zip = zipCode
        const img = document.querySelector('img');
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&APPID=${API_KEY}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            
            let words = document.querySelector('.headerRightTop')
            words.textContent = response.weather[0].description
            console.log(response)
            console.log(response.weather[0].description)
            let tempSVG = new Image();
            tempSVG.src = tempUnit;
            let temp = ((response.main.temp - 273.15) * 9/5 + 32)
            let headerRight = document.querySelector('.headerRightMiddle')

            let wind = document.querySelector('.headerRightBottom');
            wind.textContent = 'Wind: ' +response.wind.speed + 'mph'
            let para = document.createElement('p');
            para.textContent = Math.round(temp)

            para.appendChild(tempSVG)
            headerRight.appendChild(para)
            
        })
        .then(()=>this.convert(this.zip));

    }

    convert = (zip)=>{
        console.log(this.zip)
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip}&appid=${API_KEY}`, {mode: 'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response)
            let name = response.name
            let headerLeft = document.querySelector('.headerLeft');
            headerLeft.textContent = name + ", " + response.zip;
        })
    }
    static attachWindow(e){
        let mainWindow = new Weather();
        html.appendChild(mainWindow.makeWindow)
    }
    
}

export{ Weather }