/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Journal } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function JournalUpdateForm(props) {
  const {
    id: idProp,
    journal: journalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owner: "",
    date: "",
    rate: "",
    text: "",
    share: false,
    ownerShared: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [date, setDate] = React.useState(initialValues.date);
  const [rate, setRate] = React.useState(initialValues.rate);
  const [text, setText] = React.useState(initialValues.text);
  const [share, setShare] = React.useState(initialValues.share);
  const [ownerShared, setOwnerShared] = React.useState(
    initialValues.ownerShared
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = journalRecord
      ? { ...initialValues, ...journalRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setDate(cleanValues.date);
    setRate(cleanValues.rate);
    setText(cleanValues.text);
    setShare(cleanValues.share);
    setOwnerShared(cleanValues.ownerShared);
    setErrors({});
  };
  const [journalRecord, setJournalRecord] = React.useState(journalModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Journal, idProp)
        : journalModelProp;
      setJournalRecord(record);
    };
    queryData();
  }, [idProp, journalModelProp]);
  React.useEffect(resetStateValues, [journalRecord]);
  const validations = {
    owner: [{ type: "Required" }],
    date: [{ type: "Required" }],
    rate: [{ type: "Required" }],
    text: [{ type: "Required" }],
    share: [{ type: "Required" }],
    ownerShared: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          owner,
          date,
          rate,
          text,
          share,
          ownerShared,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Journal.copyOf(journalRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "JournalUpdateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              date,
              rate,
              text,
              share,
              ownerShared,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              date: value,
              rate,
              text,
              share,
              ownerShared,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Rate"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              date,
              rate: value,
              text,
              share,
              ownerShared,
            };
            const result = onChange(modelFields);
            value = result?.rate ?? value;
          }
          if (errors.rate?.hasError) {
            runValidationTasks("rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("rate", rate)}
        errorMessage={errors.rate?.errorMessage}
        hasError={errors.rate?.hasError}
        {...getOverrideProps(overrides, "rate")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={true}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              date,
              rate,
              text: value,
              share,
              ownerShared,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <SwitchField
        label="Share"
        defaultChecked={false}
        isDisabled={false}
        isChecked={share}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              date,
              rate,
              text,
              share: value,
              ownerShared,
            };
            const result = onChange(modelFields);
            value = result?.share ?? value;
          }
          if (errors.share?.hasError) {
            runValidationTasks("share", value);
          }
          setShare(value);
        }}
        onBlur={() => runValidationTasks("share", share)}
        errorMessage={errors.share?.errorMessage}
        hasError={errors.share?.hasError}
        {...getOverrideProps(overrides, "share")}
      ></SwitchField>
      <TextField
        label="Owner shared"
        isRequired={false}
        isReadOnly={false}
        value={ownerShared}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              date,
              rate,
              text,
              share,
              ownerShared: value,
            };
            const result = onChange(modelFields);
            value = result?.ownerShared ?? value;
          }
          if (errors.ownerShared?.hasError) {
            runValidationTasks("ownerShared", value);
          }
          setOwnerShared(value);
        }}
        onBlur={() => runValidationTasks("ownerShared", ownerShared)}
        errorMessage={errors.ownerShared?.errorMessage}
        hasError={errors.ownerShared?.hasError}
        {...getOverrideProps(overrides, "ownerShared")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || journalModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || journalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
