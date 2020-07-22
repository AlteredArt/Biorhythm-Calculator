import dayjs from 'dayjs';

function calculateBiorhythm(dob, targetDate, cycle){
  const birthDay = dayjs(dob).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'days');
  return Math.sin(2 * Math.PI * diff / cycle);
}


export function calculateBiorhythms(dob, targetDate){
  return {
    date: targetDate,
    physical: calculateBiorhythm(dob, targetDate, 23),
    emotional: calculateBiorhythm(dob, targetDate, 28),
    intellectual: calculateBiorhythm(dob, targetDate, 33),
  }
}

export function calculateBiorhythmSeries(dob, startDate, size) {
  const series = [];
    const startDay = dayjs(startDate).startOf('day');
    for(let i =0; i < size; i++) {
      const targetDate = startDay.add(i, 'days').toISOString();
      series.push(calculateBiorhythms(dob, targetDate));
    }
  return series;
}
