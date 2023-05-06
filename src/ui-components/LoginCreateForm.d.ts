/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginCreateFormInputValues = {
    name?: string;
    username?: string;
    password?: string;
};
export declare type LoginCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginCreateFormOverridesProps = {
    LoginCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginCreateFormProps = React.PropsWithChildren<{
    overrides?: LoginCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoginCreateFormInputValues) => LoginCreateFormInputValues;
    onSuccess?: (fields: LoginCreateFormInputValues) => void;
    onError?: (fields: LoginCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginCreateFormInputValues) => LoginCreateFormInputValues;
    onValidate?: LoginCreateFormValidationValues;
} & React.CSSProperties>;
export default function LoginCreateForm(props: LoginCreateFormProps): React.ReactElement;
