import React, {useEffect} from 'react';
import Table from '../partial/table';
import {categoryActions} from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Categories = (props) => {
  const {category} = useSelector(state => 
    {
      return {
        category: state.categories
      }
    });
  const dispatch = useDispatch();
  const [stateColumns, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Active', field: 'isActive',
        lookup: { true : 'Yes', false : "No" } 
      }
    ]
  });
  
  useEffect(() =>{
    dispatch(categoryActions.getCategories());
  },[dispatch])

  const addCategoriHandler = (newCategory) => {
    dispatch(categoryActions.addCategory(newCategory))
    .then(() => {
      dispatch(categoryActions.getCategories());
    });
  }
  const editCategoriHandler = (newCategory) => {
    dispatch(categoryActions.updateCategory(newCategory))
    .then(() => {
      dispatch(categoryActions.getCategories());
    });
  }
  const deleteHandler = (category) => {
    dispatch(categoryActions.deleteCategory(category))
    .then(() => {
      dispatch(categoryActions.getCategories());
    });

  }

  return ( category.loading == false &&
    <Table 
      title="Categories Management"
      columns={stateColumns.columns} 
      data={category.data}
      editHandler={editCategoriHandler}
      addHandler={addCategoriHandler}
      deleteHandler={deleteHandler}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}
export default Categories;