import Background from '../assets/images/eric-weber-unsplash.jpg'


function Home() {
    return (
      <div 
        style = { {backgroundImage: `url(${Background})`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
          <div className="flex place-items-center h-screen">
            <h3 className='p-5 bg-white bg-opacity-25 text-black rounded-full shadow'>
              Welcome to Your Dreams
            </h3>
          </div>
      </div>
    )
  }
  
  export default Home