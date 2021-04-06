import { createSelector } from 'reselect';
import path from 'ramda/src/path';
import { turnaroundTime, totalSecondsInDay } from '../../constants/flight';
import { roundupNumber } from '../../utils/roundupNumber';

const getAllFlights = path(['flights', 'flightList']);
const getRotationDayIndex = path(['aircrafts', 'dateIndex']);

/*
  We should first remove teleport flights from the list.
  We should then group data in objects where departure and arrival times are within a day.
  There is no Date() object returned from the payload which is weird, and in a real-world scenario
  it makes very hard to assign a specific date to a group.
*/
export const deriveDailyFlightRotation = createSelector(getAllFlights, flightList => {
  const cleanData = flightList.filter(removeTeleportFlights);
  const rotations = groupDailyFlights(cleanData);
  return rotations || [];
});

// remove flights where there is no continuation between prev departure to the next arrival
const removeTeleportFlights = (item, index, arr) => {
  if (item.destination === arr[index + 1]?.origin || item.origin === arr[index - 1]?.destination) {
    return item;
  } else {
    return false;
  }
};

const groupDailyFlights = data => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let dailyRotation = [];
    dailyRotation.push(data[i]);

    while (data[i + 1]?.departuretime - data[i]?.arrivaltime >= turnaroundTime) {
      dailyRotation.push(data[i + 1]);
      i++;
    }

    result.push(dailyRotation);
  }
  return result;
};

export const deriveDailyFlightRotationByIndex = createSelector(
  [deriveDailyFlightRotation, getRotationDayIndex],
  (rotations, dayIndex) => rotations[dayIndex] || []
);

export const deriveDailyScheduledService = createSelector(deriveDailyFlightRotationByIndex, dailyRotation => {
  const flightDurations = dailyRotation.map(item => item.arrivaltime - item.departuretime);

  const scheduledService = roundupNumber(
    (flightDurations.reduce((accum, item) => (accum += item), 0) * 100) / totalSecondsInDay
  );

  const timeline = generateColorMap(dailyRotation);

  return {
    totalScheduled: scheduledService,
    timeline
  };
});

const isEven = n => n % 2 === 0;

const generateColorMap = dailyRotation => {
  const scheduled = dailyRotation.reduce((accum, item) => accum.concat([item.departuretime, item.arrivaltime]), []);
  const scheduleMap = [0, ...scheduled, 86400];

  const durations = scheduleMap
    .reduce((acc, item, idx, arr) => {
      return acc.concat(arr[idx + 1] - arr[idx]);
    }, [])
    .filter(i => !!i);

  const lastIndex = durations.length - 1;
  const durationsSum = durations.reduce((acc, item) => (acc += item), 0);

  const colors = durations.map((_, i) => {
    if (i === 0 || i === lastIndex) {
      return 'lightgray';
    } else if (isEven(i)) {
      return 'purple';
    } else {
      return 'green';
    }
  });

  return {
    durations,
    durationsSum,
    lastIndex,
    colors
  };
};
