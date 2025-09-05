import { Text } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import BottomNavigation from './src/navigation/BottomNavigation';
import './global.css';

const App = () => {
    return (
        <ThemeProvider>
            <BottomNavigation />
        </ThemeProvider>
    );
};

export default App;