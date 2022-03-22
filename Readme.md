# Introduce Git and Github
## ⏺ Git
>Merupakan bagian dari SCM(Source Code Management) yang ada pada **local storage/pc**.

## ⏺ Github
>Management program secara **online**. Sehingga, program / code itu bisa kita share secara umum/open-source.

>Bisa dishare atau online sehingga bisa untuk kolaborasi dengan teman. Sekarang juga sedang tren untuk bisa mudah konek ke server, code ditaruh di github.
---
## Bagian pada git
1. Modified / changes session (saat di VScode)
   * Bagian dari git untuk merecord perubahan yang dilakukan pada file di dalam project.
   * Record yg dilakukan: record perubahan, record penambahan file, dan record pengurangan file.
   * Source control visual code bisa untuk mengecek modified yang terjadi. Saat ini belum ada repositori yg mengkonekkan VScode dengan Git.
2. Staged session
   * Bagian dari git untuk menyiapkan file apa saja yang akan kita simpan ke dalam git (jadinya pengumpulan tiap perubahan yang akan disimpan)
3. Commited session
   * Bagian dari git untuk menyimpan perubahan pada file project kita.
---
## Konfigurasi Git
>Menghubungkan Git dengan Github:
- Konfigurasi username: git config --global user.name "username_github"
- Konfigurasi email: git config --global user.email "email@github"
- Kedua konfigurasi di atas bisa dilakukan kalau git sudah diinstal dan kita sudah buat akun di github.

>Menyiapkan project untuk menggunakan git
1. Inisialisasi git / mengaktifkan git pada project
   - git init
     - saat diketik akan buat nama file hijau di explorer dan ada inisial U / untracked (untracked berarti belum disimpan)
   - pastikkan saat mau koding, buka langsung ke direktori projeknya bukan dari mydocument atau ke drive lain supaya terminal langsung dari folder projeknya.
2. Melihat status git pada project
   - git status di terminal = source control pada VS code
     - dilakukan saat kita melakukan perubahan dan memastikan kita sudah simpan atau belum.
3. Memindahkan ke staged session
   - git add nama_file
     - nama_file diperuntukkan jika file spesifik
   - git add .
     - . berarti mindahin semua file
   - saat dipindah ke staged session, di source control akan dibilang file akan masuk ke tab staged changes dengan inisial A
   - di git status file itu akan dibilang new file: xxx dan berwarna hijau.
4. Menyimpan perubahan di commited session / kedalam git
   - git commit -m "pesan_perubahan_yang_dilakukan"
   - bagusnya tulis perubahan apa yg dilakukan pada saat commit, tulis secara singkat aja tapi jangan cuma bilang "revisi".
   - Modified file akan dapat inisial M
5. Melihat history commit
   - git log
6. Menambahkan link github
   - git remote add alias_name link_github
     - alias_name biasanya origin tapi biasanya bisa diganti2
     - link_github berarti link repository nya
   - git remote -v
     - memeriksa link github repositori yang terdaftar pada projek
7. Konfigurasi branch utama
   - git branch -M nama_branch
     - nama_branch utama biasanya main atau Master
8. Mengupload / menyimpan ke github
   - git push -u alias_name nama_branch
     - contoh yg kita lakukan untuk fundamental: git push -u origin main