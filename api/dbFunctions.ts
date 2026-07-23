import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.ESPLNT_DATABASE_URL!);

export async function createPlant({
  userId,
  espId,
  name,
  type,
  soil,
  pot,
}: {
  userId: string;
  espId: string;
  name: string;
  type: string;
  soil: string;
  pot: string;
}) {
  const [plant] = await sql`
    INSERT INTO PlantInfo (p_name, p_type, p_soil, p_pot, p_moisture, p_time_since_measure)
    VALUES (${name}, ${type}, ${soil}, ${pot}, ${null}, ${null})
    RETURNING p_id
  `;

  await sql`
    INSERT INTO ESPConnection (plant_id, esp_id, user_id)
    VALUES (${plant.p_id}, ${espId}, ${userId})
  `;

  return plant.p_id;
}

export async function updateMeasure({ moisture, p_id } : { moisture : number; p_id : string }) {
    await sql`
        UPDATE PlantInfo
        SET p_moisture = ${moisture},
        SET p_time_since_measure = NOW()
        WHERE p_id = ${p_id}
    `;
}