import React from 'react'

export default function ComplexSharedView(props) {
    const {data} = props;
    return (
        <div>
            I am a {data}!
        </div>
    )
}
