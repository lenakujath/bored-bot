
  const fetchActivity = async () => {
      const res = await  fetch("https://apis.scrimba.com/bored/api/activity");
      const data = await res.json();
      const bool = true;

      document.getElementById("activity-name").innerHTML = `
      ${data && data.activity }
      `
  }