function calculateCycle() {
    const lastPeriodDate = new Date(document.getElementById("lastPeriodDate").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value, 10);

    if (isNaN(cycleLength) || cycleLength < 21) {
        alert("Please enter a valid cycle length (minimum 21 days).");
        return;
    }

    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(nextPeriodDate.getDate() - 14);

    const fertileStartDate = new Date(ovulationDate);
    fertileStartDate.setDate(ovulationDate.getDate() - 4); // Fertile window is usually 5 days before and after ovulation.

    const fertileEndDate = new Date(ovulationDate);
    fertileEndDate.setDate(ovulationDate.getDate() + 4);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        Next Period Date: ${nextPeriodDate.toDateString()}<br>
        Ovulation Day: ${ovulationDate.toDateString()}<br>
        Fertile Window: ${fertileStartDate.toDateString()} - ${fertileEndDate.toDateString()}
    `;
}
