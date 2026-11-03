function generateReport(name, scores) {
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const status = average >= 10 ? "Pass" : "Fail";

  return `Student ${name}
    Average Score: ${average.toFixed(2)}
    Status: ${status}`;
}

module.exports = generateReport;
