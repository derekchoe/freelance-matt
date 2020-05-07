import React, {useState} from "react";
import View from "./style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../index.css";
import { ThemeProvider } from "emotion-theming";
import variables from "../../src/utils/theme";

import Nav from "../components/nav";
import Modal from "../components/modal"
import Home from "../containers/home";
import About from "../containers/about";
import Footer from '../components/footer'

const darkModeColor = {
    background: "#22222b",
    header: "#f7f8fd",
    grey: "#C9CBD0",
    border: "#2b2b37",
    tag: "rgb(255,146,33)",
    white: "#f7f8fd",
    boxShadow: "#1e1e23",
    selected: "#22222b",
};

const lightModeColor = {
    background: "rgb(247,248,253)",
    header: "rgb(34,34,43)",
    grey: "#5E5E6B",
    border: "#ebecf5",
    tag: "#5e5e6b",
    white: "#f7f8fd",
    boxShadow: "rgba(64, 61, 64, 0.84)",
    selected: "#ebecf5",
};

function App() {
    const [darkMode, setDarkMode] = useState(true)
    const [isOpen, handleOpen] = useState(false)
    const color = darkMode ? darkModeColor : lightModeColor

    return (
        <ThemeProvider theme={{ ...variables, color, darkMode }}>
            <View>
                <Router>
                    <Nav
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                    />
                    {isOpen && (
                        <Modal
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                            handleOpen={handleOpen}
                        />
                    )}
                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                    <Footer darkMode={darkMode} />
                </Router>
            </View>
        </ThemeProvider>
    );
}

export default App;
