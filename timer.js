var days = {
  monday: [
    "08:30 - 09:25  JP-P (Mr. Rajesh Ranjan)",
    "09:25 - 10:20  JP-P (Mr. Rajesh Ranjan)",
    "10:40 - 11:35  COA-L (Dr. Priyanka Ahlawat)",
    "11:35 - 12:30  JP-L (Ms. Smruti)",
    "12:30 - 01:25  -",
    "01:45 - 02:40  -",
    "02:40 - 03:35  MA-T",
    "03:35 - 04:30  DS-T",
  ],
  tuesday: [
    "08:30 - 09:25  DS-P (Ms. Ruby)",
    "09:25 - 10:20  DS-P (Ms. Ruby)",
    "10:40 - 11:35  DAA-P (Dr. Priyanka Ahlawat)",
    "11:35 - 12:30  DAA-P (Dr. Priyanka Ahlawat)",
    "12:30 - 01:25  -",
    "01:45 - 02:40  MA-L (Dr. Smita Jaiswal)",
    "02:40 - 03:35  COA-L (Dr. Priyanka Ahlawat)",
    "03:35 - 04:30  DAA-L (Dr. Santosh Kumar)",
  ],
  wednesday: [
    "08:30 - 09:25  DAA-T",
    "09:25 - 10:20  -",
    "10:40 - 11:35  -",
    "11:35 - 12:30  DS-L (Ms. Ruby)",
    "12:30 - 01:25  JP-L (Ms. Smruti)",
    "01:45 - 02:40  -",
    "02:40 - 03:35  SE-L (Anamika)",
    "03:35 - 04:30  COA-L (Dr. Priyanka Ahlawat)",
  ],
  thursday: [
    "08:30 - 09:25  SE-L (Anamika)",
    "09:25 - 10:20  MA-L (Dr. Smita Jaiswal)",
    "10:40 - 11:35  -",
    "11:35 - 12:30  -",
    "12:30 - 01:25  -",
    "01:45 - 02:40  DS-L (Ms. Ruby)",
    "02:40 - 03:35  DAA-L (Dr. Santosh Kumar)",
    "03:35 - 04:30  SE-L (Anamika)",
  ],
  friday: [
    "08:30 - 09:25  SE-T",
    "09:25 - 10:20  COA-T",
    "10:40 - 11:35  -",
    "11:35 - 12:30  MA-L (Dr. Smita Jaiswal)",
    "12:30 - 01:25  DS-L (Ms. Ruby)",
    "01:45 - 02:40  -",
    "02:40 - 03:35  JP-L (Ms. Smruti)",
    "03:35 - 04:30  DAA-L (Dr. Santosh Kumar)",
  ],
  saturday: [],
  sunday: [],
};

const show_image_and_text = () => {
  let todayH2 = document.querySelector(".today h2");
  let today__time__table = document.querySelector(".today__time__table");
  let table = document.querySelector("table");
  const para = document.createElement("p");
  const span = document.createElement("span");

  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = "assets/happy.png";
  img.width = "600";
  div.setAttribute("class", "myImage");

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

const show_ongoing_class_status = (timetable) => {
  const ongoing__class = document.querySelector(".ongoing__class h3");

  if (!timetable.length) ongoing__class.textContent = "-";
  else {
    let startTime = "08:30:00";
    let endTime = "16:30:00";

    let currentDate = new Date();

    let startDate = new Date(currentDate.getTime());
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);
    startDate.setSeconds(startTime.split(":")[2]);

    let endDate = new Date(currentDate.getTime());
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);
    endDate.setSeconds(endTime.split(":")[2]);

    if (currentDate >= startDate && currentDate <= endDate) {
      // show current class
    } else ongoing__class.textContent = "-";
  }
};

const find_week_day = () => {
  const greetingPara = document.querySelector(".greeting p");
  const tableTitle = document.querySelector(".today h2");
  let table = document.querySelector("table");
  let currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour <= 11)
    greetingPara.textContent = "Good morning.";
  else if (currentHour >= 12 && currentHour <= 15)
    greetingPara.textContent = "Good afternoon.";
  else greetingPara.textContent = "Good evening.";

  switch (new Date().getDay()) {
    case 0:
      show_ongoing_class_status([]);

      if (currentHour >= 0 && currentHour <= 18) {
        show_image_and_text();
      } else {
        tableTitle.textContent = "Get set for tomorrow";
        showTodayTimeTable(days["monday"]);
      }
      break;
    case 1:
      show_ongoing_class_status(days["monday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["monday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["tuesday"]);
      }
      break;
    case 2:
      show_ongoing_class_status(days["tuesday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["tuesday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["wednesday"]);
      }
      break;
    case 3:
      show_ongoing_class_status(days["wednesday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["wednesday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["thursday"]);
      }
      break;
    case 4:
      show_ongoing_class_status(days["thursday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["thursday"]);
      } else {
        tableTitle.textContent = "Tomorrow";
        showTodayTimeTable(days["friday"]);
      }
      break;
    case 5:
      show_ongoing_class_status(days["friday"]);

      if (currentHour >= 0 && currentHour <= 16) {
        tableTitle.textContent = "Today";
        showTodayTimeTable(days["friday"]);
      } else {
        table.style.display = "none";
        tableTitle.textContent = "Calm down! It's weekend tomorrow 🎉";
      }
      break;
    case 6:
      show_ongoing_class_status([]);
      show_image_and_text();
  }
};

find_week_day();
