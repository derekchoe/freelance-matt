import React, {useState} from "react";
import View from "./style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../index.css";
import { ThemeProvider } from "emotion-theming";
import {variables, darkModeColor, lightModeColor} from "../../src/utils/theme";

import Nav from "../components/nav";
import Modal from "../components/modal"
import Home from "../containers/home";
import About from "../containers/about";
import Projects from "../containers/projects";
import Footer from '../components/footer'

function App() {
    const [darkMode, setDarkMode] = useState(false)
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
                        <Route path='/projects'>
                            <Projects darkMode={darkMode}/>
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
