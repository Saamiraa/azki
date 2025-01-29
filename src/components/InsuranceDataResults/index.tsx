import React from 'react'
import Modal from '../InsuranceDiscountList/components/modal'

interface InsuranceDataResultsProps {
  onClose: () => void
}

const InsuranceDataResults: React.FC<InsuranceDataResultsProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      {<p>test</p>}
    </Modal>
  )
}

export default InsuranceDataResults