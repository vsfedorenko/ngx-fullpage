/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from '@fullpage/index';

@Component({
    selector: 'app-demo',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './app.component.scss' ],
    templateUrl: './app.component.html'
})
export class AppComponent {

    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: false,
        scrollingSpeed: 1000,

        menu: '.menu',
        css3: true,
        anchors: [
            'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
            'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
        ]
    });

    @Output() public templates = {
        install: require('raw-loader!./templates/install.template.txt'),
        usage: {
            slides: {
                module: require('raw-loader!./templates/usage/slides/slide1/module.template.txt'),
                html: require('raw-loader!./templates/usage/slides/slide2/html.template.txt')
            }
        },
        configuration: {
            slides: {
                attributes: require('raw-loader!./templates/configurartion/slides/slide1/usage.attributes.slide.template.txt'),
                classOptions: require('raw-loader!./templates/configurartion/slides/slide2/usage.class.options.template.txt'),
                mix: require('raw-loader!./templates/configurartion/slides/slide3/usage.mix.template.txt')
            }
        },
        service: require('raw-loader!./templates/service.tempalte.txt'),
    };

    constructor(public fullpageService: MnFullpageService) {
    }

}
