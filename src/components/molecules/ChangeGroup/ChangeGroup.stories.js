import ChangeGroup from './ChangeGroup';

export default {
    title: 'Components/molecules/ChangeGroup',
    component: ChangeGroup,
};

const Template = args => <ChangeGroup {...args}></ChangeGroup>;

export const Default = Template.bind({});
Default.args = {
    groups: ['A', 'B', 'C'],
};

export const LotOfGroups = Template.bind({});
LotOfGroups.args = {
    groups: ['A', 'B', 'C', 'E', 'F', 'G'],
};
