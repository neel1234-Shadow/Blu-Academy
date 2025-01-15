function calculateCarbonFootprint() {
    // Get user inputs
    const electricityUsage = parseFloat(document.getElementById('electricity').value) || 0;
    const gasUsage = parseFloat(document.getElementById('gas').value) || 0;
    const carMileage = parseFloat(document.getElementById('car_mileage').value) || 0;
    const flights = parseInt(document.getElementById('flights').value) || 0;

    // Conversion factors (average values)
    const electricityEmissionFactor = 0.92; // kg CO2 per kWh (can vary by region)
    const gasEmissionFactor = 5.3; // kg CO2 per therm
    const carEmissionFactor = 0.404; // kg CO2 per mile (average passenger vehicle)
    const flightEmissionFactor = 250; // kg CO2 per flight (average short-haul flight)

    // Calculate annual emissions
    const annualElectricityEmissions = electricityUsage * 12 * electricityEmissionFactor;
    const annualGasEmissions = gasUsage * 12 * gasEmissionFactor;
    const annualCarEmissions = carMileage * 52 * carEmissionFactor;
    const annualFlightEmissions = flights * flightEmissionFactor;

    // Total annual carbon footprint
    const totalEmissions = annualElectricityEmissions + annualGasEmissions + annualCarEmissions + annualFlightEmissions;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Your estimated annual carbon footprint is:</p>
        <h3>${totalEmissions.toFixed(2)} kg CO<sub>2</sub></h3>
        <p>Consider taking steps to reduce your emissions!</p>
    `;
}
