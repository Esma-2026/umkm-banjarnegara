// ===== TANGGAL MASEHI + HIJRIAH =====

function getDateText() {

    const now = new Date();

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulanMasehi = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];
    const tanggalMasehi =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulanMasehi[now.getMonth()]} ${now.getFullYear()}`;

    const tanggalHijriah =
        new Intl.DateTimeFormat(
            "id-TN-u-ca-islamic",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(now);

    return `${tanggalMasehi} | ${tanggalHijriah}`;
}

const calendarElement =
    document.getElementById("calendar-info");

let textIndex = 0;

function startCalendarTyping() {

    if (!calendarElement) return;

    const fullText = getDateText();

    calendarElement.textContent = "";

    function type() {

        if (textIndex < fullText.length) {

            calendarElement.textContent +=
                fullText.charAt(textIndex);

            textIndex++;

            setTimeout(type, 70);

        } else {

            setTimeout(() => {

                calendarElement.textContent = "";
                textIndex = 0;

                startCalendarTyping();

            }, 3000);

        }
    }

    type();
}

startCalendarTyping();
function updateCalendarInfo() {

    const now = new Date();

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const tanggalMasehi =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

    const waktu =
        now.toLocaleTimeString("id-ID");

    const calendarElement =
        document.getElementById("calendar-info");

    if (calendarElement) {

        calendarElement.textContent =
            `${tanggalMasehi} | ${waktu}`;
    }
}

updateCalendarInfo();

console.log("typing loaded");

const typingElement =
    document.getElementById("typing-title");

console.log(typingElement);
if (typingElement) {

    const text = "Ilustrasi Proses Pendampingan";

    function typeLoop() {

        let index = 0;

        typingElement.textContent = "";

        const interval = setInterval(() => {

            typingElement.textContent =
                text.slice(0, index + 1);

            index++;

            if (index === text.length) {

                clearInterval(interval);

            setTimeout(typeLoop, 4000);
            }

        }, 70);
    }

    typeLoop();
}
