let count = 0;

document.getElementById("submitBtn").addEventListener("click", function () {
  const math = Number(document.getElementById("math").value);
  const english = Number(document.getElementById("english").value);

  if (isNaN(math) || isNaN(english)) {
    alert("Please enter valid numbers");
    return;
  }

  count++;

  const avg = ((math + english) / 2).toFixed(2);

  const tbody = document.querySelector("#gradeTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${count}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${avg}</td>
  `;

  tbody.appendChild(row);

  updateColumnAverages();
});

function updateColumnAverages() {
  const rows = document.querySelectorAll("#gradeTable tbody tr");

  let mathSum = 0;
  let engSum = 0;

  rows.forEach(row => {
    mathSum += Number(row.children[1].textContent);
    engSum += Number(row.children[2].textContent);
  });

  const mathAvg = (mathSum / rows.length).toFixed(2);
  const engAvg = (engSum / rows.length).toFixed(2);
  const overallAvg = ((mathSum + engSum) / (rows.length * 2)).toFixed(2);

  document.getElementById("mathAvg").textContent = mathAvg;
  document.getElementById("engAvg").textContent = engAvg;
  document.getElementById("overallAvg").textContent = overallAvg;
}
