import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanTabsPage } from './aduan-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AduanTabsPage,
    children: [
      {
        path: 'selesai',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../list/aduan-selesai-list/aduan-selesai-list.module').then(
                (m) => m.AduanSelesaiListPageModule
              ),
          },
        ],
      },
      {
        path: 'perhatian',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../list/aduan-perhatian-list/aduan-perhatian-list.module').then(
                (m) => m.AduanPerhatianListPageModule
              ),
          },
        ],
      },
      {
        path: 'ditolak',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./../list/aduan-ditolak-list/aduan-ditolak-list.module').then(
                (m) => m.AduanDitolakListPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'superadmin/aduan-tabs/selesai',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/superadmin/aduan-tabs/selesai',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanTabsPageRoutingModule {}
