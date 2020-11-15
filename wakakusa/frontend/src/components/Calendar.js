import React from "react";
import ReactDOM from "react-dom";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import TodoList from './TodoList.js';

import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();
const style={width: 80};

function Calendar() {
  const randomValues = getRange(360).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });
  return (
    <div style={{ width: '100%' }}>
      <h1>カレンダーを確認</h1>
      <p>Todoの達成数が高いほど色が濃くなります</p>
      <CalendarHeatmap
        startDate={shiftDate(today, -360)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)} のTodo達成度 ${
              value.count/4
            }`,
          };
        }}
        showWeekdayLabels={true}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
      <TodoList />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Calendar;
ReactDOM.render(<Calendar />, document.getElementById("calendar"));
