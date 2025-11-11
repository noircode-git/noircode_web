import { insertContactMessageSchema } from '../shared/schema';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const validated = insertContactMessageSchema.parse(body);

    // In this serverless version we don't persist; we just acknowledge receipt.
    const now = new Date().toISOString();
    const message = {
      id: undefined,
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
        errors: error,
      });
    }
    console.error('Error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.',
    });
  }
}