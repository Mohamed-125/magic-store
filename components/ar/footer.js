class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <!-- ==================== brand Start Here ==================== -->

<div class="brand" style="direction: ltr">
  <div class="container container">
    <div class="brand-slider">
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img1.png" alt="" />
      </div>
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img2.png" alt="" />
      </div>
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img1.png" alt="" />
      </div>
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img2.png" alt="" />
      </div>
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img1.png" alt="" />
      </div>
      <div class="brand-item d-flex align-items-center justify-content-center">
        <img src="../../assets/images/thumbs/brand-img2.png" alt="" />
      </div>
    </div>
  </div>
</div>

<!-- ==================== brand End Here ==================== -->

<!-- ==================== Footer Start Here ==================== -->
<footer class="footer-section">
  <img src="../../assets/images/shapes/pattern.png" alt="" class="bg-pattern" />
  <img
    src="../../assets/images/shapes/element1.png"
    alt=""
    class="element one"
  />
  <img
    src="../../assets/images/shapes/element2.png"
    alt=""
    class="element two"
  />
  <img
    src="../../assets/images/gradients/footer-gradient.png"
    alt=""
    class="bg--gradient"
  />

  <div class="container container-two">
    <div class="row gy-5">
      <div class="col-xl-3 col-sm-6" style="flex: 1">
        <div class="footer-widget">
          <div class="footer-widget__logo">
            <a href="index.html">
              <img src="../../assets/images/logo/white-logo.png" alt=""
            /></a>
          </div>
          <p class="footer-widget__desc">
            مرحبًا بك في *ماجيك ستور*، وجهتك الأولى للحصول على تراخيص البرامج
            الأصلية، تراخيص نظام ويندوز، الكتب الرقمية، الدورات التدريبية
            المتخصصة، والعديد من المنتجات الرقمية الأخرى. نقدم لك مجموعة متكاملة
            من المنتجات الرقمية لتلبية احتياجاتك.
          </p>
          <div class="footer-widget__social">
            <ul class="social-icon-list">
              <li class="social-icon-list__item">
                <a
                  href="https://www.facebook.com"
                  class="social-icon-list__link flx-center"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li class="social-icon-list__item">
                <a
                  href="https://www.twitter.com"
                  class="social-icon-list__link flx-center"
                >
                  <i class="fab fa-twitter"></i
                ></a>
              </li>
              <li class="social-icon-list__item">
                <a
                  href="https://www.linkedin.com"
                  class="social-icon-list__link flx-center"
                >
                  <i class="fab fa-linkedin-in"></i
                ></a>
              </li>
              <li class="social-icon-list__item">
                <a
                  href="https://www.pinterest.com"
                  class="social-icon-list__link flx-center"
                >
                  <i class="fab fa-pinterest-p"></i
                ></a>
              </li>
              <li class="social-icon-list__item">
                <a
                  href="https://www.pinterest.com"
                  class="social-icon-list__link flx-center"
                >
                  <i class="fab fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-sm-6 col-xs-6">
        <div class="footer-widget">
          <h5 class="footer-widget__title text-white">روابط تهمك</h5>
          <ul class="footer-lists">
            <li class="footer-lists__item">
              <a href="privacy-policy.html" class="footer-lists__link">
                الخصوصية
              </a>
            </li>
            <li class="footer-lists__item">
              <a href="return-policy.html" class="footer-lists__link">
                الاسترجاع والاستبدال
              </a>
            </li>
            <li class="footer-lists__item">
              <a href="terms&conditions.html" class="footer-lists__link"
                >الشروط والأحكام
              </a>
            </li>
          <li class="footer-lists__item">
             <a href="cart.html" class="footer-lists__link"> الدعم الفني </a>
           </li>
            <li class="footer-lists__item">
              <a href="loyalty-program.html" class="footer-lists__link"
                >نظام الولاء
              </a>
            </li>
            <li class="footer-lists__item">
              <a href="selling-policy.html" class="footer-lists__link">
                التسويق بالعمولة
              </a>
            </li>
            <li class="footer-lists__item">
              <a href="sell-with-us.html" class="footer-lists__link"> بع معنا </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
        <div class="footer-widget">
          <h5 class="footer-widget__title text-white">خدمه العملاء</h5>
          <ul class="footer-links" style="flex-direction: row; gap: 10px">
            <li class="footer-links__item">
              <i class="fa-brands fa-whatsapp"></i>
            </li>
            <li class="footer-links__item">
              <i class="fa-regular fa-message"></i>
            </li>
            <li class="footer-links__item">
              <a href="cart.html"><i class="fa-solid fa-envelope"></i></a>
            </li>
            <li class="footer-links__item">
              <a href="dashboard.html"><i class="fa-solid fa-phone"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- bottom Footer -->
<div class="bottom-footer">
  <div class="container container-two">
    <div class="bottom-footer__inner flx-between gap-3">
      <p class="bottom-footer__text font-14">الحقوق محفظوظه &copy; ماجك ستور</p>
      <div class="footer-links">
        <ul class="footer-pays">
          <li class="pay-mada">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/mada.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/mada.png"
              alt="mada"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-mastercard">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/mastercard.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/mastercard.png"
              alt="credit_card"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-visa">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/visa.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/visa.png"
              alt="credit_card"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-stc_pay">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/stc_pay.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/stc_pay.png"
              alt="stc_pay"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-apple_pay">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/apple_pay.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/apple_pay.png"
              alt="apple_pay"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-google_pay">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/google_pay.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/google_pay.png"
              alt="google_pay"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
          <li class="pay-cod">
            <img
              class="lazy object-contain max-h-full loaded"
              width="100%"
              height="100%"
              src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/cod.png"
              data-src="https://cdn.assets.salla.network/themes/1034648396/1.98.0/images/cod.png"
              alt="cod"
              loading="lazy"
              data-ll-status="loaded"
            />
          </li>
        </ul>
      </div>
      <p>موثّق في منصة الأعمال</p>
    </div>
  </div>
</div>
<!-- ==================== Footer End Here ==================== -->

`;
  }
}

customElements.define("footer-component", Footer);
