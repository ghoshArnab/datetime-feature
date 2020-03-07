import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import { DateTime } from "luxon";
import differenceInMilliseconds from "date-fns/differenceInMilliseconds";
import differenceInDays from "date-fns/differenceInDays";

// Moment.js
const momentFull = moment([2007, 0, 27]).diff(moment([2007, 0, 29]));
// => -172800000
const momentShort = moment([2007, 0, 27]).diff(moment([2007, 0, 29]), "days");
// => -2

// Native
const IntlFull = new Date(2007, 0, 27) - new Date(2007, 0, 29);
// => -172800000
const IntlShort = Math.ceil(
  (new Date(2007, 0, 27) - new Date(2007, 0, 29)) / 1000 / 60 / 60 / 24
);
// => -2

const DfFull = differenceInMilliseconds(
  new Date(2007, 0, 27),
  new Date(2007, 0, 29)
);
// => -172800000
const DfShort = differenceInDays(new Date(2007, 0, 27), new Date(2007, 0, 29));
// => -2

// dayjs
const dayFull = dayjs("2007-01-27").diff(dayjs("2007-01-29"), "milliseconds");
// => -172800000
const dayShort = dayjs("2007-01-27").diff(dayjs("2007-01-29"), "days");
// => -2

// luxon
const luxFull = DateTime.local(2007, 1, 27).diff(DateTime.local(2007, 1, 29))
  .milliseconds;
// => -172800000
const luxShort = DateTime.local(2007, 1, 27).diff(
  DateTime.local(2007, 1, 29),
  "days"
).days;
// => -2
const Difference = `
<span class=blue>Difference calculation between dates </span><br>
  Moment Full : ${momentFull} <br>
  Moment Short : ${momentShort} <hr>

  DateFns Full : ${DfFull} <br>
  DateFns Short : ${DfShort} <hr>

  dayJS Full : ${dayFull} <br>
  dayJS Short : ${dayShort} <hr>

  luxon Full : ${luxFull} <br>
  luxon Short : ${luxShort} <hr>

  Native Full : ${IntlFull} <br>
  Native Short : ${IntlShort} <hr>

</div>
`;

export default Difference;
