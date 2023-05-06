import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Login = LazyLoading extends LazyLoadingDisabled ? EagerLogin : LazyLogin

export declare const Login: (new (init: ModelInit<Login>) => Login) & {
  copyOf(source: Login, mutator: (draft: MutableModel<Login>) => MutableModel<Login> | void): Login;
}

type EagerJournal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Journal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly date: string;
  readonly rate: number;
  readonly text: string;
  readonly share: boolean;
  readonly ownerShared?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJournal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Journal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly date: string;
  readonly rate: number;
  readonly text: string;
  readonly share: boolean;
  readonly ownerShared?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Journal = LazyLoading extends LazyLoadingDisabled ? EagerJournal : LazyJournal

export declare const Journal: (new (init: ModelInit<Journal>) => Journal) & {
  copyOf(source: Journal, mutator: (draft: MutableModel<Journal>) => MutableModel<Journal> | void): Journal;
}

type EagerSetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Setting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly background: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySetting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Setting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly background: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Setting = LazyLoading extends LazyLoadingDisabled ? EagerSetting : LazySetting

export declare const Setting: (new (init: ModelInit<Setting>) => Setting) & {
  copyOf(source: Setting, mutator: (draft: MutableModel<Setting>) => MutableModel<Setting> | void): Setting;
}