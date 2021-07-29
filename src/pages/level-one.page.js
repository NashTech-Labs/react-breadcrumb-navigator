import React from "react";
import {Link} from "react-router-dom";

const LevelOnePage = () => (
    <div>
        <h1>Level One</h1>
        <Link to='/level-1/level-2'>Next</Link>
    </div>
)

export default LevelOnePage;
