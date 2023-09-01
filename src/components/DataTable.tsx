import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';

const columns: GridColDef[] =[
    { field: 'id', headerName: "ID", width: 45, hide: true},
    {field: 'make', headerName: 'Make', flex: 1},
    {field: 'model', headerName: 'Model', flex: 1},
    {field: 'price', headerName: 'Price', flex: 1},
    {field: 'year', headerName: 'year', width: 1},
]
function DataTable() {
    
    let [ open, setOpen ] = useState(false);
    const { vehicleData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const deleteData =  () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 1000)
    }


  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row justify-center ">
            <div>
                <Button
                    className="p-3 bg-red-300 rounded m-3 hover:bg-pink-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add New Vehicle
                </Button>
            </div> 
            <div>
                <Button onClick= {handleOpen} className="p-3 bg-red-300 rounded m-3
                hover:bg-pink-800 hover:text-white" >
                    Update
                </Button>
            </div>
            <div>
                <Button onClick={deleteData} className="p-3 bg-red-300 rounded m-3
                hover:bg-pink-800 hover:text-white" >
                    Delete
                </Button>
            </div>
        </div>
        <div className={ open ? "hidden" : "  w-full px-5my-5 flex flex-col items-center "}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-red-400 my-2 rounded w-full ">My Contacts</h2>
            <DataGrid className='bg-red-200 rounded w-full ' rows={vehicleData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
        
       
    </>
  )
}

export default DataTable