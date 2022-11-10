
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
<link href="/dist/output.css" rel="stylesheet"/>
import React, { useState,Component,useEffect } from 'react';

function Table (){

    
        let [name, setName] = useState()
        let [address, setAddress] = useState()
        let [last_Name, setLastName] = useState()
        let [data, setData] = useState([])
        const onChangeHandlerName = event => {
          setName(event.target.value);
       };
       const onChangeHandlerAddress = event => {
        setAddress(event.target.value);
     };
     const onChangeHandlerLast_Name = event => {
      setLastName(event.target.value);
    };
       
      const dataSave=()=>{
        setData([...data,{key:"i", name:name,address:address,last_Name:last_Name}])
        
      };
    
          return ( 
            <div className='mytable'>
                <table>
                        <thead className='t_head'>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                          </tr>
                        </thead>
                        <tbody>
                      
                        {data .map((item,tbody)=>{
      
                        return( <tr key={item.key} value={item.key}>
                        <td>{item.name}</td>
                        <td>{item.last_Name}</td>
                        <td>{item.address}</td>
                        
                        </tr> 
                      )
                    } 
                  )}
                </tbody>     
                        {/* {data .map((item,tr)=>{  
                        return <td key={item.key} value={item.key}>{item.value}</td>
                        )},  */}
                </table>
                  {/* Country List
                  <select>  
                  {/* {data.map((item,index)=>{
                    return <option key={item.key} value={item.key}>{item.value}</option>
                  })} */} 
                  {/* </select>  */} 
              
              <br></br>
              <div className='myinput'>
              <input type='text' name='name' onChange={onChangeHandlerName} value={name||''}/>
              <input type='text' name='Last_Name' onChange={onChangeHandlerLast_Name} value={last_Name||''}/>
              <input type='text' name='address' onChange={onChangeHandlerAddress} value={address||''}/>
             
              <br></br>
              <div className='save-btn'>
              <button onClick={dataSave}>Save</button>
              </div>
              </div>
                  {/* <div>
                  const demo = [
                    {fname:'Roshani', lname:'Sharma', address:'kathmandu' },
                    {fname:'Durga', lname:'Sharma', address:'lalitpur' }
                    ];
                    console.log(demo)

                    var table_start="<table>"
                    var table_end= "</table>"
                    var table_head="<tr><td>First Name</td><td>Last Name</td><td>address</td></tr>"

                    var table_data="";
                    demo.map(function(i){
                    table_data=table_data=table_data+"<tr><td>"+i.fname+"</td><td>"+i.lname+"</td><td>"+i.address+"</td></tr>";

                    })

                    document.getElementById("myTable").innerHTML =table_start+table_head+table_data+table_end
                                  </div> */}
          </div> 
          
       )
    }

export default Table