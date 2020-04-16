const { zonedTimeToUtc, zonedTimeToUtcWithOptions, format, utcToZonedTime } = require('date-fns-tz/fp')

const parisTz = 'Europe/Paris'
const getUtcDateFromFrenchTime = zonedTimeToUtc(parisTz)
console.log(getUtcDateFromFrenchTime('2018-09-01 18:01'))
const utcDate = zonedTimeToUtcWithOptions('2018-09-01 18:01')('Europe/Paris')


console.log(utcDate)

/*
function getUtcDateFromZonedTime ({ date, time, timeZone }) {
    return utcDate
    return zonedTimeToUtc(`${date} ${time}`)(timeZone)
}

function getUtcDateFromFrenchTime ({ date, time }) {
    return getUtcDateFromZonedTime({ date, time, timeZone: parisTz })
}

const zonedDate = getUtcDateFromFrenchTime({ date: '1976-12-12', time: '06:00'})
console.log(zonedDate)

const pattern = 'dd-MM-yyyy HH:mm:ss.SSS [GMT] (z)'
const formattedDate = format(zonedDate, pattern, { timeZone: parisTz })
console.log(formattedDate)
*/