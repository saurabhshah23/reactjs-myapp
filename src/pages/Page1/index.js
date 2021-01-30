import React from 'react'
import { ROOT } from 'navigation/CONSTANTS'
import { Typography } from '@material-ui/core'
import {Link } from 'react-router-dom'
import { Math } from './Math'

export const Page1 = () => {
    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <Typography variant="h2">Page 1</Typography>
            <Math />
        </div>
    )
}
