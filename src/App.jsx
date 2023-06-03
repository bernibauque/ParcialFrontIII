import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || /^\s/.test(name)) {
      setError('Por favor, ingresa un nombre válido.');
      setShowCard(false);
      return;
    }

    if (color.trim().length < 6) {
      setError('Por favor, ingresa un color favorito válido.');
      setShowCard(false);
      return;
    }

    setError('');
    setShowCard(true);
  };

  return (
    <div className="app">
      <h2>Formulario - Color Favorito</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Nombre:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="colorInput">Color Favorito:</label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        /><br/><br/>

        <button type="submit">Enviar</button>
      </form>

      {error && <div className="error">{error}</div>}
      {showCard && <Card name={name} color={color} />}
    </div>
  );
};

export default App;



