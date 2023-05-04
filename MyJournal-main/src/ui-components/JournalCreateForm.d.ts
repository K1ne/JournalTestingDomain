/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JournalCreateFormInputValues = {
    owner?: string;
    date?: string;
    rate?: number;
    text?: string;
    share?: boolean;
    ownerShared?: string;
};
export declare type JournalCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
    text?: ValidationFunction<string>;
    share?: ValidationFunction<boolean>;
    ownerShared?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JournalCreateFormOverridesProps = {
    JournalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    share?: PrimitiveOverrideProps<SwitchFieldProps>;
    ownerShared?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JournalCreateFormProps = React.PropsWithChildren<{
    overrides?: JournalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JournalCreateFormInputValues) => JournalCreateFormInputValues;
    onSuccess?: (fields: JournalCreateFormInputValues) => void;
    onError?: (fields: JournalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JournalCreateFormInputValues) => JournalCreateFormInputValues;
    onValidate?: JournalCreateFormValidationValues;
} & React.CSSProperties>;
export default function JournalCreateForm(props: JournalCreateFormProps): React.ReactElement;
