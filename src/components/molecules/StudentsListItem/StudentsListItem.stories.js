import StudentsListItem from './StudentsListItem';

export default {
    title: 'Components/Molecules/StudentsListItem',
    component: StudentsListItem,
};

const Template = args => <StudentsListItem {...args} />;

export const BadMarks = Template.bind({});
BadMarks.args = {
    userData: { average: '2.0', name: 'Patryk', attendance: '45%' },
};

export const MediumMarks = Template.bind({});
MediumMarks.args = {
    userData: { average: '3.2', name: 'Gabriel', attendance: '55%' },
};

export const GoodMarks = Template.bind({});
GoodMarks.args = {
    userData: { average: '5.0', name: 'Paweł', attendance: '85%' },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
    userData: { name: 'Paweł', attendance: '85%' },
};

export const NoAttendace = Template.bind({});
NoAttendace.args = {
    userData: { average: 4.3, name: 'Paweł' },
};
