/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */
import {Component, Input, Output, ViewEncapsulation} from '@angular/core';
import {FullpageDirective, FullpageOptions} from "../../components";

@Component({
    selector: 'app',
    directives: [FullpageDirective],
    styles: [
        require('fullpage.js/jquery.fullPage.css'),
        require('./app.component.scss')
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.component.html')
})
export class AppComponent {

    @Input() public options:FullpageOptions = new FullpageOptions({
        controlArrows: false,
        scrollingSpeed: 1000,

        menu: '#menu',
        css3: true,
        anchors: ['menuAnchor1', 'menuAnchor2', 'menuAnchor3', 'menuAnchor4', 'menuAnchor5']
    });

    @Output() private templates = {
        install: require('raw!./templates/install.template.txt'),
        usage: require('./templates/usage.template.html'),
        slides: {
            attributes: require('./templates/slide1/usage.attributes.slide.template.html'),
            classOptions: require('raw!./templates/slide2/usage.class.options.template.txt'),
            mix: require('raw!./templates/slide3/usage.mix.template.txt')
        }
    }

}
