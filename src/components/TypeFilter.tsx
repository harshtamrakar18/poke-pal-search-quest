
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TypeFilterProps {
  selectedType: string;
  types: string[];
  onTypeChange: (type: string) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ selectedType, types, onTypeChange }) => {
  return (
    <div className="w-full max-w-xs">
      <Select value={selectedType} onValueChange={onTypeChange}>
        <SelectTrigger className="w-full bg-white border-2 border-pokedex-mediumGray focus:border-pokedex-red">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TypeFilter;
