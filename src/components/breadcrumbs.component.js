import React from 'react';
import { Link } from 'react-router-dom';
import classes from './breadcrumbs.module.css'

const Breadcrumbs = ({crumbs}) => {
    return (
        <div>
            {crumbs.map(({ name, path }, key) => {
                 if (key + 1 === crumbs.length) {
                    return (
                        <span key={name}>
                            {name}
                        </span>
                    );
                } else {
                    return (
                        <span key={name}>
                            <Link to={path} className={classes.pageLink}>
                                {name}
                            </Link>
                            <span className={classes.divider}>/</span>
                        </span>
                    );
                }
            })}
        </div>
    )
}

export default Breadcrumbs
