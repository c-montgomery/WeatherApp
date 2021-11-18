import tempUnit from './Weather_SVGs/tempUnit.svg'

class Icon{
    constructor(weather){
        this.weather = weather
    }
    get image(){
        console.log(this.weather)
        return tempUnit
    }
}
export { image }