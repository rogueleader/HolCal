angular.module('calendarApp', ['ui.rCalendar']);

angular.module('calendarApp').controller('CalendarCtrl', ['$scope', function ($scope) {
    'use strict';

    $scope.changeMode = function (mode) {
        $scope.mode = mode;
    };

    $scope.today = function () {
        $scope.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.loadEvents = function () {
        $scope.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
         $scope.event = event;
    };

    $scope.onTimeSelected = function (selectedTime) {
       // console.log('Selected time: ' + selectedTime);
       // alert("Done");
    };

    function createRandomEvents() {
        var events = [{ title: 'Event - abc',
                    startTime: 'Sun Sep 26 2016 17:48:55 GMT+0530 (India Standard Time)',
                    endTime: 'Sun Sep 26 2016 17:48:55 GMT+0530 (India Standard Time)',
                    allDay: false},
                    { title: 'Event - lmn',
                    startTime: 'Thu Sep 15 2016 17:48:55 GMT+0530 (India Standard Time)',
                    endTime: 'Thu Sep 15 2016 20:48:55 GMT+0530 (India Standard Time)',
                    allDay: false},
                    { title: 'Event - xyz',
                    startTime: 'Tue Sep 7 2016 13:48:55 GMT+0530 (India Standard Time)',
                    endTime: 'Tue Sep 7 2016 19:48:55 GMT+0530 (India Standard Time)',
                    allDay: false}];
       /* for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }*/
        console.log(events);
        return events;
    }
}]);