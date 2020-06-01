import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import TaskItem from "../TaskItem";
import {useStyles} from "./style";


const TaskList = props => {

    const classes = useStyles()

    const {tasks, status} = props;

    return (
        <Grid item md={4} xs={12} key={status.value}>
            <Box mt={2} mb={2}>
                <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
                {tasks.map(task => {
                    return <TaskItem task={task} status={status} key={task.id}/>;
                })}
            </div>
        </Grid>
    );
};

TaskList.propTypes = {};

export default TaskList;
