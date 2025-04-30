
import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TeamTabs from '@/components/teams/TeamTabs';
import CarpentryTeam from '@/components/teams/CarpentryTeam';
import PaintingTeam from '@/components/teams/PaintingTeam';
import AudiovisualTeam from '@/components/teams/AudiovisualTeam';
import ITWebTeam from '@/components/teams/ITWebTeam';

const Teams = () => {
  return (
    <section className="py-20 container mx-auto px-4" id="equipos">
      <h2 className="text-3xl md:text-4xl font-press-start text-dk-yellow mb-10 text-center">
        LOS CONSTRUCTORES
      </h2>
      
      <Tabs defaultValue="carpinteria" className="w-full">
        <TeamTabs />
        
        <div className="relative mt-10">
          {/* Carpintería Tab */}
          <TabsContent value="carpinteria" className="relative">
            <CarpentryTeam />
          </TabsContent>
          
          {/* Pintura Tab */}
          <TabsContent value="pintura">
            <PaintingTeam />
          </TabsContent>
          
          {/* Audiovisuales Tab */}
          <TabsContent value="audiovisuales">
            <AudiovisualTeam />
          </TabsContent>
          
          {/* IT & Web Tab */}
          <TabsContent value="it">
            <ITWebTeam />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default Teams;
