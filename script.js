function calculateFootprint() {
    const crop = document.getElementById('crop').value;
    const quantity = document.getElementById('quantity').value;
    let waterFootprint;

    switch (crop) {
        case 'wheat':
            waterFootprint = 1827; // Example value in liters per kg
            break;
        case 'rice':
            waterFootprint = 2497; // Example value in liters per kg
            break;
        case 'corn':
            waterFootprint = 1222; // Example value in liters per kg
            break;
        // Add more cases for other crops
        default:
            waterFootprint = 0;
    }

    const totalFootprint = waterFootprint * quantity;
    document.getElementById('result').innerText = `Total Water Footprint: ${totalFootprint} liters`;
}
