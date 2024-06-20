import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="downloadLimit" source="downloadLimit" />
        <TextInput label="features" multiline source="features" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="qualityLimit" source="qualityLimit" />
      </SimpleForm>
    </Create>
  );
};
