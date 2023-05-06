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
export declare type SettingCreateFormInputValues = {
    background?: number;
};
export declare type SettingCreateFormValidationValues = {
    background?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingCreateFormOverridesProps = {
    SettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    background?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingCreateFormProps = React.PropsWithChildren<{
    overrides?: SettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SettingCreateFormInputValues) => SettingCreateFormInputValues;
    onSuccess?: (fields: SettingCreateFormInputValues) => void;
    onError?: (fields: SettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingCreateFormInputValues) => SettingCreateFormInputValues;
    onValidate?: SettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function SettingCreateForm(props: SettingCreateFormProps): React.ReactElement;
