import {createSlice} from '@reduxjs/toolkit';


const CardSystem=createSlice({

    name:"CART",
    initialState:[],
    reducers:{
        addcart(state,action){
           state.push(action.payload)
        //    console.log(action.payload)
          
        },
        removecart(state,action){
            const remove = action.payload
            return  state.filter(item=> item.id !== remove);
            
        }
    }
})

export const {addcart,removecart} = CardSystem.actions

export default CardSystem.reducer
