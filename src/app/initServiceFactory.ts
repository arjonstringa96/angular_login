import { Globals } from '../app/globals';
export function initServicesFactory(
  globalsService: Globals,
) {
  return async () => {
    console.log('initServicesFactory - started');
    const config = await globalsService.connection();
    console.log('initServicesFactory - completed');
  };
}