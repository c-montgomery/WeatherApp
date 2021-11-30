
import './style.css'
import pic from './background.jpg'
import {Weather} from './Weather'
import {Utility} from "./Icon" 

let background = new Image()
background.src = pic

let html = document.querySelector('html')

// let input = document.querySelector('input')
window.addEventListener('keydown',(e)=> {
    if (e.code == 'Enter'){
        Weather.attachWindow(e)
        let info = new Weather()
        let input = document.querySelector('input')
        Utility.getType(input.value)
        info.retrieve(input.value)

    }
    
    
})







