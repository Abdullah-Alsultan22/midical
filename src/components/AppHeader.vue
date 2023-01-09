<template>

  <header id="header">
    <div class="container">
      <div class="logo">
        <img alt="logo" src="@/assets/global/logo.jpg" />
      </div>
      <nav>
        <i class="fas fa-bars toggle-menu"></i>
        <ul class="nave"> 
                    <li><a href="#home">Home</a></li>
                    <li><a href="#medical">Medical</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#Strategy">Our Strategy</a></li>
                    <li><a href="#ourpartners">Our Partners</a></li>
                    <li><a href="#TimeLine">TimeLine</a></li>
                </ul>
      </nav>
      <div class="form">
        <div class="form-two">
          <img class="seach" src="../assets/global/searsh.svg" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #cefbf9;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 90px;
  margin: 10px;
}
@media (max-width: 768px) {
  header .logo {
    width: 55%;
  }
}
nav .nave{
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #eee;
}
@media (max-width: 768px) {
  header nav .nave {
    display: none;
  }
}
nav ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 100%;
}

header nav .toggle-menu {
  color: #2F6044;
  font-size: 30px;
  position: relative;
  right: -25px;
}
@media (min-width: 768px) {
  header nav .toggle-menu {
    display: none;
  }
}
header nav ul {
  display: flex;
}
@media (max-width: 767px) {
  header nav ul {
    display: none;
  }
  header nav .toggle-menu:hover + ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    background: #037666;
    height: 196px;
    left: -20px;
    border-radius: 0px;
  
}
  header nav ul li a {
    padding: 15px !important;
  }
}


nav > * {
  height: 100%;
}

nav ul li a {
  padding: 8px 10px;
  color: black;
  text-decoration: none;
  font-size: 14px;
  transition: 0.1s;
  position: relative;
  z-index: 2;
  height: 100%;
  font-weight: bold;
}
@media (max-width: 768px) {
    header nav ul li a {
   font-weight: boldx;
   font-size: 18px;
  }
}
nav ul li a.active,
nav ul li a:hover {
  color: #2f6044;
  border-bottom: 2px solid #2f6044;
}

.seach {
  width: 40px;
  height: 39px;
  background-color: white;
  border-radius: 50px;
  border: 2px solid white;
  cursor: pointer;
  margin: 20px;
}
@media (max-width: 768px) {
  header .seach {
    display: none;
  }
}
</style>
