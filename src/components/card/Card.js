import React, { useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";

const Card = () => {

  const [data,setData] = useState()
  const [info,setInfo] = useState()
  const [results,setResults] = useState()

  const fetchData = async()=>{
    try{
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=a",
          {
            method: "GET",
          }
        );
        const resdata = await response.json();

        if(resdata){
          setData(resdata && resdata);
          setResults(resdata.results[0]);
           setInfo(resdata.info)
        } else{
          console.log("no data found!");
        }
    } catch(err){
      console.log("Error occurs  while fetching data!");
    }
   
  }

  useEffect(()=>{
    fetchData()
     console.log(data);
    //  setInfo(data.results)
    //  setResults(data.info)
     console.log("info--",info);
     console.log("result--",results)
  },[])

  return (
    <div className="h-[420px] w-[380px] sm:h-[370px] sm:w-[280px] flex flex-col items-center relative overflow-hidden bg-white rounded-sm transition drop-shadow-md hover:scale-[1.02] ">
      <div className=" h-[120px] sm:h-[90px] w-full relative bg-teal-900 border-[5px] border-white rounded-br-3xl rounded-bl-3xl">
        <div className="absolute bottom-0  left-[50%] translate-x-[-50%] translate-y-[50%] w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] border-4 overflow-hidden rounded-full border-white drop-shadow-md  ">
          <img src={results && results.picture.large} className='object-cover hover:scale-105 transition' alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center  mt-16 sm:mt-14">
        <h1 className=" text-3xl sm:text-xl font-bold text-teal-900 ">
          {`${results && results.name.title} ${results && results.name.first} ${
            results && results.name.last
          }`}
        </h1>
        <div className=" flex gap-1 items-center text-sm text-gray-600">
          <MdEmail size={18} />
          <span>{results && results.email}</span>
        </div>
      </div>
      <div className="body-part mt-5 sm:mt-4 mx-4 flex sm:mx-7 flex-col gap-1 font-semibold text-teal-900">
        <h1>
          DOB :{" "}
          <span className=" text-gray-500   ">
            {
              new Date(results && results.dob.date)
                .toLocaleString()
                .split(",")[0]
            }
          </span>
        </h1>
        <h1>
          Phone No :{" "}
          <span className=" text-gray-500  ">{results && results.phone}</span>
        </h1>
        <h1>
          Address :{" "}
          <span className=" text-gray-500  ">
            {`${results && results.location.city}, ${results && results.location.state
            }, ${results && JSON.stringify(results.location.postcode)} `}
          </span>
        </h1>
        <h1>
          Country :
          <span className=" text-gray-500  ">
            {results && results.location.country}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Card