// Write your JavaScript code here.
// Remember to pay attention to page loading!

document.addEventListener("DOMContentLoaded", () => {
    const Takeoff = document.getElementById("takeoff");
    const FlightStatus = document.getElementById("flightStatus");
    const ShuttleBackground = document.getElementById("shuttleBackground");
    const ShuttleHeight = document.getElementById("spaceShuttleHeight");
    const Landing = document.getElementById("landing");
    const MissionAbort = document.getElementById("missionAbort");
    const Up = document.getElementById("up");
    const Down = document.getElementById("down");
    const Left = document.getElementById("left");
    const Right = document.getElementById("right");
    const Rocket = document.getElementById("rocket");

    Takeoff.addEventListener("click", () => {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            FlightStatus.textContent = "Shuttle in flight.";
            ShuttleBackground.style.backgroundColor = "blue";
            ShuttleHeight.textContent = "10,000";
        }
    })

    Landing.addEventListener("click", () => {
        alert("The shuttle is landing. Landing gear engaged.");
        FlightStatus.textContent = "The shuttle has landed.";
        ShuttleBackground.style.backgroundColor = "green";
        ShuttleHeight.textContent = "0";
    })

    MissionAbort.addEventListener("click", () => {
        if (confirm("Confirm that you want to abort the mission.")) {
            FlightStatus.textContent = "Mission Aborted.";
            ShuttleBackground.style.backgroundColor = "green";
            ShuttleHeight.textContent = "0";
        }
    })

    Rocket.style.bottom = "0px";
    Rocket.style.position = "absolute";

    let xpos = 0;
    let ypos = 0;

    Up.addEventListener("click", () => {
        ypos -= 10;
        Rocket.style.transform = `translate(${xpos}px, ${ypos}px)`
    })

    Down.addEventListener("click", () => {
        ypos += 10;
        Rocket.style.transform = `translate(${xpos}px, ${ypos}px)`
    })

    Left.addEventListener("click", () => {
        xpos -= 10;
        Rocket.style.transform = `translate(${xpos}px, ${ypos}px)`
    })

    Right.addEventListener("click", () => {
        xpos += 10;
        Rocket.style.transform = `translate(${xpos}px, ${ypos}px)`
    })
})