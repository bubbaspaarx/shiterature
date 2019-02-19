import React from 'react'

const imgStyle = {
  width: "200px",
  height: "150px", 
  backgroundSize: "cover",
  backgroundPosition: "50%",
}

const examplesStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="home-page">
        <div className="title">
          <p>Welcome to Shiterature, an AI based Haiku creating tool.</p>    
        </div>
        <div className="instructions">
          <h4>Instructions</h4>
          <ul>
            <li>We'll show you 3 random gifs</li>
            <li>Describe them out loud to your computer</li>
            <li>Pause between each gif</li>
            <li>When you are done, just click 'Finished'</li>
          </ul>
        </div>
        <div className="examples" style={examplesStyle}>
          <div style={{...imgStyle, backgroundImage: "url('https://media.giphy.com/media/CrA66TnJqNFaU/giphy.gif')"}}></div>
          <div style={{...imgStyle, backgroundImage: "url('https://media.giphy.com/media/fXgKfzV4aaHQI/giphy.gif')"}}></div>
          <div style={{...imgStyle, backgroundImage: "url('https://media.giphy.com/media/xT77XHUkpCtKbmtuH6/giphy.gif')"}}></div>
        </div>
      </div>
      )
  }
}

