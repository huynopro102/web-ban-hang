const Container = () => {
    return (
        <>

   
                       
            {/* <!-- Search --> */}
            <div class="search-form-container container" id="search-form-container">
                <div class="form-container-inner">
                    <form action="" class="form">
                        <input type="text" class="form-input" placeholder="Bạn muốn tìm kiếm gì?"/>
                            <button class="btn form-btn" type="submit">
                                <i class="ri-search-line"></i>
                            </button>
                    </form>
                    <span class="form-note">Nhấn Esc để đóng</span>
                </div>

                <button class="btn form-close-btn place-items-center" id="form-close-btn">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            {/* <!-- Featured articles --> */}
            <section class="featured-articles section-header-offset">
                <div class="featured-articles-container container d-grid">

                    <div class="featured-content d-grid">

                        <div class="headline-banner">
                            <h3 class="headline fancy-border">
                                <span class="place-items-center">Tin Mới Nhất</span>
                            </h3>
                            <span class="headline-description">Khung cảnh tuyệt đẹp trong Anime pixel...</span>
                        </div>

                        <a href="./post.html" class="article featured-article featured-article-1">
                            <img src="./assets/images/featured/featured-1.jpg" alt=""
                                class="article-image"/>
                                <span class="article-category">Cosplay</span>

                                <div class="article-data-container">

                                    <div class="article-data">
                                        <span>Aug 5th 2022</span>
                                        <span class="article-data-spacer"></span>
                                        <span>8 min red </span>
                                    </div>

                                    <h3 class="title article-title">Gái xinh cosplay gantz !</h3>
                                </div>
                        </a>

                        <a href="./post2.html" class="article featured-article featured-article-2">
                            <img src="./assets/images/featured/featured-2.gif" alt=""
                                class="article-image"/>
                                <span class="article-category">Pixel Art</span>

                                <div class="article-data-container">

                                    <div class="article-data">
                                        <span>Aug 5th 2022</span>
                                        <span class="article-data-spacer"></span>
                                        <span>45 min red </span>
                                    </div>

                                    <h3 class="title article-title">Pixel art trong tương lai ?</h3>
                                </div>
                        </a>

                        <a href="./post3.html" class="article featured-article featured-article-3">
                            <img src="./assets/images/featured/featured-3.jpg" alt=""
                                class="article-image"/>
                                <span class="article-category">Car</span>

                                <div class="article-data-container">

                                    <div class="article-data">
                                        <span>Aug 5th 2022</span>
                                        <span class="article-data-spacer"></span>
                                        <span>16 min red </span>
                                    </div>

                                    <h3 class="title article-title">Siêu xe Pagani Huayra Black.</h3>
                                </div>
                        </a>
                    </div>

                    {/* <!-- Sidebar --> */}
                    <div class="sidebar d-grid">

                        <h3 class="title featured-content-title">Xu Hướng Mới!</h3>

                        <a href="#" class="trending-news-box">
                            <div class="trending-news-image-box">
                                <span class="trending-number place-items-center">01</span>
                                <img src="./assets/images/trending/trending-1.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="trending-news-data">
                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Tiêu để bài viết mẫu</h3>
                            </div>
                        </a>

                        <a href="#" class="trending-news-box">
                            <div class="trending-news-image-box">
                                <span class="trending-number place-items-center">02</span>
                                <img src="./assets/images/trending/trending-2.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="trending-news-data">
                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Tiêu để bài viết mẫu</h3>
                            </div>
                        </a>

                        <a href="#" class="trending-news-box">
                            <div class="trending-news-image-box">
                                <span class="trending-number place-items-center">03</span>
                                <img src="./assets/images/trending/trending-3.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="trending-news-data">
                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Tiêu để bài viết mẫu</h3>
                            </div>
                        </a>

                        <a href="#" class="trending-news-box">
                            <div class="trending-news-image-box">
                                <span class="trending-number place-items-center">04</span>
                                <img src="./assets/images/trending/trending-4.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="trending-news-data">
                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Tiêu để bài viết mẫu</h3>
                            </div>
                        </a>

                        <a href="#" class="trending-news-box">
                            <div class="trending-news-image-box">
                                <span class="trending-number place-items-center">05</span>
                                <img src="./assets/images/trending/trending-5.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="trending-news-data">
                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Tiêu để bài viết mẫu</h3>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
            {/* <!-- Quick read --> */}
            <section class="quick-read section">

                <div class="container">

                    <h2 class="title section-title" data-name="Đọc Nhanh">Đọc nhanh</h2>

                    <div class="swiper">
                        <div class="swiper-wrapper">

                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-1.jpg" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Aug 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>23 min red </span>
                                        </div>

                                        <h3 class="title article-title">Tin tức về Haker mũ đen.</h3>
                                    </div>
                            </a>


                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-2.gif" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Aug 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>24 min red </span>
                                        </div>

                                        <h3 class="title article-title">Hàng loạt Pixel art đẹp mắt.</h3>
                                    </div>
                            </a>


                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-3.jpg" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Aug 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>26 min red </span>
                                        </div>

                                        <h3 class="title article-title">Ảnh kết hợp công nghệ ?</h3>
                                    </div>
                            </a>


                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-4.jpg" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Dec 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>27 min red </span>
                                        </div>

                                        <h3 class="title article-title">Tin tức bóng đá.</h3>
                                    </div>
                            </a>


                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-5.jpg" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Aug 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>28 min red </span>
                                        </div>

                                        <h3 class="title article-title">Tin tức hoạt hình TQ.</h3>
                                    </div>
                            </a>


                            <a href="#" class="article swiper-slide">
                                <img src="./assets/images/quickread/quickread-6.jpg" alt="" class="article-image"/>

                                    <div class="article-data-container">

                                        <div class="article-data">
                                            <span>Aug 6th 2022</span>
                                            <span class="article-data-spacer"></span>
                                            <span>28 min red </span>
                                        </div>

                                        <h3 class="title article-title">Tổng hợp game mới.</h3>
                                    </div>
                            </a>

                        </div>

                        <div class="swiper-button-prev swiper-controls"></div>
                        <div class="swiper-button-next swiper-controls"></div>

                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            {/* <!-- Older posts --> */}
            <section class="older-posts section">

                <div class="container">

                    <h2 class="title section-title" data-name="Bài viết cũ">Bài viết cũ</h2>

                    <div class="older-posts-grid-wrapper d-grid">

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-1.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Chương mới One piece !</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-2.gif" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Ảnh gif đẹp 2022</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-3.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Ảnh gái xinh 2022</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-4.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Mẫu motor mới nhất ?</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-5.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Khoa học viễn tưởng</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>

                        <a href="#" class="article d-grid">
                            <div class="older-posts-article-image-wrapper">
                                <img src="./assets/images/olderposts/olderposts-6.jpg" alt="" class="article-image"/>
                            </div>

                            <div class="article-data-container">

                                <div class="article-data">
                                    <span>Aug 5th 2022</span>
                                    <span class="article-data-spacer"></span>
                                    <span>8 min red </span>
                                </div>

                                <h3 class="title article-title">Các loại guitar basic</h3>
                                <p class="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                            </div>
                        </a>
                    </div>

                    <div class="see-more-container">
                        <a href="#" class="btn see-more-btn place-items-center">
                            Xem thêm <i class="ri-arrow-right-s-line"></i>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- Popular tags --> */}
            <section class="popular-tags section">

                <div class="container">

                    <h2 class="title section-title" data-name="Thẻ phổ biến">Thẻ phổ biến</h2>

                    <div class="popular-tags-container d-grid">

                        <a href="#" class="article">
                            <span class="tag-name">#anime</span>
                            <img src="./assets/images/tags/anime-tags.jpg" alt="" class="article-image"/>
                        </a>

                        <a href="#" class="article">
                            <span class="tag-name">#art</span>
                            <img src="./assets/images/tags/art-tags.gif" alt="" class="article-image"/>
                        </a>

                        <a href="#" class="article">
                            <span class="tag-name">#cosplay</span>
                            <img src="./assets/images/tags/cosplay-tags.jpg" alt="" class="article-image"/>
                        </a>

                        <a href="#" class="article">
                            <span class="tag-name">#technology</span>
                            <img src="./assets/images/tags/technology-tags.jpg" alt="" class="article-image"/>
                        </a>

                        <a href="#" class="article">
                            <span class="tag-name">#sport</span>
                            <img src="./assets/images/tags/sport-tags.jpg" alt="" class="article-image"/>
                        </a>

                        <a href="#" class="article">
                            <span class="tag-name">#science</span>
                            <img src="./assets/images/tags/science-tags.jpg" alt="" class="article-image"/>
                        </a>
                    </div>

                </div>
            </section>
            {/* <!-- Newsletter --> */}
            <section class="newsletter section">

                <div class="container">

                    <h2 class="title section-title" data-name="Bản tin">Bản tin</h2>

                    <div class="form-container-inner">

                        <h6 class="title newsletter-title">Đăng ký nhận Bản Tin</h6>
                        <p class="newsletter-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <form action="" class="form">
                            <input type="text" class="form-input" placeholder="Nhập email của bạn"/>
                                <button class="btn form-btn" type="submit">
                                    <i class="ri-mail-send-line"></i>
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        

        </>
    )

}
export default Container 
