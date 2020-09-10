import React from 'react';
import PropTypes from 'prop-types';

TableHeader.propTypes = { // перечисляем пропсы и их формат
  columnNames: PropTypes.arrayOf( // описание формата данных для всего пропса - т.е. это массив чего-то
    PropTypes.shape( // мы указали, что каждый элемент массива должен быть объектом какой-то формы и далее мы описываем форму объекта
      // форма объекта - это перечень свойств внутри объекта
      {
        title: PropTypes.string, // поле с именем title в нем может быть только строка
        className: PropTypes.string,  // поле с именем className в нем может быть только строка
      })),
};

TableHeader.defaultProps = {
  columnNames: [],
}

//function TableHeader(props) {
// const { columnNames } = props;

function TableHeader({ columnNames }) {

  const renderItem = (item, index) => (
    <th key={ index } scope={ item.className || "col" }>{ item.title }</th>)

  return (
    <thead>
      <tr>
        {
          columnNames.map(renderItem)
        }
      </tr>
    </thead>
  );
}

export default TableHeader;
