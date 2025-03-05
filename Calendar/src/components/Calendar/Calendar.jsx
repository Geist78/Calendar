import { lazy, Suspense } from 'react';

const DailyCalendar = lazy(() => import('./CalendarPages/DailyCalendar.jsx'));
const WeeklyCalendar = lazy(() => import('./CalendarPages/WeeklyCalendar.jsx'));
const MonthlyCalendar = lazy(() => import('./CalendarPages/MonthlyCalendar.jsx'));
const YearlyCalendar = lazy(() => import('./CalendarPages/YearlyCalendar.jsx'));

function Calendar({ activeView }) {
    const components = {
        Day: DailyCalendar,
        Week: WeeklyCalendar,
        Month: MonthlyCalendar,
        Year: YearlyCalendar,
    };

    const Component = components[activeView] || YearlyCalendar;

    return (
        <Suspense fallback={<div>Lade Kalender...</div>}>
            <Component />
        </Suspense>
    );
}

export default Calendar;
