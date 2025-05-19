import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        cartItems :[],
        cartSize:0
    },
    reducers:{
        addToCart : (state, action) => {
            // var exists = false
            // for (const item of state.cartItems) {
            //     if (item.id === action.payload.id) {
            //         console.log('Found it!');
            //         exists = true
            //         item.quantity += 1;
            //         break; // ✅ works
            //     }
            // }
            // if (!exists) {
            //     state.cartItems.push({
            //         ...action.payload,
            //         quantity: 1
            //     })
                
            // }

            const item =state.cartItems.find(item => item.id === action.payload.id) 
            if(item){
                item.quantity += 1;
            }
            else{
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
                
            state.cartSize = state.cartSize + 1;

        },

        addQuantityToCart : (state, action) => {
            const item =state.cartItems.find(item => item.id === action.payload.id) 
            if(item){
                state.cartSize = state.cartSize - item.quantity + action.payload.quantity;
                item.quantity = action.payload.quantity;

            }
            else{
                state.cartItems.push({
                    ...action.payload,
                
                })
                state.cartSize = state.cartSize + action.payload.quantity;
            }
                
            
        },

        removeFromCart :(state,action) =>{
             const item =state.cartItems.find(item => item.id === action.payload.id) 
            if(item){
                if(item.quantity === 1){
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                }
                item.quantity -= 1;
            }
                    
            state.cartSize = state.cartSize - 1;

        },
        removeAllFromCart :(state,action) =>{
            const item =state.cartItems.find(item => item.id === action.payload.id) 
            if(item){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }
                    
            state.cartSize = state.cartSize - item.quantity;

        }
    }
        
})
 export const {addToCart,addQuantityToCart, removeFromCart,removeAllFromCart} = cartSlice.actions; 
 export default cartSlice.reducer;