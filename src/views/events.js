let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
    title: "My Event",
    start: "2021-04-08T14:30",
    color: 'red'
    },
    {
    title: "My Event 2",
    start: "2021-04-09T15:30",
    color: 'yellow'
    }
]

export function createEventId() {
    return String(eventGuid++)
  }