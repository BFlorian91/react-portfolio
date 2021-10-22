import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext'

import './Work.css';

export default function Work() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div className='work-container'>
      <h3>Work</h3>
      <hr className={themePreference.darkmode ? 'separator darkmode' : 'separator lightmode'} />
      <p>
        {/* Takuya is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called Inkdrop. */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi mollitia, explicabo temporibus ea consequuntur! Impedit id itaque, qui earum vero omnis in nostrum quas magni magnam, consequuntur laborum necessitatibus?
        Aliquid, laborum. Nisi laborum, modi totam officiis animi ex eos laudantium tenetur quam id praesentium ipsum minus repellendus. Optio omnis nesciunt adipisci earum aut quasi illum nobis sunt a quisquam!
      </p>
      <Link to='/works'>My Porfolio {'>'}</Link>
    </div>
  );
}
