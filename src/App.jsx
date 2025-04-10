import React, { useState } from 'react';

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
    console.log('Form submitted:', formData);
    alert('הטופס נשלח בהצלחה!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>ברוך הבא למערכת הזמנת חניות אורחים של פייברנט</h1>
      <p style={{ fontSize: '20px', marginTop: '20px' }}>האתר פועל! 🚗</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '40px auto', textAlign: 'right' }}>
        <label>שם האורח:</label>
        <input name="guestName" value={formData.guestName} onChange={handleChange} required />

        <label>מספר רכב:</label>
        <input name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />

        <label>תאריך ביקור:</label>
        <input type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} required />

        <label>שעת ביקור:</label>
        <input type="time" name="visitTime" value={formData.visitTime} onChange={handleChange} required />

        <label>טלפון אורח:</label>
        <input name="guestPhone" value={formData.guestPhone} onChange={handleChange} required />

        <label>שם מלווה מהחברה:</label>
        <input name="employeeName" value={formData.employeeName} onChange={handleChange} required />

        <button type="submit" style={{ marginTop: '20px' }}>שלח הזמנה</button>
      </form>
    </div>
  );
}

export default App;