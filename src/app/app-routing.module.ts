import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./auth/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./core/user/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./core/user/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'aduan-list',
    loadChildren: () =>
      import('./core/user/list/aduan-list/aduan-list.module').then(
        (m) => m.AduanListPageModule
      ),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./core/user/list/user-list/user-list.module').then(
        (m) => m.UserListPageModule
      ),
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./core/user/create/create-user/create-user.module').then(
        (m) => m.CreateUserPageModule
      ),
  },
  {
    path: 'create-aduan',
    loadChildren: () =>
      import('./core/user/create/create-aduan/create-aduan.module').then(
        (m) => m.CreateAduanPageModule
      ),
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./core/user/chart/chart.module').then((m) => m.ChartPageModule),
  },
  {
    path: 'upload-picture',
    loadChildren: () =>
      import('./core/global/upload-picture/upload-picture.module').then(
        (m) => m.UploadPicturePageModule
      ),
  },
  {
    path: 'profile-edit',
    loadChildren: () =>
      import('./core/user/profile-edit/profile-edit.module').then(
        (m) => m.ProfileEditPageModule
      ),
  },
  {
    path: 'amchart',
    loadChildren: () =>
      import('./core/user/amchart/amchart.module').then(
        (m) => m.AmchartPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./core/admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'register-superadmin',
    loadChildren: () =>
      import(
        './auth/register/register-superadmin/register-superadmin.module'
      ).then((m) => m.RegisterSuperadminPageModule),
  },
  {
    path: 'register-admin',
    loadChildren: () =>
      import('./auth/register/register-admin/register-admin.module').then(
        (m) => m.RegisterAdminPageModule
      ),
  },
  {
    path: 'register-user',
    loadChildren: () =>
      import('./auth/register/register-user/register-user.module').then(
        (m) => m.RegisterUserPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'jalan-list',
    loadChildren: () =>
      import('./core/user/list/jalan-list/jalan-list.module').then(
        (m) => m.JalanListPageModule
      ),
  },
  {
    path: 'create-jalan',
    loadChildren: () =>
      import('./core/user/create/create-jalan/create-jalan.module').then(
        (m) => m.CreateJalanPageModule
      ),
  },
  {
    path: 'aduan-detail',
    loadChildren: () => import('./modal/aduan-detail/aduan-detail.module').then( m => m.AduanDetailPageModule)
  },
  {
    path: 'jalan-detail',
    loadChildren: () => import('./modal/jalan-detail/jalan-detail.module').then( m => m.JalanDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
