import React from 'react';

const HomeThreeColumns = () => {
  return (
    <div className="three-columns">
      <ul>
      <li className="accomplishment">
        <div className="heading">
          <p className="number">10</p>
          <p className="info">oddanych worków</p>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor architecto sed laborum inventore, recusandae maiores exercitationem?
        </p>
      </li>
      <li className="accomplishment">
        <div className="heading">
          <p className="number">5</p>
          <p className="info">wspartych organizacji</p>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor architecto sed laborum inventore, recusandae maiores exercitationem?
        </p>
      </li>
      <li className="accomplishment">
        <div className="heading">
          <p className="number">7</p>
          <p className="info">zorganizowanych zbiórek</p>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor architecto sed laborum inventore, recusandae maiores exercitationem?
        </p>
      </li>
      </ul>
    </div>
  );
}

export default HomeThreeColumns;
