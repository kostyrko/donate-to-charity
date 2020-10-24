import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { organizations } from "./orgData";

const HomeOrganizations = () => {
  const [option, setOption] = useState("foundation");

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(
    Object.keys(organizations[option]).length / PER_PAGE
  );
  
  // const [currentPageData, setCurrentPageData] = useState()
  const currentPageData = Object.keys(organizations[option])
    .slice(offset, offset + PER_PAGE)
    .map((elem) => {
      const { name, additionalInfo, desc } = organizations[option][elem];
      return (
        <li key={elem}>
          <div className="header">
            <h5>{name}</h5>
            <p className="info">{additionalInfo}</p>
          </div>
          <p className="org-desc">{desc}</p>
        </li>
      );
    });

  const handleClick = (e) => {
    // console.log(typeof(e.target.name));
    setOption(e.target.name);
    setCurrentPage(0)
  };

  return (
    <section id="organizations" className="organizations">
      <div className="container">
        <h4>Komu pomagam?</h4>
        <div className="decoration"></div>

        <div className="org-options">
          <button
            // className="org"
            name="foundation"
            onClick={(e) => handleClick(e)}
            className={option === "foundation" ? "active" : "non-active"}
          >
            Fundacjom
          </button>
          <button
            // className="org"
            name="ngo"
            onClick={(e) => handleClick(e)}
            className={option === "ngo" ? "active" : "non-active"}
          >
            Organizacjom pozarządowym
          </button>
          <button
            // className="org"
            name="local"
            onClick={(e) => handleClick(e)}
            className={option === "local" ? "active" : "non-active"}
          >
            Lokalnym zbiórkom
          </button>
        </div>

        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          sint esse dolorum sit unde voluptatibus praesentium. Ipsam inventore
          veniam explicabo? Impedit officiis dolore officia nam.
        </div>

        <ul className="org-list">{currentPageData}</ul>
        <ReactPaginate
          previousLabel={null}
          nextLabel={null}
          pageCount={pageCount>1 ? pageCount : null}
          forcePage={currentPage}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />

      </div>
    </section>
  );
};

export default HomeOrganizations;


// https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e

// https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js