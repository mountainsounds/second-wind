import Nav from '@/components/navigation/Nav';
export default function Home() {

  return (
    <section id='homePage' className="hero is-info is-fullheight">
      <Nav />

      <div className="hero-body">
        <div className="container has-text-centered">
          <div id='welcomeInfo' className="column is-6 is-offset-3">
            <h1 className="title"> Welcome </h1>
            <h2 className="subtitle"> My name is Zack! I am a climber currently living in Boston. </h2>
            <h2 className="subtitle"> I am selling some climbing gear, and made a simple website to go along with it. </h2>
            <h2 className="subtitle"> I hope you enjoy exploring the site, and please contact me with any technical issues!</h2>
            <h2 className="subtitle"> At the moment, I am not shipping items. I live in between Central and Harvard Square, and can also deliver to Brooklyn Boulders in Somerville, and occasionally Salt Pump Climbing Co. in Maine.</h2>
            <h2 className='subtitle'>I can be reached at mountainsounds15@gmail.com</h2>
          </div>
        </div>
      </div>

    </section >
  )
}
