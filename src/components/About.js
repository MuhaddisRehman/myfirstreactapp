import React from 'react'
import '/home/muhaddis/Desktop/myfirstreactapp/src/components/About.css';
import Header from './Header';
import Card from './Card';


export default function About(props) {
  return (
    <div>
      <Header/>
      <div className="container mt-5 pt-2">
            <div className='row '>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>

            </div>
      </div>

          </div>
  )
}
