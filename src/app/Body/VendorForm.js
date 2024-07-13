import React from 'react'
import BusinessDetailCard from './BusinessDetails'
import SupplyLocation from './SupplyLocation'
import AccountDetails from './AccountsDetails'
import MSMECard from './MSMEDetails'
const VendorForm = ({addAttachment}) => {
  return (
    <div>
        <BusinessDetailCard handleAddAttachment={addAttachment} />
        <MSMECard handleAddAttachment={addAttachment}/>
        <SupplyLocation />
        <AccountDetails handleAddAttachment={addAttachment}/>
    </div>
  )
}

export default VendorForm
