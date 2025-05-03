
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
    <section className="py-12 container mx-auto px-4" id="equipos">
      <h2 className="text-2xl md:text-3xl font-press-start text-dk-yellow mb-6 text-center">
        LOS CONSTRUCTORES
      </h2>
      
      <Tabs defaultValue="carpinteria" className="w-full">
        <TeamTabs />
        
        <div className="mt-6">
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
    </section>
  );
};

export default Teams;
