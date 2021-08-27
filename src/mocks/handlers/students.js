import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
    rest.get('/students/:id', (req, res, ctx) => {
        if (req.params.id) {
            const matchingStudent = db.student.findFirst({
                where: {
                    id: {
                        equals: req.params.id,
                    },
                },
            });
            if (!matchingStudent) {
                return res(
                    ctx.status(404),
                    ctx.json({
                        error: 'No matching student',
                    })
                );
            }
            return res(
                ctx.status(200),
                ctx.json({
                    student: matchingStudent,
                })
            );
        }
        return res(
            ctx.status(200),
            ctx.json({
                students: db.student.getAll(),
            })
        );
    }),

    rest.post('/students/search', (req, res, ctx) => {
        const allStudents = db.student.getAll();

        const matchingStudents = req.body.searchPhrase
            ? allStudents.filter(student => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase()))
            : [];

        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            })
        );
    }),
];
