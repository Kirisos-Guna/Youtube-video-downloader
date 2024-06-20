import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SubscriptionPlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SubscriptionPlans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="downloadLimit" source="downloadLimit" />
        <TextField label="features" source="features" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="qualityLimit" source="qualityLimit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
