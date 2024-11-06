import React from 'react'
import MembershipContainer from '../MembershipContainer'

const MembershipSection = React.forwardRef((_, ref) => {

  return (
    <section ref={ref} className='section'>
      <MembershipContainer />
    </section>
  )
})

export default MembershipSection;
