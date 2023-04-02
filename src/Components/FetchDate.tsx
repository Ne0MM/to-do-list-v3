import { useEffect } from "react";
type Props = {
    setTimeMap : (element : any) => void;
}

function FetchDate( props: Props) {

  useEffect(() => {
    props.setTimeMap(() => updateDate());
  }, [])
  
  const updateDate = () => {
    //Fetch string date from PC

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

    return null; // Reminder to take off after find a better place
}

export default FetchDate