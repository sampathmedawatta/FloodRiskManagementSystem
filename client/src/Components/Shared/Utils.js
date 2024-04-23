
import moment from 'moment';

// To get current date, formatted date, day of the week, and day of the month
export const getCurrentDateInfo = () => {
  const currentDate = moment();
  const formattedDate = currentDate.format('MMMM YYYY');
  const dayOfWeek = currentDate.format('dddd');
  const dayOfMonth = currentDate.format('DD');
  const today = currentDate.format('DD-MM-YYYY');
  return { currentDate, formattedDate, dayOfWeek, dayOfMonth,today };
};
