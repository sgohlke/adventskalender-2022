const calendar = document.getElementById('calendar')
if (calendar) {
    // Create number array for days 1 to 24
    let days = [];
    for (let day = 1; day <= 24; day++) {
        days.push(day)
    }

    // Shuffle days
    days = days.sort(() => Math.random() - 0.5);
    
    // Add day elements to calendar
    for (const day of days) {
        const door = document.createElement("section");
        door.classList.add('doorItem')
        door.innerHTML = `<p onclick='showContent(${day})'>${day}</p>`;
        calendar.appendChild(door);
    }
}

function showContent(day) {
    const today = new Date();
    // Note: getMonth starts at 0 so december is value 11
    if (today.getFullYear() === 2022 && today.getMonth() === 11) {
        if (today.getDate() >= day) {
            alert('Noch nicht implementiert!')
        } else {
            alert(`Du kannst die Tür für den Tag ${day} noch nicht öffnen!`)
        }
    } else {
        alert('Du kannst Türen im Adeventskalendar nur im Dezember 2022 öffnen!')
    }
}