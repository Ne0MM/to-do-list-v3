import { useState } from 'react';
import './App.css';
import SideNav from './Components/SideNav';
import TaskScreen from './Components/TaskScreen';
import FetchDate from './Components/FetchDate';

function App() {

  interface timeMapInter{
    dayTime : string,
    date : {
      [key : string] : number
    }
  }

  // Pretty sure this is not necessary... Maybe it is necessary... I have no idea
  interface sideTaskDataInter{
    [key : string] : {
      [key : string] : string
    }
  }

  const [sideTaskData, setSideTaskData] = useState<sideTaskDataInter>()
  const [timeMap, setTimeMap] = useState<timeMapInter>()

  return (
    <div className="App h-screen">
       <header className="bg-[#ffff00] h-[10%] flex items-center justify-center">
           <h4 className="text-black text-2xl bg-[#ffff00]">To do list V3</h4>
       </header>
       <div className='h-[90%] w-full flex'>
          <SideNav timeMap={timeMap} sideTaskData={sideTaskData} setSideTaskData={setSideTaskData}/>
          <TaskScreen/>
       </div>
       <FetchDate setTimeMap={setTimeMap}/>  {/* Reminder to fix: This should not be here */}
    </div>
  );
}

export default App;
