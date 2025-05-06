
import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TeamTabs from '@/components/teams/TeamTabs';
import CarpentryTeam from '@/components/teams/CarpentryTeam';
import PaintingTeam from '@/components/teams/PaintingTeam';
import AudiovisualTeam from '@/components/teams/AudiovisualTeam';
import WebTeam from '@/components/teams/WebTeam';
import ITWebTeam from '@/components/teams/ITWebTeam';

const Teams = () => {
  return (
    <section className="py-8 container mx-auto px-4 relative" id="equipos">
      <div className="absolute left-0 top-10 bottom-10 w-4 bg-dk-red"></div>
      <div className="absolute right-0 top-10 bottom-10 w-4 bg-dk-red"></div>
      
      <h2 className="text-xl md:text-2xl font-press-start text-dk-yellow mb-4 text-center">
        LOS CONSTRUCTORES
      </h2>
      
      <Tabs defaultValue="carpinteria" className="w-full">
        <TeamTabs />
        
        <div className="mt-4">
          <TabsContent value="carpinteria">
            <CarpentryTeam />
          </TabsContent>
          
          <TabsContent value="pintura">
            <PaintingTeam />
          </TabsContent>
          
          <TabsContent value="audiovisuales">
            <AudiovisualTeam />
          </TabsContent>
          
          <TabsContent value="web">
            <WebTeam />
          </TabsContent>
          
          <TabsContent value="it">
            <ITWebTeam />
          </TabsContent>
        </div>
      </Tabs>
      
      {/* Plataformas estilo Donkey Kong */}
      <div className="absolute left-10 w-20 h-3 bg-dk-yellow bottom-10"></div>
      <div className="absolute left-1/3 w-24 h-3 bg-dk-yellow bottom-20"></div>
      <div className="absolute right-1/3 w-20 h-3 bg-dk-yellow bottom-30"></div>
    </section>
  );
};

export default Teams;
