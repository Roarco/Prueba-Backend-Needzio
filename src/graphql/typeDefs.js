const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type TypeDocument_TB {
        id: ID!
        NameTypeDocument: String!
    }
    type AppUser_TB {
        id: ID!
        LastName: String!
        Name: String!
        isMilitar : Boolean
        TimeCreate: String!
        isTemporal: Boolean
        username: String!
        password: String!
        email: String!
        emailVerified: Boolean
        verificationToken: String
    }
    type Country_TB {
        id: ID!
        CountryCode: String!
        CountryName: String!
    }
    type UserDocument_TB{
        id: ID!
        Document: String!
        TypeDocumentId: ID!
        PlaceExpedition: String!
        DateExpedition: String!
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
    }

    type Query {
        getAllTypeDocument_TB: [TypeDocument_TB!]!
        getAllCountry_TB: [Country_TB!]!
    }

    type Mutation {
        createTypeDocument_TB(NameTypeDocument: String!): TypeDocument_TB!
        createCountry_TB(CountryCode: String!, CountryName: String!): Country_TB!
    }
`;

module.exports = typeDefs;