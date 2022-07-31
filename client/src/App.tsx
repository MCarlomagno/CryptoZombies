
import './App.css';
import { useMetamask } from './hooks/metamask'

function App() {
  const { connect } = useMetamask();

  return (
  <>
    <label>
      Name
      <input type="text" name="name" />
    </label>
    <button type="submit" onClick={connect}>test</button>
  </>
  );
}

export default App;
