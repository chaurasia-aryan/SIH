let crops = [];
let selectedCrop = null;

// Fetch the crop data from the JSON file
fetch('crops.json')
    .then(response => response.json())
    .then(data => {
        crops = data.watertofood_data_1725492421;
        populateCategoryDropdown(crops); // Populate the category dropdown
    })
    .catch(error => {
        console.error('Error fetching crop data:', error);
        alert('Failed to load crop data. Please try again later.');
    });

document.getElementById('cropSearch').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    if (input === '') {
        displayCrops([]); // Clear the crop list if input is empty
    } else {
        const filteredCrops = crops.filter(crop => crop["Item Name"].toLowerCase().includes(input));
        displayCrops(filteredCrops.slice(0, 5)); // Display only the first 5 items
    }
});

document.getElementById('categoryDropdown').addEventListener('change', function() {
    const selectedCategory = this.value;
    const filteredCrops = crops.filter(crop => crop["Item Category"] === selectedCategory);
    displayCrops(filteredCrops.slice(0, 5)); // Display only the first 5 items
});

function displayCrops(crops) {
    const cropList = document.getElementById('cropList');
    cropList.innerHTML = '';
    if (crops.length > 0) {
        crops.forEach(crop => {
            const li = document.createElement('li');
            li.textContent = crop["Item Name"];
            li.addEventListener('click', () => {
                selectedCrop = crop;
                document.getElementById('cropSearch').value = crop["Item Name"];
                cropList.style.display = 'none';
                document.getElementById('quantityInput').style.display = 'block';
            });
            cropList.appendChild(li);
        });
        cropList.style.display = 'block'; // Show the list when there are items
    } else {
        cropList.style.display = 'none';
    }
}

function populateCategoryDropdown(crops) {
    const categoryDropdown = document.getElementById('categoryDropdown');
    const categories = [...new Set(crops.map(crop => crop["Item Category"]))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });
}

document.getElementById('calculateButton').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').value;
    if (selectedCrop && quantity > 0 && !isNaN(quantity)) {
        const totalWaterFootprint = selectedCrop["2016"] * quantity;
        document.getElementById('result').textContent = `Total water footprint for ${quantity} kg of ${selectedCrop["Item Name"]} is ${totalWaterFootprint} liters.`;
    } else {
        document.getElementById('result').textContent = 'Please select a crop and enter a valid quantity.';
    }
});
