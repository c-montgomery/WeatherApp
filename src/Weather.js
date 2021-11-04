
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

        window.appendChild(windowHeader)
        window.appendChild(windowBody)
        
        return window
    }
    retrieve(zip){
        const img = document.querySelector('img');
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip}&APPID=${API_KEY}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let words = document.querySelector('main')
            words.textContent = response.weather[0].description
            console.log(response.weather[0].description)
            console.log(response.body)
            
        });

    }
    static checkKey(e){
        if (e.code == 'Enter'){
            let mainWindow = new Weather();
            html.appendChild(mainWindow.makeWindow)
        }
    }
}

export{ Weather}