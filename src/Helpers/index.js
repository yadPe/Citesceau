export const timeSince = (timeStamp) => {
  const now = new Date(),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + ' sec';
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + ' min';
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + ' h';
  }
  if (secondsPast > 86400) {
    const day = timeStamp.getDate();
    const month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    const year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
    return day + " " + month + year;
  }
}

export const getUrlParams = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};