function checkAccess() {
    let isPaid = document.getElementById("isPaid").value === "true";
    let plan = document.getElementById("plan").value;
    let accessLevel = "";

    if (!isPaid) {
        accessLevel = "blocked";
    } else if (plan === "premium") {
        accessLevel = "full";
    } else {
        accessLevel = "limited";
    }
    document.getElementById("result").textContent =
        "Access level: " + accessLevel;
}