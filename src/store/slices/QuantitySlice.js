const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    quantity:1
}

const quantitySlice=createSlice({
    name:"productquantity",
    initialState,
    reducers:{
        updateQuantity:(state,action)=>{
            state.quantity=action.payload;
        },
        resetQuantity:(state,action)=>{
            state.quantity=1;
        }
    }
})

export const {updateQuantity, resetQuantity }=quantitySlice.actions
export default quantitySlice.reducer;