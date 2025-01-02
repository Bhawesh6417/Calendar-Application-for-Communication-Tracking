import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView() {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date:", newDate);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-3">Communication Calendar</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
}

export default CalendarView;
