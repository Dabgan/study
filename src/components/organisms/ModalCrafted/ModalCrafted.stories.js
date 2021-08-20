import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { ModalCrafted } from './ModalCrafted';

export default {
    title: 'components/organisms/ModalCrafted',
    component: ModalCrafted,
};

const Template = args => (
    <ModalCrafted>
        <StudentDetails
            student={{
                id: '9',
                name: 'Beata Maniecka',
                attendance: '95%',
                average: '5.0',
                group: 'B',
            }}
        />
    </ModalCrafted>
);

export const Default = Template.bind({});
Default.args = {};
