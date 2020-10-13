import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Edit} from 'react-admin';

export default function PostList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <DateField source='publishedOn' />
                <DateField source='modifiedOn' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}
