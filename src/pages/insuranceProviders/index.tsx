import React from 'react'

import InsuranceProvidersList from '../../components/InsuranceProvidersList'
import ContentWrapper from '../../shared-components/contentWrapper'

const InsuranceProviders: React.FC = () => {
  return (
    <ContentWrapper title='بیمه شخص ثالث'>
      <InsuranceProvidersList />
    </ContentWrapper>
  )
}

export default InsuranceProviders