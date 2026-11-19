--- Portal Warga RT Digital — Sistem Informasi & Transparansi Lingkungan Berbasis Web (PWA)
Portal Warga RT Digital adalah platform manajemen komunitas tingkat Rukun Tetangga (RT) yang dirancang untuk mendigitalisasi administrasi, meningkatkan transparansi keuangan, dan mempererat komunikasi antarwarga dalam satu antarmuka yang ringan dan responsif.

--- Latar Belakang & Solusi
Pengelolaan administrasi RT konvensional kerap menghadapi kendala pencatatan keuangan manual, informasi kegiatan yang tertumpuk di aplikasi pesan, serta minimnya arsip dokumentasi. Aplikasi ini hadir sebagai solusi satu pintu yang dapat dipasang langsung di perangkat mobile maupun desktop melalui teknologi Progressive Web App (PWA).

--- Fitur Unggulan
--- Manajemen Pengumuman & Notifikasi Cerdas: Menampilkan agenda kerja bakti, arisan rutin, dan pengumuman penting lengkap dengan banner peringatan otomatis.
--- Pembukuan Kas & Iuran Real-Time: Kalkulasi otomatis total pemasukan, pengeluaran, dan saldo akhir kas RT untuk menjamin akuntabilitas keuangan.
--- Sistem Simpan Pinjam (Bunga 0%): Pengelolaan dana bergulir warga berbasis antarmuka multi-sheet (ala spreadsheet) yang dilengkapi kalkulator simulasi cicilan otomatis.
--- Galeri Dokumentasi Terintegrasi Google Drive: Akses terpusat menuju arsip foto dan video kegiatan lingkungan berbasis penyimpanan cloud.
--- Live Chat & Forum Diskusi Warga: Ruang komunikasi terverifikasi dengan identitas warga dan lencana pengurus untuk menjaga ketertiban diskusi.
--- Keamanan Multi-Admin & Auto-Login Session: Pembagian hak akses khusus bagi 3 pengurus inti RT (Ketua, Sekretaris, Bendahara) serta penyimpanan sesi masuk otomatis (persistent login) agar warga tidak perlu login berulang kali.

--- Arsitektur & Teknologi yang Digunakan
Logika & Pemrosesan Data: Python (PyScript / Pyodide)
Antarmuka Pengguna (UI/UX): HTML5, Tailwind CSS (Desain responsif mobile-first dengan palet warna ramah mata)
Penyimpanan & Sesi: Web Storage API (localStorage JSON serialization) & Integrasi Cloud Google Drive

- Deployment & Instalasi: GitHub Pages & Web App Manifest (manifest.json PWA)
Keunggulan Aksesibilitas (PWA): "Warga tidak perlu repot mengunduh file besar di Play Store. Cukup buka tautan GitHub Pages sekali, klik 'Pasang App', dan ikon aplikasi langsung muncul di layar utama HP warga."
- Keunggulan Keamanan & Tata Kelola (Multi-Admin): "Sistem memisahkan hak akses warga biasa dan 3 akun pengurus inti (Ketua, Sekretaris, Bendahara), sehingga integritas data keuangan dan pengumuman tetap terjaga."
- Efisiensi Infrastruktur (Serverless Python): "Dengan memanfaatkan PyScript di atas GitHub Pages, seluruh logika Python berjalan langsung di browser tanpa memerlukan biaya sewa server bulanan, sehingga sangat berkelanjutan untuk diterapkan di lingkungan RT mana pun."
Panduan Uji Coba Aplikasi — Portal Warga RT Digital

Untuk menguji pembagian hak akses (Role-Based Access Control) dan seluruh fitur pada sistem ini, Dewan Juri dapat mencoba dua skenario akses berikut:
A. Pengujian Mode Pengurus (Akses Penuh Admin RT)
Demi menjaga keamanan dan integritas data lingkungan, kredensial akun pengurus tidak ditampilkan pada layar utama publik. Silakan gunakan salah satu akun resmi pengurus berikut pada tombol Masuk / Daftar:
-- Akun Ketua RT (Admin 1):
Username: admin_ketua
Password: rt01_password1
-- Akun Sekretaris RT (Admin 2):
Username: admin_sekretaris
Password: rt01_password2
-- Akun Bendahara RT (Admin 3):
Username: admin_bendahara
Password: rt01_password3
Fitur yang terbuka pada Mode Admin: Panel Pengelola Admin untuk menerbitkan pengumuman & notifikasi otomatis, mencatat pemasukan/pengeluaran kas RT, menambah data simpan pinjam bunga 0%, menautkan album dokumentasi Google Drive, serta moderasi (hapus) pesan pada ruang diskusi warga.

B. Pengujian Mode Warga (Pendaftaran Mandiri & Auto-Login)
Klik tombol Masuk / Daftar di pojok kanan atas, lalu pilih "Daftar di sini".
Masukkan nama beserta blok rumah (contoh: Dewan Juri (Blok A5)), buat username, dan password baru.
Masuk menggunakan akun yang baru dibuat untuk mencoba simulasi cicilan 0% bunga, melihat transparansi kas, serta berinteraksi langsung di Live Chat Warga.
Catatan Uji Coba: Silakan muat ulang (refresh) halaman browser untuk menguji fitur Auto-Login Session, di mana akun Anda tetap tersimpan tanpa perlu login berulang kali.
