const person = {
    name: 'Sebastien'
}
// Default Export
export default person

// Named exports
export const clean = () => {}
export const baseData = 10;

// Default export
import person from './person'

// Named export
import {baseData} from './'
import {clean} from './'