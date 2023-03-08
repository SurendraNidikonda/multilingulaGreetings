import './index.css'

const Button = props => {
  const {languageGreetingsList, onClickButton} = props
  const {buttonText, id} = languageGreetingsList
  const clickButton = () => {
    onClickButton(id)
  }

  return (
    <li className="buttonContainer">
      <button onClick={clickButton} type="button" className="button">
        {buttonText}
      </button>
    </li>
  )
}
export default Button
