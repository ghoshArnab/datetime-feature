import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import { DateTime } from "luxon";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";

// Moment.js
const momentBefore = moment("2010-10-20").isBefore("2010-10-21");
// => -172800000
const momentAfter = moment("2010-10-20").isAfter("2010-10-19");
// => -2

// Native
const IntlBefore = new Date(2010, 10, 20) < new Date(2010, 10, 21);
// => -172800000
const IntlAfter = new Date(2010, 9, 20) > new Date(2010, 9, 19);
// => -2

const DfBefore = isBefore(new Date(2010, 9, 20), new Date(2010, 9, 21));
// => -172800000
const DfAfter = isAfter(new Date(2010, 9, 20), new Date(2010, 9, 19));

// dayjs
const dayBefore = dayjs("2010-10-20").isBefore("2010-10-21");
// => -172800000
const dayAfter = dayjs("2010-10-20").isAfter("2010-10-19");
// => -2

// luxon
const luxBefore =
  DateTime.fromISO("2010-10-20") < DateTime.fromISO("2010-10-21");
const luxAfter =
  DateTime.fromISO("2010-10-20") > DateTime.fromISO("2010-10-19");

const Query = `
<span class=blue>isBefore & isAfter / isafuturedate & isapastdate</span><br>
  Moment Before : ${momentBefore} <br>
  Moment After : ${momentAfter} <hr>

  DateFns Before : ${DfBefore} <br>
  DateFns Short : ${DfAfter} <hr>

  dayJS Before : ${dayBefore} <br>
  dayJS Short : ${dayAfter} <hr>

  luxon Before : ${luxBefore} <br>
  luxon Short : ${luxAfter} <hr>

  Native Before : ${IntlBefore} <br>
  Native Short : ${IntlAfter} <hr>

</div>
`;

export default Query;
