import React, { useState } from "react";
import Header from "../Components/Header";
import data from "../Map/Search";

function New() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [showModal, setshowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goPrevious = () => {
    setCurrentPage(currentPage - 1);
    paginate(currentPage - 1);
  };

  const goNext = () => {
    setCurrentPage(currentPage + 1);
    paginate(currentPage + 1);
  };

  return (
    <>
      <Header />
      <div className="dashboard"></div>
      <nav className="new-navbar">
        <input
          type="text"
          placeholder="Search for Vehicle here........"
          className="serch-btn"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </nav>
      <div className="Recommended-container">
        <h2>Recommended</h2>
        <div className="Recommended_btns">
          <button>
            <p>All</p>
          </button>
          <button>
            <p>Bmw</p>
          </button>
          <button>
            <p>Lexus</p>
          </button>
          <button>
            <p>Mercedes-Benz</p>
          </button>
          <button>
            <p>Toyota</p>
          </button>
          <button>
            <p>Ford</p>
          </button>
        </div>
      </div>

      <div className="All-car-container">
        <div className="All-car-wrapper">
          <div className="All-car-box">
            <div className="All-car-image-container">
              <img
                className="All-car-image"
                src={require("../Images/Bmw.jpg")}
                alt=""
              />
              <button className="All-car-view_btn">View Details</button>
            </div>
            <div className="All-car-name-container">
                <p>Mercedes</p>
                <div className="rnd-btn_container">
                <button>Foreign</button>
                <button>20,568 Mlies</button>
                <button>4 cylinders</button>
            </div>
            </div>
          
          </div>

          <div className="All-car-box">
            <div className="All-car-image-container">
              <img
                className="All-car-image"
                src={require("../Images/Bmw.jpg")}
                alt=""
              />
              <button className="All-car-view_btn">View Details</button>
            </div>
            <div className="All-car-name-container">
                <p>Mercedes</p>
                <div className="rnd-btn_container">
                <button>Foreign</button>
                <button>20,568 Mlies</button>
                <button>4 cylinders</button>
            </div>
            </div>
          
          </div>

          <div className="All-car-box">
            <div className="All-car-image-container">
              <img
                className="All-car-image"
                src={require("../Images/Bmw.jpg")}
                alt=""
              />
              <button className="All-car-view_btn">View Details</button>
            </div>
            <div className="All-car-name-container">
                <p>Mercedes</p>
                <div className="rnd-btn_container">
                <button>Foreign</button>
                <button>20,568 Mlies</button>
                <button>4 cylinders</button>
            </div>
            </div>
          
          </div>

          <div className="All-car-box">
            <div className="All-car-image-container">
              <img
                className="All-car-image"
                src={require("../Images/Bmw.jpg")}
                alt=""
              />
              <button className="All-car-view_btn">View Details</button>
            </div>
            <div className="All-car-name-container">
                <p>Mercedes</p>
                <div className="rnd-btn_container">
                <button>Foreign</button>
                <button>20,568 Mlies</button>
                <button>4 cylinders</button>
            </div>
            </div>
          
          </div>
          
        </div>
      </div>
    </>
  );
}

export default New;
