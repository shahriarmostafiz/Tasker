// import axios from 'axios'
// import './App.css'
// import react, { useState } from "react"

// function App() {
//   const [upload, setUpload] = useState(null)
//   const handleChange = e => {
//     // console.log(e.target.files[0])
//     setUpload(e.target.files[0])
//   }
//   const handleUpload = () => {
//     console.log(upload);
//     const formData = new FormData();
//     formData.append('file', upload);
//     // console.log(formData.get('file'));
//     axios.post("http://localhost:5000/upload", formData)
//       .then(res => { console.log(res.data) })
//       .catch(err => console.log(err))
//   }

//   return (
//     <>


//       <input type="file" name="" id="" onChange={handleChange} />
//       <button onClick={handleUpload} className='p-1 border bg-gray-600' >Upload</button>



//     </>
//   )
// }

// export default App
import { Fragment, useEffect } from 'react';
import Card from './Components/Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Tasks from './Tasks';


const App = () => {
  const { data, isPending, refetch } = useQuery(
    {
      queryKey: ["Data"],
      queryFn: async () => {
        const data = await axios.get("https://tasker-zeta-jet.vercel.app/tasks")
        return data.data
      }
    }
  )
  if (isPending) { return <h1>loading.. </h1> }
  console.log(data)
  const types = [
    "Incomplete",
    "Doing",
    "Completed",
    "Over Due",
    "Under Review",
    "To Do"
  ]


  return (
    <div className="max-w-screen-2xl p-4 space-y-4 overscroll-none">
      <div><hr /></div>
      <div className='w-full overflow-x-scroll '>
        <div className="flex w-full">

          {types.map(type => {
            // Filter data based on the current type
            const filteredData = data?.filter(item => item.type === type.toLowerCase());

            return <div key={type} className='w-full'><Tasks filteredData={filteredData} refetch={refetch} type={type} /></div>
          })}
        </div>


      </div>
    </div>
    // <div className='max-w-screen h-screen'>
    // <div className='flex flex-col items-center justify-center min-h-screen'>
    //   <div className='max-w-full max-h-full overflow-hidden'>
    //     <div className='w-full overflow-x-auto whitespace-nowrap'>
    //       <div className='py-4 '>
    //         <hr className='min'></hr>
    //       </div>
    //       <div className=' flex max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 '>
    //         {types.map(type => {
    //           // Filter data based on the current type
    //           const filteredData = data?.filter(item => item.type === type.toLowerCase());

    //           return <Tasks key={type} filteredData={filteredData} refetch={refetch} type={type} />;
    //         })}

    //       </div>
    //     </div>

    //   </div>
    // </div>

  )



};

export default App;