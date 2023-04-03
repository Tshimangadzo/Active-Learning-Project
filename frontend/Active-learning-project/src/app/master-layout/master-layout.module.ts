import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../shared/modules/material-modules';
import { ArrayToStringPipe } from '../shared/pipes/array-string.pipe';
import { RemoveRoleAndUnderScorePipe } from '../shared/pipes/remove-role-and-under-score.pipe';
import { AssignmentsComponent } from './layouts/assignments/assignments.component';
import { BoardComponent } from './layouts/board/board/board.component';
import { CommunityComponent } from './layouts/community/community.component';
import { CoursesModule } from './layouts/courses/courses.module';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MasterLayoutComponent } from './layouts/master/master-layout.component';
import { PlaygroundComponent } from './layouts/playground/playground.component';
import { SettingsComponent } from './layouts/settings/settings.component';
import { ModalComponent } from './layouts/user-management/modal/modal.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { MasterLayoutRoutingModule } from './master.layout.module.routing';
import { CourseRegistrationComponent } from './modals/course-registration/course-registration.component';
import { LanguageCourseComponent } from './modals/views/language-course/language-course.component';
import { LanguageSubjectComponent } from './modals/views/language-subject/language-subject.component';
import { ProgrammingLanguageComponent } from './modals/views/programming-language/programming-language.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { UserProfileComponent } from './navigation/top-nav/user-profile/user-profile.component';
import { CardComponent } from './layouts/assignments/card/card.component';
@NgModule({
  declarations: [
    MasterLayoutComponent,
    UserProfileComponent,
    UserManagementComponent,
    ModalComponent,
    RemoveRoleAndUnderScorePipe,
    TopNavComponent,
    SideNavComponent,
    UserProfileComponent,
    ArrayToStringPipe,
    DashboardComponent,
    AssignmentsComponent,
    SettingsComponent,
    CourseRegistrationComponent,
    ProgrammingLanguageComponent,
    LanguageCourseComponent,
    LanguageSubjectComponent,
    CommunityComponent,
    PlaygroundComponent,
    BoardComponent,
    CardComponent,
  ],
  exports: [
    MasterLayoutComponent,
    UserProfileComponent,
    UserManagementComponent,
    ModalComponent,
    RemoveRoleAndUnderScorePipe,
    TopNavComponent,
    SideNavComponent,
    UserProfileComponent,
    ArrayToStringPipe,
    DashboardComponent,
    AssignmentsComponent,
    SettingsComponent,
    CourseRegistrationComponent,
    ProgrammingLanguageComponent,
    LanguageCourseComponent,
    LanguageSubjectComponent,
  ],
  imports: [
    CommonModule,
    MasterLayoutRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    MaterialModule,
    MatButtonModule,
    DragDropModule,
  ],
})
export class MasterLayoutModule {}
