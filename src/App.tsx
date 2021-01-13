import React, { Fragment } from "react";
import { Hero } from "./components";

export const App: React.FC = () => {
    return (
        <Fragment>
            <Hero />
            {/* <AboutGari /> */}
            {/* <GariServices /> */}
        </Fragment>
    );
};

export default App;
