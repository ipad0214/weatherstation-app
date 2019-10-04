import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'weather',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../weather/weather.module').then(m => m.WeatherPageModule)
          }
        ]
      },
      {
        path: 'timer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../timer/timer.module').then(m => m.TimerPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/weather',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
