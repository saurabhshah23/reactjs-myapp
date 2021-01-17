/**
 * LinkRoute is just any name for all the Link tags you will use throughout the app.
 * It is recommended to keep the styling and other stuff consistant.
 * All Link tags that are pointing to routes within this app should be improted from react-router-dom.
 * All Link tags that are pointing to an external public address should be improted from material-ui.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    linkWrapper: {
        margin: theme.spacing(2),
        display: "inline-block"
    }
}))

export const LinkRoute = props => {
    const classes = useStyles();
    return (
        <Link {...props} className={classes.linkWrapper} >
            {props.children}
        </Link>
    )
}

LinkRoute.propTypes = {
    to: PropTypes.string.isRequired
}
