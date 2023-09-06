import styled from "styled-components";
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.bgbtn};
  color: ${({ theme }) => theme.colors.xtbtn};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  padding: 1.4rem 2.2rem;
  width: 20rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 400;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover,
  &:active {
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.xtbtn};
    font-size: 1.8rem;
  }
`;
export const NavXtStyled = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 3.8rem;
    align-items: center;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 600;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.xtnav1};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.xtnav2};
        transform: scale(1.1);
        font-weight: 900;
        border-bottom: 2px solid ${({ theme }) => theme.colors.xtnav2};
        padding-bottom: 5px;
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .darkmodebg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    right: 0px;
    z-index: 100;
    background-color: rgb(0, 0, 0, 0.2);
    transition: 0.4s ease-in-out;
  }
  #nav-item-5 {
    position: relative;
    li {
      padding-top: 1.2rem;
    }
  }
  .dropdown-menu {
    z-index: 1000;
    top: 6rem;
    right: 0rem;
    background: ${({ theme }) => theme.colors.bgnav};
    border: 2px solid rgb(0, 0, 0, 0.2);
    position: absolute;
    box-shadow: ${({ theme }) => theme.colors.shdnavbotm};
    li {
      padding: 2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      border: ${({ theme }) => theme.colors.xtnav1};
      .mobile-nav-icon {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.xtnav1};
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 18px;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 200;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-lists {
      position: fixed;
      margin: 0;
      top: 0;
      left: 0;
      width: 280px;
      height: 100vh;
      background-color: ${({ theme }) => theme.colors.bgnav};
      display: block;
      justify-content: center;
      align-items: flex-start;
      padding: 5rem;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(0);
      transition: 0.4s ease-in-out;
      transform-origin: top;
      li {
        margin-bottom: 2rem;
        width: 100%;
      }
    }
    .active .navbar-lists {
      width: 280px;
      height: 100vh;
      visibility: visible;
      overflow: hidden;
      opacity: 1;
      transform: translateX(0);
      z-index: 200;
      transform-origin: left;
      transition: 0.4s ease-in-out;
      .navbar-link {
        font-size: 2.4rem;
      }
    }
    #menu-outline {
      position: absolute;
      z-index: 200;
      top: 0;
      left: 1.5rem;
      padding: 4rem 5rem 2rem 1rem;
    }
  }
`;
export const HeaderStyledWrap = styled.header`
  box-shadow: ${({ theme }) => theme.colors.shdnavbotm};
  margin-bottom: 1rem;
  padding-inline: 2.8rem;
  height: 10rem;
  background: ${({ theme }) => theme.colors.bgnav};
  position: relative;
  .logo {
    height: 9rem;
  }
  .site {
    max-width: 128rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    .logo {
      margin-left: 3.5rem;
      height: 8rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo {
      height: 10rem;
    }
  }
`;
export const FooterStyledWrap = styled.footer`
  .site {
    max-width: 128rem;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    margin-block: 1.5rem;
  }
  form {
    display: grid;
  }
  input {
    width: 90%;
    max-width: 30rem;
    margin: 1rem auto;
    padding: 1.3rem 2.6rem;
    border: 2px solid;
    border-radius: 1.5rem;
    text-align: center;
    justify-content: end;
    display: inline;
  }
  input[type="submit"] {
    width: 70%;
    margin-inline: auto;
  }
  .xtsmall {
    display: inline-block;
    font-weight: 400;
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
  }
  .container {
    min-width: 33%;
    padding: 0 2rem;
  }
  #item2 {
    border-inline: ${({ theme }) => theme.colors.bdrline2};
  }
  margin-top: auto;
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2.4rem;
    padding-inline: 10rem;
  }
  .footer-top {
    display: flex;
    gap: 2rem;
    margin-block: 3rem;
    padding-inline: 4rem;
    line-height: 2;
    color: ${({ theme }) => theme.colors.xtfoot2};
    font-size: 1.6rem;
    h3 {
      color: ${({ theme }) => theme.colors.xtblue};
    }
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;
    div {
      padding: 1rem;
      border-radius: 50%;
      border: ${({ theme }) => theme.colors.bdrline2};
      line-height: 0;
      .icons {
        color: ${({ theme }) => theme.colors.bgbtn};
        width: 3.2rem;
        height: 3.2rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer-bottom {
      flex-direction: column;
    }
    .footer-top {
      flex-direction: column;
      margin-top: 0;
      align-items: unset;
      padding: 1rem;
    }
  }
`;
export const ContactFormStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  margin-inline: auto;
  margin-block: 4rem;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.colors.bgform};
  border-radius: 20px;
  padding: 20px 60px 30px 40px;
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
  box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
  width: 90%;
  & .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .content .left-side {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
    line-height: 2.4rem;
  }
  .content .left-side::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.xtform3};
  }
  .content .left-side .details {
    margin: 14px;
    text-align: center;
  }
  .content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
  }
  .content .left-side .details .text-one,
  .content .left-side .details .text-two {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.xtform3};
  }
  & .content .right-side {
    width: 75%;
    margin-left: 75px;
  }
  .content .right-side .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.xtform2};
  }
  .right-side .input-box {
    height: 55px;
    width: 100%;
    margin: 12px 0;
  }
  .right-side .input-box input,
  .right-side .input-box textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.bginputbox2};
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
  }
  .right-side .message-box {
    min-height: 110px;
  }
  .right-side .input-box textarea {
    padding-top: 6px;
  }
  .right-side .button {
    display: inline-block;
    margin-top: 12px;
  }
  .right-side .button input[type="button"] {
    color: ${({ theme }) => theme.colors.boxoutshadow};
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.bgbtn};
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button input[type="button"]:hover {
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
    transform: scale(0.96);
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    & {
      width: 90%;
      padding: 30px 40px 40px 35px;
    }
    & .content .right-side {
      width: 75%;
      margin-left: 55px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & {
      margin-block: 40px;
      height: 100%;
    }
    & .content {
      flex-direction: column-reverse;
    }
    & .content .left-side {
      width: 100%;
      flex-direction: row;
      margin-top: 40px;
      justify-content: center;
      flex-wrap: wrap;
    }
    & .content .left-side::before {
      display: none;
    }
    & .content .right-side {
      width: 100%;
      margin-left: 0;
    }
  }
`;
export const LoanFormStyled = styled.div`
  margin-inline: auto;
  background: ${({ theme }) => theme.colors.bgform};
`;
export const EmiCalculatorStyled = styled.div`
  margin: 4rem auto;
  width: 100%;
  max-width: 40rem;
  .emicard {
    background-color: ${({ theme }) => theme.colors.bgform};
    padding: 2.4rem;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
    max-width: 400px;
    margin: 0 auto;
  }
  .emicard h2 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.xtform2};
  }
  .emicard .emi-input {
    margin-bottom: 10px;
  }
  .emicard label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
  }
  .emicard input {
    color: ${({ theme }) => theme.colors.xtform2};
    font-weight: 600;
    background: ${({ theme }) => theme.colors.bginputbox2};
    text-shadow: ${({ theme }) => theme.colors.shdbtnxt};
    font-size: 1.6rem;
    padding: 10px;
    width: 100%;
    border: ${({ theme }) => theme.colors.bdrline2};
    border-radius: 5px;
  }
  .emicard button {
    background-color: ${({ theme }) => theme.colors.bgbtn};
    color: ${({ theme }) => theme.colors.xtbtn};
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
  }
  .emicard button:hover {
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
    transform: scale(0.96);
  }
  .emicard .emi-result {
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.xtheading};
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 32rem;
  }
`;
export const InventoryStyled = styled.div`
  max-width: 128rem;
  width: 98%;
  display: flex;
  flex-direction: row;
  margin-inline: auto;
  margin-block: 2rem;
  .inv_Menu_List_OR_Grid {
    width: 90rem;
    .sorting-list--grid {
      margin: 0rem;
      width: 100%;
      max-width: 80rem;
      background: #fff;
    }
    .loading_bg {
      margin-top: 2rem;
      width: 100%;
      min-height: 100vh;
      max-width: 80rem;
      background: #fff;
    }
  }
  .all_inv_items {
    margin-inline: auto;
    display: grid;
    grid-template-columns: 30rem auto;
    column-gap: 3rem;
  }
  .btn_icon_iv {
    border: none;
    width: 4rem;
    height: 3.5rem;
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.colors.bgnav};
  }
  .icon {
    color: ${({ theme }) => theme.colors.bgbtn};
    width: 3.2rem;
    height: 3.2rem;
    position: relative;
    cursor: pointer;
  }
  .view_toggle {
    /* background: ${({ theme }) => theme.colors.bgbtn}; */
    background: #000;
    .icon {
      color: ${({ theme }) => theme.colors.bgnav};
    }
  }
  .filter_icon {
    display: none;
    margin-left: auto;
  }
  .sorting-list--grid {
    background: ${({ theme }) => theme.colors.bgnav};
    width: 100%;
    max-width: 80rem;
    padding: 0.8rem 3rem;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 2rem;
  }
  .list-view-items {
    width: 98%;
    display: flex;
    flex-wrap: wrap;
  }
  .close_filter_view {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .all_inv_items {
      display: block;
    }
    .filter_icon {
      display: inline;
      margin-left: auto;
    }
    .inv_veh_filter_menu {
      display: none;
    }
    .active_filters {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100vw;
      min-height: 100vh;
      overflow: scroll;
      z-index: 9999;
      background: #fff;
      .close_filter_view {
        display: block;
        margin: 4rem 3rem 0 0;
        text-align: end;
        right: 0;
        padding: 2rem;
        font-size: 2.4rem;
      }
    }
    .inv_Menu_List_OR_Grid {
      width: 90vw;
      min-height: 100vh;
    }
    .sorting-list--grid {
      margin-inline: auto;
    }
  }
`;
export const CardListStyled = styled.div`
  .info_data {
    font-size: 1.6rem;
    padding-left: 1rem;
    margin-block: 0.5rem;
    font-weight: bold;
  }
  .price_tag {
    font-size: 2.2rem;
    padding-left: 1rem;
    position: relative;
    top: -10px;
  }
  /* .info_data::before {
    content: "•";
    color: black;
    font-size: 2.5rem;
    display: inline-block;
    width: 1em;
  } */
  .compare {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.xtnav1};
    cursor: pointer;
  }
  .btn_xt {
    margin-top: 1rem;
    width: 18rem;
    height: 4rem;
    border-radius: 1rem;
    font-size: 2rem;
    text-align: center;
    padding-block: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.xtnav1};
    border: 3px solid ${({ theme }) => theme.colors.bgbtn};
    &:hover,
    &:active {
      box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
      transform: scale(0.96);
      background: ${({ theme }) => theme.colors.xtnav1};
      color: ${({ theme }) => theme.colors.bgnav};
    }
  }
  .centered-image {
    width: 100%;
    height: 100%;
  }
  .btn_con {
    margin: 1rem 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    bottom: -8px;
  }
  .info_text {
    /* display: grid;
    grid-gap: 1rem;
    grid-template-columns:  auto 1fr; */
  }
  .con_1 {
    margin-block: 2rem;
    margin-inline: auto;
    min-width: 80rem;
    width: 98%;
    border-radius: 2rem;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.bgnav};
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
  }
  .con_2 {
    display: flex;
    flex-direction: row;
  }
  .con_3 {
    width: 100%;
    height: 100%;
  }
  .info_con {
    margin-top: auto;
    display: grid;
    grid-template-columns: auto auto;
    margin-left: 2rem;
  }
  .img_con {
    width: 60%;
    aspect-ratio: 4/3;
    max-width: 400px;
    max-height: 20rem;
    /* border-top-right-radius: 2rem; */
    overflow: hidden;
    display: inline-block;
  }
  .price_info {
    /* margin-left: 1.2rem; */
    right: 0;
    color: ${({ theme }) => theme.colors.xtnav1};
    font-size: 1.4rem;
  }
  .con_title {
    color: ${({ theme }) => theme.colors.xtnav1};
    padding: 1.5rem 0 0 2.5rem;
    font-size: 2.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  hr {
    margin-top: 0.6rem;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    & {
      margin-inline: auto;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & {
      width: 39rem;
      height: 44rem;
      margin-inline: auto;
      margin-block: 1rem;
    }
    .con_1 {
      min-width: 100%;
    }
    .con_2 {
      flex-direction: column;
    }
    .con_3 {
      padding: 0 2rem 2rem 0;
    }
    .img_con {
      width: 100%;
    }
  }
`;
export const ProductFilterStyled = styled.div`
  min-width: 25rem;
  background: ${({ theme }) => theme.colors.bgnav};
  display: flex;
  flex-direction: column;
  .filter-title {
    color: ${({ theme }) => theme.colors.text};
    padding: 1.5rem 2.5rem;
    font-size: 3.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    & {
      width: 80%;
      margin-inline: auto;
    }
  }
`;
export const CardGridStyled = styled.div`
  & {
    width: 33%;
    min-width: auto;
    display: inline-block;
  }
  .price_info {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.xtnav1};
    font-size: 2rem;
  }
  .price_info_xt {
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.xtnav1};
    font-size: 2.4rem;
  }
  .btn_xt {
    width: 70%;
    height: 4rem;
    border-radius: 1rem;
    margin: 1rem auto;
    font-size: 2rem;
    text-align: center;
    padding-block: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.xtnav1};
    border: 3px solid ${({ theme }) => theme.colors.bgbtn};
    &:hover,
    &:active {
      box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
      transform: scale(0.96);
      background: ${({ theme }) => theme.colors.xtnav1};
      color: ${({ theme }) => theme.colors.bgnav};
    }
  }
  .con_title {
    /* color: ${({ theme }) => theme.colors.xtnav1}; */
    padding-top: 1rem;
    padding-left: 1rem;
    /* font-size: 1.5rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
  }
  .info_con {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* margin-top: 1rem; */
  }
  .price-com-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
  }
  .img_con {
    min-height: 21rem;
    width: 100%;
    aspect-ratio: 4/3;
  }
  .data_cont {
    height: 75%;
  }
  .centered-image {
    width: 100%;
    height: 100%;
  }
  .con_1 {
    border: 2px solid #fff;
    background: ${({ theme }) => theme.colors.bgnav};
    box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
    width: 95%;
    min-height: 38rem;
    margin: 1rem auto;
    min-width: 24rem;
    border-radius: 1.2rem;
    overflow: hidden;
  }
  .info_data {
    color: ${({ theme }) => theme.colors.xtfoot3};
    font-size: 1.4rem;
    padding-left: 1rem;
    margin-top: 1rem;
    /* font-weight: bold; */
  }
  .price_tag {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.4rem;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & {
      min-width: 32rem;
    }
  }
`;
export const AboutStyled = styled.div`
  width: 90%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgnav};
  margin: 2rem auto;
  line-height: 5rem;
  box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
  border-radius: 1.5rem;
  h1 {
    color: ${({ theme }) => theme.colors.xtblue};
  }
  h3 {
    color: ${({ theme }) => theme.colors.xtfoot2};
  }
`;
export const VisitStyled = styled.div`
  .con_1,
  .week_cont_2 {
    display: grid;
    width: 100%;
    padding: 2rem;
    grid-template-columns: 40% 60%;
    background: ${({ theme }) => theme.colors.bgnav};
  }
  .visit_us_cont_2 {
    color: ${({ theme }) => theme.colors.xtnav1};
    padding: 1.5rem 0 0 2.5rem;
    font-size: 2.4rem;
  }
  .map_con_3 {
    aspect-ratio: 4/3;
  }
  .map_visit_us {
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .con_1 {
      display: block;
    }
  }
`;
export const OverflowCardStyled = styled.div`
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border: 2px solid #fff;
  background: ${({ theme }) => theme.colors.bgnav};
  box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
  height: 40%;
  margin: 2rem;
  margin-top: 0;
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  &::-webkit-scrollbar {
    display: none;
  }
  .skeleton-container {
    flex-direction: column;
    margin: 2rem !important;
    max-width: 32rem;
    max-height: 30rem;
  }
  .firstt {
    margin-bottom: 1rem !important;
    width: 95% !important;
    height: 2.3rem;
  }
  .skeleton-image {
    width: 24rem !important;
    height: 26rem !important;
    margin: 0 !important;
  }
`;
export const ViewerVideoStyled = styled.div`
  display: block;
  .video-player {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    /* background-color: ${({ theme }) => theme.colors.bgformleft}; */
  }
  .video-element {
    margin-inline: auto;
    aspect-ratio: 16/9;
    object-fit: contain;
    min-width: 36rem;
    max-height: 36rem;
  }
  .video-navigation {
    opacity: 0.4;
    position: absolute;
    margin: 2rem;
    font-size: 5rem;
    border-radius: 50%;
    padding: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    display: inline;
    z-index: 100;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .video-navigation {
      margin-inline: auto;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 50%;
      padding: 0rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
export const ViewerImageStyled = styled.div`
  .bottom_btn {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 900;
    position: relative;
    top: -4rem;
    display: flex;
    padding-inline: 4rem;
    justify-content: space-between;
  }
  .image_gallary_container {
    height: 41rem;
    display: flex;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .viewer-image.fullscreen_viewer .image_gallary_container {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .viewer-image.fullscreen_viewer .image_gallary_container::-webkit-scrollbar {
    display: none;
  }
`;
export const SingleCarStyled = styled.div`
  & {
    background: ${({ theme }) => theme.colors.bgnav};
    max-width: 128rem;
    width: 95%;
    margin: auto;
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    margin: 0 10px !important;
    display: inline-block;
    border-top: 20px solid transparent !important;
    border-bottom: 20px solid transparent !important;
    content: "";
  }
  .carousel .control-next.control-arrow:before {
    border-left: 25px solid #fff !important;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 25px solid #fff !important;
  }
  .fullscreen_viewer {
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .image_gallary_container {
      height: 100%;
    }
  }
  .slide img.fullscreen_about_car {
    min-width: 70%;
    aspect-ratio: 4/3;
    max-height: 90%;
  }
  .video-navigation {
    opacity: 0.4;
    position: absolute;
    margin: 2rem;
    font-size: 5rem;
    border-radius: 50%;
    padding: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    display: inline;
    z-index: 100;
  }
  .chg_gall {
    opacity: 0.4;
    position: absolute;
    top: 12rem;
    z-index: 100;
    display: inline-flex;
    align-items: center;
    border-radius: 1rem;
    font-size: 2rem;
    justify-content: center;
    padding: 0.5rem;
    margin-left: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.xtnav1};
    border: 2px solid ${({ theme }) => theme.colors.bgbtn};
    background: ${({ theme }) => theme.colors.bgnav};
    &:hover,
    &:active {
      opacity: 0.8;
      box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
      transform: scale(0.96);
      background: ${({ theme }) => theme.colors.bgbtn};
      color: ${({ theme }) => theme.colors.bgnav};
    }
    &:content {
    }
  }
  .con_1 {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .con_2 {
    column-count: 2;
    column-gap: 3rem;
    margin: 2rem auto;
  }
  .con_3 {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .con_6 {
    margin: 3rem;
  }
  .map-cont {
    width: 100%;
    height: 24rem;
    margin: auto;
  }
  p {
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    font-weight: 600;
  }
  .about_car_img {
    height: 400px;
  }
  .title_spec {
    font-size: 2.4rem;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.bgbtn};
  }
  .spec-item {
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
  }
  .btn_xt {
    display: inline-flex;
    align-items: center;
    width: 27rem;
    height: 5rem;
    border-radius: 1rem;
    margin: 1rem auto;
    font-size: 2rem;
    justify-content: center;
    padding: 0.5rem 5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.xtnav1};
    border: 3px solid ${({ theme }) => theme.colors.bgbtn};
    &:hover,
    &:active {
      box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
      transform: scale(0.96);
      background: ${({ theme }) => theme.colors.xtnav1};
      color: ${({ theme }) => theme.colors.bgnav};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .con_1 {
      grid-template-columns: 100%;
    }
    .con_2 {
      column-count: 2;
      column-gap: 0rem;
    }
  }
`;
export const MultiSelectDropdownStyled = styled.div`
  .multi_select_filter {
    width: 90%;
    margin-inline: auto;
  }
  .filter_header {
    display: grid;
    grid-template-columns: 90% 10%;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    justify-content: center;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.xtnav1};
    border-top: ${({ theme }) => theme.colors.bdrbtn1};
  }
  .filter_content {
    margin-block: 1rem;
  }
  .options {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
  }
  .option {
    background: ${({ theme }) => theme.colors.xtnav2};
    color: ${({ theme }) => theme.colors.bgnav};
    display: inline;
    border-radius: 1rem;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1.2rem;
  }
  .filter_actions {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    button {
      padding-inline: 1rem;
      background: ${({ theme }) => theme.colors.xtfoot1};
      color: ${({ theme }) => theme.colors.bgnav};
    }
  }
  .selected {
    background: ${({ theme }) => theme.colors.bgbtn};
    color: ${({ theme }) => theme.colors.bgnav};
    font-size: 1.4rem;
    /* border: 3px solid ${({ theme }) => theme.colors.bgnav}; */
  }
`;
export const SkeletonLoadingStyled = styled.div`
  .skeleton-container {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
  }
  .skeleton-image {
    width: 40rem;
    height: 16rem;
    background-color: #f6f7f8;
    /* border-radius: 50%; */
    margin: 2rem;
    animation: skeleton-pulse 1s infinite ease-in-out;
  }
  .skeleton-lines {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    width: 100%;
  }
  .skeleton-line {
    width: 80%;
    height: 16px;
    background-color: #f6f7f8;
    margin-bottom: 8px;
    animation: skeleton-pulse 1s infinite ease-in-out;
  }
  .firstt {
    margin-bottom: 6rem;
    width: 100%;
    height: 2.3rem;
  }
  /* Animation */
  @keyframes skeleton-pulse {
    0% {
      background-color: #f6f7f8;
    }
    50% {
      background-color: #eaebed;
    }
    100% {
      background-color: #f6f7f8;
    }
  }
`;
export const SkeletonLoadPgStyled = styled.div`
  .skeleton-container {
    background: #fff;
    position: relative;
    width: 100%;
    margin: auto;
    padding: 2rem;
    min-height: 100vh;
    max-width: 120rem;
  }
  .skeleton-image {
    width: 90%;
    max-height: 30rem;
    margin: auto;
    aspect-ratio: 4/3;
    background-color: #f6f7f8;
    margin-bottom: 16px;
    animation: skeleton-pulse 1s infinite ease-in-out;
  }
  .skeleton-article {
    margin: 1rem 5rem;
    width: 85%;
    height: 12px;
    background-color: #f6f7f8;
    animation: skeleton-pulse 1s infinite ease-in-out;
  }
  .article_cont {
    column-count: 2;
    column-gap: 4rem;
  }
  .skeleton-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px dashed #007bff;
    border-width: 2px 0;
    animation: skeleton-rotate 2s infinite linear;
  }
  /* Animation */
  @keyframes skeleton-pulse {
    0% {
      background-color: #f6f7f8;
    }
    50% {
      background-color: #eaebed;
    }
    100% {
      background-color: #f6f7f8;
    }
  }
  @keyframes skeleton-rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
export const CarFormStyled = styled.div`
  .car-form-container {
    max-width: 600px;
    // margin-inline: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .car-form-container h2 {
    margin-bottom: 20px;
  }
  .car-form {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin-bottom: 10px;
    display: grid;
  }
  label {
    font-weight: bold;
    padding: 1rem;
  }
  input[type="text"],
  input[type="file"] {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button[type="submit"] {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  progress {
    display: block;
    width: 100%;
    margin-top: 5px;
  }
`;
// Styled Sidebar container
export const Sidebar = styled.div`
  // min-height: 80vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-right: 4rem;
`;
// Styled SidebarTab
export const SidebarTab = styled.div`
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#555" : "transparent")};
  border-radius: 5px;
`;
// Styled AdminPage
export const AdminPage = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  padding: 20px;
  .App {
    text-align: center;
    padding: 20px;
  }
  button {
    color: #4d5156;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 2rem;
  }
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    .cross-button {
      background-color: #007bff;
      color: white;
      display: inline;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 0.6rem;
      position: relative;
      left: 2rem;
      bottom: 9rem;
    }
  }
  .thumbnail {
    width: 150px;
    height: 100px;
    border: 1px solid #ccc;
    margin: 5px;
  }
  .update-form {
    margin-inline: auto;
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .update-form h2 {
    margin-bottom: 20px;
  }
  .update-form label {
    display: block;
    margin-bottom: 8px;
  }
  .update-form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .update-form button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .update-form button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .close-button {
    background-color: #ccc;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden; /* Prevent scrolling in overlay */
  }
  .overlay-content {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-height: 90%;
    width: 80%;
    overflow-y: auto;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
