import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

Table.propTypes = {
  list: PropTypes.array,
};

Table.defaultProps = {
  list: [],
};


const HEADER_CELLS = [
  {
    title: '#',
  },
  {
    title: 'Name',
  },
  {
    title: 'Premier Date',
  },
  {
    title: 'Status',
  },
  {
    title: 'Genres',
  },
];

function Table({ list }) {

  const formatData = (show) => {
    const { genres, name, id, premiered, status } = show;

    return [genres, name, premiered, status, id];
  };

  const renderList = () => {

    const result = list.map( (item, index) => {
      const id = item && item.show && item.show.id

      return (<TableRow
        key={id}
        itemNum={ index }
        show={ formatData(item.show) }
      />);
    });

    return result;
  }

  return (
    <table id="showList" className="table table-striped">
      <TableHeader columnNames={ HEADER_CELLS } />

      <tbody>
      {
        renderList()
      }

      </tbody>
    </table>

  );
}

export default Table;
