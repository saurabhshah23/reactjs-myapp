import React from 'react'
import PropTypes from 'prop-types'
import { LanguageSelection } from './components/LanguageSelection'

const HomeView = props => {
    return (
        <div>
            HomeView {props.title}
            <LanguageSelection />
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
