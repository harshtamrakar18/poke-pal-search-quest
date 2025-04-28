
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PokemonWithDetails } from "@/types/pokemon";
import TypeBadge from './TypeBadge';

interface PokemonCardProps {
  pokemon: PokemonWithDetails;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-white border-2 border-pokedex-mediumGray">
      <CardContent className="p-4">
        <div className="bg-pokedex-lightGray rounded-lg p-2 mb-3 flex justify-center items-center">
          <img 
            src={pokemon.image} 
            alt={pokemon.name}
            className="h-32 w-32 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg capitalize">{pokemon.name}</h3>
          <span className="text-pokedex-darkGray text-sm font-semibold">#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
