
import { useEffect, useState } from 'react';
import './App.css';
import cross from "./images/cross.svg"
import tick from './images/tick.svg'

function App() {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isUpper, setIsUpper] = useState(false)
  const [isLower, setIsLower] = useState(false)
  const [isSpecial, setIsSpecial] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [isEight, setIsEight] = useState(false)

  useEffect(() => {

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecial = /[!@#\$%\^&\*]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasCharacter = /.{8,}/.test(password);

    setIsLower(hasLowerCase);
    setIsUpper(hasUpperCase);
    setIsSpecial(hasSpecial);
    setIsNumber(hasNumber);
    setIsEight(hasCharacter);

  }, [password])

  return (
    <div className="App">
      <div className='container'>
        <div className='main'>
          <h1>Choose new password</h1>
          <span className='span-text'>Almost done. Enter your new password and you are all set.</span>
          <div className='input-box'>
            <label className='input-label'>Create a password</label>
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='input-box'>
            <label className='input-label'>Confirm new password</label>
            <input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          {
            password.length > 0 ?
              <div className='validation'>
                <span className={isLower ? "lower-validated" : 'lower-unvalidated'}><img src={isLower ? tick : cross} alt="" /> one lowercase character</span>
                <span className={isUpper ? "upper-validated" : 'lower-unvalidated'}><img src={isUpper ? tick : cross} alt="" /> one upercase character</span>
                <span className={isSpecial ? "special-validated" : 'lower-unvalidated'}> <img src={isSpecial ? tick : cross} alt="" /> one special character</span>
                <span className={isNumber ? "number-validated" : 'lower-unvalidated'}><img src={isNumber ? tick : cross} alt="" /> one number</span>
                <span className={isEight ? "eight-validated" : 'lower-unvalidated'}><img src={isEight ? tick : cross} alt="" />  8 minimum character</span>
              </div>
              : ""
          }
          <button type='submit'>Reset password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
