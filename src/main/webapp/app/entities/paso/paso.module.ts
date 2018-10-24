import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from '../../shared';
import {
    PasoService,
    PasoPopupService,
    PasoComponent,
    PasoDetailComponent,
    PasoDialogComponent,
    PasoPopupComponent,
    PasoDeletePopupComponent,
    PasoDeleteDialogComponent,
    pasoRoute,
    pasoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...pasoRoute,
    ...pasoPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplicationSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        PasoComponent,
        PasoDetailComponent,
        PasoDialogComponent,
        PasoDeleteDialogComponent,
        PasoPopupComponent,
        PasoDeletePopupComponent,
    ],
    entryComponents: [
        PasoComponent,
        PasoDialogComponent,
        PasoPopupComponent,
        PasoDeleteDialogComponent,
        PasoDeletePopupComponent,
    ],
    providers: [
        PasoService,
        PasoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationPasoModule {}
