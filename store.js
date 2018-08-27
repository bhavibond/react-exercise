import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'Paracetemol Tablets',
            price: 70,
            description: 'Paracetemol Tablets act on fever',
            image: 'https://pasteboard.co/HB6fcQ3.png',
            id: 1
        },{
            name: 'Spirodin F',
            price: 130,
            description: 'Spirodin acts on asthma and common cold to provide great relief',
            image: 'https://pasteboard.co/HB6fDPT.png',
            id: 2
        },{
            name: 'Telekast F',
            price: 150,
            description: "Telekast contains Montelukast which increases immunity against common cold.",
            image: 'https://pasteboard.co/HB6gyds.png',
            id: 3
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState)
}