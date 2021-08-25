import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { Modal } from './Modal';

export default {
    title: 'components/organisms/Modal',
    component: Modal,
};

const Template = args => (
    <Modal withButton isOpen={true}>
        <StudentDetails
            student={{
                id: '9',
                name: 'Beata Maniecka',
                attendance: '95%',
                average: '5.0',
                group: 'B',
            }}
        />
    </Modal>
);

export const Default = Template.bind({});
Default.args = {};
