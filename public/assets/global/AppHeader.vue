<template>
    
    <header>
        
        <div class="container">
            <div class="logo">
                <img alt="logo" src="../global/logo.jpg" />
                 <!-- <div class="heden"> <i class="fas fa-bars toggle-menu"></i></div> -->
            </div>
            <nav>
                <ul>
                   
                    <li><router-link to="/">Home</router-link> </li>
                    <!-- <li><a href="#hh">Home</a> </li> -->
                    <li><router-link to="/medical">Medical</router-link> </li>
                    <li><router-link to="/about">About us</router-link> </li>
                    <li><router-link to="/team">Our Team</router-link> </li>
                    <li><router-link to="/strategy">Our Strategy</router-link> </li>
                    <li><router-link to="partners">Our Partners</router-link> </li>
                    <li><router-link to="/time">TimeLine</router-link> </li>
                </ul>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" width="34.621" height="34.621" viewBox="0 0 34.621 34.621">
                <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
                    <path id="Path_3" data-name="Path 3"
                        d="M32,18.25A13.75,13.75,0,1,1,18.25,4.5,13.75,13.75,0,0,1,32,18.25Z" fill="none"
                        stroke="#5b5858" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    <path id="Path_4" data-name="Path 4" d="M32.285,32.276l-7.31-7.3" transform="translate(3.215 3.224)"
                        fill="none" stroke="#5b5858" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                </g>
            </svg>
        </div>

    </header>


    <!-- /////////////////////// -->
    
    
</template>


<script>
export default {
    name: "AppHeader",
};
</script>
<style lang="scss" scoped>
header {
    // position: absolute;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #cefbf9;

}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 100px;
}

.logo {
    height: 90px;
    margin: 10px;
}

nav {
    flex: 1;
    height: 50px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 50px;
    border: 1px solid #eee;
}

nav .toggle-menu {
    color: white;
    font-size: 22px;
    height: 100%;
}

@media (min-width: 768px) {
    nav .toggle-menu {
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

@media (max-width: 767px) {
    header nav ul {
        display: none;
    }

    nav .toggle-menu:hover+ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: rgb(0 0 0 / 50%);
    }

    nav ul li a {
        padding: 15px !important;
    }
}

nav > * {
    height:100%;
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
    
}

nav ul li a.active,
nav ul li a:hover {
    color: #2F6044;
    border-bottom: 2px solid #2F6044;
}

svg {
    width: 40px;
    height: 31px;
    position: relative;
    margin-left: 30px;
    background-color: white;
    border-radius: 50px;
    border: 1px solid #eee;
    cursor: pointer;
    margin: 20px;
}

// .heden i{
//   color: black  ;
//   position: absolute;
//   font-size: 20px;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 0;
// }
</style>
