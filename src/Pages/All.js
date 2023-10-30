import React, { useState } from "react";
import Header from "../Components/Header";
import data from "../Map/Search";
// import data from "../TemplateData.json";

function All() {
  const [searchTerm, setSearchTerm] = useState("");
  const [carChosen, setCarChosen] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = (data) => {
    setCarChosen(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

      <div className="All-cars-container">
        <div className="searchInput_container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search car here...."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="Btns-1">
          <nav className="Btns-2">
            <ul className="Menu-1">
              <li>
                <button>Category</button>
                <ul className="sub-menu-1">
                  <li>Cars</li>
                  <li>Bus</li>
                  <li>Bikes</li>
                  <li>Ceiners</li>
                </ul>
              </li>
              <li>
                <button>Price</button>
                <ul className="sub-menu-1">
                  <li>5m-10m</li>
                  <li>10m-15m</li>
                  <li>15m-20m</li>
                  <li>20m-25m</li>
                </ul>
              </li>
              <li>
                <button>Brand</button>
                <ul className="sub-menu-1">
                  <li>Toyota</li>
                  <li>Mercedise-benz</li>
                  <li>Audi</li>
                  <li>Bmw</li>
                </ul>
              </li>
              <li>
                <button></button>
                <ul className="sub-menu-1">
                  <li>Berlin</li>
                  <li>Munich</li>
                  <li>Frankfurt</li>
                  <li>Dresden</li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {data.map((data) => (
          <div className="template_container">
            {currentItems
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <button
                      className="view-more-1"
                      onClick={() => openModal(data)}
                    >
                      View Details
                    </button>
                    <div className="title-container-1">
                      <h3>{val.title}</h3>
                    </div>
                    <div className="button-container-2">
                      <button>Foreign</button>
                      <button>20,528 Mlies</button>
                      <button>4 cylinders</button>
                    </div>

                    <div className="price-tag-1">
                      <p>{val.price}</p>
                    </div>
                    <div className="payment-container-1">Pay</div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="sim-box">
          <h1>{carChosen?.name}</h1>
          <img src={carChosen?.models[1].image} alt="" />
          
        </div>
      )}
    </>
  );
}

export default All;
