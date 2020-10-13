import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, DateField} from 'react-admin';

export default function PostEdit(props) {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='title' />
                <TextInput source='body' multiline />
                <DateInput label='Modified' source='modifiedOn' />
                <DateField source='publishedOn' />
            </SimpleForm>
        </Edit>
    )
}