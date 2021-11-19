import Nav from '@/components/navigation/Nav';

export default function Home() {

  return (
    <section id='homePage' className="hero is-info is-fullheight">
      <Nav />

      <div className="hero-body">
        <div className="container has-text-centered">
          <div id='welcomeInfo' className="column is-6 is-offset-3">
            <h1 className="title"> Welcome </h1>
            <h2 className="subtitle"> My name is Zack! I am a climber currently residing in Boston. </h2>
            <h2 className="subtitle"> I am selling gear, including an outfitted Ford Transit Connect! </h2>
            <h2 className="subtitle"> I can be reached at mountainsounds15@gmail.com</h2>

          </div>
        </div>
      </div>

    </section >
  )
}
