type Props = {
  timeMap : any,
  sideTaskData : any,
  setSideTaskData : any;
}

function SideNav(props : Props) {
  
  return (
    <div className="bg-[#333233] w-1/6 h-full">
      <div className="h-[5%] w-full flex items-center justify-around">
        <input
        className="w-8/12 bg-transparent border-b-black border-b px-2 focus:outline-none text-center"
        />
        <button
        className="h-3/6 w-2/12 bg-[#ffffff22] rounded-xl flex items-center justify-center"
        >+</button>

      </div>


      <div className="h-[90%] mt-1 overflow-auto flex flex-col items-center"> {/* This is the side Task template div */}
        <div className="bg-[#ffffff22] w-10/12 h-[7%] rounded-3xl flex justify-center items-center">
          <h4>Testing Task</h4>
        </div>
      </div>
    </div>
  )
}

export default SideNav