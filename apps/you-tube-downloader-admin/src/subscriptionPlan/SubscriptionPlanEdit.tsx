import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="downloadLimit" source="downloadLimit" />
        <TextInput label="features" multiline source="features" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="qualityLimit" source="qualityLimit" />
      </SimpleForm>
    </Edit>
  );
};
