import { useState } from 'react';
import './Task.css';

function Navigation({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [note, setNote] = useState('');

  const addTask = () => {
    if (title.trim() !== '' && dateStart && dateEnd && timeStart && timeEnd) {
      setTasks([...tasks, { title, dateStart, dateEnd, timeStart, timeEnd, note }]);
      setTitle('');
      setDateStart('');
      setDateEnd('');
      setTimeStart('');
      setTimeEnd('');
      setNote('');
    }
  };

  return (
    <div className='Task'>
      <div className='Task-List'>
        {tasks.map((t, index) => (
          <div key={index} className='task-item'>
            <strong>{t.title}</strong> ({t.dateStart} {t.timeStart} - {t.dateEnd} {t.timeEnd})
            <p>{t.note}</p>
          </div>
        ))}
      </div>
      <div id='create'>
        <div id='createbox'>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Titel' />
          <div>
            <input type='date' value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
            <input type='time' value={timeStart} onChange={(e) => setTimeStart(e.target.value)} />
          </div>
          <div>
            <input type='date' value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
            <input type='time' value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} />
          </div>
          <p>Kein Wiederholtes anzeigen</p>
          <input type='text' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Notizen...' />
          <button onClick={addTask}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;