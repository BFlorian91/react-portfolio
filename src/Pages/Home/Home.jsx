import React from 'react'

import QuickMe from '../../Components/QuickMe/QuickMe';
import Work from '../../Components/Work/Work';
import Bio from '../../Components/Bio/Bio';
import Hobbies from '../../Components/Hobbies/Hobbies';
import Sociaux from '../../Components/Sociaux/Sociaux';

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
