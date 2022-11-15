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
        door.innerHTML = `<p>${day}</p>`;
        calendar.appendChild(door);
        door.addEventListener('click', () => showContent(day))
    }
}

function showContent(day) {
    const today = new Date();
    // Note: getMonth starts at 0 so december is value 11
    if (today.getFullYear() === 2022 && today.getMonth() === 11) {
        if (today.getDate() >= day) {
            loadDataForDay(day)
        } else {
            alert(`Du kannst die Tür für den Tag ${day} noch nicht öffnen!`)
        }
    } else {
        alert('Du kannst Türen im Adeventskalendar nur im Dezember 2022 öffnen!')
    }
}

function loadDataForDay(day) {
    fetch(`data/${day}.json`)
        .then(response => {
            console.log(`Hole Daten für Tag ${day}`, response)
            return response.json()
        })
        .then(dayData => {
            console.log(`Lese Daten für Tag ${day}`, dayData)
            document.getElementById("day").classList.remove('hidden');
            document.getElementById('dayImage').src = `data/${dayData.image}`
            document.getElementById('dayText').innerText = dayData.text
            document.getElementById("calendar").classList.add('hidden')
            // Only for testing purposes
            document.getElementById("testArticle").classList.add('hidden')
        })
        .catch(error => alert(`Konnte Daten für Tag ${day} nicht laden. Fehler ist: ${error.message}`))
}

function closeDay() {
    document.getElementById("day").classList.add('hidden');
    document.getElementById("calendar").classList.remove('hidden');
    // Only for testing purposes
    document.getElementById("testArticle").classList.remove('hidden');
}