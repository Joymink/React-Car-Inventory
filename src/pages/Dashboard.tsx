import Background from '../assets/images/alessio-lin-2n1SciGY5dI-unsplash.jpg'

import DataTable from '../components/DataTable'

function Dashboard() {
  return (
    <div style = { {backgroundImage: `url(${Background})`}}
      className='bg-cover bg-fixed flex flex-col justify-center  h-screen ' >
      <DataTable />
    </div>
  )
}

export default Dashboard