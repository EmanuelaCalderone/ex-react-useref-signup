import { useState, useMemo, useRef } from 'react'
import './App.css'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  // campi controllati
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')

  //campi non controllati
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef()

  const isUsernameValid = useMemo(() => {
    const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    );
    return charsValid && username.trim().length >= 6;
  }, [username])

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char.toLowerCase())) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    );
  }, [password])

  const isDescriptionValid = useMemo(() => {
    const len = description.trim().length;
    return len >= 100 && len < 1000;
  }, [description])

  const handleSubmit = (e) => {
    e.preventDefault();

    //valori non controllati
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Compilare tutti i campi correttamente");
      return;
    }

    console.log("Submit effettuato:", {
      fullName,
      username,
      password,
      specialization,
      experience,
      description
    })
  }

  return (
    <>
      <h2>Web Developer Signup</h2>
      <div className="wrapper">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome completo:</label>
              <input
                type="text"
                ref={fullNameRef}
              />
            </div>

            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              {username.trim() && (
                <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
                  {isUsernameValid ? "Username valido" : "Deve avere almeno 6 caratteri alfanumerici."}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {password.trim() && (
                <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
                  {isPasswordValid ? "Password valida" : "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo"}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Specializzazione:</label>
              <select
                ref={specializationRef}
              >
                <option value="">-- Seleziona --</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </div>

            <div className="form-group">
              <label>Anni di esperienza:</label>
              <input
                type="number"
                ref={experienceRef}
              />
            </div>

            <div className="form-group">
              <label>Descrizione:</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              {description.trim() && (
                <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
                  {isDescriptionValid
                    ? "Descrizione valida"
                    : `Deve contenere tra 100 e 1000 caratteri (${description.trim().length})`}

                </p>
              )}
            </div>

            <button type="submit" className="submit-btn">Registrati</button>
          </form>
        </div >
      </div >
    </>
  )
}

export default App
