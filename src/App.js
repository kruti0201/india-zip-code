import logo from './logo.svg';
import './App.css';
import {data} from './data'
import React, { Ref } from 'react';

export default function App() {
  React.useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    data.map((countryData)=>
    {
      // const tozero = eval(countryData.key) - 100000
      // const inToRange = tozero/750000
      // const multipleOf = inToRange * 768 - 50
      // ctx.fillStyle = 'rgb('+multipleOf>256? 255 : multipleOf+', '+multipleOf>256? multipleOf>512? 255 : multipleOf - 256 : 0+', '+multipleOf>256? multipleOf>512? multipleOf - 512 : 0 : 0+')'
      // console.log(multipleOf)
      ctx.fillStyle = "#" + ((eval(countryData.key)-100000)*50).toString(16);
      ctx.fillRect((countryData.latitude)*20 , (countryData.longitude)*20-1350, 5, 5);
    }
    )
   
  }, []);

  return (
    <div>
      <canvas
        id="myCanvas"       
        width="1000"
        height="600"
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}