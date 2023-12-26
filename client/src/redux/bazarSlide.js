import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
};

export const bazarSlide = createSlice({
    name:"bazar",
    initialState,
    reducers:{
        addToCard:(state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
                );

            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload);
            }
        },

        deteleItem: (state,action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },

        resetCart: (state) => {
            state.productData = [];
        },

        increamentQuantity: (state,action) =>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },

        decrementQuantity: (state,action) =>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item.quantity === 1){
                item.quantity = 1;
            }else{
                item.quantity--;
            }
        },
        //============= user start here ===============
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removerUser: (state) => {
            state.userInfo = null;
        }
    },
});

export const {
                addToCard,
                deteleItem,
                resetCart,
                increamentQuantity,
                decrementQuantity,
                addUser,
                removerUser,
            } = bazarSlide.actions;
export default bazarSlide.reducer;