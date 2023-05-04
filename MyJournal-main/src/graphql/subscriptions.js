/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLogin = /* GraphQL */ `
  subscription OnCreateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onCreateLogin(filter: $filter) {
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
export const onUpdateLogin = /* GraphQL */ `
  subscription OnUpdateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onUpdateLogin(filter: $filter) {
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
export const onDeleteLogin = /* GraphQL */ `
  subscription OnDeleteLogin($filter: ModelSubscriptionLoginFilterInput) {
    onDeleteLogin(filter: $filter) {
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
export const onCreateJournal = /* GraphQL */ `
  subscription OnCreateJournal($filter: ModelSubscriptionJournalFilterInput) {
    onCreateJournal(filter: $filter) {
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
export const onUpdateJournal = /* GraphQL */ `
  subscription OnUpdateJournal($filter: ModelSubscriptionJournalFilterInput) {
    onUpdateJournal(filter: $filter) {
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
export const onDeleteJournal = /* GraphQL */ `
  subscription OnDeleteJournal($filter: ModelSubscriptionJournalFilterInput) {
    onDeleteJournal(filter: $filter) {
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
export const onCreateSetting = /* GraphQL */ `
  subscription OnCreateSetting($filter: ModelSubscriptionSettingFilterInput) {
    onCreateSetting(filter: $filter) {
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
export const onUpdateSetting = /* GraphQL */ `
  subscription OnUpdateSetting($filter: ModelSubscriptionSettingFilterInput) {
    onUpdateSetting(filter: $filter) {
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
export const onDeleteSetting = /* GraphQL */ `
  subscription OnDeleteSetting($filter: ModelSubscriptionSettingFilterInput) {
    onDeleteSetting(filter: $filter) {
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
