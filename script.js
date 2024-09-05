function calculateFootprint() {
    const crop = document.getElementById('crop').value;
    const quantity = document.getElementById('quantity').value;
    let waterFootprint;
const crops = [
    { name: "Wheat", waterFootprint: 1827 },
    { name: "Rice", waterFootprint: 2497 },
    { name: "Maize", waterFootprint: 1222 },
    { name: "Barley", waterFootprint: 1423 },
    { name: "Soybean", waterFootprint: 2145 },
    { name: "Sugarcane", waterFootprint: 1590 },
    { name: "Cotton", waterFootprint: 2700 },
    { name: "Potato", waterFootprint: 287 },
    { name: "Tomato", waterFootprint: 214 },
    { name: "Onion", waterFootprint: 337 }
];

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
let selectedCrop = null;

document.getElementById('cropSearch').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const filteredCrops = crops.filter(crop => crop.name.toLowerCase().includes(input));
    displayCrops(filteredCrops);
});

    const totalFootprint = waterFootprint * quantity;
    document.getElementById('result').innerText = `Total Water Footprint: ${totalFootprint} liters`;
function displayCrops(crops) {
    const cropList = document.getElementById('cropList');
    cropList.innerHTML = '';
    crops.forEach(crop => {
        const li = document.createElement('li');
        li.textContent = crop.name;
        li.addEventListener('click', () => {
            selectedCrop = crop;
            document.getElementById('quantityInput').style.display = 'block';
        });
        cropList.appendChild(li);
    });
}

document.getElementById('calculateButton').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    if (selectedCrop && quantity > 0) {
        const totalWaterFootprint = selectedCrop.waterFootprint * quantity;
        document.getElementById('result').textContent = `Total water footprint for ${quantity} kg of ${selectedCrop.name} is ${totalWaterFootprint} liters.`;
    } else {
        document.getElementById('result').textContent = 'Please select a crop and enter a valid quantity.';
    }
});}