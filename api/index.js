import {renderHydrogen} from '@shopify/hydrogen/framework/server';
import {Router} from '@shopify/hydrogen';

export default async function handler(req, res) {
  const {render} = renderHydrogen(Router);
  await render(req, res);
}
