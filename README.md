# ⚛️ Vật Lý 10 – Lớp học trực tuyến

Website học Vật Lý 10 (sách Kết nối tri thức), chạy miễn phí trên **GitHub Pages**.

## Cấu trúc thư mục

```
vatly10/
├── index.html          Trang chủ: mục lục + ô tìm kiếm
├── bai-hoc.html        Trang hiển thị một bài học (không cần sửa)
├── data/muc-luc.js     Danh sách chương & bài  ← sửa khi thêm bài
├── bai/                Mỗi bài là 1 file .md   ← nơi soạn nội dung
│   ├── bai-10.md       Bài mẫu: Sự rơi tự do
│   └── cong-thuc.md    Tổng hợp công thức
├── tai-lieu/           Đề ôn, file PDF, link kiểm tra
└── assets/             Giao diện (style.css, app.js)
```

## A. Đưa web lên mạng (làm 1 lần, ~10 phút)

1. Vào https://github.com → đăng nhập → bấm **New repository**.
2. Đặt tên, ví dụ `vatly10`, chọn **Public** → **Create repository**.
3. Bấm **uploading an existing file** → kéo **toàn bộ nội dung bên trong** thư mục `vatly10` vào (giữ nguyên các thư mục con) → **Commit changes**.
4. Vào **Settings → Pages** → mục *Branch* chọn `main`, thư mục `/ (root)` → **Save**.
5. Đợi 1–2 phút, web có địa chỉ: `https://<tên-tài-khoản>.github.io/vatly10/`

> Mẹo: đặt tên repo là `<tên-tài-khoản>.github.io` thì địa chỉ gọn hơn: `https://<tên-tài-khoản>.github.io/`

## B. Thêm một bài học mới

1. Trong thư mục `bai/`, bấm **Add file → Create new file**, đặt tên ví dụ `bai-05.md`.
2. Soạn nội dung (xem mẫu `bai-10.md`):
   - `# Tiêu đề`, `## Mục`, `- gạch đầu dòng`, `**in đậm**`
   - Công thức: `$v = v_0 + at$` (trong dòng) hoặc `$$s = \frac{1}{2}gt^2$$` (riêng dòng)
   - Lời giải ẩn: `<details><summary>Xem lời giải</summary> ... </details>`
   - Video: `<iframe src="https://www.youtube.com/embed/ID_VIDEO" allowfullscreen></iframe>`
   - Hình: chép ảnh vào `bai/hinh/` rồi viết `![mô tả](bai/hinh/ten-anh.png)`
3. Mở `data/muc-luc.js`, đổi bài đó thành `co: true`.
4. **Commit changes** → khoảng 1 phút sau web tự cập nhật.

## C. Thêm đề ôn / tài liệu

Tải file PDF vào thư mục `tai-lieu/`, rồi sửa tên file trong `tai-lieu/index.html`.

## D. Tuỳ chỉnh

- Tên giáo viên, email: cuối file `index.html`.
- Màu chủ đạo: dòng `--chinh` đầu file `assets/style.css`.

## E. Xem thử trên máy trước khi đưa lên

Trang bài học đọc file `.md`, nên mở trực tiếp bằng nhấp đúp sẽ không chạy.
Mở thư mục bằng VS Code + tiện ích **Live Server**, hoặc chạy `python -m http.server` trong thư mục rồi vào `http://localhost:8000`.

## Gợi ý mở rộng

- **Kiểm tra trực tuyến:** Google Form / Azota, dán link vào `tai-lieu/index.html`.
- **Hỏi đáp:** bật tab *Discussions* trong Settings của repo để học sinh đặt câu hỏi.
- **Mô phỏng:** nhúng PhET (phet.colorado.edu) bằng `<iframe>` vào bài học.
