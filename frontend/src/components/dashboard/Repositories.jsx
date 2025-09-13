import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import { 
  RepositoriesTabWrapper,
  RepositoriesToolbar,
  ToolbarLeft,
  RepositoriesTabTitle,
  SearchContainer,
  AddRepoButton,
  RepoGrid,
  RepoCard,
  RepoHeader,
  RepoDescription,
  RepoMeta,
  RepoStats,
  StatItem,
  LanguageDot,
  EmptyState
 } from './styles/DashboardBody.styles';

// Language colors mapping
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  React: '#61dafb',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95'
};

// Mock repository data (replace with real data from API)
const mockRepositories = [
  {
    id: 1,
    name: 'awesome-project',
    description: 'A comprehensive web application built with React and Node.js featuring modern UI components and real-time functionality.',
    language: 'JavaScript',
    stars: 245,
    forks: 32,
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    name: 'data-analysis-toolkit',
    description: 'Python toolkit for data analysis with machine learning capabilities and visualization tools.',
    language: 'Python',
    stars: 128,
    forks: 18,
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    name: 'mobile-app-backend',
    description: 'RESTful API backend service for mobile applications with authentication and database integration.',
    language: 'Java',
    stars: 89,
    forks: 24,
    lastUpdated: '3 days ago'
  }
];

function Repositories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [repositories] = useState(mockRepositories);
  
  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <RepositoriesTabWrapper>
      <RepositoriesToolbar>
        <ToolbarLeft>
          <RepositoriesTabTitle>Repositories</RepositoriesTabTitle>
          <SearchContainer>
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </ToolbarLeft>
        
        <AddRepoButton>
          <AddIcon className="add-icon" />
          Add Repository
        </AddRepoButton>
      </RepositoriesToolbar>
      
      {filteredRepos.length > 0 ? (
        <RepoGrid>
          {filteredRepos.map(repo => (
            <RepoCard key={repo.id}>
              <RepoHeader>
                <h3>
                  <FolderIcon style={{ fontSize: '20px', color: '#5B86FF' }} />
                  {repo.name}
                </h3>
              </RepoHeader>
              
              <RepoDescription>
                {repo.description}
              </RepoDescription>
              
              <RepoMeta>
                <RepoStats>
                  <StatItem>
                    <LanguageDot color={languageColors[repo.language]} />
                    {repo.language}
                  </StatItem>
                  
                  <StatItem>
                    <StarIcon className="icon" />
                    {repo.stars}
                  </StatItem>
                  
                  <StatItem>
                    <ForkRightIcon className="icon" />
                    {repo.forks}
                  </StatItem>
                </RepoStats>
                
                <StatItem>
                  <AccessTimeIcon className="icon" />
                  {repo.lastUpdated}
                </StatItem>
              </RepoMeta>
            </RepoCard>
          ))}
        </RepoGrid>
      ) : (
        <EmptyState>
          <FolderOpenIcon className="empty-icon" />
          <h3>No repositories found</h3>
          <p>
            {searchTerm 
              ? `No repositories match "${searchTerm}". Try adjusting your search terms.`
              : 'Get started by adding your first repository to begin using cleanPR for automated code reviews.'
            }
          </p>
        </EmptyState>
      )}
    </RepositoriesTabWrapper>
  );
}

export default Repositories
