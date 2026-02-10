import { HelmetProvider } from 'react-helmet-async';
import MaintenancePage from './components/MaintenancePage';

function App() {
  return (
    <HelmetProvider>
      <MaintenancePage />
    </HelmetProvider>
  );
}

export default App;
