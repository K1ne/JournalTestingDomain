/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Journal } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JournalUpdateFormInputValues = {
    owner?: string;
    date?: string;
    rate?: number;
    text?: string;
    share?: boolean;
    ownerShared?: string;
};
export declare type JournalUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
    text?: ValidationFunction<string>;
    share?: ValidationFunction<boolean>;
    ownerShared?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JournalUpdateFormOverridesProps = {
    JournalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    share?: PrimitiveOverrideProps<SwitchFieldProps>;
    ownerShared?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JournalUpdateFormProps = React.PropsWithChildren<{
    overrides?: JournalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    journal?: Journal;
    onSubmit?: (fields: JournalUpdateFormInputValues) => JournalUpdateFormInputValues;
    onSuccess?: (fields: JournalUpdateFormInputValues) => void;
    onError?: (fields: JournalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JournalUpdateFormInputValues) => JournalUpdateFormInputValues;
    onValidate?: JournalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JournalUpdateForm(props: JournalUpdateFormProps): React.ReactElement;
