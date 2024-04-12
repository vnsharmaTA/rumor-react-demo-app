export const timestampToDate = (timestamp: number) => {
  // Convert timestamp to milliseconds
  const date = new Date(timestamp * 1000);

  // Get day and month
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are index-based, so we add 1

  // Format day and month with leading zeros if needed
  const formattedDay = (day < 10 ? '0' : '') + day;
  const formattedMonth = (month < 10 ? '0' : '') + month;

  // Return formatted date
  return `${formattedDay}/${formattedMonth}`;
};

export const timestampToDayOfWeek = (timestamp: number) => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Convert timestamp to milliseconds
  const date = new Date(timestamp * 1000);

  // Get day of the week
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Return formatted day of the week
  return dayOfWeek;
};

export const formateDateToDot = (date?: string) => {
  if (!date) {
    return '';
  }
  const inputDate = new Date(date);

  // Extract year, month, and day from the input date
  const year = inputDate.getUTCFullYear();
  const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(inputDate.getUTCDate()).padStart(2, '0');

  // Format the date as required
  return `${day}.${month}.${year}`;
};
