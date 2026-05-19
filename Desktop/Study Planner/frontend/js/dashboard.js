const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first");
  window.location.href = "login.html";
}

let username = localStorage.getItem("username") || "@username";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
let subjects = JSON.parse(localStorage.getItem("subjects")) || [

];

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active-page"));

    link.classList.add("active");

    const pageId = link.getAttribute("data-page");
    document.getElementById(pageId).classList.add("active-page");

    renderAll();
  });
});

function updateGreeting() {
  document.getElementById("greeting").textContent = `Hey, ${username} 👋`;
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("sessions", JSON.stringify(sessions));
  localStorage.setItem("subjects", JSON.stringify(subjects));
}

/* TASKS */

function openTaskForm() {
  document.getElementById("taskForm").classList.toggle("hidden");
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({
    id: Date.now(),
    text: input.value,
    completed: false
  });

  input.value = "";

  saveData();
  renderAll();
}
function addTaskFromPage() {

  const input =
    document.getElementById("taskPageInput");

  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({
    id: Date.now(),
    text: input.value,
    completed: false
  });

  input.value = "";

  saveData();
  renderAll();

}

function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  saveData();
  renderAll();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  saveData();
  renderAll();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  const tasksPageList = document.getElementById("tasksPageList");

  const html = tasks.map(task => `
    <li>
      <div class="task-left">
        <input 
          type="checkbox" 
          ${task.completed ? "checked" : ""}
          onchange="toggleTask(${task.id})"
        >

        <span class="${task.completed ? "completed" : ""}">
          ${task.text}
        </span>
      </div>

      <button class="delete-btn" onclick="deleteTask(${task.id})">
        🗑️
      </button>
    </li>
  `).join("");

  taskList.innerHTML = html;
  tasksPageList.innerHTML = html;
}

/* SCHEDULE */

function openScheduleForm() {
  document.getElementById("scheduleForm").classList.toggle("hidden");
}

function addSession() {
  const time = document.getElementById("sessionTime");
  const subject = document.getElementById("sessionSubject");
  const details = document.getElementById("sessionDetails");

  if (time.value === "" || subject.value.trim() === "") {
    alert("Please enter time and subject");
    return;
  }

  sessions.push({
    id: Date.now(),
    time: time.value,
    subject: subject.value,
    details: details.value || "Study session"
  });

  time.value = "";
  subject.value = "";
  details.value = "";

  saveData();
  renderAll();
}
function addSessionFromPage() {

  const time =
    document.getElementById("sessionPageTime");

  const subject =
    document.getElementById("sessionPageSubject");

  const details =
    document.getElementById("sessionPageDetails");

  if (time.value === "" || subject.value.trim() === "") {

    alert("Please enter time and subject");

    return;

  }

  sessions.push({
    id: Date.now(),
    time: time.value,
    subject: subject.value,
    details: details.value || "Study session"
  });

  time.value = "";
  subject.value = "";
  details.value = "";

  saveData();
  renderAll();

}
function deleteSession(id) {
  sessions = sessions.filter(session => session.id !== id);

  saveData();
  renderAll();
}

function renderSessions() {
  const scheduleList = document.getElementById("scheduleList");
  const schedulePageList = document.getElementById("schedulePageList");

  if (sessions.length === 0) {
    const empty = `
      <div class="empty-box">
        <div class="empty-icon">🗓️</div>
        <p>No study sessions yet.</p>
        <small>Add your first study session!</small>
      </div>
    `;

    scheduleList.innerHTML = empty;
    schedulePageList.innerHTML = empty;
    return;
  }

  const html = sessions.map(session => `
    <div class="session-item">
      <strong>${session.time}</strong>

      <div>
        <div class="session-subject">${session.subject}</div>
        <div class="session-details">${session.details}</div>
      </div>

      <button class="delete-btn" onclick="deleteSession(${session.id})">
        🗑️
      </button>
    </div>
  `).join("");

  scheduleList.innerHTML = html;
  schedulePageList.innerHTML = html;
}

/* SUBJECTS */

function openSubjectForm() {
  document.getElementById("subjectForm").classList.toggle("hidden");
}

function addSubject() {
  const input = document.getElementById("subjectInput");

  if (input.value.trim() === "") {
    alert("Please enter a subject");
    return;
  }

  subjects.push(input.value);
  input.value = "";

  saveData();
  renderSubjects();
}

function deleteSubject(index) {
  subjects.splice(index, 1);

  saveData();
  renderSubjects();
}

function renderSubjects() {
  const subjectList = document.getElementById("subjectList");

  subjectList.innerHTML = subjects.map((subject, index) => `
    <li>
      <span>${subject}</span>

      <button class="delete-btn" onclick="deleteSubject(${index})">
        🗑️
      </button>
    </li>
  `).join("");
}

/* PROGRESS */

function updateStats() {
  const completed = tasks.filter(task => task.completed).length;
  const total = tasks.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.getElementById("tasksDone").textContent = `${completed} / ${total}`;
  document.getElementById("miniProgress").style.width = percentage + "%";
  document.getElementById("progressPercent").textContent = percentage + "%";

  document.getElementById("progressCircle").style.background = `
    radial-gradient(circle at center, var(--card) 58%, transparent 59%),
    conic-gradient(var(--purple) ${percentage * 3.6}deg, #ece7fb 0deg)
  `;
}

/* SETTINGS */

function saveUsername() {
  const input = document.getElementById("usernameInput");

  if (input.value.trim() === "") {
    alert("Please enter username");
    return;
  }

  username = input.value.startsWith("@") ? input.value : "@" + input.value;

  localStorage.setItem("username", username);

  updateGreeting();
  input.value = "";
}

function setDarkMode() {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
  document.getElementById("themeBtn").textContent = "🌙";
}

function setLightMode() {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
  document.getElementById("themeBtn").textContent = "☀️";
}

document.getElementById("themeBtn").addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

/* LOGOUT */

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});

/* INITIAL LOAD */

function renderAll() {
  updateGreeting();
  renderTasks();
  renderSessions();
  renderSubjects();
  updateStats();
}

if (localStorage.getItem("theme") === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

renderAll();