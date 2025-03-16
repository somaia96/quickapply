import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface OrdersState {
  value: {
    id: number;
    name: string;
    image: string;
    availability_status: string;
    price:string
    spiciness_level: number;
    quantity?:number;
}[],
excestId:number[],
excestTable:string[],
tablesCount:null | number,
}

const initialState: OrdersState = {
  value: [],
  excestId:[],
  excestTable:[],
tablesCount:null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state,action: PayloadAction<{
        id: number;
        name: string;
        image: string;
        availability_status: string;
        spiciness_level: number;
        price:string;
    quantity?:number;
    }>) => {
      const index = state.excestId.indexOf(action.payload.id);
      if(index !== -1 && state.value[index].quantity){
        state.value[index].quantity += 1;
      }else{
        state.excestId.push(action.payload.id);
        state.value.push({...action.payload,quantity:1})
      }
    },
    incrementTablesCount:(state,action:PayloadAction<string>)=>{
      if(state.excestTable.includes(action.payload) && state.tablesCount){
        state.excestTable = state.excestTable.filter(name=> name !== action.payload)
        state.tablesCount -=1;

      }else{
        state.excestTable.push(action.payload)
        state.tablesCount= state.tablesCount? state.tablesCount +1:1;
      }
      
    }
  }
})
export const { addOrder, incrementTablesCount } = ordersSlice.actions

export default ordersSlice.reducer