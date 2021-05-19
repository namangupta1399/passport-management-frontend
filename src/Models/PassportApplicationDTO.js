class PassportApplicationDTO {
  constructor(
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    placeOfBirth,
    maritalStatus,
    isIndian,
    employmentType,
    educationalQualification,
    address,
    documents,
    applicationStatus,
    user
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.maritalStatus = maritalStatus;
    this.isIndian = isIndian;
    this.employmentType = employmentType;
    this.educationalQualification = educationalQualification;
    this.address = address;
    this.documents = [...documents];
    this.applicationStatus = applicationStatus;
    this.user = user;
  }
}

export default PassportApplicationDTO;
