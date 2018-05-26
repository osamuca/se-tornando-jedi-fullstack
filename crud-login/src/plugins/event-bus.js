import Vue from 'Vue'

const bus = new Vue()

export default function install(Vue) {
    /**
     * Objeto defindo uma propriedade
     * 
     * Na linha 12 o $bus faz com que o const bus seja usado por toda propriedade
     */
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get() {
                return bus
            }
        }
    })
} 
    
