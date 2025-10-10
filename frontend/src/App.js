
import './App.css';
import Main from './components/Main';
import { MessageProvider } from './components/alerts/MessageContext';

function App() {
  return (
    <MessageProvider>
      <div className="App">
        <Main />
      </div>
    </MessageProvider>
  );
}

export default App;
