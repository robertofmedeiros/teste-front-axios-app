import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api, { IDataRequest, IDataResponse, STATUS_CODE } from './framework/providers/api';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Button, Icon, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [clientes, setClientes] = useState<any>([]);
  const navigate = useNavigate();

  const carregarClientes = async () => {

    const request: IDataRequest = {
      url: "/clientes/carregar",
    }

    const response: IDataResponse = await api.get(request);

    if (response.statusCode === STATUS_CODE.OK) {
      console.log(">>>", response);
      setClientes(response.data)
    }

    return [];
  }

  useEffect(() => {
    console.log(">>>")
    carregarClientes();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
    },
    {
      field: 'sobrenome',
      headerName: 'Sobre Nome',
    },
    {
      field: 'dataNascimento',
      headerName: 'Data Nascimento',
      width: 300,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      renderCell: (params) => (
        <IconButton
          key={`icone-row-${params.id}`}
          size="small"
          onClick={() => {

          }} >
            <DeleteIcon color="error"/>
          </IconButton>
      )
    }
  ]

  return (
    <div>
      <div>
        <DataGrid
          columns={columns}
          rows={clientes}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowDoubleClick={(params: GridRowParams) => {
            console.log(">>>2", params.id);
            navigate(`/teste/${params.id}`);
          }} />
      </div>
      <div>
        <Button 
          variant="contained"
          onClick={() => {
            carregarClientes();
          }}>Atualizar Lista</Button>
      </div>
      <div>
        <Link to={"/teste"}>Teste</Link>
      </div>
    </div>
  );
}

export default App;
