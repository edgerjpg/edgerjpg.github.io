// 酷酷的漢堡選單
const menuIcons = document.querySelectorAll('.menu-icon');
let isMenuOpen = false;

menuIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    icon.classList.toggle('open', isMenuOpen);

    const menuPanel = document.getElementById('menuPanel');
    if (isMenuOpen) {
      menuPanel.classList.add('open');
    } else {
      menuPanel.classList.remove('open');
    }
  });
});

// 甜甜圈轉圈圈

// 切換背景圖函式
function cycleBackground() {
  const secondSection = document.querySelector(".second");
  secondSection.style.backgroundImage = `url(${Img_anim[imgIndex]})`;
  secondSection.style.backgroundSize = "cover";
  secondSection.style.backgroundPosition = "center";
  imgIndex = (imgIndex + 1) % Img_anim.length;
}
const Img_anim = [
  "Dona/01.jpg", "Dona/02.jpg", "Dona/03.jpg", "Dona/04.jpg", "Dona/05.jpg",
  "Dona/06.jpg", "Dona/07.jpg", "Dona/08.jpg", "Dona/09.jpg", "Dona/10.jpg",
  "Dona/11.jpg", "Dona/12.jpg", "Dona/13.jpg", "Dona/14.jpg", "Dona/15.jpg",
  "Dona/16.jpg", "Dona/17.jpg", "Dona/18.jpg", "Dona/19.jpg", "Dona/20.jpg",
  "Dona/21.jpg", "Dona/22.jpg", "Dona/23.jpg", "Dona/24.jpg", "Dona/25.jpg",
  "Dona/26.jpg", "Dona/27.jpg", "Dona/28.jpg", "Dona/29.jpg", "Dona/30.jpg",
  "Dona/31.jpg", "Dona/32.jpg", "Dona/33.jpg", "Dona/34.jpg", "Dona/35.jpg",
  "Dona/36.jpg", "Dona/37.jpg", "Dona/38.jpg", "Dona/39.jpg", "Dona/40.jpg",
  "Dona/41.jpg", "Dona/42.jpg", "Dona/43.jpg", "Dona/44.jpg", "Dona/45.jpg",
  "Dona/46.jpg", "Dona/47.jpg", "Dona/48.jpg", "Dona/49.jpg", "Dona/50.jpg",
  "Dona/51.jpg", "Dona/52.jpg", "Dona/53.jpg", "Dona/54.jpg", "Dona/55.jpg",
  "Dona/56.jpg", "Dona/57.jpg", "Dona/58.jpg", "Dona/59.jpg", "Dona/60.jpg",
  "Dona/61.jpg", "Dona/62.jpg", "Dona/63.jpg", "Dona/64.jpg", "Dona/65.jpg",
  "Dona/66.jpg", "Dona/67.jpg", "Dona/68.jpg",
];

// 預載圖片
const preloadedImages = [];
Img_anim.forEach(src => {
  const img = new Image();
  img.src = src;
  preloadedImages.push(img);
});

let imgIndex = 0;

function cycleBackground() {
  const secondSection = document.querySelector(".in-thing");
  secondSection.style.backgroundImage = `url(${Img_anim[imgIndex]})`;
  secondSection.style.backgroundSize = "cover";
  secondSection.style.backgroundPosition = "center";
  imgIndex = (imgIndex + 1) % Img_anim.length;
}

setInterval(cycleBackground, 100); // 每 3 秒切換
// 動畫
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
});

//團隊動畫
document.addEventListener("DOMContentLoaded", function () {
  const members = document.querySelectorAll(".member");

  function showMembersOnScroll() {
    members.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setTimeout(() => {
          el.classList.add("show");
        }, i * 200); // 每個元素延遲 200ms 出現
      }
    });
  }

  window.addEventListener("scroll", showMembersOnScroll);
  showMembersOnScroll(); // 初始載入也檢查一次
});


// 鼠標發光
const followers = [
      {
        el: document.querySelector('.f1'),
        x: 0, y: 0,
        speed: 0.1
      },
      {
        el: document.querySelector('.f2'),
        x: 0, y: 0,
        speed: 0.15
      },
      {
        el: document.querySelector('.f3'),
        x: 0, y: 0,
        speed: 0.3
      }
    ];

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      followers.forEach(f => {
        f.x += (mouseX - f.x) * f.speed;
        f.y += (mouseY - f.y) * f.speed;
        f.el.style.left = `${f.x}px`;
        f.el.style.top = `${f.y}px`;
      });

      requestAnimationFrame(animate);
    }

    animate();
// second 亮起來

