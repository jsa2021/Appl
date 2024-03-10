// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Jsa',
    email: 'jsar@appl.com',
    password: '123456',
    image_url: '/customers/delba-de-oliveira.png',
    idp: '411544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '411544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Aldu',
    email: 'aldu@appl.com',
    password: '123456',
    image_url: '/customers/delba-de-oliveira.png',
    idp: '410544b2-4001-4271-9855-fec4b6a6442a',
  },
  {
    id: '412544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@appl.com',
    password: '123456',
    image_url: '/customers/delba-de-oliveira.png',
    idp: 'vacio',
  },
];

const objetivos = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    id1: '411544b2-4001-4271-9855-fec4b6a6442a',
    id2: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'objetivo 2',
    contenido: 'Contenido',
    cumplimiento: '80%',
    image_url: '/customers/delba-de-oliveira.png',
    datec: '2022-11-14',
    datev: '2025-11-14',
  },
  {
    id: '3958rc9e-712f-4377-85e9-fec4b6a6442a',
    id1: '411544b2-4001-4271-9855-fec4b6a6442a',
    id2: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'objetivo 2',
    contenido: 'Contenido',
    cumplimiento: '80%',
    image_url: '/customers/delba-de-oliveira.png',
    datec: '2022-11-14',
    datev: '2025-11-14',
  },
];

const chat = [
  {
    id: users[0].id,
    contenido: "texto del mensaje",
    status: 'pendiente',
    date: '2022-12-06',
  },
  {
    id: users[1].id,
    contenido: "texto del mensaje",
    status: 'pendiente',
    date: '2022-11-14',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'pendiente',
    date: '2022-10-29',
  },
  {
    id: users[1].id,
    contenido: "texto del mensaje",
    status: 'pendiente',
    date: '2023-09-10',
  },
  {
    id: users[1].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-08-05',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-07-16',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-27',
  },
  {
    id: users[0].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-09',
  },
  {
    id: users[0].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-17',
  },
  {
    id: users[0].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-07',
  },
  {
    id: users[1].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-08-19',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-03',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-06-18',
  },
  {
    id: users[0].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2023-10-04',
  },
  {
    id: users[2].id,
    contenido: "texto del mensaje",
    status: 'entregado',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  objetivos,
  chat,
  revenue,
};
