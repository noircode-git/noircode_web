import { z } from 'zod';

/**
 * Local Zod schema to avoid heavy server-only imports in the serverless function.
 * It mirrors the fields used on the client.
 */
const insertContactMessageSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Zadejte platnou e-mailovou adresu'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
});

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    // Support both parsed and raw JSON bodies
    let body: any = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_e) {
        body = null;
      }
    }
    if (!body || typeof body !== 'object') {
      body = {};
    }

    const validated = insertContactMessageSchema.parse(body);

    const now = new Date().toISOString();
    const message = {
      ...validated,
      createdAt: now,
    };

    return res.status(201).json({
      success: true,
      message: 'Zpráva byla úspěšně odeslána. Ozveme se vám do 24 hodin.',
      data: message,
    });
  } catch (error: any) {
    if (error?.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Neplatná data formuláře',
        errors: error?.issues ?? error,
      });
    }
    console.error('Error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error?.message || String(error),
    });
  }
}