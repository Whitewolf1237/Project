import React from 'react'
import RenderedTemp from './RenderedTemp'
import ProjectBody from './ProjectBody'

const Body = () => {
return (
    <div className='flex flex-wrap gap-3'>
        <ProjectBody />
        <RenderedTemp />
    </div>
)
}

export default Body