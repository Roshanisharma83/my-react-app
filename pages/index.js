import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState,Component,useEffect } from 'react';
import Table from '../components';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import classNames from 'classnames'
import styles from '../styles/Home.module.scss'
<link href="/dist/output.css" rel="stylesheet"/>




console.log(styles)

// [{'name':'home','link':'/'},{'name':'about','link':'/About'}]
 function Home (){
   const name=[{'name':'home','link':'/'},{'name':'about','link':'/About'}]
   {name.map((name) => (
    <li>{name}</li>
  ))}
return(
  <div >
    <Nav />
  
    <Table/>
    <Footer/>
    {/* <UpgradePlan/> */}
  </div>
)
      
   
}
export default Home


