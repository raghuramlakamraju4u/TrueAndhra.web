import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-main-row-a',
	templateUrl: './main-row-a.component.html',
	styleUrls: ['./main-row-a.component.scss']
})
export class MainRowAComponent implements OnInit {

	images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	public bMostReadBtnClicked: boolean = false;

	public arrMostRead = [
		{
			sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
			STitle: 'North Sea oil industry faces dire future',
			sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
			sCat: 'HEALTH',
			oDate: new Date(),
			nImgSize: 0,
			bAlignHorizontal: true,
			bShowBullets: false,
			arrBullets: [
				'Free episodes and new movies on iTunes',
				'Getting started with mobile games',
				'The world’s tiniest drone put to the test',
				'Our favorites from the Geneva Motor Show'
			]
		},

		{
			sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_021-510x374.jpg',
			STitle: 'North Sea oil industry faces dire future',
			sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
			sCat: 'HEALTH',
			oDate: new Date(),
			nImgSize: 0,
			bAlignHorizontal: true,
			bShowBullets: false,
			arrBullets: [
				'Free episodes and new movies on iTunes',
				'Getting started with mobile games',
				'The world’s tiniest drone put to the test',
				'Our favorites from the Geneva Motor Show'
			]
		}

	];

	public arrCommented = [
		{
			sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_021-510x374.jpg',
			STitle: 'North Sea oil industry faces dire future',
			sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
			sCat: 'HEALTH',
			oDate: new Date(),
			nImgSize: 0,
			bAlignHorizontal: true,
			bShowBullets: false,
			arrBullets: [
				'Free episodes and new movies on iTunes',
				'Getting started with mobile games',
				'The world’s tiniest drone put to the test',
				'Our favorites from the Geneva Motor Show'
			]
		},

		{
			sImg: 'https://quanticalabs.com/wp_themes/pressroom/files/2015/01/image_031-510x374.jpg',
			STitle: 'North Sea oil industry faces dire future',
			sDesc: 'Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.',
			sCat: 'HEALTH',
			oDate: new Date(),
			nImgSize: 0,
			bAlignHorizontal: true,
			bShowBullets: false,
			arrBullets: [
				'Free episodes and new movies on iTunes',
				'Getting started with mobile games',
				'The world’s tiniest drone put to the test',
				'Our favorites from the Geneva Motor Show'
			]
		}

	];

	constructor(private oRouter: Router) { }

	ngOnInit(): void {

		this.fnMostReadClick();
	}

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	public fnCarouselItemClick(): void {
		this.oRouter.navigate(['news/details', 1]);
	}

	public fnMostReadClick() {
		this.bMostReadBtnClicked = true;
	}

	public fnCommentedClick() {
		this.bMostReadBtnClicked = false;
	}

}
