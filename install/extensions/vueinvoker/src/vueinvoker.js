/**
 * Модуль для автоматической инициализации Vue компонентов на странице сайта
 *
 * Метод `init(Vue, components)` Загружает компоненты в соответствующие элементы на странице
 * и передает в них изначальные данные
 *
 * Например, вместо блока:
 *
 * <div class="vue-component" data-component="DemoApp" data-initial='{"test": "data"}'></div>
 *
 * Будет подключен компонент DemoApp (если тот присутствует в объекте-коллекции `components`)
 *
 * и в его свойство initial будет передан JSON-объект {"test": "data"}
 *
 * Передача в метод экземпляра `Vue` позволяет предварительно его сконфигурировать:
 * например, добавить Vuex-store и/или разнообразные плагины и миксины.
 */

import {BitrixVue} from 'ui.vue';
import components from './collection';

export class Vueinvoker
{
	constructor()
	{
		this.options = {
			selector: '.vue-component',
				componentDataAttr: 'component',
				initialDataAttr: 'initial',
		}

		this.run();
	}

	run() {
		this.init(BitrixVue, components, this.options);
	}

	init(Vue, components, options) {
		this.options = Object.assign(this.options, options);

		const nodes = Array.from(document.querySelectorAll(this.options.selector));
		const collection = [];

		nodes.forEach((item) => {
			let initialData = item.dataset[this.options.initialDataAttr];
			if (initialData !== undefined) {
				try {
					initialData = JSON.parse(initialData);
				} catch (e) {}
			}

			if (components[item.dataset[this.options.componentDataAttr]] !== undefined) {
				collection.push(this.createComponentInstance(
					Vue,
					item,
					components[item.dataset[this.options.componentDataAttr]],
					initialData,
				));
			}
		});


		return collection;
	}


	createComponentInstance(Vue, element, component, data) {
		return Vue.createApp({
			el: element,
			render(h) {
				return h(component, {
					props: data,
				});
			},
		});
	}
}