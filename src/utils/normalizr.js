import { schema, normalize } from 'normalizr';

export const normalizeBoard = (data) => {
  const cards = new schema.Entity('cards', {}, { idAttribute: '_id' });

  const lists = new schema.Entity(
    'lists',
    { cards: [cards] },
    { idAttribute: '_id' }
  );

  const board = new schema.Entity(
    'board',
    {
      lists: [lists],
      cards: [cards],
    },
    { idAttribute: '_id' }
  );

  return normalize(data, board);
};
