const db = require('./config');

async function migrate() {
  const client = await db.getClient();
  try {
    await client.query('BEGIN');

    await client.query(`
      CREATE TABLE IF NOT EXISTS websites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        template_id INTEGER REFERENCES templates(id) ON DELETE SET NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      ALTER TABLE pages 
      ADD COLUMN IF NOT EXISTS website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE;
    `);

    await client.query(`
      ALTER TABLE sections 
      ADD COLUMN IF NOT EXISTS website_id INTEGER REFERENCES websites(id) ON DELETE CASCADE;
    `);

    await client.query(`
      ALTER TABLE templates
      ADD COLUMN IF NOT EXISTS category VARCHAR(100) DEFAULT 'Business';
    `);

    await client.query(`
      ALTER TABLE templates
      ADD COLUMN IF NOT EXISTS description TEXT;
    `);

    await client.query(`
      ALTER TABLE templates
      ALTER COLUMN name TYPE VARCHAR(255);
    `);

    await client.query(`
      ALTER TABLE sections
      ALTER COLUMN section_type TYPE VARCHAR(50);
    `);

    await client.query(`
      UPDATE templates SET category = 'Business' WHERE category IS NULL;
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_websites_user_id ON websites(user_id);
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_pages_website_id ON pages(website_id);
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_sections_website_id ON sections(website_id);
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_templates_category ON templates(category);
    `);

    await client.query('COMMIT');
    console.log('Migration completed successfully.');
    process.exit(0);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Migration failed:', err);
    process.exit(1);
  } finally {
    client.release();
  }
}

migrate();
