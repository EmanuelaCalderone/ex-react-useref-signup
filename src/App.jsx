import { useState } from 'react'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()
    ) {
      alert("Compilare tutti i campi");
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
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Specializzazione:</label>
              <select
                value={specialization}
                onChange={e => setSpecialization(e.target.value)}
              >
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </div>

            <div className="form-group">
              <label>Anni di esperienza:</label>
              <input
                type="number"
                value={experience}
                onChange={e => setExperience(e.target.value)}
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Descrizione:</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">Registrati</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
