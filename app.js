$(document).ready(function() {
  $('#calendar').fullCalendar({
    customButtons: {
      myCustomButton: {
        text: 'custom!',
        click: function() {
          alert('clicked the custom button!');
        }
      }
    },
    header: {
      left: 'prev,next today',
      center: 'title ',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'agendaDay',
    events: [
      {
        id: '1',
        title: 'Test Event',
        start: '2020-02-17T10:30:00',
        end: '2020-02-17T11:30:00'
      },
      {
        id: '2',
        title: 'Test Event',
        start: '2020-02-18T10:30:00',
        end: '2020-02-18T11:30:00'
      }
    ],
    nowIndicator: true
  });

  $(".fc-center").append('<input type="date" id="datepicker">');

  $(function() {
    flatpickr("#datepicker", {
      onChange: function(selectedDates, dateStr, instance) {
        if (selectedDates.length > 0) {
          var selectedDate = moment(selectedDates[0]).format("YYYY-MM-DD");
          $('#calendar').fullCalendar('gotoDate', selectedDate);
        }
      },
    });
  });
});
