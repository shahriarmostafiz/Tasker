import Card from './Components/Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Tasks from './Components/Tasks';
// import "./index.css"


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
      <div className='w-full overflow-x-scroll my-scroll pb-4'>
        <div className="flex w-full gap-4">

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