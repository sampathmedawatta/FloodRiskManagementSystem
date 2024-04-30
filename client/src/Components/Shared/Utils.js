import moment from 'moment';

export const getCurrentDateInfo = () => {
  const currentDate = moment();
  const formattedDate = currentDate.format('MMMM YYYY');
  const dayOfWeek = currentDate.format('dddd');
  const dayOfMonth = currentDate.format('DD');
  const today = currentDate.format('DD-MM-YYYY');

  // Dates from current date to 5 more days
    const fifthCurrentDate = currentDate.clone().add(4, 'days').format('DD-MM-YYYY');

  // Calculate the date 2 weeks from current date
  const twoWeeksDate = currentDate.clone().add(2, 'weeks').format('DD-MM-YYYY');
  

  // Starting and ending dates of next week
  const nextWeekStart = currentDate.clone().startOf('week').add(1, 'week').format('DD-MM-YYYY');
  const nextWeekEnd = currentDate.clone().endOf('week').add(1, 'week').format('DD-MM-YYYY');

  return { 
    currentDate, 
    formattedDate, 
    dayOfWeek, 
    dayOfMonth, 
    today, 
    fifthCurrentDate,
    nextWeekStart,
    nextWeekEnd,
    twoWeeksDate,
  };
};
