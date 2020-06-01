import React, {useState} from 'react'
import {useStyles} from "./style";
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import TaskForm from "../TaskForm";
import {STATUSES} from "../../../constants";
import Grid from '@material-ui/core/Grid';
import TaskList from "../TaskList";


const listTask = [
    {
        id: 1,
        title: 'Read book',
        description: 'Read material ui book',
        status: 0,
    },
    {
        id: 2,
        title: 'Play football',
        description: 'With my friend',
        status: 2,
    },
    {
        id: 3,
        title: 'Play game',
        description: '',
        status: 1,
    },
];


function TaskBoard(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false)


    const handleClose = () => {
        setOpen(false)
    };

    const openForm = () => {
        setOpen(true)
    }

    const renderForm = () => {
        let xhtml = null;
        xhtml = <TaskForm open={open} onClose={handleClose}/>;
        return xhtml;
    }

    const renderBoard = () => {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map(status => {
                    const taskFiltered = listTask.filter(
                        task => task.status === status.value,
                    );
                    return (
                        <TaskList key={status.value} tasks={taskFiltered} status={status}/>
                    );
                })}
            </Grid>
        );
        return xhtml;
    }

    return (
        <div className={classes.taskBoard}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={openForm}
            >
                <AddIcon/> Thêm mới công việc
            </Button>
            {renderBoard()}
            {renderForm()}
        </div>
    )
}

TaskBoard.propTypes = {}

export default TaskBoard

