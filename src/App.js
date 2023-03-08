import {Component} from 'react'

import Button from './components/ButtonStyle'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    imageUrl: languageGreetingsList[0].imageUrl,
    imageAltText: languageGreetingsList[0].imageAltText,
  }

  onClickButton = id => {
    const filterData = languageGreetingsList.filter(each => id === each.id)
    const Data = filterData[0]
    const image = Data.imageUrl
    const imageText = Data.imageAltText
    this.setState({
      imageUrl: image,
      imageAltText: imageText,
    })
  }

  render() {
    const {imageUrl} = this.state
    const {imageAltText} = this.state

    return (
      <div className="container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttonText">
          {languageGreetingsList.map(each => (
            <Button
              onClickButton={this.onClickButton}
              languageGreetingsList={each}
              key={each.id}
            />
          ))}
        </ul>

        <img className="imageSize" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default App
