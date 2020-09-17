import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router";

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

function TableRow(props) {
  const { show, itemNum, history } = props;

  const renderItem = (item, index) => {

    const indexText = (!index ? itemNum + 1 : item);

    const urlToOpen = `${ URL.MOVIES }${ show[4] }`;

    // <a> sdsdf </a>
    const link = index === 1 ? (
      <Link to={ urlToOpen }>{ indexText }</Link>
    ) : indexText;

    const goToLink = (e) => {
      console.log(e);
      history.push(urlToOpen); // в push передаем строку - URL, который должен открыться для пользователя
    }

    const button = (<Button onClick={ goToLink } variant="primary" size="sm"> view </Button>);

    return (
    <td key={ index }>
      { link }
      { index === 1 && button }
    </td>);
  }

  return (
    <tr>
      {
        show.map(renderItem)
      }
    </tr>
  );
}
// const withRouterComponent = withRouter(TableRow);
// export default withRouterComponent;
export default withRouter(TableRow);

/// HOC - higher order component = HOF - higher order function

// function withRouterCustom(UserComponent) {
//
//   /// ..... какая-то внутренняя магия, где мы получаем 3 переменных под
//   // названием history, location, match
//
//   const routerProps = {
//     history,
//     location,
//     match,
//   }
//
//   return function (props) {
//
//
//
//     return <UserComponent { ...props } { ...routerProps } />
//
//   }
//
// }
