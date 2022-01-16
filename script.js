function progress() {
$(document).ready(function () {

        var countDownDate = new Date("Jun 17, 2022 00:00:00").getTime();
        var startDate = new Date("Jan 17, 2022, 00:00:00").getTime();
// Update the count down every 1 second
// Get todays date and time
        var now = new Date().getTime();

// Find the distance between now and the count down date
        var distanceWhole = countDownDate - startDate;
        var distanceLeft = countDownDate - now;

// Time calculations for minutes and percentage progressed
        var minutesLeft = Math.floor(distanceLeft / (1000 * 60));
        var minutesTotal = Math.floor(distanceWhole / (1000 * 60));
        var progress = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100);
        $('#progressbar').attr('aria-valuenow', progress).css('width', progress + "%").html(progress + "% Complete");
    });
}

progress()

window.onload = function() {
    setInterval(progress, 6000);
}