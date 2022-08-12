import React from 'react'
import '/home/muhaddis/Desktop/myfirstreactapp/src/components/About.css';
import Header from './Header';
import team1 from '../Assets/aboutImages/team1.jpg';
import team2 from '../Assets/aboutImages/team2.jpg';
import team3 from '../Assets/aboutImages/team3.jpg';
import team4 from '../Assets/aboutImages/team4.jpg';

import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About(props) {
  return (
    <div>
      <Header/>
      <div className="container mt-5 pt-2 ">
            <div className='row col-lg-12'>
              <Card title='Jane Doe' Img= {team1} />
              <Card title='John Doe' Img= {team2} />
              <Card title='Mike Ross' Img= {team3} />
              <Card title='Dan Star' Img= {team4} />

            </div>
      </div>

          </div>
  )
}
