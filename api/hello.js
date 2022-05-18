contract = new ethers.Contract(address, ["function totalSupply() external view returns (uint256)"], provider)

If (tokenId > totalSupply) {
  totalSupply = await contract.totalSupply()
}

If (tokenId > totalSupply) {
  // give error 
} else {
  // give data
}
