import React, {useState} from "react";
import View from "./style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../index.css";
import { ThemeProvider } from "emotion-theming";
import variables from "../../src/utils/theme";

import Nav from "../components/nav";
import Home from "../containers/home";
import About from "../containers/about";
import Footer from '../components/footer'

const darkModeColor = {
    background: "rgb(34,34,43)",
    black: "rgb(247,248,253)",
    grey: "#5E5E6B",
    lightGrey: "#a4a4aa",
    border: "rgb(239,240,244)",
    orange: "rgb(255,146,33)",
    white: "#f7f8fd",
};

const lightModeColor = {
    background: "rgb(247,248,253)",
    black: "rgb(34,34,43)",
    grey: "#5E5E6B",
    lightGrey: "#a4a4aa",
    border: "rgb(239,240,244)",
    orange: "rgb(255,146,33)",
    white: "#f7f8fd",
}

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const color = darkMode ? darkModeColor : lightModeColor

    return (
        <ThemeProvider theme={{...variables, color }}>
            <View>
                <Router>
                    <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                    <Footer darkMode={darkMode}/>
                </Router>
            </View>
        </ThemeProvider>
    );
}

export default App;
