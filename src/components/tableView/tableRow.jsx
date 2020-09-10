import React from 'react';
import PropTypes from 'prop-types';

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
