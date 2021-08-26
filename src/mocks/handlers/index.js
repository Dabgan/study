import { rest } from 'msw';
import { groups } from 'mocks/data/groups';
import { db } from 'mocks/db';

export const handlers = [
    rest.get('/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ groups }));
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
    rest.get('/groups/:id', (req, res, ctx) => {
        const matchingStudents = db.student.findMany({ where: { group: { equals: req.params.id } } });
        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            })
        );
    }),

    rest.get('/students/:id', (req, res, ctx) => {
        const matchingStudent = db.student.findFirst({});

        if (!matchingStudent) {
            return res(
                ctx.status(404),
                ctx.json({
                    error: 'Matching students not find',
                })
            );
        }

        return res(
            ctx.status(200),
            ctx.json({
                student: matchingStudent,
            })
        );
    }),
];
