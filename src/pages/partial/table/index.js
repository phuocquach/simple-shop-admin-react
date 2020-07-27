import React from 'react';
import MaterialTable from 'material-table';

const Table = (props) => {

  const editHandler = props.editHandler;
  const addHandler = props.addHandler;
  const deleteHandler = props.deleteHandler;

  return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
            resolve();
            addHandler(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
              setTimeout(() => {
              resolve();
              editHandler(newData);
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteHandler(oldData);
            }, 600);
          }),
      }}
      options={props.options}
    />
  );
}
export default Table;