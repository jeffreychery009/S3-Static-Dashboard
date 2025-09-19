import React from 'react';

import Header from '@/components/header/header';
import { SectionCards } from '@/components/cards/sectionCards';

import { BarChartComponent, LineChartComponent } from '@/components/charts/chart-wrapper';
import { paymentsData } from '@/constants';
import { columns, Payment } from '@/app/payments/columns';
import { DataTable } from '@/app/payments/data-table';

async function getData(): Promise<Payment[]> {
  return paymentsData;
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <Header />
      <div className="sm:m-4 my-4">
        <SectionCards />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:px-6 lg:my-10 px-4 my-4">
          <BarChartComponent />
          <LineChartComponent />
        </div>
        <div className="my-4 lg:px-6 lg:my-10 px-4  ">
          <DataTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default page;
