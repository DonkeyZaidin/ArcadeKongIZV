
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeamTabs = () => {
  return (
    <TabsList className="w-full flex flex-wrap mb-8 bg-transparent border-b-2 border-dk-yellow">
      <TabsTrigger 
        value="carpinteria" 
        id="carpinteria" 
        className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]"
      >
        CARPINTERÍA
      </TabsTrigger>
      <TabsTrigger 
        value="pintura" 
        id="pintura" 
        className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]"
      >
        PINTURA
      </TabsTrigger>
      <TabsTrigger 
        value="audiovisuales" 
        id="audiovisuales" 
        className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]"
      >
        AUDIOVISUALES
      </TabsTrigger>
      <TabsTrigger 
        value="web" 
        id="web" 
        className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]"
      >
        WEB
      </TabsTrigger>
      <TabsTrigger 
        value="it" 
        id="it" 
        className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]"
      >
        IT
      </TabsTrigger>
    </TabsList>
  );
};

export default TeamTabs;
