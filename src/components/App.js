import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div>
      <form>
        <nav>
          <ul>
            <li><button className='animation' onClick={(e) => e.preventDefault()}>Click me</button></li>
            <li><button className='rubber' onClick={(e) => e.preventDefault()}>No, Click me!</button></li>
            <li><button className='upper' onClick={(e) => e.preventDefault()}>Come on, choose me!</button></li>
            <li><button onClick={(e) => e.preventDefault()}>I'm better than those fools!</button></li>
          </ul>
        </nav>
      </form>
      <h1 className='drop_box'>Hyena, World!</h1>
      <section>
        <img className='dancing' src='http://pre08.deviantart.net/b387/th/pre/i/2010/234/a/f/dancing_hyena_by_guephren.png' width='200' />
        <img className='goofy' src='http://www.animalpictures1.com/data/media/80/Hyena-2.jpg' width='200' />
        <img className='rock' src='http://img03.deviantart.net/7ec4/i/2006/040/a/9/hyena_dance_party_by_luve.jpg' width='200' />
        <img className='chubby' src='https://thumbs.dreamstime.com/z/cartoon-hyena-dancing-happy-smiling-52243888.jpg' width='200' />

      </section>
    </div>
  }
}

export default App
