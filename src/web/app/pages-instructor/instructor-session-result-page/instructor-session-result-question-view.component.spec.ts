import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingRetryModule } from '../../components/loading-retry/loading-retry.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PanelChevronModule } from '../../components/panel-chevron/panel-chevron.module';
import {
  PerQuestionViewResponsesModule,
} from '../../components/question-responses/per-question-view-responses/per-question-view-responses.module';
import {
  SingleStatisticsModule,
} from '../../components/question-responses/single-statistics/single-statistics.module';
import { QuestionTextWithInfoModule } from '../../components/question-text-with-info/question-text-with-info.module';
import { InstructorSessionResultQuestionViewComponent } from './instructor-session-result-question-view.component';
import { By } from '@angular/platform-browser';

describe('InstructorSessionResultQuestionViewComponent', () => {
  let component: InstructorSessionResultQuestionViewComponent;
  let fixture: ComponentFixture<InstructorSessionResultQuestionViewComponent>;

  // const testQuestions: Record<string, QuestionTabModel> = {
  //   "question 1": {
  //     question: {
  //       feedbackQuestionId: "Q1",
  //       questionNumber: 1,
  //       questionBrief: "brief",
  //       questionDescription: "desc",
  //       questionDetails: {
  //         questionText: "questionText",
  //         questionType: FeedbackQuestionType.TEXT
  //       },
  //       questionType: FeedbackQuestionType.TEXT,
  //       giverType: FeedbackParticipantType.STUDENTS, // testar se faz sentido trocar para professores um deses dois
  //       recipientType: FeedbackParticipantType.STUDENTS,
  //       numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.CUSTOM,
  //       customNumberOfEntitiesToGiveFeedbackTo: 3,
  //       showResponsesTo: [],
  //       showGiverNameTo: [],
  //       showRecipientNameTo: [],
  //     },
  //     responses: [],
  //     statistics: "32",
  //     hasPopulated: true,
  //     errorMessage: "Error message",
  //     isTabExpanded: false
  //   },
  //   "question 2": {
  //     question: {
  //       feedbackQuestionId: "Q2",
  //       questionNumber: 1,
  //       questionBrief: "brief",
  //       questionDescription: "desc",
  //       questionDetails: {
  //         questionText: "questionText",
  //         questionType: FeedbackQuestionType.TEXT
  //       },
  //       questionType: FeedbackQuestionType.TEXT,
  //       giverType: FeedbackParticipantType.STUDENTS, // testar se faz sentido trocar para professores um deses dois
  //       recipientType: FeedbackParticipantType.STUDENTS,
  //       numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.CUSTOM,
  //       customNumberOfEntitiesToGiveFeedbackTo: 3,
  //       showResponsesTo: [],
  //       showGiverNameTo: [],
  //       showRecipientNameTo: [],
  //     },
  //     responses: [],
  //     statistics: "89",
  //     hasPopulated: true,
  //     errorMessage: "Error message",
  //     isTabExpanded: false
  //   }
  // }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorSessionResultQuestionViewComponent],
      imports: [
        PerQuestionViewResponsesModule,
        QuestionTextWithInfoModule,
        SingleStatisticsModule,
        NgbModule,
        LoadingSpinnerModule,
        PanelChevronModule,
        LoadingRetryModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSessionResultQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Verify the button for download question results', () => {
    // expect(component).toBeTruthy();
    fixture.detectChanges();
    // component.questions = testQuestions

    const downloadQuestionResultsSpy = jest.spyOn(component, 'triggerDownloadQuestionResult');
    fixture.debugElement.nativeElement.query(By.css('.btn')).click();
    // query(By.css(".card-header-btn-toolbar")).nativeElement.click();
    // const teste = fixture.debugElement.nativeElement.debugElement
    // console.log(teste)
    expect(downloadQuestionResultsSpy).toHaveBeenCalledTimes(1);
  });
});
