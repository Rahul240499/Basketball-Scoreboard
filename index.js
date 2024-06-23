let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let commentaryEl = document.getElementById("commentary");
let basketballImgEl = document.getElementById("front-img");

function checkScore() {
    if (homeScore === guestScore) {
        homeScoreEl.classList.add("highlight");
        guestScoreEl.classList.add("highlight");
        commentaryEl.textContent = `We're all squared up here, folks! The scoreboard shows an even ${homeScore} for both sides.`;
    } else if (homeScore > guestScore) {
        homeScoreEl.classList.add("highlight");
        guestScoreEl.classList.remove("highlight");
        commentaryEl.textContent = `The home team edges ahead with a ${
            homeScore - guestScore
        }-point lead! It's now ${homeScore} to ${guestScore}.`;
    } else {
        guestScoreEl.classList.add("highlight");
        homeScoreEl.classList.remove("highlight");
        commentaryEl.textContent = `A strong offensive push gives the guest team a ${
            guestScore - homeScore
        }-point cushion. The score stands at ${guestScore} to ${homeScore}.`;
    }
}

function animateGoalScored() {
    basketballImgEl.classList.remove("goal-scored");
    setTimeout(() => {
        basketballImgEl.classList.add("goal-scored");
    }, 10); // Small delay to ensure the class is re-added
}

function homeIncrementScoreBy1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    checkScore();
    animateGoalScored();
}

function homeIncrementScoreBy2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    checkScore();
    animateGoalScored();
}

function homeIncrementScoreBy3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    checkScore();
    animateGoalScored();
}

function guestIncrementScoreBy1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    checkScore();
    animateGoalScored();
}

function guestIncrementScoreBy2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    checkScore();
    animateGoalScored();
}

function guestIncrementScoreBy3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    checkScore();
    animateGoalScored();
}

function resetGame() {
    homeScore = 0;
    guestScore = 0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;

    homeScoreEl.classList.remove("highlight");
    guestScoreEl.classList.remove("highlight");

    basketballImgEl.classList.remove("goal-scored");

    commentaryEl.textContent = "GAME ON......";
}
