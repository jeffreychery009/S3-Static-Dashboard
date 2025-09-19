import React from 'react';
import Header from '@/components/header/header';
import TeamName from '@/components/settings/team-name';
import AvatarCard from '@/components/settings/avatar-card';
import CredentialsCard from '@/components/settings/credentials';
import Deletion from '@/components/settings/deletion';

const Page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="sm:m-4 my-4 lg:px-6 lg:my-10 px-4">
        <TeamName />
        <AvatarCard />
        <CredentialsCard />
        <Deletion />
      </div>
    </div>
  );
};

export default Page;
