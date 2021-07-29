import React from "react";
import {Link} from "react-router-dom";

const LevelTwoPage = () => (
    <div>
        <h1>Level Two</h1>
        <Link to='/level-1/level-2/level-3'>Next</Link>
    </div>
)

export default LevelTwoPage;
