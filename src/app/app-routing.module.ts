import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
          },
          {
            path: 'event-view',
            loadChildren: () => import('./event-view/event-view.module').then( m => m.EventViewPageModule)
          }
        ]
      },
      {
        path: 'prog-passports',
        children: [
          {
            path: '',
            loadChildren: () => import('./prog-passports/prog-passports.module').then( m => m.ProgPassportsPageModule)
          },
          {
            path: 'prog-overview',
            children: [
              {
                path: '',
            loadChildren: () => import('./prog-overview/prog-overview.module').then( m => m.ProgOverviewPageModule)
              },
              {
                path: 'prog-success',
                loadChildren: () => import('./prog-success/prog-success.module').then( m => m.ProgSuccessPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'diplomas',
        children: [
          {
            path: '',
        loadChildren: () => import('./diplomas/diplomas.module').then( m => m.DiplomasPageModule)
          },
          {
            path: 'diploma-overview',
            loadChildren: () => import('./diploma-overview/diploma-overview.module').then( m => m.DiplomaOverviewPageModule)
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
            children: [
              {
                path: '',
                loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
              },
              {
                path: 'testing-further',
                children: [
                  {
                    path: '',
                    loadChildren: () => import('./testing-further/testing-further.module').then( m => m.TestingFurtherPageModule)
                  },
                  {
                    path: 'testing-answer',
                    loadChildren: () => import('./testing-answer/testing-answer.module').then( m => m.TestingAnswerPageModule)
                  }
                ]
              }
            ]
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
  {
    path: 'prog-passports',
    loadChildren: () => import('./prog-passports/prog-passports.module').then( m => m.ProgPassportsPageModule)
  },
  {
    path: 'prog-overview',
    loadChildren: () => import('./prog-overview/prog-overview.module').then( m => m.ProgOverviewPageModule)
  },
  {
    path: 'prog-success',
    loadChildren: () => import('./prog-success/prog-success.module').then( m => m.ProgSuccessPageModule)
  },
  {
    path: 'prog-acquiring',
    loadChildren: () => import('./prog-acquiring/prog-acquiring.module').then( m => m.ProgAcquiringPageModule)
  },
  {
    path: 'mentor-participation',
    children: [
      {
        path: '',
    loadChildren: () => import('./mentor-participation/mentor-participation.module').then( m => m.MentorParticipationPageModule)
      },
      {
        path: 'mentor-certificate',
        loadChildren: () => import('./mentor-certificate/mentor-certificate.module').then( m => m.MentorCertificatePageModule)
      }
    ]
  },
  {
    path: 'mentor-certificate',
    loadChildren: () => import('./mentor-certificate/mentor-certificate.module').then( m => m.MentorCertificatePageModule)
  },
  {
    path: 'diplomas',
    loadChildren: () => import('./diplomas/diplomas.module').then( m => m.DiplomasPageModule)
  },
  {
    path: 'diploma-overview',
    loadChildren: () => import('./diploma-overview/diploma-overview.module').then( m => m.DiplomaOverviewPageModule)
  },
  {
    path: 'event-view',
    loadChildren: () => import('./event-view/event-view.module').then( m => m.EventViewPageModule)
  },
  {
    path: 'testing-further',
    loadChildren: () => import('./testing-further/testing-further.module').then( m => m.TestingFurtherPageModule)
  },
  {
    path: 'testing-answer',
    loadChildren: () => import('./testing-answer/testing-answer.module').then( m => m.TestingAnswerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
