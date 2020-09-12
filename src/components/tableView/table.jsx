import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Spinner from '../spinner';

Table.propTypes = {
  list: PropTypes.array,
  isLoading: PropTypes.bool,
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

function Table({ list, isLoading }) {

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

  const renderSpinner = () => {

    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px"
    };

    return (<tr>
      <td colSpan={5} style={{backgroundColor: "white !important"}}>
        <div style={style}>
          <Spinner />
        </div>
      </td>
    </tr>);
  }

  return (
    <table id="showList" className="table table-striped">
      <TableHeader columnNames={ HEADER_CELLS } />

      <tbody>
      {
        isLoading ? renderSpinner() : renderList()
      }

      </tbody>
    </table>

  );
}

export default Table;
