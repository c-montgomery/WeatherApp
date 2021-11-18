import tempUnit from './Weather_SVGs/sw-01.svg'

class Icon{
    constructor(weather){
        this.weather = weather
    }
    get image(){
        console.log(this.weather)
        console.log('console printed')
        return tempUnit
    }
}
export { Icon }