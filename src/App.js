import { ColorModeContent, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/Topbar";



const App = () => {

  const[theme, colorMode] = useMode();

  return (
    <ColorModeContent.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
            <main className="content">
              <TopBar/>
            </main>
          </div>
        </ThemeProvider>
    </ColorModeContent.Provider>
  );
}

export default App;
