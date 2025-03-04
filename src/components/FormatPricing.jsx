import React from 'react'

const FormatPricing = ({price}) => {
  return Intl.NumberFormat("ur-PK",{
    style:'currency',
    currency:'PKR',
    maximumFractionDiggits:'2',
  }).format(price);
}

export default FormatPricing
