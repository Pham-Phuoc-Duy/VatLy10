// ===== TRANG CHỦ =====
function renderHome() {
  const hop = document.getElementById("ds-chuong");
  const ve = (tu) => {
    tu = (tu || "").toLowerCase().trim();
    hop.innerHTML = MUC_LUC.map(c => {
      const ds = c.bai.filter(b => !tu || b.ten.toLowerCase().includes(tu));
      if (!ds.length) return "";
      return `<section class="chuong"><h3>${c.chuong}</h3><ul>` +
        ds.map(b => b.co
          ? `<li><a href="bai-hoc.html?bai=${b.id}">${b.ten}</a></li>`
          : `<li><span>${b.ten}</span><span class="sap-co">Sắp có</span></li>`
        ).join("") + `</ul></section>`;
    }).join("") || "<p>Không tìm thấy bài nào.</p>";
  };
  ve();
  document.getElementById("tim").addEventListener("input", e => ve(e.target.value));
}

// ===== TRANG BÀI HỌC =====
async function renderLesson() {
  const id = new URLSearchParams(location.search).get("bai") || "bai-10";
  const khung = document.getElementById("noi-dung");
  try {
    const res = await fetch(`bai/${id}.md`);
    if (!res.ok) throw new Error();
    let md = await res.text();

    // Giữ nguyên công thức $...$ và $$...$$ để Markdown không làm hỏng
    const ct = [];
    md = md.replace(/\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$/g, m => `@@CT${ct.push(m) - 1}@@`);
    let html = marked.parse(md);
    html = html.replace(/@@CT(\d+)@@/g, (_, i) => ct[i]);

    khung.innerHTML = html;
    document.title = (khung.querySelector("h1")?.textContent || "Bài học") + " – Vật Lý 10";
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([khung]);
  } catch {
    khung.innerHTML = "<p>Bài học này chưa có. <a href='index.html'>Quay lại mục lục</a></p>";
  }

  // Nút bài trước / bài sau
  const ds = MUC_LUC.flatMap(c => c.bai).filter(b => b.co);
  const i = ds.findIndex(b => b.id === id);
  if (i >= 0) {
    const t = ds[i - 1], s = ds[i + 1];
    document.getElementById("dieu-huong").innerHTML =
      (t ? `<a href="?bai=${t.id}">← ${t.ten}</a>` : "<span></span>") +
      (s ? `<a href="?bai=${s.id}">${s.ten} →</a>` : "");
  }
}
