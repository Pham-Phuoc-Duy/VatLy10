// MỤC LỤC – Vật Lý 10 (Kết nối tri thức)
// Muốn thêm bài: tạo file bai/<id>.md rồi đặt  co: true  cho bài đó.
// Bài có  co: false  sẽ hiện chữ "Sắp có".
const MUC_LUC = [
  { chuong: "Chương I. Mở đầu", bai: [
    { id: "bai-01", ten: "Bài 1. Làm quen với vật lí", co: false },
    { id: "bai-02", ten: "Bài 2. Các quy tắc an toàn trong phòng thực hành vật lí", co: false },
    { id: "bai-03", ten: "Bài 3. Thực hành tính sai số trong phép đo", co: false },
  ]},
  { chuong: "Chương II. Động học", bai: [
    { id: "bai-04", ten: "Bài 4. Độ dịch chuyển và quãng đường đi được", co: false },
    { id: "bai-05", ten: "Bài 5. Tốc độ và vận tốc", co: false },
    { id: "bai-06", ten: "Bài 6. Thực hành: Đo tốc độ của vật chuyển động", co: false },
    { id: "bai-07", ten: "Bài 7. Đồ thị độ dịch chuyển – thời gian", co: false },
    { id: "bai-08", ten: "Bài 8. Chuyển động biến đổi. Gia tốc", co: false },
    { id: "bai-09", ten: "Bài 9. Chuyển động thẳng biến đổi đều", co: false },
    { id: "bai-10", ten: "Bài 10. Sự rơi tự do", co: true },
    { id: "bai-11", ten: "Bài 11. Thực hành: Đo gia tốc rơi tự do", co: false },
    { id: "bai-12", ten: "Bài 12. Chuyển động ném", co: false },
  ]},
  { chuong: "Chương III. Động lực học", bai: [
    { id: "bai-13", ten: "Bài 13. Tổng hợp và phân tích lực. Cân bằng lực", co: false },
    { id: "bai-14", ten: "Bài 14. Định luật 1 Newton", co: false },
    { id: "bai-15", ten: "Bài 15. Định luật 2 Newton", co: false },
    { id: "bai-16", ten: "Bài 16. Định luật 3 Newton", co: false },
    { id: "bai-17", ten: "Bài 17. Trọng lực và lực căng", co: false },
    { id: "bai-18", ten: "Bài 18. Lực ma sát", co: false },
    { id: "bai-19", ten: "Bài 19. Lực cản và lực nâng", co: false },
    { id: "bai-20", ten: "Bài 20. Một số ví dụ về cách giải các bài toán động lực học", co: false },
    { id: "bai-21", ten: "Bài 21. Moment lực. Cân bằng của vật rắn", co: false },
    { id: "bai-22", ten: "Bài 22. Thực hành: Tổng hợp lực", co: false },
  ]},
  { chuong: "Chương IV. Năng lượng, công, công suất", bai: [
    { id: "bai-23", ten: "Bài 23. Năng lượng. Công cơ học", co: false },
    { id: "bai-24", ten: "Bài 24. Công suất", co: false },
    { id: "bai-25", ten: "Bài 25. Động năng, thế năng", co: false },
    { id: "bai-26", ten: "Bài 26. Cơ năng và định luật bảo toàn cơ năng", co: false },
    { id: "bai-27", ten: "Bài 27. Hiệu suất", co: false },
  ]},
  { chuong: "Chương V. Động lượng", bai: [
    { id: "bai-28", ten: "Bài 28. Động lượng", co: false },
    { id: "bai-29", ten: "Bài 29. Định luật bảo toàn động lượng", co: false },
    { id: "bai-30", ten: "Bài 30. Thực hành: Xác định động lượng của vật trước và sau va chạm", co: false },
  ]},
  { chuong: "Chương VI. Chuyển động tròn", bai: [
    { id: "bai-31", ten: "Bài 31. Động học của chuyển động tròn đều", co: false },
    { id: "bai-32", ten: "Bài 32. Lực hướng tâm và gia tốc hướng tâm", co: false },
  ]},
  { chuong: "Chương VII. Biến dạng của vật rắn. Áp suất chất lỏng", bai: [
    { id: "bai-33", ten: "Bài 33. Biến dạng của vật rắn", co: false },
    { id: "bai-34", ten: "Bài 34. Khối lượng riêng. Áp suất chất lỏng", co: false },
  ]},
];
