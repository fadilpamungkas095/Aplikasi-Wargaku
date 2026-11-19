🏘️ Portal Warga RT Digital — Sistem Informasi & Transparansi Lingkungan Berbasis Web (PWA)
Portal Warga RT Digital adalah platform manajemen komunitas tingkat Rukun Tetangga (RT) yang dirancang untuk mendigitalisasi administrasi, meningkatkan transparansi keuangan, dan mempererat komunikasi antarwarga dalam satu antarmuka yang ringan dan responsif.

🎯 Latar Belakang & Solusi
Pengelolaan administrasi RT konvensional kerap menghadapi kendala pencatatan keuangan manual, informasi kegiatan yang tertumpuk di aplikasi pesan, serta minimnya arsip dokumentasi. Aplikasi ini hadir sebagai solusi satu pintu yang dapat dipasang langsung di perangkat mobile maupun desktop melalui teknologi Progressive Web App (PWA).

✨ Fitur Unggulan
📢 Manajemen Pengumuman & Notifikasi Cerdas: Menampilkan agenda kerja bakti, arisan rutin, dan pengumuman penting lengkap dengan banner peringatan otomatis.

💰 Pembukuan Kas & Iuran Real-Time: Kalkulasi otomatis total pemasukan, pengeluaran, dan saldo akhir kas RT untuk menjamin akuntabilitas keuangan.

🤝 Sistem Simpan Pinjam (Bunga 0%): Pengelolaan dana bergulir warga berbasis antarmuka multi-sheet (ala spreadsheet) yang dilengkapi kalkulator simulasi cicilan otomatis.

📸 Galeri Dokumentasi Terintegrasi Google Drive: Akses terpusat menuju arsip foto dan video kegiatan lingkungan berbasis penyimpanan cloud.

💬 Live Chat & Forum Diskusi Warga: Ruang komunikasi terverifikasi dengan identitas warga dan lencana pengurus untuk menjaga ketertiban diskusi.

🛡️ Keamanan Multi-Admin & Auto-Login Session: Pembagian hak akses khusus bagi 3 pengurus inti RT (Ketua, Sekretaris, Bendahara) serta penyimpanan sesi masuk otomatis (persistent login) agar warga tidak perlu login berulang kali.

🛠️ Arsitektur & Teknologi yang Digunakan
Logika & Pemrosesan Data: Python (PyScript / Pyodide)

Antarmuka Pengguna (UI/UX): HTML5, Tailwind CSS (Desain responsif mobile-first dengan palet warna ramah mata)

Penyimpanan & Sesi: Web Storage API (localStorage JSON serialization) & Integrasi Cloud Google Drive

Deployment & Instalasi: GitHub Pages & Web App Manifest (manifest.json PWA)

3. Tiga Poin Kunci Jika Dewan Juri Mengajukan Pertanyaan
Jika juri menguji pemahaman Anda saat sesi tanya jawab, tekankan 3 keunggulan berikut:

Keunggulan Aksesibilitas (PWA): "Warga tidak perlu repot mengunduh file besar di Play Store. Cukup buka tautan GitHub Pages sekali, klik 'Pasang App', dan ikon aplikasi langsung muncul di layar utama HP warga."

Keunggulan Keamanan & Tata Kelola (Multi-Admin): "Sistem memisahkan hak akses warga biasa dan 3 akun pengurus inti (Ketua, Sekretaris, Bendahara), sehingga integritas data keuangan dan pengumuman tetap terjaga."

Efisiensi Infrastruktur (Serverless Python): "Dengan memanfaatkan PyScript di atas GitHub Pages, seluruh logika Python berjalan langsung di browser tanpa memerlukan biaya sewa server bulanan, sehingga sangat berkelanjutan untuk diterapkan di lingkungan RT mana pun."
