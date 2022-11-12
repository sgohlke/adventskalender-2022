const calendar = document.getElementById('calendar')
if (calendar) {

    // Create number array for days 1 to 24
    let days = [];
    for (let day = 1; day <= 24; day++) {
        days.push(day)
    }

    console.log('days original', days)

    // Shuffle days
    days = days.sort(() => Math.random() - 0.5);

    console.log('days shuffled', days)
    
    // Add day elements to calendar
    for (const day of days) {
        const door = document.createElement("section");
        door.classList.add('doorItem')
        door.innerHTML = `<p>${day}</p>`;
        calendar.appendChild(door);
    }
}