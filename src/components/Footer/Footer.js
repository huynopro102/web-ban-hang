import React from "react";
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer class="footer section">

                <div class="footer-container container d-grid">

                    <div class="company-data">
                        <a href="./index.html">
                            {/* <!-- <img src="./assets/images/icon.png" alt=""> --> */}
                                <h3 class="animate-charcter">Khanh</h3>
                        </a>
                        <p class="company-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum accusamus necessitatibus reprehenderit officiis
                        </p>

                        <ul class="list social-media">
                            <li class="list-item">
                                <a href="#" class="list-link">
                                    <i class="ri-facebook-circle-line"></i>
                                </a>
                                <a href="#" class="list-link">
                                    <i class="ri-instagram-line"></i>
                                </a>
                                <a href="#" class="list-link">
                                    <i class="ri-twitter-line"></i>
                                </a>
                                <a href="#" class="list-link">
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </li>
                        </ul>

                        <span class="copyright-notice">&copy; 2022 Khanh. All rights reserved</span>
                    </div>

                    <div>
                        <h6 class="title footer-title">Danh Mục</h6>

                        <ul class="list footer-list">
                            <li class="list-item">
                                <a href="#" class="list-link">Anime</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Art</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Cosplay</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Technology</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Sport</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Science</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 class="title footer-title">Liên Kết Hữu Ích</h6>

                        <ul class="list footer-list">
                            <li class="list-item">
                                <a href="#" class="list-link">Trang chủ</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Yếu tố</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Thẻ</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Tác giả</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Thành viên</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Vấn đề</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 class="title footer-title">Công Ty</h6>

                        <ul class="list footer-list">
                            <li class="list-item">
                                <a href="#" class="list-link">Liên hệ chúng tôi</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">F.A.Q</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Sự nghiệp</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Người sáng lập</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Thành viên</a>
                            </li>
                            <li class="list-item">
                                <a href="#" class="list-link">Địa chỉ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer