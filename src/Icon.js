
class Utility{
    constructor(weather){
        this.weather = weather
        this.icon = "sw-01"
    }
    get image(){

        if(this.weather < 300){
            this.icon = 'sw-27.svg';
        }else if(this.weather<400){
            this.icon = 'sw-21.svg'; 
        }else if(this.weather<600){
            this.icon = 'sw-22.svg';
        }else if(this.weather<700){
            this.icon = 'sw-25.svg';
        }else if(this.weather < 800){
            this.icon = 'sw-10.svg';
        }else if(this.weather == 800){
            this.icon = 'sw-01.svg';
        }else if(this.weather>800){
            this.icon = 'sw-04.svg'
        }
        const weatherIcon = require(`./Weather_SVGs/${this.icon}`);
        return weatherIcon
    }
    static getType(userInput){
        //Testing
        let input = document.querySelector('input');
        let type = typeof input.value;
        console.log(input.value)
        console.log(type)
        return type
    }
}
export { Utility }