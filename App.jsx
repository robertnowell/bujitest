
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPopUp1 from "./components/SignUpPopUp1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-pop-up-1)">
          <SignUpPopUp1 {...signUpPopUp1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x2OutlinedcFocusedData = {
    inputText: "First Name",
    label2: "First Name *",
};

const x2OutlinedcFocused2Data = {
    inputText: "Last Name",
    label2: "Last Name *",
};

const x2OutlinedcFocused3Data = {
    inputText: "Pick a Username",
    label2: "Username *",
    className: "x2-outlinedc-focused-1",
};

const x2OutlinedcFocused32Data = {
    inputText: "Choose Password",
    label2: "Password *",
    assistiveText: "Password must contain at least 8 characters",
};

const x2OutlinedcFocused4Data = {
    inputText: "Re-enter Password",
    label2: "Confirm Password *",
    className: "x2-outlinedc-focused-2",
};

const x2OutlinedcFocused42Data = {
    inputText: "(XXX) XXX - XXX",
    label2: "Phone Number *",
    assistiveText: "We will send you a code to verify!",
};

const x3ContainedATextData = {
    children: "Next",
};

const signUpPopUp1Data = {
    text1: "*",
    text2: "Indicates Required Field",
    x2OutlinedcFocusedProps: x2OutlinedcFocusedData,
    x2OutlinedcFocused2Props: x2OutlinedcFocused2Data,
    x2OutlinedcFocused2Props2: x2OutlinedcFocused3Data,
    x2OutlinedcFocused3Props: x2OutlinedcFocused32Data,
    x2OutlinedcFocused3Props2: x2OutlinedcFocused4Data,
    x2OutlinedcFocused4Props: x2OutlinedcFocused42Data,
    x3ContainedATextProps: x3ContainedATextData,
};

