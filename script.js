document.addEventListener('DOMContentLoaded', function () {
  // Display current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTimeElement = document.getElementById('time-utc');
    if (utcTimeElement) {
      utcTimeElement.textContent = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
    }
  }
  
  updateTime();
  setInterval(updateTime, 1000); // Update time every second

  // Display current day of the week 
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  const currentDayElement = document.getElementById('day');
  if (currentDayElement) {
    function updateCurrentDay() {
      const today = new Date();
      currentDayElement.textContent = daysOfWeek[today.getUTCDay()] + ', ' + today.toLocaleDateString('en-US', { timeZone: 'UTC' });
    }
    
    updateCurrentDay(); // Initial update
    setInterval(updateCurrentDay, 60000); // Update every minute (for demonstration purposes)
  }
});
