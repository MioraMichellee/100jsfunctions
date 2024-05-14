function getBusinessAddress(business) {
    return business.address.street+", "+"number "+business.address.number+", "+business.address.zipCode;
    
}
export{getBusinessAddress}