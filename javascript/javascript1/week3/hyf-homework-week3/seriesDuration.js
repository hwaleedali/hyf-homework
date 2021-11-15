console.log('Duration of life on Series')


const seriesDurations = [
    {
      title: 'House of Cards',
      days: 5,
      hours: 3,
      minutes: 0
    },
    {
      title: 'Prison Break',
      days: 7,
      hours: 8,
      minutes: 0
    },
    {
      title: 'How to Get Away With Murder',
      days: 6,
      hours: 18,
      minutes: 0
    }
  ];
  let timeSpan = 0;
function logOutSeriesText(seriesDurations) {
    seriesDurations.forEach((series) => {
        const totalDays = series.days + series.hours / 24
        console.log(series.title);
        console.log(totalDays);
        timeSpan = timeSpan + totalDays;
    });
    const seriesTime =  timeSpan / (80 * 365) * 100
    console.log(`${seriesTime.toFixed(3)}% of my life has been spent on Series...`);
 }

logOutSeriesText(seriesDurations);