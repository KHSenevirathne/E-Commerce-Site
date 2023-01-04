import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdPostComponent } from './ad-post/ad-post.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SelectedCategoryComponent } from './selected-category/selected-category.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'selected', component:SelectedCategoryComponent},
  { path:'side', component:SidebarComponent},
  { path:'account', component:AccountComponent },
  { path:'sign-up', component:RegisterComponent },
  { path:'post-ad', component:AdPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
