var days = {
  monday: [
    '08:30 - 09:25  Project (Dr. Yogita)',
    '09:25 - 10:20  Project (Dr. Yogita)',
    '10:40 - 11:35  Project (Dr. Yogita)',
    '11:35 - 12:30  Functional Materials (Avijit Kumar Paul); LHC 106',
    '12:30 - 13:25  Bio and Chemical Sensors (Amilan Jose. D); LHC 106',
    '13:45 - 14:40  -',
    '14:40 - 15:35  Cloud and Grid Computing (Dr. Bharati Sinha); L3',
    '15:35 - 16:30  Professional Ethics and IPR (Shabnam); L3',
    '16:30 - 17:25  Big Data Analytics (Dr. Kuldeep Garg); L3',
  ],
  tuesday: [
    '08:30 - 09:25  Big Data Analytics(P); Lab 9',
    '09:25 - 10:20  Big Data Analytics(P); Lab 9',
    '10:40 - 11:35  -',
    '11:35 - 12:30  Functional Materials (Avijit Kumar Paul); LHC 106',
    '12:30 - 13:25  Bio and Chemical Sensors (Amilan Jose. D); LHC 106',
    '13:45 - 14:40  -',
    '14:40 - 15:35  -',
    '15:35 - 16:30  Cloud and Grid Computing (Dr. Bharati Sinha); L2',
    '16:30 - 17:25  Big Data Analytics (Dr. Kuldeep Garg); L2',
  ],
  wednesday: [
    '08:30 - 09:25  -',
    '09:25 - 10:20  -',
    '10:40 - 11:35  -',
    '11:35 - 12:30  -',
    '12:30 - 13:25  -',
    '13:45 - 14:40  Professional Ethics and IPR (Kiran Mor); L1',
    '14:40 - 15:35  Cloud and Grid Computing (Dr. Bharati Sinha); L3',
    '15:35 - 16:30  -',
    '16:30 - 17:25  -',
  ],
  thursday: [
    '08:30 - 09:25  -',
    '09:25 - 10:20  -',
    '10:40 - 11:35  -',
    '11:35 - 12:30  Functional Materials (Avijit Kumar Paul); LHC 106',
    '12:30 - 13:25  Bio and Chemical Sensors (Amilan Jose. D); LHC 106',
    '13:45 - 14:40  -',
    '14:40 - 15:35  -',
    '15:35 - 16:30  -',
    '16:30 - 17:25  Big Data Analytics (Dr. Kuldeep Garg); L1',
  ],
  friday: [
    '08:30 - 09:25  -',
    '09:25 - 10:20  -',
    '10:40 - 11:35  -',
    '11:35 - 12:30  -',
    '12:30 - 13:25  -',
    '13:45 - 14:40  -',
    '14:40 - 15:35  Professional Ethics and IPR(T)',
    '15:35 - 16:30  -',
    '16:30 - 17:25  -',
  ],
  saturday: [],
  sunday: [],
};

var dayMap = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

// ******************************************************************

const show_image_and_text = () => {
  let todayH2 = document.querySelector('.today h2');
  let today__time__table = document.querySelector('.today__time__table');
  let table = document.querySelector('table');
  const para = document.createElement('p');
  const span = document.createElement('span');

  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src = 'assets/happy.png';
  img.width = '600';
  div.setAttribute('class', 'myImage');

  todayH2.style.display = 'none';
  table.style.display = 'none';

  span.textContent = 'Enjoy your day 🪩';

  div.appendChild(img);
  today__time__table.appendChild(div);

  para.appendChild(span);
  today__time__table.appendChild(para);
};

// ******************************************************************

const showTodayTimeTable = timetable => {
  const tbody = document.querySelector('table tbody');
  for (let i = 0; i < 9; i++) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = timetable[i].split('  ')[0];
    td2.textContent = timetable[i].split('  ')[1];

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
  }
};

// ******************************************************************

const showAllTimeTables = () => {
  const modalBody = document.querySelector('.modal-body');

  for (let i = 1; i <= 5; i++) {
    const weekDay = document.createElement('p');
    weekDay.textContent = dayMap[i].toUpperCase();
    weekDay.style.fontWeight = 'bold';
    modalBody.appendChild(weekDay);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');

    table.setAttribute('class', 'table');
    table.style.marginBottom = '40px';

    th1.setAttribute('scope', 'col');
    th1.textContent = 'Time';
    th2.setAttribute('scope', 'col');
    th2.textContent = 'Class';

    trHead.appendChild(th1);
    trHead.appendChild(th2);

    thead.appendChild(trHead);

    const tbody = document.createElement('tbody');
    for (let j = 0; j < 9; j++) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');

      td1.textContent = days[dayMap[i]][j].split('  ')[0];
      td2.textContent = days[dayMap[i]][j].split('  ')[1];

      tr.appendChild(td1);
      tr.appendChild(td2);

      tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    modalBody.appendChild(table);
  }
};

// ******************************************************************

const compute_start_and_end_time = (currentTime, time) => {
  let date = new Date(currentTime.getTime());
  date.setHours(time.split(':')[0]);
  date.setMinutes(time.split(':')[1]);
  date.setSeconds(time.split(':')[2]);

  return date;
};

// ********************************************************************

const display_ongoing_class_name = timetable => {
  const ongoing__class = document.querySelector('.ongoing__class h3');
  if (
    new Date() >= compute_start_and_end_time(new Date(), '08:30:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '09:24:59')
  ) {
    ongoing__class.textContent = timetable[0].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '09:25:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '10:19:59')
  ) {
    ongoing__class.textContent = timetable[1].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '10:40:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '11:34:59')
  ) {
    ongoing__class.textContent = timetable[2].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '11:35:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '12:29:59')
  ) {
    ongoing__class.textContent = timetable[3].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '12:30:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '13:24:59')
  ) {
    ongoing__class.textContent = timetable[4].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '13:45:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '14:39:59')
  ) {
    ongoing__class.textContent = timetable[5].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '14:40:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '15:34:59')
  ) {
    ongoing__class.textContent = timetable[6].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '15:35:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '16:29:59')
  ) {
    ongoing__class.textContent = timetable[7].split('  ')[1];
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '16:30:00') &&
    new Date() <= compute_start_and_end_time(new Date(), '17:25:00')
  ) {
    ongoing__class.textContent = timetable[8].split('  ')[1];
  } else ongoing__class.textContent = "It's a break.";
};
// ******************************************************************

const show_ongoing_class_status = timetable => {
  const ongoing__class = document.querySelector('.ongoing__class h3');

  if (!timetable.length) ongoing__class.textContent = '-';
  else {
    if (
      new Date() >= compute_start_and_end_time(new Date(), '08:30:00') &&
      new Date() <= compute_start_and_end_time(new Date(), '17:25:00')
    )
      display_ongoing_class_name(timetable);
    else ongoing__class.textContent = '-';
  }
};

// ******************************************************************

const find_week_day = () => {
  const greetingPara = document.querySelector('.greeting p');
  const tableTitle = document.querySelector('.today h2');
  let table = document.querySelector('table');
  let currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour <= 11)
    greetingPara.textContent = 'Good morning!';
  else if (currentHour >= 12 && currentHour <= 15)
    greetingPara.textContent = 'Good afternoon!';
  else greetingPara.textContent = 'Good evening!';

  switch (new Date().getDay()) {
    case 0:
      show_ongoing_class_status([]);

      if (currentHour >= 0 && currentHour <= 18) {
        show_image_and_text();
      } else {
        tableTitle.textContent = 'Get set for tomorrow';
        showTodayTimeTable(days['monday']);
      }
      break;
    case 1:
      show_ongoing_class_status(days['monday']);

      if (currentHour >= 0 && currentHour <= 17) {
        tableTitle.textContent = 'Today';
        showTodayTimeTable(days['monday']);
      } else {
        tableTitle.textContent = 'Tomorrow';
        showTodayTimeTable(days['tuesday']);
      }
      break;
    case 2:
      show_ongoing_class_status(days['tuesday']);

      if (currentHour >= 0 && currentHour <= 17) {
        tableTitle.textContent = 'Today';
        showTodayTimeTable(days['tuesday']);
      } else {
        tableTitle.textContent = 'Tomorrow';
        showTodayTimeTable(days['wednesday']);
      }
      break;
    case 3:
      show_ongoing_class_status(days['wednesday']);

      if (currentHour >= 0 && currentHour <= 17) {
        tableTitle.textContent = 'Today';
        showTodayTimeTable(days['wednesday']);
      } else {
        tableTitle.textContent = 'Tomorrow';
        showTodayTimeTable(days['thursday']);
      }
      break;
    case 4:
      show_ongoing_class_status(days['thursday']);

      if (currentHour >= 0 && currentHour <= 17) {
        tableTitle.textContent = 'Today';
        showTodayTimeTable(days['thursday']);
      } else {
        tableTitle.textContent = 'Tomorrow';
        showTodayTimeTable(days['friday']);
      }
      break;
    case 5:
      show_ongoing_class_status(days['friday']);

      if (currentHour >= 0 && currentHour <= 17) {
        tableTitle.textContent = 'Today';
        showTodayTimeTable(days['friday']);
      } else {
        table.style.display = 'none';
        tableTitle.textContent = "Calm down! It's weekend tomorrow 🎉";
      }
      break;
    case 6:
      show_ongoing_class_status([]);
      show_image_and_text();
  }
};

// ******************************************************************

function create_para_in_timer(string) {
  const Timer = document.querySelector('.timer');
  const timepara = document.createElement('p');
  timepara.textContent = string;

  Timer.appendChild(timepara);
}

// ******************************************************************

const timerFunction = countdownTime => {
  let timerAnimation = setInterval(function () {
    var distance = new Date(countdownTime).getTime() - new Date().getTime();

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    a[0].textContent = hours < 10 ? '0' + hours : hours;
    a[1].textContent = ':';
    a[2].textContent = minutes < 10 ? '0' + minutes : minutes;
    a[3].textContent = ':';
    a[4].textContent = seconds < 10 ? '0' + seconds : seconds;
    b[0].textContent = 'h';
    b[2].textContent = 'm';
    b[4].textContent = 's';

    if (distance < 0) {
      clearInterval(timerAnimation);
      let divs_in_timer = document.querySelectorAll('.timer div');
      for (let m = 0; m < divs_in_timer.length; m++) {
        divs_in_timer[m].style.display = 'none';
      }
      create_para_in_timer('Please refresh the page. 🔄');
    }
  }, 1000);
};

// ******************************************************************

const highlight_current_class = i => {
  var trarray = document.querySelectorAll('tbody tr');

  trarray[i].style.backgroundColor = '#d9d1a9';
};
// ******************************************************************

const configure_timer = timetable => {
  for (let i = 0; i < 8; i++) {
    if (
      new Date() >=
        compute_start_and_end_time(
          new Date(),
          timetable[i].split(' ')[0] + ':00'
        ) &&
      new Date() <
        compute_start_and_end_time(
          new Date(),
          timetable[i].split(' ')[2] + ':00'
        )
    ) {
      highlight_current_class(i);
      configure_timer_in_subcomponent(i + 1, timetable);
    }
  }
  if (
    new Date() >= compute_start_and_end_time(new Date(), '10:20:00') &&
    new Date() < compute_start_and_end_time(new Date(), '10:40:00')
  ) {
    configure_timer_in_subcomponent(2, timetable);
  } else if (
    new Date() >= compute_start_and_end_time(new Date(), '13:25:00') &&
    new Date() < compute_start_and_end_time(new Date(), '13:45:00')
  ) {
    configure_timer_in_subcomponent(5, timetable);
  }
};

// ********************************************************************

const configure_timer_in_subcomponent = (val, timetable) => {
  var k, flag;

  for (k = val; k < 9; k++) {
    if (
      timetable[k].split('  ')[1] !== '-' &&
      timetable[k].split('  ')[1] !== timetable[k - 1].split('  ')[1]
    ) {
      flag = k;
      break;
    }
  }
  timerFunction(
    compute_start_and_end_time(
      new Date(),
      timetable[flag].split(' ')[0] + ':00'
    )
  );
};

// *********************************************************************

find_week_day();

if (
  new Date().getDay() > 0 &&
  new Date().getDay() < 6 &&
  new Date() >= compute_start_and_end_time(new Date(), '08:30:00') &&
  new Date() <= compute_start_and_end_time(new Date(), '17:25:00')
) {
  if (new Date() < compute_start_and_end_time(new Date(), '16:30:00')) {
    var Timer = document.querySelector('.timer');
    for (let i = 0; i < 5; i++) {
      var timerDiv = document.createElement('div');
      var timerDivh3 = document.createElement('h3');
      var timerDivh5 = document.createElement('h5');

      timerDiv.appendChild(timerDivh3);
      timerDiv.appendChild(timerDivh5);
      Timer.appendChild(timerDiv);
    }

    var a = document.querySelectorAll('.timer div h3');
    var b = document.querySelectorAll('.timer div h5');

    switch (new Date().getDay()) {
      case 1:
        configure_timer(days['monday']);
        break;
      case 2:
        configure_timer(days['tuesday']);
        break;
      case 3:
        configure_timer(days['wednesday']);
        break;
      case 4:
        configure_timer(days['thursday']);
        break;
      case 5:
        configure_timer(days['friday']);
        break;
    }
  } else {
    highlight_current_class(8);
    create_para_in_timer('This is the last lecture of the day. 🕺');
  }
} else if (new Date().getDay() === 0 || new Date().getDay() === 6) {
  create_para_in_timer('No classes today.');
} else if (new Date() > compute_start_and_end_time(new Date(), '17:25:00')) {
  create_para_in_timer('All classes are over for today! 🕺');
} else {
  let currentTimeTable = days[dayMap[new Date().getDay()]];
  let k = 0;
  while (
    currentTimeTable.length != 0 &&
    currentTimeTable[k].split('  ')[1] === '-'
  ) {
    k++;
  }
  create_para_in_timer(
    `First class will begin at ${
      currentTimeTable[k].split('  ')[0].split(' ')[0]
    } 📚.`
  );
}

showAllTimeTables();
