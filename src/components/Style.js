import styled from "styled-components";

const StylePage = styled.div`
  $blue: #687bf7;
  $lightblue: #72d9ef;
  $cyan: #79e7eb;

  body {
    background: #1d1e21;
    font-size: 3.5vw;
    @media (min-width: 900px) {
      font-size: 2vw;
    }
  }

  display: flex;
  justify-content: space-evenly;
  section {
    height: 100vh;
    overflow-y: scroll;
    max-width: 274px;
    /* margin: 10vh auto 0; */
    background: whitesmoke;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    box-shadow: 4px 4px 50px rgba($blue, 0);
    transition: box-shadow 100ms linear;
    /* &:hover {
  box-shadow: 4px 4px 50px rgba($blue, 0.6);
 } */
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      /* display: flex; */
      align-items: center;
      cursor: move;
      line-height: 1;
      margin-bottom: 0.1em;
      border-radius: 5px;

      &.dropArea {
        color: white !important;
        background: white !important;
        position: relative;

        &::before {
          content: "Drop Here";
          color: $blue;
          font-size: 0.5em;
          text-transform: uppercase;
          width: 100%;
          height: 100%;
          border: 2px dashed $blue;
          border-radius: 3px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          display: none;
        }

        p {
          margin-left: 1em;
        }
      }

      /* &:hover {
   background: linear-gradient(to left, $blue, $lightblue);
   color: white;

   span {
    background-color: $cyan;
   }
  } */

      span {
        display: inline-block;
        margin-right: 1em;
        margin-left: 0.5em;
        background-color: $lightblue;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: black;
        font-weight: bold;
        transition: background-color 100ms linear;
      }

      p {
        transition: margin-left 50ms ease-in-out;
      }

      i {
        margin-left: auto;
        margin-right: 1em;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  .listCard {
    box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px -2px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    background: white;
    padding: 12px;
  }

  .card {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    background: #fff;
    box-shadow: 3px 1px 12px #0000001a;
    border-radius: 4px;
    margin-bottom: 15px;
    cursor: move;
  }
  .img img {
    width: 40px;
    height: 40px;
  }
  .status,
  .days,
  .time {
    font-size: 14px;
    margin-bottom: 7px;
  }
  .card_right {
    width: auto;
    float: left;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
  }
  .order .status {
    background: #fff1de;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }
  .done .status {
    background: #c8ebdd;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }
  .pending .status {
    background: #cfd8f0;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }
  .waiting .status {
    background: #eac8d7;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }
  .App {
    font-family: sans-serif;
    text-align: center;
    background: #fbfcfd;
    height: 100vh;
    padding: 40px 0px;
  }
  h4 {
    font-family: sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 0px;
    color: #416183;
  }
  .container {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
  }
  .drag_column {
    width: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    /* padding: 30px; */
  }
  .drag_row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .small-box {
    width: 306px;
    background: #f7f8fa;
    height: max-content;
  }

  .task {
    border: 1px solid white;
    margin: 10px;
    box-shadow: 1px 3px 10px gray;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    width: 900px;
  }
  .pending {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

export default StylePage;
