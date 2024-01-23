import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const itemLists=[]
const totalQuantity=0

let cart=JSON.parse(localStorage.getItem('cart'))||[]
const cartSlice=createSlice({
    name:"cart",
initialState:{
    itemLists,
    totalQuantity
},
reducers:{
    addToCart:(state, action)=>{
       const newItem = action.payload;
       const existingItem = state.itemLists.find(
         (item) => item.id == newItem.id
       );
 
       if (existingItem) {
         existingItem.quantity++, (existingItem.totalPrice += newItem.price);
        
         toast.info("Increased Product Quantity",{
            position:"bottom-left"
         })

       } else {
         state.itemLists.push({
            id: newItem.id,
            price: newItem.price,
            quantity: newItem.quantity,
            name: newItem.name,
            totalPrice: newItem.price,
            img: newItem.img,
          });
         state.totalQuantity++;
         cart.push(newItem)
         localStorage.setItem('cart', JSON.stringify(state.itemLists))
         toast.success(`${action.payload.name} added to cart`,{
            position:"bottom-left"
         })
        localStorage.setItem('quantity', state.totalQuantity)
       }
    },

    removeFrmCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.itemLists.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemLists = state.itemLists.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--; 
    },
}
})

export const {addToCart, removeFrmCart}=cartSlice.actions

export default cartSlice