// header hamburger=====================================================
const hamburger = document.querySelector(".hamburger_btn");
const header = document.querySelector(".header");
const headerLinks = document.querySelectorAll(".header_link");

hamburger.addEventListener("click", () => {
  header.classList.toggle("open");

  headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(width <= 768px)").matches) {
        header.classList.remove("open");
      }
    });
  });

});

// 画面サイズ変動中にハンバーガーメニューのアニメーションを無効にする
let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("is-resize");

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove("is-resize");
  }, 300);
});


// works=================================================================
// works const====
const worksItems = document.querySelectorAll(".works_item");
const modal = document.querySelector(".works_modal");

const modalTitle = document.getElementById("modalTitle");
const modalPeriod = document.getElementById("modalPeriod");
const modalRole = document.getElementById("modalRole");
const modalSkill = document.getElementById("modalSkill");

const modalOverview = document.getElementById("modalOverview");
const modalPurpose = document.getElementById("modalPurpose");
const modalPoint = document.getElementById("modalPoint");

const modalImg = document.getElementById("modalImg");
const modalUrl = document.getElementById("modalUrl");

const closeBtn = document.querySelector(".works_modal_back_btn");

let lastFocusedElement = null;

// works_item スライドショー====
const worksObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");

      worksObserver.unobserve(entry.target);
    }

  });
},
  {
    threshold: 0.2
  });

worksItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
  worksObserver.observe(item);
});


// モーダルを開く====
const openModal = (item) => {
  lastFocusedElement = document.activeElement;

  modalTitle.textContent = item.dataset.title || "";
  modalPeriod.textContent = item.dataset.period || "";
  modalRole.textContent = item.dataset.role || "";
  modalSkill.textContent = item.dataset.skill || "";

  modalOverview.textContent = item.dataset.overview;
  modalPurpose.textContent = item.dataset.purpose;
  modalPoint.textContent = item.dataset.point;

  modalImg.src = item.dataset.img || "";
  modalUrl.href = item.dataset.url || "#";

  modal.classList.add("active");
  document.body.classList.add("is-modal-open");

  //モーダル内へフォーカス移動
  closeBtn.focus();
};

// モーダルを閉じる====
const closeModal = () => {
  modal.classList.remove("active");
  document.body.classList.remove("is-modal-open");

  // ⭐ 元の要素へ戻る
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
};

// 各作品をクリック
worksItems.forEach((item) => {
  item.addEventListener("click", (e) => openModal(item));
});

// 閉じるボタン
closeBtn.addEventListener("click", closeModal);

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal)
    closeModal();
});

// escapeで閉じる
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
  }
});



// skill=====================================================================
// skill const===
const skillItems = document.querySelectorAll(".skill_item");


// skill_item　スライドショー====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");

      skillObserver.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.2,
});

skillItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
  skillObserver.observe(item);
});



// about=====================================================================
// about const===
const aboutItems = document.querySelectorAll(".about_list");


// about_item　スライドショー====
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");

      aboutObserver.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.2,
});

aboutItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
  aboutObserver.observe(item);
});
