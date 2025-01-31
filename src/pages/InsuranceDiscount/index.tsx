import React from 'react'

import ContentWrapper from '../../shared-components/contentWrapper'
import InsuranceDiscountList from '../../components/InsuranceDiscountList'

const InsuranceDiscount: React.FC = () => {
  return (
    <ContentWrapper title='بیمه شخص ثالث'>
      <InsuranceDiscountList />
    </ContentWrapper>
  )
}

export default InsuranceDiscount