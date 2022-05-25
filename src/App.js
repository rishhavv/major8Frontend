import "./App.css";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Drawer, Button } from "antd";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { Typography } from "antd";
import { DrawerNavigator } from "./components/DrawerNavigator";
import Footer from "./components/Footer";

const { Title } = Typography;

const styles = {
  navigator: {
    flex: 1,
  },
  home: {
    flex: 4,
  },
};

function App() {
  return (
    <div id="App">
      <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#ffffff",
            color: "#3A4374",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#1913AE",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
