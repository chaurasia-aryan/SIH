function showMoreFacts() {
    const factsList = document.getElementById('facts-list');
  
    const additionalFacts = [
      'It takes about 1,800 gallons of water to produce a single pair of jeans.',
      'Shortening your shower by even a minute or two can save up to 150 gallons per month.',
      'Turning off the tap while brushing your teeth can save up to 4 gallons of water per minute.'
    ];
  
    additionalFacts.forEach(fact => {
      const listItem = document.createElement('li');
      listItem.textContent = fact;
      factsList.appendChild(listItem);
    });
  
    document.querySelector('button').style.display = 'none';
  }
  