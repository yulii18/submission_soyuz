// DOM Manipulation and Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Navigation active class
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Home Page Functionality
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    // Periksa apakah elemen ada
    learnMoreBtn.addEventListener("click", function () {
      window.location.href = "edukasi.html";
    });
    // }
    // if (currentPage === "index.html" || currentPage === "") {
    //   // Load news dynamically
    //   const newsContainer = document.getElementById("newsContainer");
    //   const newsData = [
    //     {
    //       title: "Peningkatan Aktivitas Gunung Merapi",
    //       date: "1 Juni 2025",
    //       summary: "Status waspada ditingkatkan menjadi siaga.",
    //     },
    //     {
    //       title: "Pelatihan Tanggap Bencana di Jawa Barat",
    //       date: "28 Mei 2025",
    //       summary: "Masyarakat dilatih evakuasi mandiri.",
    //     },
    //     {
    //       title: "Sistem Peringatan Dini Tsunami Terbaru",
    //       date: "20 Mei 2025",
    //       summary: "Teknologi baru mampu deteksi lebih cepat.",
    //     },
    //   ];

    //   newsData.forEach((news) => {
    //     const newsItem = document.createElement("article");
    //     newsItem.className = "news-item";
    //     newsItem.innerHTML = `
    //               <h3>${news.title}</h3>
    //               <p class="news-date">${news.date}</p>
    //               <p>${news.summary}</p>
    //               <a href="#" class="read-more">Baca selengkapnya</a>
    //           `;
    //     newsContainer.appendChild(newsItem);
    //   });

    // Learn More Button
    learnMoreBtn.addEventListener("click", function () {
      window.location.href = "edukasi.html";
    });
  }

  // Education Page Functionality
  if (currentPage === "edukasi.html") {
    const disasterCards = document.querySelectorAll(".disaster-card");
    const detailTitle = document.getElementById("detailTitle");
    const detailContent = document.getElementById("detailContent");

    const disasterInfo = {
      bencanaAlam: {
        title: "Bencana Alam",
        content: `
                    <ul class="disaster-list">
                    <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Gempa Bumi</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencanaAlam('gempa_bumi')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                    </ul>

                `,
      },
      bencanaNonAlam: {
        title: "Bencana Non-Alam",
        content: `
                    <ul class="disaster-list">
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                    </ul>
                `,
      },
      bencanaSosial: {
        title: "Bencana Sosial",
        content: `
                    <ul class="disaster-list">
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/bencana_dunia.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Desain Responsif</h3>
                        <p>Tampilan yang menyesuaikan dengan semua perangkat</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button">Lihat Detail</button>
                        </div>
                    </li>
                    </ul>
                `,
      },
    };

    disasterCards.forEach((card) => {
      card.addEventListener("click", function () {
        const disasterType = this.getAttribute("data-disaster");
        const info = disasterInfo[disasterType];

        detailTitle.textContent = info.title;
        detailContent.innerHTML = info.content;
        // Highlight selected card
        disasterCards.forEach((c) => (c.style.backgroundColor = ""));
        this.style.backgroundColor = "var(--overlay-color)"; // Highlight color
      });
    });
  }

  // Contact Page Functionality
  if (currentPage === "siaga.html") {
    const emergencyList = document.getElementById("emergencyList");
    const emergencyContacts = [
      { name: "BNPB (Badan Nasional Penanggulangan Bencana)", number: "117" },
      { name: "Basarnas (Pencarian dan Pertolongan)", number: "115" },
      { name: "Polisi", number: "110" },
      { name: "Ambulans", number: "118/119" },
      { name: "Pemadam Kebakaran", number: "113" },
    ];

    emergencyContacts.forEach((contact) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${contact.name}:</strong> ${contact.number}`;
      emergencyList.appendChild(li);
    });

    // Form Submission
    const reportForm = document.getElementById("disasterReportForm");
    const formMessage = document.getElementById("formMessage");

    reportForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission
      formMessage.textContent =
        "Laporan Anda telah diterima. Terima kasih atas kontribusinya.";
      formMessage.style.color = "var(--success-color)";
      formMessage.style.padding = "1rem";
      formMessage.style.marginTop = "1rem";
      formMessage.style.borderRadius = "4px";
      formMessage.style.backgroundColor = "#e8f5e9";

      // Reset form
      reportForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = "";
        formMessage.style.padding = "0";
      }, 5000);
    });
  }
});

// Tas siaga
const tasSiagaDetails = {
  medis: ["Obat-obatan", "Masker N95", "Hand sanitizer", "Alat P3K"],
  makanan: ["Makanan kaleng", "Biskuit", "Air mineral", "Makanan instan"],
  dokumen: [
    "KTP",
    "KK",
    "Buku tabungan",
    "Kontak Darurat",
    "Dokumen penting lainnya",
  ],
  perlengkapanTeknis: [
    "Senter & baterai cadangan",
    "Power bank",
    "Selimut darurat",
    "lighter",
    "Tali parasut",
  ],
  perlindunganDiri: [
    "Jas hujan ponco",
    "Topi pelindung",
    "Kacamata pelindung",
    "Sarung tangan",
    "pakaian ganti",
  ],
  alatKomunikasi: [
    "Radio AM/FM",
    "Handphone & charger",
    "Walkie-talkie",
    "Baterai cadangan",
  ],
  sanitari: [
    "Sabun antiseptik",
    "Tisu basah",
    "Pembalut wanita",
    "Sampah plastik",
  ],
};

function showDetail(category) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay active";

  modal.innerHTML = `
    <div class="modal-content">
      <h3>${category.toUpperCase()}</h3>
      <ul>
        ${tasSiagaDetails[category].map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button class="close-btn">Tutup</button>
    </div>
  `;

  modal.querySelector(".close-btn").onclick = () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 300);
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 300);
    }
  };

  document.body.appendChild(modal);
}

function moveToBencanaAlam(jenisBencana) {
  window.location.href = `bencana/${jenisBencana}.html`;
}
