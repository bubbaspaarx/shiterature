import React from 'react'

const Home = (props) =>
      <div className="home-page">
        <div className="title">
          <h1>Shiterature</h1>
          <p>putting the 'AI' in Haiku</p>
          <button onClick={() => props.routing('welcome')}>Next</button>
        </div>
      </div>

export default Home