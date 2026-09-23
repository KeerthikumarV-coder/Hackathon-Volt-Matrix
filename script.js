/* =========================================
   SAFE SPEAK JAVASCRIPT
========================================= */


/* =========================================
   NAVIGATION
========================================= */

function showSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("mobile-open");

}


/* =========================================
   CHARACTER COUNTER
========================================= */

const description = document.getElementById("description");
const charCount = document.getElementById("charCount");

if (description) {

    description.addEventListener("input", function () {

        charCount.textContent = description.value.length;

    });

}


/* =========================================
   REPORT FORM
========================================= */

const reportForm = document.getElementById("reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const category =
            document.getElementById("category").value;

        const incidentDate =
            document.getElementById("incidentDate").value;

        const descriptionValue =
            document.getElementById("description").value.trim();

        const confirmation =
            document.getElementById("confirmation").checked;


        /* Basic validation */

        if (!category) {

            alert("Please select an incident category.");

            return;

        }


        if (!incidentDate) {

            alert("Please select the incident date.");

            return;

        }


        if (descriptionValue.length < 10) {

            alert(
                "Please provide a little more information about the incident."
            );

            return;

        }


        if (!confirmation) {

            alert(
                "Please confirm that the information is accurate."
            );

            return;

        }


        /*
         * DEMO ONLY
         *
         * In the real application this data
         * will be sent to your backend API.
         */

        const reportId = generateReportId();


        document.getElementById("generatedReportId")
            .textContent = reportId;


        /* Save demo report ID */

        localStorage.setItem(
            "safeSpeakReportId",
            reportId
        );


        /* Show success modal */

        document.getElementById("successModal")
            .classList.add("show");


        /* Reset form */

        reportForm.reset();

        charCount.textContent = "0";

    });

}


/* =========================================
   GENERATE DEMO REPORT ID
========================================= */

function generateReportId() {

    const randomPart =
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

    const year =
        new Date().getFullYear();

    return `SS-${year}-${randomPart}`;

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById("successModal")
        .classList.remove("show");

}


/* =========================================
   COPY REPORT ID
========================================= */

function copyReportId() {

    const reportId =
        document.getElementById("generatedReportId")
            .textContent;

    navigator.clipboard.writeText(reportId)
        .then(function () {

            alert("Report ID copied!");

        })
        .catch(function () {

            alert("Please copy the Report ID manually.");

        });

}


/* =========================================
   TRACK REPORT
========================================= */

function trackReport() {

    const input =
        document.getElementById("reportId");

    const reportId =
        input.value.trim();


    if (!reportId) {

        alert("Please enter your Report ID.");

        return;

    }


    const savedReportId =
        localStorage.getItem("safeSpeakReportId");


    /*
     * DEMO LOGIC
     *
     * Later this will call your backend API.
     */

    if (
        reportId.toUpperCase() ===
        savedReportId
    ) {

        document.getElementById("trackResult")
            .style.display = "block";

    }

    else {

        alert(
            "Report not found. For this demo, use the Report ID generated after submitting a report."
        );

    }

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

const modal =
    document.getElementById("successModal");

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeModal();

        }

    });

}