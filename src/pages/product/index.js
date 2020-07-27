import React, {useEffect } from 'react';
import {getProducts, addProduct, updateProduct,deleteProduct } from '../../actions/product/productAction';
import {categoryActions, brandsActions} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import productUrl from "../../helpers/urlGetter/products/productUrls";
import Table from '../partial/table';
import Image from '../partial/image';

const Products = (props) => {

  const convertArrayToObject = (input) =>{
    const data = Object.assign({});
    if (!input){
      return data;
    }
    const {items} = {items : [...input]};
    items.map(element => {
      let result = {};
      result[element.id] = element.name;
      return result;
    }).forEach(element => {
      Object.assign(data, element);
    });
    return data;
  }

  const bindImageForProducts = (products) =>{
    return products.map(product => {
      return {...product, imageSrc: productUrl.getProductImage(product.id)};
    })
    
  }
  const {data} = useSelector(state => 
    {
      return {
        data: bindImageForProducts(state.products.data)
      }
    });
    const {products} = useSelector(state => 
      {
        return {
          products: (state.products)
        }
      });

  const {categories} = useSelector(state => 
    {
      return { categories : convertArrayToObject(state.categories.data)};
    }
  );

  const {brands} = useSelector(state => 
      {
        return {brands: convertArrayToObject(state.brands.data)};
      }
  );

  const dispatch = useDispatch();

  const header = [
    { title: 'Name', field: 'name'},
    { title: 'Active', field: 'isActive', lookup: { true : 'Yes', false : "No" } },
    { title: 'In Stock', field: 'inStock', lookup: { true : 'Yes', false : "No" }  },
    { title: 'Code', field: 'productCode' },
    { title: 'Price', field: 'price' },
    { title: 'Image', field: 'productImage',
        render: rowData => <Image imageSrc={rowData.imageSrc} />,
        editComponent: rowData => <input required type="file" onChange={event => rowData.onChange(event.target.files[0])}></input>
    },
    {
     title: 'Category',
     field: 'category',
     lookup : categories
    },
    {
     title: 'Brand',
     field: 'brandId',
     lookup : brands
    }
  ];

  useEffect(() => {
    dispatch(getProducts());
    dispatch(categoryActions.getCategories());
    dispatch(brandsActions.getBrands());
  }, [dispatch]);

  return (products.loading == false &&
    <Table 
      title="Products Management"
      columns={header} 
      data={data}
      editHandler={(product) => {
        dispatch(updateProduct(product))
        .then(() => {dispatch(getProducts());}); 
      }}
      addHandler={(product) => {
        dispatch(addProduct(product))
        .then(() => {dispatch(getProducts());}); 
        
      }}
      deleteHandler={(product) => {
        dispatch(deleteProduct(product))
        .then(() => {dispatch(getProducts());}); 
      }}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}
export default Products;