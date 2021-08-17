import Modal from './Modal';

export default {
    title: 'Components/organisms/Modal',
    component: Modal,
};

const Template = args => <Modal {...args}></Modal>;

export const Default = Template.bind({});
Default.args = {
    groups: ['A', 'B', 'C'],
};

export const LotOfGroups = Template.bind({});
LotOfGroups.args = {
    groups: ['A', 'B', 'C', 'E', 'F', 'G'],
};
