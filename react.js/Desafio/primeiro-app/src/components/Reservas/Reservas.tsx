import './ReservaComponent.css';

const ReservaComponent = () => {
    return (
      <div className="reservation-section">
        <h1>Faça sua Reserva</h1>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name"  required />
          
          <label htmlFor="date">Data:</label>
          <input type="date" id="date" name="date" required />
          
          <label htmlFor="time">Horário:</label>
          <input type="time" id="time" name="time"  required />
          
          <label htmlFor="guests">Número de Pessoas:</label>
          <input type="number" id="guests" name="guests"  required />
          
          <button type="submit">Reservar</button>
        </form>
      </div>
    );
  };
  
  export default ReservaComponent;