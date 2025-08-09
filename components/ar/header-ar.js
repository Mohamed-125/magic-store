const r = require("../ar/all-products");
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` 
    
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
</head>
    <div class="loader-mask">
      <div class="loader">
        <div></div>
        <div></div>
      </div>
    </div>

     

    <!--==================== Preloader End ====================-->

    <!--==================== Overlay Start ====================-->
    <div class="overlay"></div>
    <!--==================== Overlay End ====================-->

    <!--==================== Sidebar Overlay End ====================-->
    <div class="side-overlay"></div>
    <!--==================== Sidebar Overlay End ====================-->


<button class="support-btn toggle">
  <div class="name">
  <i class="fa-regular fa-message"></i></div>
</button>

<div class="chat" aria-hidden="true">
  <div class="window">
    <div class="bubble guest">
      Hi man! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur esse commodi.
    </div>
    <div class="bubble own">
      Sounds great!
    </div>
  </div>
  <div class="input">
    <input type="text" class="field" />
    <button class="send">أرسال</button>
  </div>
</div>

    <!-- ==================== Scroll to Top End Here ==================== -->
    <div class="progress-wrap">
      <svg
        class="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    <!-- ==================== Scroll to Top End Here ==================== -->

    <!-- ==================== Mobile Menu Start Here ==================== -->
    <div class="mobile-menu d-block">
      <button type="button" class="close-button">
        <i class="las la-times"></i>
      </button>
      <div class="mobile-menu__inner ar-mobile-menu">
        <a href="index.html" class="mobile-menu__logo">
          <img
            src="../assets/images/logo/logo.png"
            alt="Logo"
            class="white-version"
          />
          <img
            src="../assets/images/logo/white-logo-two.png"
            alt="Logo"
            class="dark-version"
          />
        </a>
        <div class="mobile-menu__menu">
         
          <ul class="nav-menu flx-align nav-menu--mobile">
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">الرئيسية</a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">ويندوز</a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link"
                >برامج الكمبيوتر</a
              >
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">  تطبيقات الهاتف</a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link"
                >   الاتصلات</a
              >
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link"
                >   برامج الافلام والمسلسلات </a
              >
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">العاب</a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">كتب الكترونيه</a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link">دورات تدريبه </a>
            </li>
            <li class="nav-menu__item">
              <a href="../ar/all-products.html" class="nav-menu__link"
                >بطاقات التسوق (هنقرستشن - امازون)</a
              >
            </li>
            <li class="nav-menu__item">
                <a href="../ar/agent-profile.html" class="nav-menu__link">حسابك الشخصي</a>
              </li>

          <div
            class="header-right__inner  my-3 gap-1 d-flex flx-align"
          >
         
            <div class="language-select flx-align select-has-icon">
              <img
                src="../assets/images/icons/globe.svg"
                alt=""
                class="globe-icon white-version"
              />
              <img
                src="../assets/images/icons/globe-white.svg"
                alt=""
                class="globe-icon dark-version"
              />
              <select class="select py-0 ps-2 border-0 fw-500">
                <option value="ar">Arabic</option>
                <option value="en">English</option>
              </select>
            </div>
            <div class="language-select flx-align mt-2 select-has-icon">
              <i class="fa-solid fa-coins
              globe-icon white-version
              "></i>
              <i class="fa-solid fa-coins 
              globe-icon dark-version             "></i>
     
              <select class="select py-0 ps-2 border-0 fw-500">
                <option value="sar">SAR</option>
                <option value="qar">QAR</option>
                <option value="aed">AED</option>
                <option value="kwd">KWD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ==================== Mobile Menu End Here ==================== -->

    <script>
    function showLoginModal() {
      document.getElementById('loginModal').style.display = 'flex';
      document.getElementById('chooseMethodPage').style.display = 'block';
      document.getElementById('emailLoginPage').style.display = 'none';
      document.getElementById('phoneLoginPage').style.display = 'none';
      document.getElementById('verificationPage').style.display = 'none';
    }

    function closeLoginModal() {
      document.getElementById('loginModal').style.display = 'none';
    }

    function showLoginOptions() {
      document.getElementById('chooseMethodPage').style.display = 'block';
      document.getElementById('emailLoginPage').style.display = 'none';
      document.getElementById('phoneLoginPage').style.display = 'none';
      document.getElementById('verificationPage').style.display = 'none';
    }

    function showEmailLogin() {
      document.getElementById('chooseMethodPage').style.display = 'none';
      document.getElementById('emailLoginPage').style.display = 'block';
    }

    function showPhoneLogin() {
      document.getElementById('chooseMethodPage').style.display = 'none';
      document.getElementById('phoneLoginPage').style.display = 'block';
    }

    function handleEmailLogin(event) {
      event.preventDefault();
      // Add your email login logic here
    }

    function handlePhoneLogin(event) {
      event.preventDefault();
      document.getElementById('phoneLoginPage').style.display = 'none';
      document.getElementById('verificationPage').style.display = 'block';
    }

    function handleVerification(event) {
      event.preventDefault();
      // Add your verification logic here
    }
    </script>

      <!-- ============================ Sale Offer Start =========================== -->
      <!-- ==================== Login Modal Start ==================== -->
    <div class="login-modal" id="loginModal" style="display: none;">
      <div class="modal-content">
        <span class="close-modal" onclick="closeLoginModal()">&times;</span>
        
        <!-- Choose Method Page -->
        <div class="modal-page" id="chooseMethodPage">
          <h2>تسجيل الدخول</h2>
          <p>اختر طريقة تسجيل الدخول</p>
          <div class="login-options">
            <button class="login-option" onclick="showEmailLogin()">
              <i class="fas fa-envelope"></i>
              <span>البريد الإلكتروني</span>
            </button>
            <button class="login-option" onclick="showPhoneLogin()">
              <i class="fas fa-phone"></i>
              <span>رقم الجوال</span>
            </button>
          </div>
        </div>

        <!-- Email Login Page -->
        <div class="modal-page" id="emailLoginPage" style="display: none">
          <button class="back-btn" onclick="showLoginOptions()"><i class="fas fa-arrow-right"></i> رجوع</button>
          <h2>تسجيل الدخول بالبريد</h2>
          <form class="login-form" onsubmit="handleEmailLogin(event)">
            <div class="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" required>
            </div>
            <div class="form-group">
              <label>كلمة المرور</label>
              <input type="password" required>
            </div>
            <button type="submit" class="submit-btn">تسجيل الدخول</button>
          </form>
        </div>

        <!-- Phone Login Page -->
        <div class="modal-page" id="phoneLoginPage" style="display: none;">
          <button class="back-btn" onclick="showLoginOptions()"><i class="fas fa-arrow-right"></i> رجوع</button>
          <h2>تسجيل الدخول برقم الجوال</h2>
          <form class="login-form" onsubmit="handlePhoneLogin(event)">
            <div class="form-group">
              <label>رقم الجوال</label>
              <input type="tel" required>
            </div>
            <button type="button" onclick="showVerificationPage()" >إرسال رمز التحقق</button>
          </form>
        </div>

        <!-- Verification Page -->
        <div class="modal-page" id="verificationPage" style="display: none;">
          <button class="back-btn" onclick="showPhoneLogin()"><i class="fas fa-arrow-right"></i> رجوع</button>
          <h2>التحقق من رقم الجوال</h2>
          <p>أدخل رمز التحقق المرسل إلى جوالك</p>
          <form class="login-form" onsubmit="handleVerification(event)">
            <div class="form-group verification-input">
              <input type="text" maxlength="6" required>
            </div>
            <button type="submit" class="submit-btn">تحقق</button>
          </form>
        </div>
           

        <!-- Phone Login Page -->
        <div class="modal-page" id="phoneLoginPage" style="display: none">
          <button class="back-btn"><i class="fas fa-arrow-right"></i> رجوع</button>
          <h2>تسجيل الدخول برقم الجوال</h2>
          <div class="form-group">
            <label>رقم الجوال</label>
            <input type="tel" id="phoneNumber" placeholder="أدخل رقم جوالك">
          </div>
          <button id="sendCodeBtn" class="submit-btn">التالي</button>
        </div>

        <!-- Verification Page -->
        <div class="modal-page" id="verificationPage" style="display: none">
          <button class="back-btn"><i class="fas fa-arrow-right"></i> رجوع</button>
          <h2>أدخل رمز التحقق</h2>
          <div class="form-group">
            <label>رمز التحقق</label>
            <input type="text" id="verificationCode" placeholder="أدخل رمز التحقق" maxlength="6">
          </div>
          <button class="submit-btn">تأكيد</button>
        </div>

      </div>
    </div>
    <!-- ==================== Login Modal End ==================== -->

    <div class="sale-offer">
        <div class="container container-full">
          <div class="sale-offer__content flx-between position-relative">
            <div class="sale-offer__countdown">
              <style>
                .countdown div { 
                  direction: rtl;
                }
              </style>
              <div class="countdown" data-date="14-10-2025" data-time="9:00">
                <div class="sec" style='padding-right:35px'>
                <span class="num"></span><span class="word"></span>
              </div>
              <div class="min">
                <span class="num"></span><span class="word"></span>
                </div>

                  <div class="hour">
                  <span class="num"></span>
                <span class="word"></span>
                </div>
                <div class="day">
                  <span class="num"></span><span class="word"></span>
                </div>
              </div>
            </div>
            <div class="sale-offer__discount flx-align gap-2">
              <span class="sale-offer__text text-heading text-capitalize"
                >عروض علي مقاتيح ويندوز</span
              >
              <strong class="sale-offer__qty text-heading font-heading"
                >45% خصم</strong
              >
              <a href="#" class="btn btn-sm btn-white pill fw-500">  اشتري الأن</a>
            </div>
            <div class="sale-offer__button">
              <button type="submit" class="sale-offer__close text-heading">
                <i class="las la-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- ============================ Sale Offer End =========================== -->
      <!-- ==================== Header Start Here ==================== -->
      <header class="header">
        <div class="container container-full">
          <nav class="header-inner flx-between">
            <!-- Menu Start  -->
            <div class="header-right flx-align flex-1">
              <a
                href="cart.html"
                class="header-right__button cart-btn position-relative"
              >
                <img
                  src="../assets/images/icons/cart.svg"
                  alt=""
                  class="white-version"
                />
                <img
                  src="../assets/images/icons/cart-white.svg"
                  alt=""
                  class="dark-version"
                />
                <span class="qty-badge font-12">0</span>
              </a>

          
              <!-- Light Dark Mode -->
              <div class="theme-switch-wrapper position-relative">
                <label class="theme-switch" for="checkbox">
                  <input type="checkbox" class="d-none" id="checkbox" />
                  <span
                    class="slider text-black header-right__button white-version"
                  >
                    <img src="../assets/images/icons/sun.svg" alt="" />
                  </span>
                  <span
                    class="slider text-black header-right__button dark-version"
                  >
                    <img src="../assets/images/icons/moon.svg" alt="" />
                  </span>
                </label>
              </div>
            </div>
            <!-- Menu End  -->
            <!-- Logo Start -->
            <i class="fa-regular nav__login fa-user" id="login-btn" onclick="openLoginModal()"></i>

            <div class="logo flex-1 justify-content-center d-flex">
              <a href="index.html" class="link white-version">
                <img src="../assets/images/logo/logo-two.png" alt="Logo" />
              </a>
              <a href="index.html" class="link dark-version">
                <img src="../assets/images/logo/white-logo.png" alt="Logo" />
              </a>
            </div>
            <!-- Logo End  -->
            <!-- Header Right start -->

            <div class="header-right flx-align flex-1 justify-content-end position-relative">
              <button type="button" class="toggle-mobileMenu">
                <i class="las la-bars"></i>
              </button>
              <button type="button" id="bell-button" >
<i class="fa-solid fa-bell"></i>
              </button>



                <div class="notification-popup" id="notification-popup">
      <!-- Individual Notification -->
      <div class="notification-item">
        <div class="notification-title">  
        اشعار 1 
        </div>
        <div class="notification-content">عرض جديد علي ترخيص ويندوز 10 اذهب للمنتج الان!</div>
      </div>
      <div class="notification-item">
        <div class="notification-title">  اشعار 2</div>
        <div class="notification-content">عرض جديد علي ترخيص ويندوز 10 اذهب للمنتج الان!</div>
      </div>
      <div class="notification-item">
        <div class="notification-title">اشعار  3</div>
        <div class="notification-content">عرض جديد علي ترخيص ويندوز 10 اذهب للمنتج الان!</div>
      </div>

      <!-- View All Notifications -->
      <div class="view-all">
        <a href="notifications.html">  اظهار جميع الأشعارات  </a>
      </div>
    </div>
  </div>


            <!-- Header Right End  -->

            <!-- Login End  -->

          </nav>
        </div>
      </header>

     

      `;
  }
}

// Login Modal Functions
function openLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function showEmailLogin() {
  document.getElementById("chooseMethodPage").style.display = "none";
  document.getElementById("emailLoginPage").style.display = "block";
}

function showPhoneLogin() {
  document.getElementById("chooseMethodPage").style.display = "none";
  document.getElementById("phoneLoginPage").style.display = "block";
}

function showVerificationPage() {
  document.getElementById("phoneLoginPage").style.display = "none";
  document.getElementById("verificationPage").style.display = "block";
}

function goBack(currentPage, previousPage) {
  document.getElementById(currentPage).style.display = "none";
  document.getElementById(previousPage).style.display = "block";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Email Login Form Submit
  const emailForm = document.querySelector("#emailLoginPage form");
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Handle email login logic here
    });
  }

  // Phone Login Next Button
  const sendCodeBtn = document.getElementById("sendCodeBtn");
  if (sendCodeBtn) {
    sendCodeBtn.addEventListener("click", function () {
      showVerificationPage();
    });
  }

  // Back Buttons
  const backButtons = document.querySelectorAll(".back-btn");
  backButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const currentPage = this.closest(".modal-page").id;
      const previousPage =
        currentPage === "emailLoginPage" || currentPage === "phoneLoginPage"
          ? "chooseMethodPage"
          : currentPage === "verificationPage"
          ? "phoneLoginPage"
          : "chooseMethodPage";
      goBack(currentPage, previousPage);
    });
  });
});

customElements.define("header-component-ar", Header);
