import { ThemeProvider } from './src/context/ThemeContext';
import BottomNavigation from './src/navigation/BottomNavigation';

const App = () => {
    return (
        <ThemeProvider>
            <BottomNavigation />
        </ThemeProvider>
    );
};

export default App;