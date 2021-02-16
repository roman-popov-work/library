import React, { useMemo } from 'react';
import { Radio } from 'antd';
import { TITLE, PUBLICATION_YEAR } from '../../../constants/sortOrder';

export const BooksListSort = ({ sortOrder, setSortOrder }) => {
  const options = useMemo(() => ([
    {
      value: TITLE,
      label: 'По заголовку',
    },
    {
      value: PUBLICATION_YEAR,
      label: 'По году публикации',
    },
  ]), []);

  return (
    <Radio.Group
      options={options}
      onChange={setSortOrder}
      value={sortOrder}
      optionType="button"
      buttonStyle="solid"
    />
  );
};
