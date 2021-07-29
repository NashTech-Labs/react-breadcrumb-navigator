import React from 'react';
import Breadcrumbs from "../components/breadcrumbs.component";
import classes from './layout.module.css'

class LayoutComponent extends React.Component {
    render() {
        return (
            <div className={classes.layoutContainer}>
                <div className={classes.layoutCard}>
                    {this.props.crumbs ?
                        <Breadcrumbs crumbs={this.props.crumbs}/>
                        : null
                    }
                {this.props.children}
                </div>
            </div>
        )
    }
}

export default LayoutComponent
