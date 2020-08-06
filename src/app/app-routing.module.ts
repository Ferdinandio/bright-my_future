import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lang',
    pathMatch: 'full'
  },
  {
    path: 'lang',
    loadChildren: () => import('./lang/lang.module').then( m => m.LangPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'agreement',
    loadChildren: () => import('./agreement/agreement.module').then( m => m.AgreementPageModule)
  },
  {
    path: 'menu',
    children: [
      {
        path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'learn-material',
        loadChildren: () => import('./learn-material/learn-material.module').then( m => m.LearnMaterialPageModule)
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
          },
          {
            path: 'chatting',
            loadChildren: () => import('./chatting/chatting.module').then( m => m.ChattingPageModule)
          },
          {
            path: 'common-chatting',
            loadChildren: () => import('./common-chatting/common-chatting.module').then( m => m.CommonChattingPageModule)
          }
        ]
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
          },
          {
            path: 'create-event',
            loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'edit-user',
    children: [
      {
        path: '',
        loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule)
      },
      {
        path: 'federal',
        children: [
          {
            path: '',
            loadChildren: () => import('./federal/federal.module').then( m => m.FederalPageModule)
          },
          {
            path: 'region',
            loadChildren: () => import('./region/region.module').then( m => m.RegionPageModule)
          }
        ]  
      }
    ]
  },
  {
    path: 'federal',
    loadChildren: () => import('./federal/federal.module').then( m => m.FederalPageModule)
  },
  {
    path: 'region',
    loadChildren: () => import('./region/region.module').then( m => m.RegionPageModule)
  },
  {
    path: 'chatting',
    loadChildren: () => import('./chatting/chatting.module').then( m => m.ChattingPageModule)
  },
  {
    path: 'wait-reg',
    loadChildren: () => import('./wait-reg/wait-reg.module').then( m => m.WaitRegPageModule)
  },
  {
    path: 'course-preview',
    children: [
      {
        path: '',
        loadChildren: () => import('./course-preview/course-preview.module').then( m => m.CoursePreviewPageModule)
      },
      {
        path: 'concept',
        children: [
          {
            path: '',
            loadChildren: () => import('./concept/concept.module').then( m => m.ConceptPageModule)
          },
          {
            path: 'testing',
            loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'learn-material',
    loadChildren: () => import('./learn-material/learn-material.module').then( m => m.LearnMaterialPageModule)
  },
  {
    path: 'concept',
    loadChildren: () => import('./concept/concept.module').then( m => m.ConceptPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'common-chatting',
    loadChildren: () => import('./common-chatting/common-chatting.module').then( m => m.CommonChattingPageModule)
  },
  {
    path: 'choose-contact',
    loadChildren: () => import('./choose-contact/choose-contact.module').then( m => m.ChooseContactPageModule)
  },
  {
    path: 'achievements',
    children: [
      {
        path: '',
        loadChildren: () => import('./achievements/achievements.module').then( m => m.AchievementsPageModule)
      },
      {
        path: 'another-achievement',
        loadChildren: () => import('./another-achievement/another-achievement.module').then( m => m.AnotherAchievementPageModule)
      }
    ]
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'another-achievement',
    loadChildren: () => import('./another-achievement/another-achievement.module').then( m => m.AnotherAchievementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
