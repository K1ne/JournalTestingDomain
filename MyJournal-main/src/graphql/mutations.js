/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLogin = /* GraphQL */ `
  mutation CreateLogin(
    $input: CreateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    createLogin(input: $input, condition: $condition) {
      id
      name
      username
      password
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLogin = /* GraphQL */ `
  mutation UpdateLogin(
    $input: UpdateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    updateLogin(input: $input, condition: $condition) {
      id
      name
      username
      password
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLogin = /* GraphQL */ `
  mutation DeleteLogin(
    $input: DeleteLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    deleteLogin(input: $input, condition: $condition) {
      id
      name
      username
      password
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createJournal = /* GraphQL */ `
  mutation CreateJournal(
    $input: CreateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    createJournal(input: $input, condition: $condition) {
      id
      owner
      date
      rate
      text
      share
      ownerShared
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateJournal = /* GraphQL */ `
  mutation UpdateJournal(
    $input: UpdateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    updateJournal(input: $input, condition: $condition) {
      id
      owner
      date
      rate
      text
      share
      ownerShared
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteJournal = /* GraphQL */ `
  mutation DeleteJournal(
    $input: DeleteJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    deleteJournal(input: $input, condition: $condition) {
      id
      owner
      date
      rate
      text
      share
      ownerShared
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSetting = /* GraphQL */ `
  mutation CreateSetting(
    $input: CreateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    createSetting(input: $input, condition: $condition) {
      id
      background
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSetting = /* GraphQL */ `
  mutation UpdateSetting(
    $input: UpdateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    updateSetting(input: $input, condition: $condition) {
      id
      background
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSetting = /* GraphQL */ `
  mutation DeleteSetting(
    $input: DeleteSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    deleteSetting(input: $input, condition: $condition) {
      id
      background
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
