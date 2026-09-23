// Open report details

function viewReport(reportId) {

    document.getElementById("modalReportId").textContent = reportId;

    document.getElementById("reportModal").style.display = "flex";
}


// Close popup

function closeModal() {

    document.getElementById("reportModal").style.display = "none";
}


// Save report changes

function saveReport() {

    const status =
        document.getElementById("modalStatus").value;

    const priority =
        document.getElementById("modalPriority").value;

    alert(
        "Report updated successfully!\n\n" +
        "Status: " + status +
        "\nPriority: " + priority
    );

    closeModal();
}


// Search and filter reports

function filterReports() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const status =
        document.getElementById("statusFilter").value;

    const priority =
        document.getElementById("priorityFilter").value;

    const rows =
        document.querySelectorAll("#reportTable tr");


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        const statusText =
            row.querySelector(".status")?.innerText || "";

        const priorityText =
            row.querySelector(".priority")?.innerText || "";


        const matchesSearch =
            text.includes(search);

        const matchesStatus =
            status === "all" ||
            statusText.includes(status);

        const matchesPriority =
            priority === "all" ||
            priorityText.includes(priority);


        if (
            matchesSearch &&
            matchesStatus &&
            matchesPriority
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });
}


// Export button

function exportReports() {

    alert(
        "Report export feature will be connected to Firebase later."
    );
}


// Logout

function logout() {

    const confirmLogout =
        confirm("Do you want to logout?");

    if (confirmLogout) {

        alert("Logged out successfully.");

        window.location.href = "../index.html";
    }
}