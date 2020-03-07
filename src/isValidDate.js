import "./styles.css";
import moment from "moment";
import dayjs from "dayjs";
import { DateTime } from "luxon";
import isDate from "date-fns/isDate";
// Moment.js
const momentDate = moment.isDate(new Date());
// => true

// Native
const nativeDate = new Date() instanceof Date;
// => true

// date-fns

const dateFnsdate = isDate(new Date());
// => true

// dayjs
const daydate = dayjs(new Date()).isValid();

// luxon
const luxondate = DateTime.local().isValid;
// => true
const validDate = `
<span class=blue>Is a valid date ?</span><br>
  Moment : ${momentDate} <br>

  DateFns : ${dateFnsdate} <br>

  dayJS : ${daydate} <br>

  luxon : ${luxondate} <br>

  Native : ${nativeDate}

</div>
`;

export default validDate;
