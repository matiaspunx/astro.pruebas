import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getPokemon: defineAction({
    input: z.object({
      name: z.string()
    }),
    handler: async ({ name }) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data;
    }
  })
}