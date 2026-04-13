import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 max-w-2xl">{title}</h2>
        <p className="text-slate-600 max-w-lg">{description}</p>
    </div>
  )
}

export default Title