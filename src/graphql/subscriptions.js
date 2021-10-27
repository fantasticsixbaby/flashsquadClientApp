/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      latitude
      longitude
      heading
      driver
      StartingPoint
      Destination
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      latitude
      longitude
      heading
      driver
      StartingPoint
      Destination
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      latitude
      longitude
      heading
      driver
      StartingPoint
      Destination
      orders {
        items {
          id
          userId
          createdAt
          carId
          rating
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userId
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        latitude
        longitude
        heading
        driver
        StartingPoint
        Destination
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userId
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        latitude
        longitude
        heading
        driver
        StartingPoint
        Destination
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userId
      createdAt
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        latitude
        longitude
        heading
        driver
        StartingPoint
        Destination
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      updatedAt
    }
  }
`;
