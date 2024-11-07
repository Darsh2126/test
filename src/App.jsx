import {ThemeProvider} from '@mui/material';
import { theme } from './utils/mui/theme';
import AppLayout from './layouts';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
