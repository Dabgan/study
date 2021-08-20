import Average from 'components/atoms/Average/Average.js';

export default {
    title: 'components/atoms/Average',
    component: Average,
};

const Template = args => <Average averageData={4.7} {...args}></Average>;

export const Default = Template.bind({});
Default.args = {
    isBig: false,
};

export const Big = Template.bind({});
Big.args = {
    isBig: true,
};
