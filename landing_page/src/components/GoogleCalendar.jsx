import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GoogleCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Horarios disponibles
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmation(true);
      // Aquí puedes enviar el evento al backend o API de Google Calendar
      console.log(`Evento agendado el ${selectedDate} a las ${selectedTime}`);
    } else {
      alert("Por favor selecciona una fecha y hora.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Agendar demo comercial</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Selecciona una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Selecciona un horario:</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="mt-2 p-2 border rounded w-full"
        >
          <option value="">Selecciona un horario</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSchedule}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors w-full"
      >
        Confirmar cita
      </button>
      {showConfirmation && (
        <div className="mt-4 text-green-600">
          ¡Tu cita ha sido agendada para el {selectedDate?.toLocaleDateString()} a las {selectedTime}!
        </div>
      )}
    </div>
  );
}

export default GoogleCalendar;
