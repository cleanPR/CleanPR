import styled from "styled-components";

const colors = {
  primary: '#0A0F1C',
  surface: '#151b2d',
  surfaceHover: '#23283a',
  accent: '#5B86FF',
  accentSecondary: '#00E5A5',
  text: '#F5F7FA',
  textSecondary: '#8B8B8B'
};

// Repository tab styles
export const RepositoriesTabWrapper = styled.div`
    width: 100%;
    padding: 24px;
    height: 100%;
    overflow-y: auto;
`

export const RepositoriesToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 16px;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`

export const ToolbarLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
`

export const RepositoriesTabTitle = styled.h1`
    color: ${colors.text};
    font-family: 'Inter', monospace;
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, ${colors.text} 0%, ${colors.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const SearchContainer = styled.div`
    position: relative;
    flex: 1;
    max-width: 400px;
    
    input {
        width: 100%;
        padding: 12px 16px 12px 44px;
        background: ${colors.surfaceHover};
        border: 1px solid transparent;
        border-radius: 12px;
        color: ${colors.text};
        font-family: 'Inter', monospace;
        font-size: 14px;
        transition: all 0.2s ease-in-out;
        
        &:focus {
            outline: none;
            border-color: ${colors.accent};
            box-shadow: 0 0 0 3px rgba(91, 134, 255, 0.1);
        }
        
        &::placeholder {
            color: ${colors.textSecondary};
        }
    }
    
    .search-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: ${colors.textSecondary};
        font-size: 20px;
    }
`

export const AddRepoButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentSecondary} 100%);
    border: none;
    border-radius: 12px;
    color: white;
    font-family: 'Inter', monospace;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(91, 134, 255, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    .add-icon {
        font-size: 18px;
    }
`

export const RepoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-top: 24px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const RepoCard = styled.div`
    background: linear-gradient(135deg, ${colors.surface} 0%, ${colors.surfaceHover} 100%);
    border: 1px solid rgba(91, 134, 255, 0.1);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(91, 134, 255, 0.3);
        box-shadow: 0 8px 32px rgba(91, 134, 255, 0.15);
    }
`

export const RepoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    
    h3 {
        color: ${colors.text};
        font-family: 'Inter', monospace;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const RepoDescription = styled.p`
    color: ${colors.textSecondary};
    font-family: 'Inter', monospace;
    font-size: 14px;
    line-height: 1.4;
    margin: 0 0 16px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const RepoMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
`

export const RepoStats = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${colors.textSecondary};
    font-family: 'Inter', monospace;
    font-size: 12px;
    
    .icon {
        font-size: 14px;
    }
`

export const LanguageDot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color || colors.accent};
`

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: ${colors.textSecondary};
    text-align: center;
    
    .empty-icon {
        font-size: 64px;
        margin-bottom: 16px;
        opacity: 0.5;
    }
    
    h3 {
        color: ${colors.text};
        font-family: 'Inter', monospace;
        font-size: 20px;
        margin: 0 0 8px 0;
    }
    
    p {
        font-family: 'Inter', monospace;
        font-size: 14px;
        margin: 0;
        max-width: 400px;
        line-height: 1.4;
    }
`

export const PullRequestTabWrapper = styled.div`
    width: 100%;
    padding: 24px;
    height: 100%;
    overflow-y: auto;
`


