function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

function getCurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const dayIndex = now.getDay(); // Returns a number between 0 (Sunday) and 6 (Saturday)
  return daysOfWeek[dayIndex];
}


const data = {
  "slack_name": "Mani",
  "current_day": getCurrentDay(),
  "utc_time": getCurrentDate(),
  "track": "backend",
  "github_file_url": "https://github.com/manenim/Backend-user-profile-HNG/blob/main/src/index.ts",
  "github_repo_url": "https://github.com/manenim/Backend-user-profile-HNG",
  "status_code": 200
}

export default data