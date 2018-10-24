import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationProyectoModule } from './proyecto/proyecto.module';
import { JhipsterSampleApplicationCasoModule } from './caso/caso.module';
import { JhipsterSampleApplicationPasoModule } from './paso/paso.module';
import { JhipsterSampleApplicationImagenModule } from './imagen/imagen.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplicationProyectoModule,
        JhipsterSampleApplicationCasoModule,
        JhipsterSampleApplicationPasoModule,
        JhipsterSampleApplicationImagenModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
