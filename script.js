// DOM Manipulation and Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Home Page Functionality
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (learnMoreBtn) {
    // Periksa apakah elemen ada
    learnMoreBtn.addEventListener("click", function () {
      window.location.href = "edukasi.html";
    });
  }

  // Education Page Functionality
  if (window.location.pathname.endsWith("edukasi.html")) {
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
                        src="picture/gempa_bumi.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Gempa Bumi</h3>
                        <p>Gempa Bumi adalah peristiwa getaran di permukaan bumi akibat pelepasan energi di dalam bumi (biasanya dari patahan/lapisan batuan) karena pergeseran lempeng tektonik. Getaran ini dapat merusak bangunan dan membahayakan keselamatan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('gempa_bumi')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/gunung_meletus.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Gunung Meletus</h3>
                        <p>Gunung Meletus adalah letusan magma dan abu akibat dorongan gas bertekanan tinggi dari perut bumi yang keluar melalui kawah gunung api. Dapat menimbulkan dampak seperti hujan abu, aliran lava, dan awan panas yang dapat membahayakan manusia dan lingkungan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('gunung_meletus')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/angin_topan.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Angin Topan</h3>
                        <p>Angin Topan adalah siklon tropis yang berkecepatan tinggi disertai hujan deras, angin kencang, dan tekanan rendah, mampu menyebabkan kerusakan hebat pada bangunan, infrastruktur, dan pepohonan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('angin_topan')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/kekeringan.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Kekeringan</h3>
                        <p>Kekeringan adalah kondisi kekurangan air akibat kemarau berkepanjangan hingga berdampak pada petani, ketersediaan air minum, dan mengancam ekosistem serta mata pencaharian masyarakat, terutama pedesaan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('kekeringan')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/tsunami.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Tsunami</h3>
                        <p>Tsunami adalah gelombang raksasa di laut akibat gempa bawah laut, letusan gunung api, atau longsor bawah laut. Saat mencapai daratan, gelombang tsunami akan membesar dan menghantam masyarakat pesisir dengan destruktif.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('tsunami')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/longsor.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Tanah Longsor</h3>
                        <p>Tanah Longsor adalah pergerakan massa tanah/kerikil/gunung yang menuruni lereng dalam jumlah besar secara tiba-tiba atau berangsur-angsur akibat hujan lebat, gempa, atau erosi.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('longsor')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/banjir.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Banjir</h3>
                        <p>Banjir adalah meluapnya air sungai, danau, laut, atau saluran ke permukiman melebihi batas normal akibat hujan lebat, meluapnya badan air, atau sungai tersumbat. Banjir dapat merusak rumah, mencemari air bersih, dan menimbulkan risiko kesehatan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('banjir')">Lihat Detail</button>
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
                        src="picture/gagal_tekno.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Kegagalan Teknologi</h3>
                        <p>Kegagalan Teknologi adalah bencana yang timbul akibat kesalahan desain, pengoperasian, kelalaian, atau unsur disengaja dalam penggunaan teknologi atau industri. Meliputi kecelakaan industri (seperti tumpahan bahan kimia, ledakan pabrik), kecelakaan transportasi (di darat, laut, atau udara), hingga kegagalan sistem teknologi lainnya seperti ledakan reaktor atau kebocoran gas</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('kegagalan_teknologi')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/wabah.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Wabah Penyakit</h3>
                        <p>Wabah Penyakit adalah kejadian meningkatnya kasus penyakit menular secara signifikan dalam waktu dan wilayah tertentu. Epidemik menyebar cepat di kota atau provinsi, sedangkan pandemi meluas hingga melintasi negara. Contohnya termasuk flu burung (H5N1), demam berdarah, ebola, dan COVID‑19</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('wabah')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/kebakaran.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Kebakaran</h3>
                        <p>Kebakaran adalah peristiwa berkobarnya api yang melebihi batas normal yang dapat menimbulkan kerusakan atau kerugian, baik pada bangunan di pemukiman, pabrik, pasar, gedung, maupun kebakaran hutan dan lahan.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('kebakaran')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/tabrakan.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Kecelakaan</h3>
                        <p>Kecelakaan adalah kejadian tak terduga pada moda transportasi atau industri, sering disebabkan oleh kealpaan/kelemahan sistem dan human error yang dapat menyebabkan cedera atau kematian.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('kecelakaan')">Lihat Detail</button>
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
                        src="picture/konflik.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Konflik Sosial</h3>
                        <p>Konflik Sosial adalah peristiwa kekerasan atau ketegangan antar individu, kelompok masyarakat, suku, agama, atau ras yang menimbulkan kerugian besar, baik fisik, psikologis, maupun material.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('konflik_sosial')">Lihat Detail</button>
                        </div>
                    </li>
                     <li>
                        <img
                        src="picture/teror.png"
                        alt="Fitur 1"
                        />
                        <div class="content">
                        <h3>Terorisme</h3>
                        <p>Terorisme adalah tindakan kekerasan yang disengaja dan bersifat sistematis, dilakukan oleh kelompok atau individu untuk menciptakan ketakutan (teror) demi tujuan ideologis, politik, atau agama.</p>
                        </div>
                        <div class="disaster-btn">
                        <button class="button" onclick="moveToBencana('terorisme')">Lihat Detail</button>
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

function moveToBencana(jenisBencana) {
  window.location.href = `bencana/${jenisBencana}.html`;
}