const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        image_url TEXT,
        idp UUID
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password, image_url, idp)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.image_url}, ${user.idp})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedChat(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "chat" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS chat (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    contenido VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "chat" table`);

    // Insert data into the "chat" table
    const insertedChat = await Promise.all(
      chat.map(
        (invoice) => client.sql`
        INSERT INTO chat (id, contenido, status, date)
        VALUES (${invoice.id}, ${invoice.contenido}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedChat.length} chat`);

    return {
      createTable,
      chat: insertedChat,
    };
  } catch (error) {
    console.error('Error seeding chat:', error);
    throw error;
  }
}

async function seedObjetivos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "objetivos" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS objetivos (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        id1 UUID,
        id2 UUID,
        name VARCHAR(255) NOT NULL,
        contenido VARCHAR(255),
        cumplimiento VARCHAR(255),
        image_url VARCHAR(255),
        datec DATE NOT NULL,
        datev DATE NOT NULL
      );
    `;

    console.log(`Created "objetivos" table`);

    // Insert data into the "objetivos" table
    const insertedObjetivos = await Promise.all(
      objetivos.map(
        (customer) => client.sql`
        INSERT INTO objetivos (id, id1 , id2, name, contenido,  cumplimiento, image_url, datec, datev)
        VALUES (${objetivo.id}, ${objetivo.id1}, ${objetivo.id2}, ${objetivo.name}, ${objetivo.contenido}, ${objetivo.cumplimiento}, ${objetivo.image_url}, ${objetivo.datec}, ${objetivo.datev})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedObjetivos.length} objetivos`);

    return {
      createTable,
      objetivos: insertedObjetivos
    };
  } catch (error) {
    console.error('Error seeding objetivos:', error);
    throw error;
  }
}

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "revenue" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedObjetivos(client);
  await seedChat(client);
  // await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
