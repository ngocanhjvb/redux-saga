import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import TaskBoard from './TaskBoard';
import theme from "../../common/Theme";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <TaskBoard/>
        </ThemeProvider>
    );
}

export default App;
