import PRODUCTS from '../../data/dummy-data.js'

interface initialStateObj {
    availableProducts: Array<any>,
    userProducts: Array<any>
}

const initialState: initialStateObj = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
}

export default (state = initialState, action: Object) => {
    return state;
}