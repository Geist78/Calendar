import { useState } from "react";
import "./DailyCalendar.css";

function Calendar({ activeView, tasks }) {
  const [date, setDate] = useState(new Date());

  const changeDate = (days) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  };

  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div>
      <div className="date-header">
        <button onClick={() => changeDate(-1)}>⬅</button>
        <span>{date.toLocaleDateString("de-DE")}</span>
        <button onClick={() => changeDate(1)}>➡</button>
      </div>
      <div className="calendar-container">
        <div className="calendar-scroll">
          {hours.map((hour, index) => {
            const taskForHour = tasks.find(
              (task) =>
                task.dateStart <= formattedDate &&
                task.dateEnd >= formattedDate &&
                parseInt(task.timeStart.split(":"[0])) <= index &&
                parseInt(task.timeEnd.split(":"[0])) >= index
            );

            return (
              <div key={index} className={`hour-row ${taskForHour ? "task-hour" : ""}`}>
                <div className="hour-line"></div>
                <span className="hour-text">{hour}</span>
                {taskForHour && <div className="task-block">{taskForHour.title}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
