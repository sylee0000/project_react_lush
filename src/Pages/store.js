import {configureStore, createSlice} from "@reduxjs/toolkit"
//이것은 리덕스파일이다. 리덕스를 사용하겠다.

const cart = createSlice({
  name: 'cart',
  initialState: [], //장바구니는 비워줘야하니깐
  
  reducers:{ //바뀔값 넣어주기
    addCount(state,action){ //인덱스값을 찾아서
      const index = state.findIndex((i)=>{return i.id === action.payload})
      //추가버튼을 어떻게 바꿀거냐면, 지금 상태의 state와 누군가 누를 action값이 일치하다면 추가하라
      state[index].quantity++
    },
    subCount(state,action){
      const index = state.findIndex((i)=>{return i.id === action.payload})
      if(state[index].quantity > 1) //-는 1보다 내려갈수 없으니깐 if로 제안시켜주기.
      state[index].quantity-- 
    },
    deleteItems(state,action){
      const index = state.findIndex((i)=>{return i.id === action.payload})
      state.splice(index,1)
    },
    addItems(state,action){
      const index = state.findIndex((i)=>{return i.id === action.payload.id})
      if(index > -1){
        state[index].quantity++
      } else{
        state.push(action.payload)
      }
    }
  }
})

//값을 변경할건데 기본값과 변할값이 들어가는게 reducers이다.

export const {addCount, subCount, deleteItems, addItems} = cart.actions
//값을 만들었으면 내보내줘야하는데 리덕스의 기본은 import 와 export이다.

export default configureStore({
  reducer:{
    cart: cart.reducer
  }
})