import tempUnit from './Weather_SVGs/sw-01.svg'
//response.weather[0].id --weather category
class Icon{
    constructor(weather){
        this.weather = weather
        this.icon = "sw-01"
    }
    get image(){
        const coffee = require(`./Weather_SVGs/${this.icon}.svg`);
        console.log(this.weather)
        console.log('console printed')
        return tempUnit
    }
    set image(weatherGroupCode){
        if(weatherGroupCode < 300){
            this.icon = 'sw-27.svg';
        }else if(weatherGroupCode<400){
            this.icon = 'sw-21.svg'; 
        }else if(weatherGroupCode<600){
            this.icon = 'sw-22.svg';
        }else if(weatherGroupCode<700){
            this.icon = 'sw-25.svg';
        }else if(weatherGroupCode < 800){
            this.icon = 'sw-10.svg';
        }else if(weatherGroupCode == 800){
            this.icon = 'sw-01.svg';
        }else if(weatherGroupCode>800){
            this.icon = 'sw-04.svg'
        }
    }
}
export { Icon }