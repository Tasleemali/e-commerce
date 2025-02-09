
import { seeitDB } from '@/database/seeitDB';
import Item from '@/model/Item';

export async function GET(req) {
  const { id } = req.params;
  await seeitDB();

  try {
    const product = await Item.findById(id);
    if (!product) {
      return new Response('Product not found', { status: 404 });
    }
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response('Error fetching product', { status: 500 });
  }
}