
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeamTabs = () => {
  return (
    <TabsList className="w-full flex flex-wrap gap-1 bg-transparent border-b border-dk-yellow">
      <TabsTrigger 
        value="carpinteria" 
        className="flex-1 text-base font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:border-b-2 data-[state=active]:border-dk-yellow"
      >
        CARPINTERÍA
      </TabsTrigger>
      <TabsTrigger 
        value="pintura" 
        className="flex-1 text-base font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:border-b-2 data-[state=active]:border-dk-yellow"
      >
        PINTURA
      </TabsTrigger>
      <TabsTrigger 
        value="audiovisuales" 
        className="flex-1 text-base font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:border-b-2 data-[state=active]:border-dk-yellow"
      >
        AUDIO
      </TabsTrigger>
      <TabsTrigger 
        value="web" 
        className="flex-1 text-base font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:border-b-2 data-[state=active]:border-dk-yellow"
      >
        WEB
      </TabsTrigger>
      <TabsTrigger 
        value="it" 
        className="flex-1 text-base font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:border-b-2 data-[state=active]:border-dk-yellow"
      >
        IT
      </TabsTrigger>
    </TabsList>
  );
};

export default TeamTabs;
