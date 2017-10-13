/**
 * A utility that has methods for converting dates to different formats.
 * @module samples/dateUtils
 */
define([
 ], function(

 ) {

  return /** @alias module:samples/dateUtils */{

    /**
     * Converts a timestamp in epoch time (milliseconds since Jan 1, 1970) to a string.
     * The string gets returned as a string in format "date month year hour:minute:second.
     * For example "13 Feb 1999 12:18:32"
     *
     * @param {number} UNIX_timestamp The date in milliseconds after Jan 1, 1970
     *
     * @returns {string}
     *
     * @static
     */
    unixToDateTime: function (UNIX_timestamp) {
      var a = new Date(UNIX_timestamp);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
      return time;
    },

    /**
     * Date parser that handles date string generation.
     *  @param {Date|number|string} value The date to convert to a string. It can be a JavaScript Date object,
     *   a unix time stamp, or a string that represents a date.
     * @param {string} format The desired date format from the parser. Valid examples are
     * * "MM/DD/YYYY HH:mm:ss" - "09/09/2000 13:02:08"
     * * "DDD MMM DD YYYY h:mm A" - "Tue Jan 3 2002 8:08 AM"
     * @returns {String} Returns a string representation of the passed in date value
     *   following the format definition provided as the format parameter. If the value cannot
     *   be parsed, the method returns "&lt;value&gt; (Not parsed)"
     *
     *   @static
     */
    getDateString: function (value, format) {
      //var isValid = moment(value).isValid();
      var isValid = true;
      var dateString;

      if (isValid && value instanceof Date) {
        dateString = moment(value).format(format);
      } else if (isValid && !isNaN(value)) {
        dateString = moment.unix(value).format(format);
      } else if (isValid && typeof(value) === "string") {
        dateString = moment(value).format(format);
      } else {
        dateString = value + " (Not parsed)";
      }
      return dateString;
    }
  };
});
