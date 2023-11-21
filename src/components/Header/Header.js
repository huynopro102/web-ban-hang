import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assest/logo.png";
// import { HiDatabase, HiOutlineUserCircle } from "react-icons/hi";
// import { BsCartFill } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutRedux } from "../../redux/userSlice";
// import { toast } from "react-hot-toast";
import "../Header/Header.css"

const Header = () => {
  return (
    <>

      {/* <!-- Header --> */}
      <header class="header" id="header">
        <nav class="navbar container">
          <div class="logo">
            <a href="/">
              <img src="C:\Users\Tuan huy\Desktop\React.JS\web-ban-quan-ao\frontend\src\assest\logo.png" alt="" class="logo-image" />
              <h3 class="animate-charcter">Khanh</h3>
            </a>
          </div>

          {/* <!-- <h2 class="name">Nyx</h2> --> */}

          <div class="menu" id="menu">
            <ul class="list">
              <li class="list-item">
                <a href="#" class="list-link current">Trang Chủ</a>
              </li>
              <li class="list-item">
                <a href="#" class="list-link">Thể Loại</a>
              </li>
              <li class="list-item">
                <a href="#" class="list-link">Reviews</a>
              </li>
              <li class="list-item">
                <a href="#" class="list-link">Tin Tức</a>
              </li>
              <li class="list-item">
                <a href="#" class="list-link">Vấn Đề</a>
              </li>
              <li class="list-item">
                <a href="#" class="list-link">Liên Hệ</a>
              </li>
              <li class="list-item">
                <a href="/login" class="list-link screen-lg-hidden">Đăng nhập</a>
              </li>
              <li class="list-item">
                <a href="/register" class="list-link screen-lg-hidden">Đăng ký</a>
              </li>
            </ul>
          </div>

          <div class="list list-right">
            <button class="btn place-items-center" id="theme-toggle-btn">
              <i class="ri-sun-line sun-icon"></i>
              <i class="ri-moon-line moon-icon"></i>
            </button>

            <button class="btn place-items-center" id="search-icon">
              <i class="ri-search-line"></i>
            </button>

            <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
              <i class="ri-menu-3-line open-menu-icon"></i>
              <i class="ri-close-line close-menu-icon"></i>
            </button>

            <a href="/login" class="list-link screen-sm-hidden">Đăng nhập</a>
            <a href="/register" class="list-link screen-sm-hidden btn sign-up-btn fancy-border">
              <span>Đăng ký</span>
            </a>
          </div>
        </nav>

      </header>


    </>
  )

};

export default Header;
