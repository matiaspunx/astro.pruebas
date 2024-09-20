import type { APIRoute } from "astro";

// obtengo pokemon de https://pokeapi.co/api/v2/
async function searchPokemon (name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

export const POST: APIRoute = async ({ params, request }) => {
  const name = params.name;

  // buscamos el pokemon en la api
  const pokemonData = await searchPokemon(name ? name.toString() : "");

  // si no encontramos el pokemon, retornamos un error
  if (!pokemonData) {
    return new Response(
      JSON.stringify({
        message: "Pokemon not found"
      }),
      { status: 404 }
    );
  }

  // retornamos el resultado
  return new Response(
    JSON.stringify({
      pokemonData
    }),
    { status: 200 }
  );
};