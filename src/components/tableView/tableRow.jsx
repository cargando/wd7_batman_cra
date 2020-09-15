import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import * as URL from "../../router/url";

TableRow.propTypes = { // перечисляем пропсы и их формат
  show: PropTypes.array,
  itemNum: PropTypes.number,
};

TableRow.defaultProps = {
  columnNames: [],
}

//function TableHeader(props) {
// const { columnNames } = props;

function TableRow({ show, itemNum }) {

  const renderItem = (item, index) => {
    // <Link to={URL.MOVIES}>страница со списком фильмов</Link>

    return (
    <td key={ index }>{ !index ? itemNum + 1 : item }</td>)
  }

  return (
    <tr>
      {
        show.map(renderItem)
      }
    </tr>
  );
}

export default TableRow;
