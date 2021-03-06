import FormField from './FormField';

export default {
    title: 'Components/Molecules/FormField',
    component: FormField,
};

const Template = args => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Login',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
    label: 'Bardzo długi label aby przetestować sialala',
};
