import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from '../dashboard/Card/Card'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    chartOne: {
        width: '100%',
        height: 300,
        marginBottom: '1%',
        marginTop: '1%'
    },
    chartTwo: {
        width: '44%',
        height: 300
    },
    chartThree: {
        width: '30%',
        height: 300
    },
    chartFour: {
        width: '23%',
        height: 300,
    }
}));

const Dashboard = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.chartOne}>
                <Card />
            </div>
           <div className={classes.chartTwo}>
                <Card />
            </div>
           <div className={classes.chartThree}>
                <Card />
            </div>
           <div className={classes.chartFour}>
                <Card />
            </div>

        </div>
    );
};

export default Dashboard;