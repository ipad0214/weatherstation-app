import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'weather', loadChildren: './weather/weather.module#WeatherPageModule' },
  { path: 'timer', loadChildren: './timer/timer.module#TimerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
