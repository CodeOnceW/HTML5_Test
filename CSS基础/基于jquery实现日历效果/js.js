/**
 * 2021/3/6
 * Calendar
 */

/* get y Year m Month before days
 */
function getBDays(y, m) {
    return (new Date(y, m, 1).getDay());
}

/* get y Year m Month total days
 */
function getTDays(y, m) {
    return (new Date(y, m + 1, -1).getDate() + 1);
}

/* get y Year m Month last days
 */
function getBMDays(y, m) {
    return (new Date(y, m, -1).getDate() + 1);
}

function Calendar(nowDate) {
    // year, month, day
    this.year = nowDate.getFullYear();
    this.month = nowDate.getMonth();
    this.day = nowDate.getDate();

    // before days
    this.beforeDays = getBDays(this.year, this.month);
    // current month days
    this.totalDays = getTDays(this.year, this.month);
    // last month days
    this.lastDays = getBMDays(this.year, this.month);

    // save now date
    this.nowY = nowDate.getFullYear();
    this.nowM = nowDate.getMonth();
}

Calendar.prototype.initCalendar = function () {
    // get calendar id 
    let calDiv = $("#Calendar").append("<table></table>");

    // get calendar table
    let calTable = $("#Calendar > table");

    // add calendar table tr
    for (let n = 0; n < 8; n++) {
        calTable.append('<tr></tr>');
    }

    // get calendar table tr : header
    let calHeadTr = $("#Calendar > table > tr:first");

    // add calendar table tr th
    for (let n = 0; n < 3; n++) {
        calHeadTr.append('<th></th>');
    }

    // select index > 0 tr
    let calBodyTr = $("#Calendar > table > tr:gt(0)");

    // add calendar table tr td
    for (let n = 0; n < 7; n++) {
        calBodyTr.append('<td></td>');
    }
}

Calendar.prototype.insertDate = function (calName) {
    // get calendar table tr td : header
    let calHeadTh = $("#Calendar > table > tr:first > th");

    // modify header content
    $(calHeadTh[0]).html("<a><</a>");
    $(calHeadTh[1]).html(`<a>${this.year} 年 ${this.month + 1} 月</a>`);
    $(calHeadTh[2]).html("<a>></a>");

    // add style to header
    $(calHeadTh[1]).attr({
        "colspan": 5,
        "title": calName
    });

    // weekday arrays
    const calWeekArr = ['日', '一', '二', '三', '四', '五', '六'];

    // get calendar table tr td : weekdays
    let calWeekTd = $("#Calendar > table > tr:eq(1) > td");
    for (let n = 0; n < 7; n++) {
        $(calWeekTd[n]).html(`<a>${calWeekArr[n]}</a>`);
    }

    // get calendar table tr td : body
    let calBodyTd = $("#Calendar > table > tr:gt(1) > td");

    // insert before days
    for (let n = this.beforeDays - 1, lastDays = this.lastDays; n >= 0; n--, lastDays--) {
        $(calBodyTd[n]).html(`<a>${lastDays}</a>`);
        $(calBodyTd[n]).attr("class", "other-day");
    }
    // insert current days
    for (let n = this.beforeDays, i = 1; i <= this.totalDays; i++, n++) {
        $(calBodyTd[n]).html(`<a>${i}</a>`);

        if (i == this.day &&
            (new Date(this.year, this.month, 1).getMonth() == this.nowM) &&
            (new Date(this.year, this.month, 1).getFullYear() == this.nowY)) {
            $(calBodyTd[n]).attr("class", "now-day");
        } else {
            $(calBodyTd[n]).removeAttr("class", "now-day");
        }
    }

    // insert after days
    for (let n = this.beforeDays + this.totalDays, i = 1; n < calBodyTd.length; n++, i++) {
        $(calBodyTd[n]).html(`<a>${i}</a>`);
        $(calBodyTd[n]).attr("class", "other-day");
    }
}

Calendar.prototype.update = function (newDate) {
    // year, month, day
    this.year = newDate.getFullYear();
    this.month = newDate.getMonth();
    this.day = newDate.getDate();

    // before days
    this.beforeDays = getBDays(this.year, this.month);
    // current month days
    this.totalDays = getTDays(this.year, this.month);
    // last month days
    this.lastDays = getBMDays(this.year, this.month);
}

function initDate() {
    // create Date object
    let now = new Date();
    let cal = new Calendar(now);

    // init and insert
    cal.initCalendar();
    cal.insertDate('MyDate');

    // add click event to th:first
    $("#Calendar > table > tr:first > th:first").click(function () {
        now.setMonth(now.getMonth() - 1);
        cal.update(now);
        cal.insertDate('MyDate');
    });

    // add click event to th:last
    $("#Calendar > table > tr:first > th:last").click(function () {
        now.setMonth(now.getMonth() + 1);
        cal.update(now);
        cal.insertDate('MyDate');
    });
}

initDate();