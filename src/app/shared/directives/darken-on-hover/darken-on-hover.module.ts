import {NgModule} from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
    exports: [
        DarkenOnHoverDirective
    ],
    declarations: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule {}
