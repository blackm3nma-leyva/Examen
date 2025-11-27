function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date(2025, 10, 27));
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    const today = () => setCurrentDate(new Date(2025, 10, 27));

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded"><div className="icon-chevron-left text-sm"></div></button>
            <button onClick={today} className="px-2 text-xs bg-[var(--primary-color)] text-white rounded">Hoy</button>
            <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded"><div className="icon-chevron-right text-sm"></div></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
            <div key={`day-header-${index}`} className="text-center text-xs font-bold text-gray-500">{day}</div>
          ))}
          {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`}></div>)}
          {Array(daysInMonth).fill(null).map((_, i) => (
            <div key={`day-${i + 1}`} className="text-center p-2 hover:bg-[var(--primary-color)]/20 rounded cursor-pointer text-sm">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}