import React from 'react';
import ComponentExample from '../ComponentExample';
import { Table, Toggle, Popover, Whisper, Button, IconFont } from 'rsuite';
import PageContainer from '../PageContainer';

import fakeData from './data/users';
import fakeTreeData from './data/treeData';
import fakeDataForColSpan from './data/usersForColSpan';

const { HeaderCell, Pagination, Cell, Column } = Table;
const TablePagination = Pagination;

const context = require('./index.md');
const examples = [
  require('./FixedColumnTable.md'),
  require('./ResizableColumnTable.md'),
  require('./FluidColumnTable.md'),
  require('./WordWrapTable.md'),
  require('./CustomColumnTable.md'),
  require('./SortTable.md'),
  require('./PaginationTable.md'),
  require('./TreeTable.md'),
  require('./EditTable.md'),
  require('./LoadingTable.md'),
  require('./ColspanTable.md'),
  require('./props.md')
];

export default () => {
  return (
    <PageContainer>
      <ComponentExample
        dependencies={{
          Toggle,
          fakeData,
          fakeTreeData,
          fakeDataForColSpan,
          TablePagination,
          Popover,
          Whisper,
          IconFont,
          Table,
          Button,
          HeaderCell,
          Cell,
          Column
        }}
        context={context}
        examples={examples}
      />
    </PageContainer>
  );
};
