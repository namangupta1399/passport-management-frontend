class HelpdeskDTO {
  constructor(
    helpdeskId,
    query,
    solution,
    isResolved,
    createdOn,
    updatedOn,
    user
  ) {
    this.helpdeskId = helpdeskId;
    this.query = query;
    this.solution = solution;
    this.isResolved = isResolved;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.user = user;
  }
}

export default HelpdeskDTO;
