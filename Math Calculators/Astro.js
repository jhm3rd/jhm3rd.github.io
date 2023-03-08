const astro = {		// using an object as a global namespace
					// call functions with e.g. astro.getDec(1)
					// need to call these functions with astro.yyy even when 
					// called by functions within astro
					
	beautifyNum: function (num) 
	{
		// function returns string rep of num with commas (based on locale)
		return num.toLocaleString('en-US');
	},
					
	getDec: function (num)
	{
		// function returns decimal part of num
		const decimal = num - Math.floor(num);
	
		return decimal;
	},

	decDegToDMS: function (dec)
	{
		// function returns degrees, minutes, seconds from the decimal degree
		// e.g. 27.75 returns 27 degrees, 45 minutes and 0 seconds
	
		const decFrac = getDec(dec) * 60;
		const minutes = Math.floor(decFrac);
		const seconds = getDec(decFrac) * 60;
		const degrees = dec - decFrac;
	
		const degArray = [degrees,minutes,seconds];
		return degArray;
	},

	DMStoDecDeg: function (dms)
	{
		// function returns decimal degrees from degrees, minutes, seconds

		const degrees = dms[0];
		const minutes = dms[1];
		const seconds = dms[2];
	
		decDeg = (seconds/60 + minutes)/60 + degrees;
		return decDeg;
	},

	angleHMStoDeg: function (hms)
	{
		// input is string "hours:minutes:seconds"
		// takes decimal angles in hours, minutes & seconds and converts them to 
		// decimal angles in degrees, arcminutes & arcseconds
		// output is an array
	
		const hmsArray = hms.split(":");
		const hours = parseInt(hmsArray[0]);
		const minutes = parseInt(hmsArray[1]);
		const seconds = parseFloat(hmsArray[2]);
	
		const aSecs = 15 * seconds;
		let arcSecs = 0;
		let addArcMin = 0;
		if (aSecs >= 60)
		{
			const secFrac = astro.getDec(aSecs);
			const secInt = Math.floor(aSecs);
			arcSecs = secInt % 60 + secFrac;
			addArcMin = Math.floor(secInt/60);
		}
		else
		{
			arcSecs = aSecs;
		}
		arcSecs = arcSecs.toFixed(3);
	
		const aMins = 15 * minutes + addArcMin
		let arcMins = 0;
		let addArcHrs = 0;
		if (aMins >= 60)
		{
			arcMins = aMins % 60;
			addArcHrs = Math.floor(aMins/60);	
		}
		else
		{
			arcMins = aMins;
		}
	
		const arcHrs = 15 * hours + addArcHrs;
		const dms = [arcHrs,arcMins,arcSecs];
	
		return dms;
	},

	angleDegToHMS: function (dms)
	{
		// input is string "degrees:arcminutes:arcseconds"
		// takes decimal angles in degrees, arcminutes & arcseconds and converts them to 
		// decimal angles in hours, minutes & seconds
		// output is an array
	
		const dmsStrArray = dms.split(":");
		const degrees = parseInt(dmsStrArray[0]);
		const arcMins = parseInt(dmsStrArray[1]);
		const arcSecs = parseFloat(dmsStrArray[2]);
	
		let hours = degrees/15;
		const hrFrac = astro.getDec(hours);
		hours = Math.floor(hours);
	
		let minutes = arcMins/15;
		let addMin = hrFrac * 60;
		const addMinFrac = astro.getDec(addMin);
		addMin = Math.floor(addMin);
		const minFrac = astro.getDec(minutes) + addMinFrac;
		minutes = Math.floor(minutes + minFrac) + addMin;
	
		let seconds = arcSecs/15;
		const addSecs = astro.getDec(minFrac) * 60;
		seconds = seconds + addSecs;
		seconds = seconds.toFixed(3);
	
		const hms = [hours,minutes,seconds];
		return hms
	},

	decToHMS: function (dec)
	{
		// function returns hours, minutes, seconds, & milliseconds from the decimal part of day
		// e.g. 0.75 returns 18 hours (military time)
		const hrsPlus = 24 * dec;
		const hrs = Math.floor(hrsPlus);
		const decMin = hrsPlus - hrs;
		const minsPlus = 60 * decMin;
		const mins = Math.floor(minsPlus);
		const decSec = minsPlus - mins;
		const secsPlus = 60 * decSec;
		const secs = Math.floor(secsPlus);
		const mSecsPlus = secsPlus - secs;
		const mSecs = Math.floor(1000*mSecsPlus);
	
		const timeArray = [hrs,mins,secs,mSecs];
		return timeArray;
	
	},

	decToHMSHour: function (dec)
	{
		// function returns hours, minutes, seconds, & milliseconds from the decimal hours

		const hrs = Math.floor(dec);
		const decMin = dec - hrs;
		const minsPlus = 60 * decMin;
		const mins = Math.floor(minsPlus);
		const decSec = minsPlus - mins;
		const secsPlus = 60 * decSec;
		const secs = Math.floor(secsPlus);
		const mSecsPlus = secsPlus - secs;
		const mSecs = Math.floor(1000*mSecsPlus);
	
		const timeArray = [hrs,mins,secs,mSecs];
		return timeArray;
	
	},


	HMStoDecDay: function (hours,minutes,seconds,milliseconds)
	{
		// function returns a decimal representation of the time provided
		// e.g. 18:0:0:0 returns 0.75
		const decTime = (((parseInt(milliseconds)/1000 + parseFloat(seconds))/60 + parseInt(minutes))/60 + parseInt(hours))/24;
	
		return decTime;
	},

	HMStoDec: function (hours,minutes,seconds,milliseconds)
	{
		// function returns a decimal representation in hours of the time provided

		const decTime = (((milliseconds/1000 + seconds)/60 + minutes)/60 + hours);
	
		return decTime;
	},

	resolveMonth: function (mnth)
	{
		let month = "";
		switch (mnth)
		{
			case 1:
				month = "January";
				break;
			case 2:
				month = "February";
				break;
			case 3:
				month = "March";
				break;
			case 4:
				month = "April";
				break;
			case 5:
				month = "May";
				break;
			case 6:
				month = "June";
				break;
			case 7:
				month = "July";
				break;
			case 8:
				month = "August";
				break;
			case 9:
				month = "September";
				break;
			case 10:
				month = "October";
				break;
			case 11:
				month = "November";
				break;
			case 12:
				month = "December";
				break;
		}
	
		return month;
	},

	resolveMonthFmNum: function (mnthNum)	// Months numbered from 0-11
	{
		let month = 0;
		switch (mnthNum)
		{
			case "January":
				month = 0;
				break;
			case "February":
				month = 1;
				break;
			case "March":
				month = 2;
				break;
			case "April":
				month = 3;
				break;
			case "May":
				month = 4;
				break;
			case "June":
				month = 5;
				break;
			case "July":
				month = 6;
				break;
			case "August":
				month = 7;
				break;
			case "September":
				month = 8;
				break;
			case "October":
				month = 9;
				break;
			case "November":
				month = 10;
				break;
			case "December":
				month = 11;
				break;
		}
	
		return month;
	},

	reduceBy24s: function (num)
	{
		if (num <= 0)	// add 24's until number is in range 0-24
		{
			while (num < 0)
			{
				num = num + 24;
			}
		}
		else if (num > 24)			// subtract 24's until number is in range 0-24
		{
			while (num > 24)
			{
				num = num - 24;
			}
		}
		return num;
	},

	// Astro functions

	calcEaster: function (year) {

		let output = "";
		const yr = parseInt(year);
		
		const a = yr % 19;	
		const b = Math.floor(yr/100);
		const c = yr % 100;	
		const d = Math.floor(b/4);
		const e = b % 4;
	
		const f = Math.floor((b+8)/25);
		const g = Math.floor((b-f+1)/3);
		const h = (19*a + b - d - g + 15) % 30;
	
		const i = Math.floor(c/4);
		const k = c % 4;
	
		const l = (32 + 2*e + 2*i - h - k) % 7;
		const m = Math.floor((a + 11*h + 22*l)/451);
	
		const n = Math.floor((h + l - 7*m + 114)/31);
		const p = (h + l - 7*m + 114) % 31;
	
		const day = p + 1;
	
		switch (n)
		{
			case 3:
				output = "March" + " " + day + ", " + year;
				break;
			case 4:
				output = "April" + " " + day + ", " + year;
				break;
		}
	
		return output;
	
	}, //end of function
	
	calcPassover: function (year) { // calculates the first day of Passover given the year
	
		// 2019 is 5780 until Rosh Hashana in 2020
		const A = year + 3760;
		const a = (12 * A + 17) % 19;
		const b = A % 4;
		
		const temp = 32 + 4343 / 98496 + (1 + 272953 / 492480) * a + b / 4 - (313 / 98496) * A;
		const M = Math.floor(temp);		// integer part
		const m = temp - M;				// fractional part
		
		// this is 15 Nisan to the date in March unless it is postponed for one of the following:
		
		let answer = M;
		
		const c = (3 * A + 5 * b + M + 5) % 7;
		switch (c)
		{
			case 0:
				if ((a > 11) & (m >= 23269/25920)){
					answer++;
				}
				break
			case 1:
				if ((a > 6) & (m >= 1367/2160)){
					answer = answer + 2;
				}
				break
			case 2:
				answer++;
				break
			case 4:
				answer++;
				break
			case 6:
				answer++;
				break
			default:
				// answer needs no modification
				break
		}
		
		// answer is now the date in March, but in the Julian calendar
		const C = Math.floor(year / 100);
		const JtoCAdjust = C - 2 - Math.floor(C / 4);
		
		const gDate = answer + JtoCAdjust;
		
		if (gDate > 31) {		// move to April
			return `15 Nisan, ${A} is April ${gDate - 31}, ${year}`;
		}
		else {
			return `15 Nisan is March ${gDate}, ${year}`;
		}
		
		// Note: Purim is Pesach - 30 days and Rosh Hashana is Pesach + 163 days
		
	}, // end of function

	calcMonDay: function (dayMon) {	// dayMon is in "Month X" format
	
		var dayMonArray = dayMon.split(' ');	// array should contain Month, X in cells 1 & 2
		var days = 0;
		const daysArray = [0,31,59,90,120,151,181,212,243,273,304,334]
	
		switch (dayMonArray[0])
		{
			case "January":
				days = daysArray[0];
				break;
			case "February":
				days = daysArray[1];
				break;
			case "March":
				days = daysArray[2];
				break;
			case "April":
				days = daysArray[3];
				break;
			case "May":
				days = daysArray[4];
				break;
			case "June":
				days = daysArray[5];
				break;
			case "July":
				days = daysArray[6];
				break;
			case "August":
				days = daysArray[7];
				break;
			case "September":
				days = daysArray[8];
				break;
			case "October":
				days = daysArray[9];
				break;
			case "November":
				days = daysArray[10];
				break;
			case "December":
				days = daysArray[11];
				break;
		}
	
		const output = days + parseFloat(dayMonArray[1]);
		return output;
	
	},

	calcJDfmUTC: function (ymd)
	{
		let ymdArray = ymd.split(" ");
		
		let yr = ymdArray[0];
		let mnth = ymdArray[1];
		let date = ymdArray[2];
	
		const fracDate = date - Math.floor(date);
		date = Math.floor(date);
	
		const UTCmonth = astro.resolveMonthFmNum(mnth) + 1;
	
	
		if ( UTCmonth == 1 | UTCmonth == 2)
		{
			yr--;
			mnth = UTCmonth + 12;
		}
		else
		{
			mnth = UTCmonth;
		}
	
		const testDate = (yr*10000) + (UTCmonth*100) + date;
		let B = 0;
		if (testDate > 15821015)	// The date of the change to the Gregorian calendar
		{
			const A = Math.floor(yr/100);
			B = 2 - A + Math.floor(A/4);
		}
	
		let C = 0;
		if (yr < 0)
		{
			C = Math.floor(365.25*yr - 0.75);
		}
		else
		{
			C = Math.floor(365.25*yr);
		}
	
		const D = Math.floor(30.6001*(mnth + 1));
	
		let result = B + C + D + date +  1720994.5; // fracDate not included?!
	
		return result.toFixed(3);

	},

	calcJDfmLocal: function (ymd) {
	
		let ymdArray = ymd.split(" ");
	
		// need to first convert the decimal day to hours, minutes, seconds
		// dateObj.setYear(2018); setMonth(); setDate(); setHours(); setMinutes(); setSeconds()
		// similarly dateObj.getYear()
	
		const decimalTime = astro.getDec(ymdArray[2]); // function returns decimal part of number
	
		const hms = astro.decToHMS(decimalTime); // [hours,minutes,seconds,milliseconds]
	
		const dateTimeStr = (ymdArray[2] - decimalTime) + " " + ymdArray[1] + " " + ymdArray[0]
		
		let dateTime = new Date(dateTimeStr);
		dateTime.setHours(hms[0]);
		dateTime.setMinutes(hms[1]);
		dateTime.setSeconds(hms[2]);
		dateTime.setMilliseconds(hms[3]);
	
		// dateTime now has the time entered (in local time zone)
	
		// now need to replace following script with UTC equivalents
	
		// e.g. getUTCFullYear, getUTCMonth, getUTCDate, ..., getUTCMilliseconds
	
	
	
		const UTCyear = dateTime.getUTCFullYear();
		const UTCday = dateTime.getUTCDate();
		const UTCmonth = dateTime.getUTCMonth() + 1; // so e.g. January is now 1
		const UTChours = dateTime.getUTCHours();
		const UTCminutes = dateTime.getUTCMinutes();
		const UTCseconds = dateTime.getUTCSeconds();
		const UTCmillisecs = dateTime.getUTCMilliseconds();
	
		// need to convert time to decimal equivalent
	
		let UTCdecTime = astro.HMStoDecDay(UTChours,UTCminutes,UTCseconds,UTCmillisecs);
	
		let yr = UTCyear;
		let mnth = UTCmonth;
	
		if ( UTCmonth == 1 | UTCmonth == 2)
		{
			yr--;
			mnth = UTCmonth + 12;
		}
	
		const testDate = (UTCyear*10000) + (UTCmonth*100) + (UTCday);
		let B = 0;
		if (testDate > 15821015)	// The date of the change to the Gregorian calendar
		{
			const A = Math.floor(yr/100);
			B = 2 - A + Math.floor(A/4);
		}
	
		let C = 0;
		if (yr < 0)
		{
			C = Math.floor(365.25*yr - 0.75);
		}
		else
		{
			C = Math.floor(365.25*yr);
		}
	
		const D = Math.floor(30.6001*(mnth + 1));
	
		let result = B + C + D + UTCday + UTCdecTime +  1720994.5;
	
		return result.toFixed(3);

	
	},

	calcGD: function (jd)
	{
		const I = Math.floor(jd + 0.5);
		const F = jd + 0.5 - I;
	
		let B = I;
		if (I > 2299160)
		{
			const A = Math.floor((I - 1867216.25)/36524.25);
			B = I + A - Math.floor(A/4) + 1;
		}
	
		const C = B + 1524;
		const D = Math.floor((C - 122.1)/365.25);
		const E = Math.floor(365.25 * D);
		const G = Math.floor((C - E)/30.6001);
	
		const date = C - E + F - Math.floor(30.6001 * G);
	
		let m = 0;
		if (G < 13.5)
		{
			m = G - 1;
		}
		else
		{
			m = G - 13;
		}
		const month = astro.resolveMonth(m);
	
		let year = 0;
		if (m > 2.5)
		{
			year = D - 4716;
		}
		else
		{
			year = D - 4715;
		}
	
		return year + " " + month + " " + date;
	},

	gmtToLocal: function (greenDT)
	{
		const greenDTArray = greenDT.split(" ");
	
		const year = greenDTArray[0];
		const month = greenDTArray[1];
		const date = greenDTArray[2];
	
		let greenTimeArray = ["","",""];
		let hours = "";
		let minutes = "";
		let seconds = "";
	
		if (greenDTArray[3] !== "")
		{
			greenTimeArray = greenDTArray[3].split(":");
			hours = greenTimeArray[0];
			minutes = greenTimeArray[1];
			seconds = greenTimeArray[2];
		}
	
		const UTCDate = new Date();
		UTCDate.setUTCFullYear(year);
		UTCDate.setUTCMonth(astro.resolveMonthFmNum(month)); // month must be a number from 0-11
		UTCDate.setUTCDate(date);
		UTCDate.setUTCHours(hours);
		UTCDate.setUTCMinutes(minutes);
		UTCDate.setUTCSeconds(seconds);
		
		const outputDate = UTCDate.toLocaleString();
		return outputDate;
	},

	utToGST: function (ut)
	{
		// ut has format: 1955 September 4 14:30:30.67
		
		const utArray = ut.split(" ");	// ['1955','September','4','14:30:30.67']
		const year = utArray[0];		// needed to split to pull the time out
		const month = utArray[1];
		let date = parseInt(utArray[2]);
	
		const timeArray = utArray[3].split(":");	// ['14','30','30.67']
	
		const dateFrac = astro.HMStoDecDay(timeArray[0],timeArray[1],timeArray[2],0);
		date = date + dateFrac;
	
		const forJD = year + " " + month + " " + date;
		const jd = astro.calcJDfmUTC(forJD);
		const s = jd - 2451545.0;
		const t = s/36525.0;
	
		let tZero = 6.697374558 + (2400.051336 * t) + (0.000025862 * t * t );
	
		tZero = astro.reduceBy24s(tZero);
	
		const utDecTime = astro.HMStoDec(parseInt(timeArray[0]),parseInt(timeArray[1]),parseFloat(timeArray[2]),0);
		const a = utDecTime * 1.002737909;
		tZero = tZero + a;
		const gstDec = astro.reduceBy24s(tZero);
		const gst = astro.decToHMSHour(gstDec);
		// const gstStr = gst[0] + "h " + gst[1] + "m " + gst[2] + "." + gst[3] + "s";
	
		return gst;
	
	},

	gstToUT: function (gst)
	{
		// Parse into date and time
		// Calculate JD
		// Crunch math and convert result to HMS
	
		const gstArray = gst.split(" ");
		const year = gstArray[0];
		const month = gstArray[1];
		let date = parseInt(gstArray[2]);
	
		const timeArray = gstArray[3].split(":");
	
		const forJD = year + " " + month + " " + date;
		const jd = astro.calcJDfmUTC(forJD);

		const s = jd - 2451545.0;
		const t = s/36525;
		let tZero = 6.697374558 + (2400.051336 * t) + (0.000025862 * t * t );
		tZero = astro.reduceBy24s(tZero);

		const utDecTime = astro.HMStoDec(parseInt(timeArray[0]),parseInt(timeArray[1]),parseFloat(timeArray[2]),0);
		let a = utDecTime - tZero;
		a = astro.reduceBy24s(a);
		const utDec = a * 0.9972695663;
	
		const ut = astro.decToHMSHour(utDec);
		const utStr = ut[0] + "h " + ut[1] + "m " + ut[2] + "." + ut[3] + "s";
	
		return utStr;
	},

	gstToLST: function (gst,longitude)
	{
		// GST in string format "12:13:14.56"
		// Convert GST to decimal hours
		// Convert longitude to hours
		// Crunch the math and convert LST to HMS
		// Should check for missing gst minutes, seconds, ...
		
		const timeArray = gst.split(":");
		const gstDecTime = astro.HMStoDec(parseInt(timeArray[0]),parseInt(timeArray[1]),parseFloat(timeArray[2]),0);

		const longHrs = parseFloat(longitude)/15;
	
		let lstDec = gstDecTime + longHrs;
		lstDec = astro.reduceBy24s(lstDec);
	
		const lst = astro.decToHMSHour(lstDec);
		//const lstStr = lst[0] + "h " + lst[1] + "m " + lst[2] + "." + lst[3] + "s";
	
		return lst;
	},

	lstToGST: function (lst,longitude)
	{
		// Convert LST to decimal hours
		// Convert longitude to hours
		// Crunch the math and convert GST to HMS
		
		const timeArray = lst.split(":");
		const lstDecTime = astro.HMStoDec(parseInt(timeArray[0]),parseInt(timeArray[1]),parseFloat(timeArray[2]),0);

		const longHrs = parseFloat(longitude)/15;
	
		let gstDec = lstDecTime - longHrs;
		gstDec = astro.reduceBy24s(gstDec);
	
		const gst = astro.decToHMSHour(gstDec);
		//const gstStr = gst[0] + "h " + gst[1] + "m " + gst[2] + "." + gst[3] + "s";
	
		return gst;
	},
	
	convertDTFormat: function (dateStr) {					// "April 22 1980 14:36:51.67"

		const localDate = dateStr.split(" ");			// [mon, day, yr, time]
		let localTime = localDate[3].split(":");		// [hr,min,sec.msec]
		localDate.pop();
		const localSec = localTime[2].split(".");		// [sec, msec]
		localTime.pop();
		let localDateTime = localTime.concat(localSec);
		localDateTime = localDate.concat(localDateTime);
	
		localDateTime[0] = astro.resolveMonthFmNum(localDateTime[0]); // replace April with 4
	
		for (i = 1; i < localDateTime.length; i++) {	// probably should use map for this
			localDateTime[i] = parseInt(localDateTime[i]);
		}
	
		const mnth = localDateTime.shift();				// removed first element
		const day = localDateTime.shift();
		const year = localDateTime.shift();
		localDateTime.unshift(year,mnth,day);
	
		return localDateTime;							// 1980,3,22,15,35,20,20
	}

}