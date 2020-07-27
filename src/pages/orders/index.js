import React, {useEffect} from 'react';
import Table from '../partial/table';
import { useDispatch, useSelector } from "react-redux";
import {getOrders, updateOrder } from '../../actions/orders/orderAction'
const Orders = (props) => {
  const {order} = useSelector(state => 
    {
      return {
        order: state.orders
      }
    });
  const dispatch = useDispatch();
  const [stateColumns, setState] = React.useState({
    columns: [
      { title: 'OrderNumber', field: 'orderNumber' },
      { title: 'Active', field: 'isActive' }
    ]
  });
  
  useEffect(() =>{

    dispatch(getOrders());

  },[dispatch])


  const editCategoriHandler = (newCategory) => {
    dispatch(updateOrder(newCategory));
  }

  return ( order.loading == false &&
    <Table 
      title="Orders Management"
      columns={stateColumns.columns} 
      data={order.data}
      editCallback={editCategoriHandler}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}
export default Orders;