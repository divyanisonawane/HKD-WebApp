//Calendar Widget - All Pages except Calender.html 

document.addEventListener("DOMContentLoaded", function () {
    let calendarIcon = document.getElementById("calendar-icon");
    let calendarWidget = document.getElementById("calendar-widget");
    let closeCalendar = document.getElementById("close-calendar");

    calendarIcon.addEventListener("mouseenter", function () {
        calendarWidget.classList.add("active");
    });

    closeCalendar.addEventListener("click", function () {
        calendarWidget.classList.remove("active");
    });

    async function fetchEvents() {
        try {
            let response = await fetch("/static/events.csv");  // Ensure correct path
            if (!response.ok) throw new Error("Failed to fetch events");

            let csvText = await response.text();
            let events = parseCSV(csvText);
            generateCalendar(events);
        } catch (error) {
            console.error("Error fetching events:", error.message);
        }
    }

    function parseCSV(csvText) {
        let events = {};
        let lines = csvText.split("\n").slice(1); // Remove header line
    
        lines.forEach(line => {
            let [start, end, title, url] = line.split(",");
            if (start && title.includes("Ekadasi")) { // Filter events with "Ekadasi"
                let dateParts = start.trim().split("/");
                let eventDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
                let day = eventDate.getDate();
                events[day] = title.trim();
            }
        });
    
        return events;
        
    }

    function generateCalendar(events) {
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        let calendarHTML = `
            <table>
                <tr>
                    <th colspan="7">${today.toLocaleString('default', { month: 'long' })} ${currentYear}</th>
                </tr>
                <tr>
                    <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                </tr>
                <tr>
        `;

        let day = 1;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td></td>";
                } else if (day > daysInMonth) {
                    break;
                } else {
                    let className = "";
                    if (day === today.getDate()) className = "today";
                    if (events[day]) className += " event-day";
                    calendarHTML += `<td class="${className}" data-event="${events[day] || ''}" data-day="${day}">${day}</td>`;
                    day++;
                }
            }
            calendarHTML += "</tr><tr>";
        }

        calendarHTML += "</tr></table>";
        document.getElementById("calendar").innerHTML = calendarHTML;

        let eventWidget = document.createElement("div");
        eventWidget.classList.add("event-widget");
        document.body.appendChild(eventWidget);

        document.querySelectorAll(".event-day").forEach((eventDay) => {
            eventDay.addEventListener("mouseenter", function () {
                let eventText = this.getAttribute("data-event");
                eventWidget.innerHTML = eventText;
                eventWidget.style.display = "block";
                let rect = this.getBoundingClientRect();
                eventWidget.style.top = rect.top + window.scrollY + 30 + "px";
                eventWidget.style.left = rect.left + window.scrollX + "px";
            });

            eventDay.addEventListener("mouseleave", function () {
                eventWidget.style.display = "none";
            });
        });
    }

    fetchEvents();
});

document.addEventListener("DOMContentLoaded", async function () {
    var calendarEl = document.getElementById("calendar");
    var csvUrl = "/static/events.csv"; // Ensure correct path to static files

    if (!calendarEl) {
        console.error("Calendar div not found!");
        return;
    }

    async function fetchEvents() {
        try {
            let response = await fetch(csvUrl);
            if (!response.ok) throw new Error("Failed to fetch events");

            let csvText = await response.text();
            return parseCSV(csvText);
        } catch (error) {
            console.error("Error fetching events:", error.message);
            return [];
        }
    }

    function parseCSV(csvText) {
        let events = [];
        let rows = csvText.trim().split("\n");

        // Skip the header row by starting loop at index 1
        for (let i = 1; i < rows.length; i++) {
            let cols = rows[i].split(",").map(col => col.trim());
            if (cols.length >= 3) {
                let event = {
                    start: formatDate(cols[0]), // Convert date format
                    end: formatDate(cols[1]),   // Convert date format
                    title: cols[2].replace(/-/g, " "), // Remove dashes from event title
                    url: cols[3] && cols[3] !== "" ? cols[3] : null // Handle empty URLs
                };
                events.push(event);
            }
        }
        return events;
    }

    function formatDate(dateStr) {
        // Convert "MM/DD/YYYY" to "YYYY-MM-DD" for FullCalendar
        let [month, day, year] = dateStr.split("/");
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    function generateCalendar(events) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ["interaction", "dayGrid"],
            initialView: "dayGridMonth",
            defaultDate: new Date().toISOString().split("T")[0],
            editable: true,
            eventLimit: true,
            events: events
        });

        calendar.render();
    }

    let events = await fetchEvents();
    generateCalendar(events);
});

