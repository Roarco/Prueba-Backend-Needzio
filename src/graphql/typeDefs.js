const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime
  type TypeDocument_TB {
    id: ID!
    NameTypeDocument: String!
  }
  type AppUser_TB {
    id: ID!
    LastName: String!
    Name: String!
    isMilitar: Boolean
    TimeCreate: DateTime
    isTemporal: Boolean
    userName: String!
    password: String!
    email: String!
    emailVerified: Boolean
    verificationToken: String
    contactInfo: ContactInfo_TB
    identification: UserDocument_TB
  }
  type Country_TB {
    id: ID!
    CountryCode: String!
    CountryName: String!
  }
  type UserDocument_TB {
    id: ID!
    UserID: ID!
    Document: String!
    TypeDocumentID: ID!
    PlaceExpedition: String!
    DateExpedition: DateTime!
    typeDocument: TypeDocument_TB
    user: AppUser_TB
  }
  type ContactInfo_TB {
    id: ID!
    UserID: ID!
    Address: String!
    CountryID: ID!
    City: String!
    Phone: String!
    CelPhone: String!
    EmergencyName: String!
    EmergencyPhone: String!
    country: Country_TB
    user: AppUser_TB
  }

  type loginResponse {
    token: String!
  }

  type Query {
    getAllTypeDocument_TB: [TypeDocument_TB!]!
    getAllCountry_TB: [Country_TB!]!
    getAllAppUser_TB: [AppUser_TB!]!
    getAllUserDocument_TB: [UserDocument_TB!]!
    getAllContactInfo_TB: [ContactInfo_TB!]!

    getTypeDocument_TB(id: ID!): TypeDocument_TB!
    getCountry_TB(id: ID!): Country_TB!
    getAppUser_TB(id: ID!): AppUser_TB!
    getUserDocument_TB(id: ID!): UserDocument_TB!
    getContactInfo_TB(id: ID!): ContactInfo_TB!
  }

  type Mutation {
    createTypeDocument_TB(NameTypeDocument: String!): TypeDocument_TB!
    createCountry_TB(CountryCode: String!, CountryName: String!): Country_TB!
    createAppUser_TB(
      LastName: String!
      Name: String!
      isMilitar: Boolean!
      TimeCreate: DateTime
      isTemporal: Boolean!
      userName: String!
      password: String!
      email: String!
      emailVerified: Boolean
      verificationToken: String
    ): AppUser_TB!
    createUserDocument_TB(
      UserID: ID!
      Document: String!
      TypeDocumentID: ID!
      PlaceExpedition: String!
      DateExpedition: DateTime!
    ): UserDocument_TB!
    createContactInfo_TB(
      UserID: ID!
      Address: String!
      CountryID: ID!
      City: String!
      Phone: String!
      CelPhone: String!
      EmergencyName: String!
      EmergencyPhone: String!
    ): ContactInfo_TB!

    updateTypeDocument_TB(id: ID!, NameTypeDocument: String!): TypeDocument_TB!
    updateCountry_TB(
      id: ID!
      CountryCode: String
      CountryName: String
    ): Country_TB!
    updateAppUser_TB(
      id: ID!
      LastName: String
      Name: String
      isMilitar: Boolean
      TimeCreate: DateTime
      isTemporal: Boolean
      userName: String
      password: String
      email: String
      emailVerified: Boolean
      verificationToken: String
    ): AppUser_TB!
    updateUserDocument_TB(
      id: ID!
      UserID: ID
      Document: String
      TypeDocumentID: ID
      PlaceExpedition: String
      DateExpedition: DateTime
    ): UserDocument_TB!
    updateContactInfo_TB(
      id: ID!
      UserID: ID
      Address: String
      CountryID: ID
      City: String
      Phone: String
      CelPhone: String
      EmergencyName: String
      EmergencyPhone: String
    ): ContactInfo_TB!

    deleteTypeDocument_TB(id: ID!): TypeDocument_TB!
    deleteCountry_TB(id: ID!): Country_TB!
    deleteAppUser_TB(id: ID!): AppUser_TB!
    deleteUserDocument_TB(id: ID!): UserDocument_TB!
    deleteContactInfo_TB(id: ID!): ContactInfo_TB!

    loginAppUser_TB(userName: String!, password: String!): loginResponse!
  }
`;

module.exports = typeDefs;
