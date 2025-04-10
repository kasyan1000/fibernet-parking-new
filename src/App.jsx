
import React, { useState } from 'react';
import './App.css';
import logo from './fibernet-logo.png';

function App() {
  const [formData, setFormData] = useState({
    guestName: '',
    licensePlate: '',
    visitDate: '',
    visitTime: '',
    guestPhone: '',
    employeeName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ההזמנה נשלחה בהצלחה!');
  };

  return (
    <div className="App">
      <img src={logo} alt="Fibernet Logo" className="logo" />
      <h1>ברוך הבא למערכת הזמנת חניות אורחים של פייברנט</h1>
      <form onSubmit={handleSubmit}>
        <label>שם האורח:</label>
        <input name="guestName" value={formData.guestName} onChange={handleChange} required />

        <label>מספר רכב:</label>
        <input name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />

        <label>תאריך ביקור:</label>
        <input type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} required />

        <label>שעת ביקור:</label>
        <input type="time" name="visitTime" value={formData.visitTime} onChange={handleChange}
          min="08:00" max="19:30" required />

        <label>טלפון אורח:</label>
        <input name="guestPhone" value={formData.guestPhone} onChange={handleChange} required />

        <label>שם מלווה מהחברה:</label>
        <input name="employeeName" value={formData.employeeName} onChange={handleChange} required />

        <button type="submit">שלח הזמנה</button>
      </form>
    </div>
  );
}

export default App;
