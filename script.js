// DOM Manipulation and Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active class
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Home Page Functionality
    if (currentPage === 'index.html' || currentPage === '') {
        // Load news dynamically
        const newsContainer = document.getElementById('newsContainer');
        const newsData = [
            { title: 'Peningkatan Aktivitas Gunung Merapi', date: '1 Juni 2025', summary: 'Status waspada ditingkatkan menjadi siaga.' },
            { title: 'Pelatihan Tanggap Bencana di Jawa Barat', date: '28 Mei 2025', summary: 'Masyarakat dilatih evakuasi mandiri.' },
            { title: 'Sistem Peringatan Dini Tsunami Terbaru', date: '20 Mei 2025', summary: 'Teknologi baru mampu deteksi lebih cepat.' }
        ];

        newsData.forEach(news => {
            const newsItem = document.createElement('article');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p class="news-date">${news.date}</p>
                <p>${news.summary}</p>
                <a href="#" class="read-more">Baca selengkapnya</a>
            `;
            newsContainer.appendChild(newsItem);
        });

        // Learn More Button
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'edukasi.html';
        });
    }

    // Education Page Functionality
    if (currentPage === 'edukasi.html') {
        const disasterCards = document.querySelectorAll('.disaster-card');
        const detailTitle = document.getElementById('detailTitle');
        const detailContent = document.getElementById('detailContent');
        
        const disasterInfo = {
            gempa: {
                title: 'Gempa Bumi',
                content: `
                    <h4>Sebelum Gempa:</h4>
                    <ul>
                        <li>Kenali tempat evakuasi terdekat</li>
                        <li>Siapkan tas darurat berisi makanan, air, obat-obatan, dan dokumen penting</li>
                        <li>Amankan perabotan yang bisa jatuh</li>
                    </ul>
                    <h4>Saat Gempa:</h4>
                    <ul>
                        <li>Lindungi kepala dan badan dari reruntuhan</li>
                        <li>Jika di dalam ruangan, berlindung di bawah meja yang kuat</li>
                        <li>Jika di luar, hindari bangunan, pohon, dan tiang listrik</li>
                    </ul>
                    <h4>Setelah Gempa:</h4>
                    <ul>
                        <li>Periksa diri dan orang sekitar untuk luka</li>
                        <li>Waspada gempa susulan</li>
                        <li>Hindari menggunakan lift</li>
                    </ul>
                `
            },
            banjir: {
                title: 'Banjir',
                content: `
                    <h4>Sebelum Banjir:</h4>
                    <ul>
                        <li>Ketahui tingkat kerentanan area tempat tinggal</li>
                        <li>Siapkan tas darurat dan dokumen penting dalam wadah kedap air</li>
                        <li>Buat rencana evakuasi keluarga</li>
                    </ul>
                    <h4>Saat Banjir:</h4>
                    <ul>
                        <li>Matikan listrik dan gas</li>
                        <li>Hindari berjalan di air banjir yang bergerak</li>
                        <li>Jika terjebak, naik ke tempat yang lebih tinggi</li>
                    </ul>
                    <h4>Setelah Banjir:</h4>
                    <ul>
                        <li>Hindari air banjir yang mungkin terkontaminasi</li>
                        <li>Periksa kerusakan struktur bangunan sebelum masuk</li>
                        <li>Bersihkan dan disinfeksi area yang terkena banjir</li>
                    </ul>
                `
            },
            'gunung-api': {
                title: 'Gunung Api',
                content: `
                    <h4>Sebelum Erupsi:</h4>
                    <ul>
                        <li>Kenali zona bahaya gunung api terdekat</li>
                        <li>Siapkan masker debu dan kacamata pelindung</li>
                        <li>Simpan persediaan makanan dan air untuk beberapa hari</li>
                    </ul>
                    <h4>Saat Erupsi:</h4>
                    <ul>
                        <li>Hindari daerah aliran lahar dan awan panas</li>
                        <li>Gunakan masker untuk melindungi pernapasan</li>
                        <li>Jika di dalam ruangan, tutup semua jendela dan pintu</li>
                    </ul>
                    <h4>Setelah Erupsi:</h4>
                    <ul>
                        <li>Hindari mengemudi di daerah berdebu vulkanik</li>
                        <li>Bersihkan atap dari abu vulkanik yang berat</li>
                        <li>Waspada banjir lahar jika terjadi hujan</li>
                    </ul>
                `
            },
            tsunami: {
                title: 'Tsunami',
                content: `
                    <h4>Sebelum Tsunami:</h4>
                    <ul>
                        <li>Ketahui rute evakuasi dan tempat berkumpul</li>
                        <li>Kenali tanda-tanda alam tsunami (gempa kuat, air laut surut tiba-tiba)</li>
                        <li>Siapkan perahu atau pelampung darurat</li>
                    </ul>
                    <h4>Saat Tsunami:</h4>
                    <ul>
                        <li>Segera evakuasi ke tempat tinggi</li>
                        <li>Jangan menunggu peringatan resmi jika melihat tanda alam</li>
                        <li>Jika terjebak, carilah benda yang bisa mengapung</li>
                    </ul>
                    <h4>Setelah Tsunami:</h4>
                    <ul>
                        <li>Hindari air yang tergenang karena mungkin berbahaya</li>
                        <li>Waspada gelombang susulan</li>
                        <li>Hindari kabel listrik yang rusak</li>
                    </ul>
                `
            }
        };

        disasterCards.forEach(card => {
            card.addEventListener('click', function() {
                const disasterType = this.getAttribute('data-disaster');
                const info = disasterInfo[disasterType];
                
                detailTitle.textContent = info.title;
                detailContent.innerHTML = info.content;
                
                // Highlight selected card
                disasterCards.forEach(c => c.style.backgroundColor = '');
                this.style.backgroundColor = '#e3f2fd';
            });
        });
    }
    // Contact Page Functionality
    if (currentPage === 'kontak.html') {
        const emergencyList = document.getElementById('emergencyList');
        const emergencyContacts = [
            { name: 'BNPB (Badan Nasional Penanggulangan Bencana)', number: '117' },
            { name: 'Basarnas (Pencarian dan Pertolongan)', number: '115' },
            { name: 'Polisi', number: '110' },
            { name: 'Ambulans', number: '118/119' },
            { name: 'Pemadam Kebakaran', number: '113' }
        ];

        emergencyContacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${contact.name}:</strong> ${contact.number}`;
            emergencyList.appendChild(li);
        });

        // Form Submission
        const reportForm = document.getElementById('disasterReportForm');
        const formMessage = document.getElementById('formMessage');
        
        reportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            formMessage.textContent = 'Laporan Anda telah diterima. Terima kasih atas kontribusinya.';
            formMessage.style.color = 'var(--success-color)';
            formMessage.style.padding = '1rem';
            formMessage.style.marginTop = '1rem';
            formMessage.style.borderRadius = '4px';
            formMessage.style.backgroundColor = '#e8f5e9';
            
            // Reset form
            reportForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.style.padding = '0';
            }, 5000);
        });
    }
});

