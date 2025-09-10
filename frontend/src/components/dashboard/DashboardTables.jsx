import React, { useState } from 'react';
import {
  TableSwitchWrapper,
  TableSwitchButton,
  TableList,
  TableListItem
} from './DashboardTables.styles';

// Dummy data for demonstration
const repositories = [
  { id: 1, name: 'cleanpr-frontend', url: '#' },
  { id: 2, name: 'cleanpr-backend', url: '#' },
  { id: 3, name: 'awesome-lib', url: '#' },
];

const reviewedPRs = [
  { id: 1, title: 'Fix login bug', url: '#' },
  { id: 2, title: 'Improve dashboard UI', url: '#' },
  { id: 3, title: 'Refactor API layer', url: '#' },
];

export default function DashboardTables() {
  const [activeTable, setActiveTable] = useState('repositories');

  return (
    <>
      <TableSwitchWrapper>
        <TableSwitchButton
          active={activeTable === 'repositories'}
          onClick={() => setActiveTable('repositories')}
        >
          Repositories
        </TableSwitchButton>
        <TableSwitchButton
          active={activeTable === 'reviewed'}
          onClick={() => setActiveTable('reviewed')}
        >
          Reviewed Pull Requests
        </TableSwitchButton>
      </TableSwitchWrapper>
      <div style={{ marginTop: '2rem' }}>
        <TableList>
          {activeTable === 'repositories' && repositories.map(repo => (
            <TableListItem key={repo.id}>
              {repo.name}
            </TableListItem>
          ))}
          {activeTable === 'reviewed' && reviewedPRs.map(pr => (
            <TableListItem key={pr.id}>
              {pr.title}
            </TableListItem>
          ))}
        </TableList>
      </div>
    </>
  );
}
