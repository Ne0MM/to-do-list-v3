import { useState, useEffect } from 'react';
import './App.css';
import SideNav from './Components/SideNav';
import TaskScreen from './Components/TaskScreen';
import { NumericLiteral } from 'typescript';

function App() {

  interface timeMapInter{
    dayTime : string,
    date : {
      [key : string] : number
    }
  }

  const [timeMap, setTimeMap] = useState<timeMapInter>()

  useEffect(() => {
    setTimeMap(() => updateDate());
  }, [])
  
  const updateDate = () => {
    let date : string = new Date().toLocaleString();
    let dateHour : string[] = date.split(",");
    
    //Get the hours in a number array
    
    let hoursString : string[] = dateHour[1].split(":");
    let dayTime : string = hoursString[2].split(" ")[1];

    let hour : number[] = hoursString.map((element, index) : number => {
      if(index == 0 && dayTime == "PM") return (parseInt(element) + 12); // add 12hrs when is PM

      else return (parseInt(element));
    })

    //get the days in a number array

    let day : number[] = dateHour[0].split("/").map((e) => {
      return parseInt(e)
    })

    return({dayTime : dayTime,
              date : {
              day : day[1],
              month : day[0],
              year : day[2],
              hour : hour[0],
              minute : hour[1],
              seconds : hour[2],}}
    )
  }

  return (
    <div className="App h-screen">
       <header className="bg-[#ffff00] h-[10%] flex items-center justify-center">
           <h4 className="text-black text-2xl bg-[#ffff00]">To do list V3</h4>
       </header>
       <div className='h-[90%] w-full flex'>
          <SideNav/>
          <TaskScreen/>
       </div>
    </div>
  );
}

export default App;
