import React from 'react'
import AdvantagesContainer from '../AdvantagesContainer'

const AdvantagesSection = React.forwardRef((_, ref) => {

  return (
    <section ref={ref} className='section'>
      <AdvantagesContainer />
    </section>
  )
})


export default AdvantagesSection;