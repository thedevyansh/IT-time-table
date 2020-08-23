var days = {
  monday: [
    "08:30 - 09:25  JP-P",
    "09:25 - 10:20  JP-P",
    "10:40 - 11:35  COA-L",
    "11:35 - 12:30  JP-L",
    "12:30 - 01:25  -",
    "01:45 - 02:40  -",
    "02:40 - 03:35  MA-T",
    "03:35 - 04:30  DS-T",
  ],
  tuesday: [
    "08:30 - 09:25  DS-P",
    "09:25 - 10:20  DS-P",
    "10:40 - 11:35  DAA-P",
    "11:35 - 12:30  DAA-P",
    "12:30 - 01:25  -",
    "01:45 - 02:40  MA-L",
    "02:40 - 03:35  COA-L",
    "03:35 - 04:30  DAA-L",
  ],
  wednesday: [
    "08:30 - 09:25  DAA-T",
    "09:25 - 10:20  -",
    "10:40 - 11:35  -",
    "11:35 - 12:30  DS-L",
    "12:30 - 01:25  JP-L",
    "01:45 - 02:40  -",
    "02:40 - 03:35  SE-L",
    "03:35 - 04:30  COA-L",
  ],
  thursday: [
    "08:30 - 09:25  SE-L",
    "09:25 - 10:20  MA-L",
    "10:40 - 11:35  -",
    "11:35 - 12:30  -",
    "12:30 - 01:25  -",
    "01:45 - 02:40  DS-L",
    "02:40 - 03:35  DAA-L",
    "03:35 - 04:30  SE-L",
  ],
  friday: [
    "08:30 - 09:25  SE-T",
    "09:25 - 10:20  COA-T",
    "10:40 - 11:35  -",
    "11:35 - 12:30  MA-L",
    "12:30 - 01:25  DS-L",
    "01:45 - 02:40  -",
    "02:40 - 03:35  JP-L",
    "03:35 - 04:30  DAA-L",
  ],
  saturday: [],
  sunday: [],
};

const addPara = () => {
  let todayH2 = document.querySelector(".today h2");
  let today__time__table = document.querySelector(".today__time__table");
  let table = document.querySelector("table");
  const para = document.createElement("p");
  const span = document.createElement("span");

  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = "assets/happy.png";
  img.width = "600";
  div.setAttribute('class', 'myImage');

  todayH2.style.display = "none";
  table.style.display = "none";

  span.textContent = "No classes today. Enjoy your day!";

  div.appendChild(img);
  today__time__table.appendChild(div);

  para.appendChild(span);
  today__time__table.appendChild(para);
};

const showTodayTimeTable = (timetable) => {
  const tbody = document.querySelector("table tbody");
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = timetable[i].split("  ")[0];
    td2.textContent = timetable[i].split("  ")[1];

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
  }
};

const find_week_day = () => {
  const greetingPara = document.querySelector(".greeting p");
  let currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour <= 11)
    greetingPara.textContent = "Good morning.";
  else if (currentHour >= 12 && currentHour <= 15)
    greetingPara.textContent = "Good afternoon.";
  else greetingPara.textContent = "Good evening.";

  switch (new Date().getDay()) {
    case 0:
      addPara();
      break;
    case 1:
      showTodayTimeTable(days["monday"]);
      break;
    case 2:
      showTodayTimeTable(days["tuesday"]);
      break;
    case 3:
      showTodayTimeTable(days["wednesday"]);
      break;
    case 4:
      showTodayTimeTable(days["thursday"]);
      break;
    case 5:
      showTodayTimeTable(days["friday"]);
      break;
    case 6:
      addPara();
  }
};

find_week_day();
