import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import CustomTextField from './CustomTextfield';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Delete } from '@material-ui/icons';
import { columnsArr } from './Constants.js';
import { getCustomerDetails } from '../Apis.js';
import { updateCustomer, deleteCustomer } from '../Apis.js';

const rowsPerPageOptions = [5, 10, 25];

const TaskList = (props) => {
  let [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [, setEditId] = useState(null);
  const {searchType, searchVal} = props;
  const [updatedData, setUpdatedData] = useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id) => {
    let res = await deleteCustomer(id);
    if(res){
      let tempData = data.filter((d) => d.id !== id);
      setData(tempData); 
      alert('Customer Deleted!!');
    }
  }


  useEffect(() => {
    (async () => {
      let d = await getCustomerDetails(page, rowsPerPage, searchType, searchVal);
      setData(d);
    })()
  }, [page, rowsPerPage, searchType, searchVal]);

  const handleEdit = (row) => {
    data.forEach((d) => {
      if(row.id === d.id) d.editMode = true;
      else d.editMode = false;
    })
    setData(data);
    setEditId(row.id);
  } 

  const handleChangeValue =  (value, row, columnKey) => {
    console.log("value = ", value, 'row = ', row, 'columnKey = ', columnKey );
    row[columnKey] = value;
    let newData= data.map((r) => {
      if(r.id === row.id){
        r[columnKey] = value;
        setUpdatedData(r);
      }
      return r;
    });
    setData(newData);

  }

  const handleSave = async () => {
    let res = await updateCustomer(updatedData);
    if(res){
      alert('Cutomer Updated!!');
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnsArr.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              {columnsArr.map((column) => (
                <TableCell key={column.id}>
                  { column.id !== 'action' && 
                    <CustomTextField editMode={row.editMode} error={''} onChange={(e) => handleChangeValue(e.target.value, row, column.id)} value={row[column.id]}/> 
                  } {
                    column.id === 'action' && 
                    <div>
                     {!row.editMode && <EditIcon onClick={() => handleEdit(row)}/>}
                     {row.editMode && <SaveIcon onClick={handleSave}/>}
                     <Delete onClick={() => handleDelete(row.id)} />
                    </div>
                  }
                  
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TaskList;
