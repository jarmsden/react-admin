import React from 'react';
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin';

export default function PostCreate(props) {
    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='body' multiline/>
                <DateInput label='Published' source='publishedOn' />
            </SimpleForm>
        </Create>
    )
}
