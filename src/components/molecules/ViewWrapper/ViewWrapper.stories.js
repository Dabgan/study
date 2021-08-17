import { ViewWrapper } from './ViewWrapper';

export default {
    title: 'Components/Molecules/ViewWrapper',
    component: ViewWrapper,
};

const Template = args => (
    <ViewWrapper {...args}>
        <h1>Halo</h1>
        <p>hehehe</p>
    </ViewWrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomMargin = Template.bind({});
CustomMargin.args = {
    margin: '60px',
};
