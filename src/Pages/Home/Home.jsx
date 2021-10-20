import React from 'react'

import QuickMe from '../../Components/QuickMe/QuickMe';
import Work from '../../Pages/Work/Work';
import Bio from '../../Pages/Bio/Bio';
import Hobbies from '../../Pages/Hobbies/Hobbies';
import Sociaux from '../../Pages/Sociaux/Sociaux';

import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <QuickMe />
      <Work />
      <Bio />
      <Hobbies />
      <Sociaux />
    </div>
  );
}
