import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './shared/guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    // canLoad: [AutoLoginGuard],
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./auth/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'user/profile',
    loadChildren: () =>
      import('./core/user/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'admin/profile',
    loadChildren: () =>
      import('./core/admin/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'superadmin/profile',
    loadChildren: () =>
      import('./core/superadmin/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'user/dashboard',
    loadChildren: () =>
      import('./core/user/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'aduan-list',
    loadChildren: () =>
      import('./core/superadmin/list/aduan-list/aduan-list.module').then(
        (m) => m.AduanListPageModule
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
    path: 'upload-gambar',
    loadChildren: () =>
      import('./core/user/upload-gambar/upload-gambar.module').then(
        (m) => m.UploadGambarPageModule
      ),
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
    path: 'admin/jalan-list',
    loadChildren: () =>
      import('./core/admin/jalan-list/jalan-list.module').then(
        (m) => m.JalanListPageModule
      ),
  },
  {
    path: 'user/jalan-list',
    loadChildren: () =>
      import('./core/user/list/jalan-list/jalan-list.module').then(
        (m) => m.JalanListPageModule
      ),
  },
  {
    path: 'create-jalan',
    loadChildren: () =>
      import('./core/admin/create-jalan/create-jalan.module').then(
        (m) => m.CreateJalanPageModule
      ),
  },
  {
    path: 'aduan-detail',
    loadChildren: () =>
      import('./modal/aduan-detail/aduan-detail.module').then(
        (m) => m.AduanDetailPageModule
      ),
  },
  {
    path: 'jalan-detail',
    loadChildren: () =>
      import('./modal/jalan-detail/jalan-detail.module').then(
        (m) => m.JalanDetailPageModule
      ),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./core/global/notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'success',
    loadChildren: () =>
      import('./core/global/alert/success/success.module').then(
        (m) => m.SuccessPageModule
      ),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./core/global/info/info.module').then((m) => m.InfoPageModule),
  },
  {
    path: 'superadmin-list',
    loadChildren: () =>
      import(
        './core/superadmin/list/superadmin-list/superadmin-list.module'
      ).then((m) => m.SuperadminListPageModule),
  },
  {
    path: 'admin-list',
    loadChildren: () =>
      import('./core/superadmin/list/admin-list/admin-list.module').then(
        (m) => m.AdminListPageModule
      ),
  },
  {
    path: 'admin-management',
    loadChildren: () =>
      import('./core/superadmin/admin-management/admin-management.module').then(
        (m) => m.AdminManagementPageModule
      ),
  },
  {
    path: 'superadmin/dashboard',
    loadChildren: () =>
      import('./core/superadmin/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'admin/dashboard',
    loadChildren: () =>
      import('./core/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'user-detail',
    loadChildren: () =>
      import('./modal/user-detail/user-detail.module').then(
        (m) => m.UserDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
