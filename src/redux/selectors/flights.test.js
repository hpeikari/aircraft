import * as selectors from './flights';

describe('Flights Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      aircrafts: {
        dateIndex: 1
      },
      flights: {
        flightList: [
          {
            id: 'AS1083',
            departuretime: 36000,
            arrivaltime: 44100,
            readable_departure: '10:00',
            readable_arrival: '12:15',
            origin: 'LFSB',
            destination: 'LEAL'
          },
          {
            id: 'AS1084',
            departuretime: 46200,
            arrivaltime: 54600,
            readable_departure: '12:50',
            readable_arrival: '15:10',
            origin: 'LEAL',
            destination: 'LFSB'
          },
          {
            id: 'AS11',
            departuretime: 43200,
            arrivaltime: 47700,
            readable_departure: '12:00',
            readable_arrival: '13:15',
            origin: 'EGGW',
            destination: 'EGPH'
          },
          {
            id: 'AS1115',
            departuretime: 21600,
            arrivaltime: 30000,
            readable_departure: '06:00',
            readable_arrival: '08:20',
            origin: 'LFSB',
            destination: 'LEMD'
          },
          {
            id: 'AS1116',
            departuretime: 32100,
            arrivaltime: 40200,
            readable_departure: '08:55',
            readable_arrival: '11:10',
            origin: 'LEMD',
            destination: 'LFSB'
          },
          {
            id: 'AS1125',
            departuretime: 43500,
            arrivaltime: 49500,
            readable_departure: '12:05',
            readable_arrival: '13:45',
            origin: 'LFSB',
            destination: 'LIRN'
          }
        ],
        isFlightListLoading: false
      }
    };
  });

  it('should remove the releport flight and create 2 groups of rotations', () => {
    const expectedResult = [
      [
        {
          id: 'AS1083',
          departuretime: 36000,
          arrivaltime: 44100,
          readable_departure: '10:00',
          readable_arrival: '12:15',
          origin: 'LFSB',
          destination: 'LEAL'
        },
        {
          id: 'AS1084',
          departuretime: 46200,
          arrivaltime: 54600,
          readable_departure: '12:50',
          readable_arrival: '15:10',
          origin: 'LEAL',
          destination: 'LFSB'
        }
      ],
      [
        {
          id: 'AS1115',
          departuretime: 21600,
          arrivaltime: 30000,
          readable_departure: '06:00',
          readable_arrival: '08:20',
          origin: 'LFSB',
          destination: 'LEMD'
        },
        {
          id: 'AS1116',
          departuretime: 32100,
          arrivaltime: 40200,
          readable_departure: '08:55',
          readable_arrival: '11:10',
          origin: 'LEMD',
          destination: 'LFSB'
        },
        {
          id: 'AS1125',
          departuretime: 43500,
          arrivaltime: 49500,
          readable_departure: '12:05',
          readable_arrival: '13:45',
          origin: 'LFSB',
          destination: 'LIRN'
        }
      ]
    ];
    expect(selectors.deriveDailyFlightRotation(state)).toMatchObject(expectedResult);
  });

  it('should return a rotation group based on dateIndex (index 1)', () => {
    const expectedResult = [
      {
        id: 'AS1115',
        departuretime: 21600,
        arrivaltime: 30000,
        readable_departure: '06:00',
        readable_arrival: '08:20',
        origin: 'LFSB',
        destination: 'LEMD'
      },
      {
        id: 'AS1116',
        departuretime: 32100,
        arrivaltime: 40200,
        readable_departure: '08:55',
        readable_arrival: '11:10',
        origin: 'LEMD',
        destination: 'LFSB'
      },
      {
        id: 'AS1125',
        departuretime: 43500,
        arrivaltime: 49500,
        readable_departure: '12:05',
        readable_arrival: '13:45',
        origin: 'LFSB',
        destination: 'LIRN'
      }
    ];
    expect(selectors.deriveDailyFlightRotationByIndex(state)).toMatchObject(expectedResult);
  });

  it('should return the aircraft timeline based on rotation of dateIndex 1', () => {
    const expectedResult = {
      totalScheduled: 26.04,
      timeline: {
        lastIndex: 6,
        durationsSum: 86400,
        durations: [21600, 8400, 2100, 8100, 3300, 6000, 36900],
        colors: ['lightgray', 'green', 'purple', 'green', 'purple', 'green', 'lightgray']
      }
    };
    expect(selectors.deriveDailyScheduledService(state)).toMatchObject(expectedResult);
  });
});
