import QuickMe from '../../Components/QuickMe/QuickMe'
import Work from '../../Components/Work/Work'
import Bio from '../../Components/Bio/Bio'
import Hobbies from '../../Components/Hobbies/Hobbies'
import Socials from '../../Components/Socials/Socials'

import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="sections__annimation">
        <QuickMe />
      </section>
      <section className="sections__annimation">
        <Work />
      </section>
      <section className="sections__annimation">
        <Bio />
      </section>
      <section className="sections__annimation">
        <Hobbies />
      </section>
      <section className="sections__annimation">
        <Socials />
      </section>
    </main>
  )
}
