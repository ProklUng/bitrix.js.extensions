/**
 *  Если написать что-то не на ANSII (EN), то автоматически будет выбрана кодировка UTF-8
 *  Это происходит автоматически. Больше ничего делать не нужно.
 */

import {BitrixVue} from 'ui.vue';
import vueCollection from './collection';

export class App
{
	#vm;

	constructor(id)
	{
		this.selector = id;
		this.init();
	}

	init() {
		const context = this;
		this.#vm = BitrixVue.createApp({
			data() {
				return {}
			},
			mounted() {
			},
			components: vueCollection,
			beforeCreate() {
				this.$bitrix.Application.set(context);
			},
		}).mount(this.selector);
	}
}