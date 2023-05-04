/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Setting } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingUpdateFormInputValues = {
    background?: number;
};
export declare type SettingUpdateFormValidationValues = {
    background?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingUpdateFormOverridesProps = {
    SettingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    background?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SettingUpdateFormProps = React.PropsWithChildren<{
    overrides?: SettingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    setting?: Setting;
    onSubmit?: (fields: SettingUpdateFormInputValues) => SettingUpdateFormInputValues;
    onSuccess?: (fields: SettingUpdateFormInputValues) => void;
    onError?: (fields: SettingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingUpdateFormInputValues) => SettingUpdateFormInputValues;
    onValidate?: SettingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SettingUpdateForm(props: SettingUpdateFormProps): React.ReactElement;
