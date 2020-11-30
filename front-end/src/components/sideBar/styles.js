import styled from 'styled-components'

export const Content = styled.div`
  @import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
  }
  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

  .container{
    display: flex;
    padding-left: 0px;
    margin-left: 7px;
    margin-top: 30px;
    color: #fff
  }
  
  .fa-2x {
    font-size: 2em;
  }
  .fa {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size:20px;
  }


  .main-menu:hover,nav.main-menu.expanded {
    width:200px;
    overflow:visible;
  }

  .main-menu {
    background: rgba(59,59,59, 0.7);
    position:absolute;
    top:0px;
    bottom:0;
    height:100%;
    left:0px;
    width:30px;
    overflow:hidden;
    -webkit-transition:width .5s linear;
    transition:width .5s linear;
    -webkit-transform:translateZ(0) scale(1,1);
    z-index:1000;
  }

  .main-menu>ul {
    margin:94px 0;
  }

  .main-menu li {
    margin-top:10px;
    position:relative;
    display:block;
    width:250px;
  }

  .main-menu li>a {
  position:relative;
  display:table;
  border-collapse:collapse;
  border-spacing:0;
  color:#fff;
  font-family: arial;
  font-size: 14px;
  text-decoration:none;
  -webkit-transform:translateZ(0) scale(1,1);
  -webkit-transition:all .3s linear;
  transition:all .3s linear;
  z-index:1000;
  }

  .main-menu .nav-icon {
    position:relative;
    display:table-cell;
    width:60px;
    height:36px;
    text-align:center;
    vertical-align:middle;
    font-size:18px;
  }

  .main-menu .nav-text {
    left: 30px;
    font-size: 20px;
    position:relative;
    display:table-cell;
    vertical-align:middle;
    width:190px;
    font-family: 'Titillium Web', sans-serif;
  }

  .no-touch .scrollable.hover {
    overflow-y:hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow-y:auto;
    overflow:visible;
  }

  a:hover,a:focus {
    text-decoration:none;
  }

  nav {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -o-user-select:none;
    user-select:none;
  }

  nav ul,nav li {
    outline:0;
    margin:0;
    padding:0;
  }
  .main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
    color:#fff;
    background-color:#831e62;
  }
  .area {
    float: left;
    background: #e2e2e2;
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
  }

`