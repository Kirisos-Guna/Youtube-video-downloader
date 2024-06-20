import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="passwordHash" source="passwordHash" />
        <TextInput label="role" source="role" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
